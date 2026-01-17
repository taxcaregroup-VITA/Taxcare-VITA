import { useState } from "react";

// Steps
import PersonalInfoStep from "./PersonalInfoStep";
import DependentsStep from "./DependentsStep";
import IncomeStep from "./IncomeStep";
import ExpensesStep from "./ExpensesStep";
import OtherTaxesStep from "./OtherTaxesStep";
import HealthInsuranceStep from "./HealthInsuranceStep";
import NotesStep from "./NotesStep";

const steps = [
  { id: "personal", label: "Personal Info", component: PersonalInfoStep },
  { id: "dependents", label: "Dependents", component: DependentsStep },
  { id: "income", label: "Income", component: IncomeStep },
  { id: "expenses", label: "Expenses", component: ExpensesStep },
  { id: "otherTaxes", label: "Other Taxes", component: OtherTaxesStep },
  { id: "health", label: "Health Insurance", component: HealthInsuranceStep },
  { id: "notes", label: "Notes", component: NotesStep },
];

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const StepComponent = steps[currentStep].component;

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submit = () => {
    console.log("INTAKE FORM DATA:", formData);
    alert("Intake complete — ready for review!");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Progress */}
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-2">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep].label}
        </div>
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-blue-600 rounded transition-all duration-300"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <StepComponent formData={formData} setFormData={setFormData} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={back}
          disabled={currentStep === 0}
          className="px-6 py-3 rounded-lg border disabled:opacity-50"
        >
          Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={next}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submit}
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Submit Intake
          </button>
        )}
      </div>
    </div>
  );
}
