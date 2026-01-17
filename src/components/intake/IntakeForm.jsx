import React, { useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import DependentsStep from "./DependentsStep";
import IncomeStep from "./IncomeStep";
import ExpensesStep from "./ExpensesStep";
import HealthInsuranceStep from "./HealthInsuranceStep";
import OtherTaxesStep from "./OtherTaxesStep";
import NotesStep from "./NotesStep";

export default function IntakeForm() {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);

  const steps = [
    { label: "Personal Info", component: PersonalInfoStep },
    { label: "Dependents", component: DependentsStep },
    { label: "Income", component: IncomeStep },
    { label: "Expenses", component: ExpensesStep },
    { label: "Health Insurance", component: HealthInsuranceStep },
    { label: "Other Taxes", component: OtherTaxesStep },
    { label: "Notes", component: NotesStep },
  ];

  const StepComponent = steps[step].component;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">{steps[step].label}</h2>

      {/* Render current step */}
      <StepComponent data={data} onChange={setData} />

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={step === 0}
          className="px-6 py-3 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50"
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => console.log("Final data submitted:", data)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
