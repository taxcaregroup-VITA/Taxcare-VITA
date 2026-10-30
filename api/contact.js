// Vercel Function: saves contact-form messages to the same PRIVATE Vercel Blob store as intakes,
// under contact/YYYY-MM/. Messages have no public link.
import { put } from "@vercel/blob";

const clean = (v, max) => String(v || "").trim().slice(0, max);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid message" }, { status: 400 });
  }
  if (body.website) return Response.json({ ok: true }); // spam trap

  const msg = {
    name: clean(body.name, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 30),
    message: clean(body.message, 2000),
    receivedAt: new Date().toISOString(),
  };
  if (!msg.name || !msg.message || (!msg.email && !msg.phone)) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const month = msg.receivedAt.slice(0, 7);
  const id = `${msg.receivedAt.replace(/[:.]/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;
  try {
    await put(`contact/${month}/${id}.json`, JSON.stringify(msg, null, 2), { access: "private", contentType: "application/json" });
  } catch (e) {
    console.error("Contact storage failed", e?.message);
    return Response.json({ error: "Could not save message" }, { status: 500 });
  }
  return Response.json({ ok: true });
}

export function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
