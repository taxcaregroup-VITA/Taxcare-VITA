// Staff email alerts through Resend (https://resend.com), sent with a plain HTTPS call.
// Alerts never contain names, contact details or answers: only a reference number, the
// scope result, the reasons in general terms, and where to find the intake.
//
// Turned on by Vercel environment variables (Project → Settings → Environment Variables):
//   RESEND_API_KEY  – required; without it no email is sent and intakes still save normally
//   NOTIFY_TO       – optional, default intake@taxcaregroup.org (comma-separate several)
//   NOTIFY_FROM     – optional, default "TaxCare Intake <intake@taxcaregroup.org>"
// Only the live site sends alerts; preview deployments stay quiet (see isLive below).

const DEFAULT_TO = "intake@taxcaregroup.org";
const DEFAULT_FROM = "TaxCare Intake <intake@taxcaregroup.org>";

export const isLive = () => process.env.VERCEL_ENV === "production";

export async function sendAlert(subject, text) {
  const key = process.env.RESEND_API_KEY;
  if (!key || !isLive()) return { sent: false, reason: key ? "not production" : "no key" };
  const to = (process.env.NOTIFY_TO || DEFAULT_TO).split(",").map((s) => s.trim()).filter(Boolean);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.NOTIFY_FROM || DEFAULT_FROM, to, subject, text }),
    });
    if (!res.ok) {
      console.error("Alert email failed", res.status, (await res.text()).slice(0, 300));
      return { sent: false, reason: `status ${res.status}` };
    }
    return { sent: true };
  } catch (e) {
    console.error("Alert email failed", e?.message);
    return { sent: false, reason: "network" };
  }
}

const LABEL = { in: "In scope", review: "Needs review", out: "Out of scope" };

export function intakeAlert({ reference, scope, folder }) {
  const reasons = (scope.hits || []).map((h) => `- ${h.level === "out" ? "Out" : "Review"}: ${h.text}`);
  const subject = `New intake ${reference}: ${LABEL[scope.status]}`;
  const text = [
    `A new online intake was submitted.`,
    ``,
    `Reference: ${reference}`,
    `Screening: ${LABEL[scope.status]}`,
    ...(reasons.length ? [``, `Items to check:`, ...reasons] : []),
    ``,
    `Watch for the taxpayer's Calendly booking for this reference number.`,
    `To open it: Vercel → taxcare-groups-projects → Storage → taxcare-intakes → Browser → ${folder}`,
    ``,
    `This email has no taxpayer details by design. Please don't reply with or forward taxpayer information.`,
  ].join("\n");
  return { subject, text };
}

export function outOfScopeAlert({ reasons, at }) {
  const subject = `Out-of-scope screening: ${reasons[0] || "see reasons"}`;
  const text = [
    `Someone completed the online intake and was screened out of scope (Basic certification).`,
    `They were referred to the IRS site locator. No personal information was sent or saved.`,
    ``,
    `When: ${at}`,
    `Reasons:`,
    ...reasons.map((r) => `- ${r}`),
  ].join("\n");
  return { subject, text };
}
