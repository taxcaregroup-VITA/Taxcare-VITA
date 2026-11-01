// Vercel Function: count-only alert when the online intake screens someone OUT of scope.
// Receives only the general reason codes (no names, contact details or answers), checks them
// against the site's known screening rules, and emails staff. Nothing is stored.
import { sendAlert, outOfScopeAlert } from "./_notify.js";

// Must match the "out" rule ids in src/data/scope.js. Unknown ids are ignored.
const OUT_REASONS = {
  digitalAssets: "Digital asset (crypto) sales or payments",
  tipsUnreported: "Tips not reported on a W-2",
  retirementTaxable: "1099-R without the taxable amount",
  qcd: "Qualified charitable distribution",
  railroadPension: "Railroad Retirement pension",
  stockSales: "Sale of stocks, bonds or real estate",
  capitalLossCarryover: "Capital loss carryover",
  rentHome: "Rental of home or room",
  rentProperty: "Rental of personal property",
  selfEmployment: "Self-employment or gig income",
  iraTraditional: "Traditional IRA contribution",
  homeSale: "Sale of a home",
  hsa: "Health savings account",
  marketplace: "Marketplace insurance (Form 1095-A)",
  newVehicleLoan: "New vehicle loan interest",
  debtCancelled: "Cancelled debt (1099-C)",
  disasterLoss: "Federal disaster loss",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (body.website) return Response.json({ ok: true }); // spam trap
  const ids = Array.isArray(body.reasons) ? body.reasons.slice(0, 20) : [];
  const reasons = [...new Set(ids)].filter((id) => OUT_REASONS[id]).map((id) => OUT_REASONS[id]);
  if (!reasons.length) return Response.json({ ok: false }, { status: 400 });
  const alert = outOfScopeAlert({ reasons, at: new Date().toISOString() });
  await sendAlert(alert.subject, alert.text);
  return Response.json({ ok: true });
}

export function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
