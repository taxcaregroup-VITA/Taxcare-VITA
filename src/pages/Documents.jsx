import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { PORTAL_OPTION } from "../config";

const groups = [
  {
    title: "Identity",
    items: [
      "Photo ID for you (and your spouse, if filing jointly)",
      "Social Security cards or ITIN letters for everyone on your return",
      "Identity Protection PIN (IP PIN) letters, if the IRS issued any",
    ],
  },
  {
    title: "Income",
    items: [
      "W-2 forms from every job",
      "1099 forms you received (for example 1099-INT, 1099-DIV, 1099-G, 1099-R)",
      "Social Security statement (SSA-1099)",
      "Any other income records",
    ],
  },
  {
    title: "Expenses and credits",
    items: [
      "Child care provider's name, address, tax ID and amount paid",
      "Tuition statement (1098-T) and education expenses",
      "Student loan interest statement (1098-E)",
      "Health coverage forms (1095-B or 1095-C), if you received them",
    ],
  },
  {
    title: "Other",
    items: [
      "Last year's federal and state tax returns",
      "Bank routing and account numbers for direct deposit (a voided check works)",
      "Any letters you received from the IRS",
    ],
  },
];

export default function Documents() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold">What to Have Ready</h1>
        <p className="text-lg text-gray-700">
          Gather these before {PORTAL_OPTION ? "you upload your documents or meet with a volunteer" : "your appointment"}. Having everything at once is the fastest way to get your return filed.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <section key={g.title} className="rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{g.title}</h2>
            <ul className="space-y-3">
              {g.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {PORTAL_OPTION && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 space-y-2">
          <h2 className="text-lg font-semibold text-emerald-900">Using our secure portal instead of an appointment?</h2>
          <p className="text-emerald-900">
            Take clear photos or scans of each document and upload them in the TaxSlayer portal once you receive your invitation.
            Please don't email or text your documents to us.
          </p>
        </div>
      )}

      <Link to="/" className="inline-flex bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700">
        Go Home
      </Link>
    </div>
  );
}
