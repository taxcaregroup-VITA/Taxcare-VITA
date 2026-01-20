import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Steps
import ConsentStep from "../intake/ConsentStep";
import PersonalInfoStep from "../intake/PersonalInfoStep";
import DependentsStep from "../intake/DependentsStep";
import IncomeStep from "../intake/IncomeStep";
import ExpensesStep from "../intake/ExpensesStep";
import OptionalInfoStep from "../intake/OptionalInfoStep";
import NotesStep from "../intake/NotesStep";

const steps = [
  { id: "consent", label: "Consent", component: ConsentStep },
  { id: "personal", label: "Personal Info", component: PersonalInfoStep },
  { id: "dependents", label: "Dependents", component: DependentsStep },
  { id: "income", label: "Income", component: IncomeStep },
  { id: "expenses", label: "Expenses", component: ExpensesStep },
  { id: "optionalInfo", label: "Optional Information", component: OptionalInfoStep },
  { id: "notes", label: "Notes", component: NotesStep },
];

export default function IntakeForm() {
  const navigate = useNavigate(); // ✅ REQUIRED

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    consent14446: {},
    personal: {},
    dependents: [],
    income: {},
    expenses: {},
    optional: {},
    notes: "",
  });

  const StepComponent = steps[currentStep].component;

  const isConsentStep = steps[currentStep].id === "consent";

  const consentComplete =
    formData.consent14446?.virtualConsent === "yes" &&
    formData.consent14446?.electronicCommunication === "yes" &&
    formData.consent14446?.eSignature === "yes";

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
  navigate("/review", { state: formData });
};

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
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
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
            disabled={isConsentStep && !consentComplete}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        ) : (
          <button
            onClick={submit}
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Submit Intake
          </button>
        )}
      </div>
    </div>
  );
}
