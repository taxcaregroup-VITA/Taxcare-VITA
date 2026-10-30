// Scope screening for a BASIC-certification VITA site.
// Sources: Form 13614-C (Rev. 10-2026) certification codes (B, A, B/A, A/M) and the
// Scope of Service chart in Publication 4012 (Rev. 10-2026).
//
// Result levels:
//   "out"    – needs Advanced (or other) certification, or is out of scope for all volunteers
//   "review" – may be in scope; a site coordinator should confirm before the appointment
//   "in"     – nothing found that is outside Basic certification
//
// `text` is shown to the taxpayer; `staff` is the Pub 4012 basis, kept in TaxCare's copy only.

const yes = (v) => v === true || v === "yes";
const anyone = (v) => !!(v && (v.you || v.spouse));

export const SCOPE_RULES = [
  // ---- Personal information (page 1)
  {
    id: "digitalAssets",
    level: "out",
    when: (d) => anyone(d.personal?.status?.digitalAssets) && d.personal?.digitalAssetsActivity === "other",
    text: "Selling, exchanging, spending or being paid in digital assets (crypto)",
    staff: "Pub 4012 F1040 digital asset question: in scope only if taxpayer can check No (bought with real currency, held, moved between own wallets, inherited or gifted).",
  },
  {
    id: "digitalAssetsUnsure",
    level: "review",
    when: (d) => anyone(d.personal?.status?.digitalAssets) && d.personal?.digitalAssetsActivity !== "holdOnly" && d.personal?.digitalAssetsActivity !== "other",
    text: "Digital assets (crypto) – we need to confirm what you did with them",
    staff: "Digital asset activity not specified; confirm taxpayer can answer No on Form 1040.",
  },
  {
    id: "visa",
    level: "review",
    when: (d) => anyone(d.personal?.status?.visa),
    text: "Being in the U.S. on a visa",
    staff: "Nonresident returns (Form 1040-NR) require Foreign Student certification; confirm residency status (substantial presence test).",
  },
  {
    id: "twoStates",
    level: "review",
    when: (d) => yes(d.personal?.twoStates),
    text: "Living in two or more states during the year",
    staff: "Part-year / multi-state returns: confirm the site's state return scope.",
  },

  // ---- Income (page 2)
  {
    id: "overtime",
    level: "review",
    when: (d) => yes(d.income?.wages) && yes(d.income?.overtime),
    text: "Overtime pay",
    staff: "Schedule 1-A line 27 (no tax on overtime) requires Advanced certification.",
  },
  {
    id: "tipsUnreported",
    level: "out",
    when: (d) => yes(d.income?.tips) && d.income?.tipsOnW2 === "no",
    text: "Tips that were not reported on your W-2",
    staff: "13614-C (B/A): Basic only when tips are reported on W-2. Unreported tips / Form 4137 require Advanced.",
  },
  {
    id: "tipsDeduction",
    level: "review",
    when: (d) => yes(d.income?.tips) && d.income?.tipsOnW2 !== "no",
    text: "Tip income",
    staff: "Schedule 1-A line 15 (no tax on tips) requires Advanced certification; confirm tips are all on W-2.",
  },
  {
    id: "retirementTaxable",
    level: "out",
    when: (d) => yes(d.income?.retirement) && d.income?.retirementTaxableShown === "no",
    text: "Retirement income where your 1099-R does not show the taxable amount",
    staff: "13614-C (B/A) 1099-R: Basic only when taxable amount is shown; Advanced if box 2a blank and 2b checked.",
  },
  {
    id: "retirementUnsure",
    level: "review",
    when: (d) => yes(d.income?.retirement) && d.income?.retirementTaxableShown !== "yes" && d.income?.retirementTaxableShown !== "no",
    text: "Retirement or pension income – we need to check your Form 1099-R",
    staff: "Confirm 1099-R box 2a shows the taxable amount and box 7 code is in scope.",
  },
  {
    id: "qcd",
    level: "out",
    when: (d) => yes(d.income?.retirement) && yes(d.income?.qcd),
    text: "Giving retirement money directly to a charity (qualified charitable distribution)",
    staff: "13614-C (A) Qualified Charitable Distribution from 1099-R.",
  },
  {
    id: "railroadPension",
    level: "out",
    when: (d) => yes(d.income?.socialSecurity) && yes(d.income?.railroadPension),
    text: "Railroad Retirement pension (Form RRB-1099-R)",
    staff: "Pub 4012: RRB annuities/pensions require Advanced certification.",
  },
  {
    id: "stockSales",
    level: "out",
    when: (d) => yes(d.income?.stockSales),
    text: "Selling stocks, bonds or real estate",
    staff: "13614-C (A) 1099-B / Schedule D / Form 8949.",
  },
  {
    id: "capitalLossCarryover",
    level: "out",
    when: (d) => yes(d.income?.priorCapitalLoss),
    text: "A capital loss on last year's return",
    staff: "Capital loss carryover requires Schedule D / Form 8949 (Advanced).",
  },
  {
    id: "rentHome",
    level: "out",
    when: (d) => yes(d.income?.rentHome),
    text: "Renting out your house or a room in your house",
    staff: "13614-C (A/M): rental income in scope for Military certification only; personal residence rented < 15 days requires Advanced.",
  },
  {
    id: "rentProperty",
    level: "out",
    when: (d) => yes(d.income?.rentProperty),
    text: "Renting out personal property such as a vehicle",
    staff: "Rental of personal property is not covered in the Scope of Service chart.",
  },
  {
    id: "selfEmployment",
    level: "out",
    when: (d) => yes(d.income?.selfEmployment) || yes(d.income?.gig),
    text: "Self-employment, contract or gig work (1099-NEC, 1099-K, rideshare, delivery)",
    staff: "13614-C (A) Schedule C; 1099-NEC and 1099-K require Advanced certification.",
  },
  {
    id: "otherIncome",
    level: "review",
    when: (d) => yes(d.income?.otherMoney),
    text: "Other money you received",
    staff: "Review against Pub 4012 Tab D and Scope of Service chart (e.g., 1099-MISC box 3 is Basic; other boxes Advanced).",
  },

  // ---- Expenses and events (page 3)
  {
    id: "itemize",
    level: "review",
    when: (d) => yes(d.expenses?.mortgage) || yes(d.expenses?.taxes) || yes(d.expenses?.medical),
    text: "Mortgage interest, property or other taxes, or medical expenses",
    staff: "Itemized deductions / Form 1098 require Advanced. In scope only if the standard deduction is used.",
  },
  {
    id: "iraTraditional",
    level: "out",
    when: (d) => yes(d.expenses?.retirementContrib) && d.expenses?.retirementContribType === "traditional",
    text: "Contributions to a traditional IRA",
    staff: "13614-C (B/A): Basic only for Roth IRA or 401(k); IRA deduction requires Advanced.",
  },
  {
    id: "iraUnsure",
    level: "review",
    when: (d) => yes(d.expenses?.retirementContrib) && !["roth401k", "traditional"].includes(d.expenses?.retirementContribType),
    text: "Retirement account contributions – we need to confirm the account type",
    staff: "Confirm contribution type (Roth/401(k) = Basic; traditional IRA = Advanced).",
  },
  {
    id: "homeSale",
    level: "out",
    when: (d) => yes(d.expenses?.homeSale),
    text: "Selling a home",
    staff: "13614-C (A) 1099-S.",
  },
  {
    id: "hsa",
    level: "out",
    when: (d) => yes(d.expenses?.hsa),
    text: "A health savings account (HSA)",
    staff: "13614-C (A) Form 8889.",
  },
  {
    id: "marketplace",
    level: "out",
    when: (d) => yes(d.expenses?.marketplace),
    text: "Health insurance bought through the Marketplace (Form 1095-A)",
    staff: "13614-C (A) 1095-A / Form 8962.",
  },
  {
    id: "newVehicleLoan",
    level: "out",
    when: (d) => yes(d.expenses?.newVehicle) && yes(d.expenses?.newVehicleLoan),
    text: "A new vehicle bought with a loan",
    staff: "13614-C (A) 1098-VLI; Schedule 1-A line 36 (no tax on car loan interest) requires Advanced.",
  },
  {
    id: "debtCancelled",
    level: "out",
    when: (d) => yes(d.expenses?.debtCancelled),
    text: "Debt that was cancelled or forgiven by a lender",
    staff: "13614-C (A) 1099-C.",
  },
  {
    id: "disasterLoss",
    level: "out",
    when: (d) => yes(d.expenses?.disasterLoss),
    text: "A loss from a federally declared disaster",
    staff: "13614-C (A) 1099-A; Form 4684 not in scope.",
  },
  {
    id: "irsLetter",
    level: "review",
    when: (d) => yes(d.expenses?.irsLetter),
    text: "A letter or bill from the IRS",
    staff: "Review the notice; consider Low Income Taxpayer Clinic referral.",
  },
];

export function screenScope(formData) {
  const hits = SCOPE_RULES.filter((r) => {
    try {
      return r.when(formData);
    } catch {
      return false;
    }
  }).map(({ id, level, text, staff }) => ({ id, level, text, staff }));

  const status = hits.some((h) => h.level === "out")
    ? "out"
    : hits.some((h) => h.level === "review")
    ? "review"
    : "in";

  return { status, hits, rulesVersion: "Pub 4012 Rev. 10-2026 / 13614-C Rev. 10-2026" };
}

// Inline warnings while the taxpayer answers (by rule id).
export function warningFor(formData, ids) {
  const { hits } = screenScope(formData);
  return hits.filter((h) => ids.includes(h.id));
}
