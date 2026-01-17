import React from "react";

export default function ReviewAndLockStep({ data, onConfirm }) {
  const [confirmed, setConfirmed] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-10">

      <h2 className="text-2xl font-bold text-gray-900">
        Review & Certification
      </h2>

      <p className="text-gray-700">
        Please carefully review the information below. This step is required
        before a certified VITA volunteer can prepare your tax return.
      </p>

      {/* Summary Sections */}
      <div className="space-y-6 bg-gray-50 p-6 rounded-xl border">

        <SummaryBlock title="Personal Information">
          <SummaryItem label="Name" value={data.personalInfo?.fullName} />
          <SummaryItem label="Filing Status" value={data.personalInfo?.filingStatus} />
          <SummaryItem label="State" value={data.personalInfo?.state} />
        </SummaryBlock>

        <SummaryBlock title="Dependents">
          {data.dependents?.length
            ? data.dependents.map((d, i) => (
                <div key={i} className="text-sm text-gray-700">
                  {d.name} — {d.relationship}
                </div>
              ))
            : <span className="text-sm text-gray-500">None</span>
          }
        </SummaryBlock>

        <SummaryBlock title="Income">
          <BooleanRow label="Employment Income" value={data.income?.has_wages} />
          <BooleanRow label="Self-Employment" value={data.income?.has_self_employment} />
          <BooleanRow label="Retirement / SSA" value={data.income?.has_social_security} />
        </SummaryBlock>

        <SummaryBlock title="Expenses & Credits">
          <BooleanRow label="Childcare Expenses" value={data.expenses?.childcare} />
          <BooleanRow label="Education Expenses" value={data.expenses?.education} />
          <BooleanRow label="Medical Expenses" value={data.expenses?.medical} />
        </SummaryBlock>

        <SummaryBlock title="Health Insurance">
          <BooleanRow label="Marketplace Coverage (1095-A)" value={data.healthInsurance?.marketplace} />
        </SummaryBlock>

        <SummaryBlock title="Additional Notes">
          <p className="text-sm text-gray-700">
            {data.notes?.comments || "None"}
          </p>
        </SummaryBlock>

      </div>

      {/* Certification */}
      <div className="bg-white border rounded-xl p-6 space-y-4">

        <label className="flex gap-3">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span>
            I certify that the information I provided is complete and accurate
            to the best of my knowledge.
          </span>
        </label>

        <button
          disabled={!confirmed}
          onClick={onConfirm}
          className={`px-8 py-4 rounded-lg font-semibold transition
            ${confirmed
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Lock Intake & Submit for Review
        </button>

        <p className="text-xs text-gray-500">
          Once submitted, changes must be requested through a VITA volunteer.
        </p>

      </div>

    </div>
  );
}

/* ---------------- Helpers ---------------- */

function SummaryBlock({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="pl-4 space-y-1">{children}</div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="text-sm text-gray-700">
      <strong>{label}:</strong> {value || "—"}
    </div>
  );
}

function BooleanRow({ label, value }) {
  return (
    <div className="text-sm text-gray-700">
      <strong>{label}:</strong> {value ? "Yes" : "No"}
    </div>
  );
}
