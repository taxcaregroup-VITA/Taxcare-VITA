import { useState, useEffect, useRef } from "react";

import ConsentStep from "./ConsentStep";
import PersonalInfoStep from "./PersonalInfoStep";
import DependentsStep from "./DependentsStep";
import IncomeStep from "./IncomeStep";
import ExpensesStep from "./ExpensesStep";
import OptionalInfoStep from "./OptionalInfoStep";
import NotesStep from "./NotesStep";
import FinishStep from "./FinishStep";

const steps = [
  { id: "consent", label: "Consent", component: ConsentStep },
  { id: "personal", label: "About you", component: PersonalInfoStep },
  { id: "household", label: "Household", component: DependentsStep },
  { id: "income", label: "Income", component: IncomeStep },
  { id: "expenses", label: "Expenses and life events", component: ExpensesStep },
  { id: "optional", label: "Optional questions", component: OptionalInfoStep },
  { id: "notes", label: "Notes", component: NotesStep },
  { id: "finish", label: "Review and submit", component: FinishStep },
];

const empty = {
  consent14446: {},
  personal: {},
  dependents: [],
  income: {},
  expenses: {},
  optional: {},
  notes: "",
};

export default function IntakeForm() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState(empty);
  const headingRef = useRef(null);

  // Move focus to the top of each new step for keyboard and screen reader users.
  useEffect(() => {
    window.scrollTo({ top: 0 });
    headingRef.current?.focus();
  }, [current]);

  const step = steps[current];
  const StepComponent = step.component;
  const consent = formData.consent14446 || {};
  const consentComplete = consent.virtualConsent === "yes" && consent.electronicCommunication === "yes" && consent.eSignature === "yes";
  const blocked = step.id === "consent" && !consentComplete;
  const isFinish = step.id === "finish";

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        <div ref={headingRef} tabIndex={-1} className="text-sm text-gray-600 mb-2 outline-none">
          Step {current + 1} of {steps.length}: {step.label}
        </div>
        <div className="h-2 bg-gray-200 rounded" aria-hidden="true">
          <div className="h-2 bg-emerald-600 rounded transition-all duration-300" style={{ width: `${((current + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
        <StepComponent formData={formData} setFormData={setFormData} onEdit={() => setCurrent(1)} />
      </div>

      {!isFinish && (
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-6 py-3 rounded-lg border font-semibold disabled:opacity-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
            disabled={blocked}
            className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {steps[current + 1]?.id === "finish" ? "Review my answers" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
