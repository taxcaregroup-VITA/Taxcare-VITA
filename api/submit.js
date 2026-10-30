// Vercel Function: saves TaxCare Group's copy of an online intake to a PRIVATE Vercel Blob store.
// Files are only readable by people with access to the TaxCare Vercel team (or with the store's token);
// they have no public link.
//
// Stored per intake (folder intakes/YYYY-MM/<reference>/):
//   13614-C.pdf   – filled Form 13614-C plus a TaxCare-only scope screening cover sheet
//   summary.json  – the answers and the scope screening result
import { put } from "@vercel/blob";

const MAX_PDF_BYTES = 3.5 * 1024 * 1024;
const MAX_SUMMARY_BYTES = 200 * 1024;
const REFERENCE = /^TC-\d{6}-[A-HJ-NP-Z2-9]{5}$/;

const fail = (status, error) => Response.json({ error }, { status });

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return fail(400, "Invalid submission");
  }

  // Spam trap: a hidden field real visitors never fill in.
  if (form.get("website")) return Response.json({ reference: "TC-000000-AAAAA" });

  const reference = String(form.get("reference") || "");
  const pdf = form.get("pdf");
  const summaryText = String(form.get("summary") || "");

  if (!REFERENCE.test(reference)) return fail(400, "Invalid reference");
  if (!pdf || typeof pdf === "string" || pdf.size === 0 || pdf.size > MAX_PDF_BYTES) return fail(400, "Invalid form file");
  if (!summaryText || summaryText.length > MAX_SUMMARY_BYTES) return fail(400, "Invalid summary");

  const pdfBytes = new Uint8Array(await pdf.arrayBuffer());
  if (String.fromCharCode(...pdfBytes.slice(0, 5)) !== "%PDF-") return fail(400, "Invalid form file");

  let summary;
  try {
    summary = JSON.parse(summaryText);
  } catch {
    return fail(400, "Invalid summary");
  }
  if (summary.reference !== reference || !["in", "review", "out"].includes(summary.scope?.status)) {
    return fail(400, "Invalid summary");
  }

  const receivedAt = new Date();
  const month = receivedAt.toISOString().slice(0, 7);
  const folder = `intakes/${month}/${reference}`;
  const record = { ...summary, receivedAt: receivedAt.toISOString() };

  try {
    // allowOverwrite is off by default, so a duplicate reference fails instead of replacing a file.
    await put(`${folder}/13614-C.pdf`, pdfBytes, { access: "private", contentType: "application/pdf" });
    await put(`${folder}/summary.json`, JSON.stringify(record, null, 2), { access: "private", contentType: "application/json" });
  } catch (e) {
    console.error("Intake storage failed", reference, e?.message);
    return fail(500, "Could not save intake");
  }

  return Response.json({ reference });
}

export function GET() {
  return fail(405, "Method not allowed");
}
