import React from "react";

export default function ExpensesStep({ formData, setFormData }) {
  const expenses = formData.expenses || {};

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      expenses: { ...expenses, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>

      {/* Housing / Mortgage / Rent */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Housing</h3>
        <label className="block mb-1">Mortgage or Rent Paid</label>
        <input
          type="number"
          value={expenses.mortgage_rent || ""}
          onChange={(e) => updateField("mortgage_rent", parseFloat(e.target.value))}
          className="w-full border rounded p-2 mb-2"
          placeholder="0"
        />
        <label className="block mb-1">Property Taxes</label>
        <input
          type="number"
          value={expenses.property_tax || ""}
          onChange={(e) => updateField("property_tax", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />
      </div>

      {/* Childcare / Dependents */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Child Care / Dependents</h3>
        <label className="block mb-1">Childcare Expenses Paid</label>
        <input
          type="number"
          value={expenses.childcare || ""}
          onChange={(e) => updateField("childcare", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />
      </div>

      {/* Medical / Dental */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Medical / Dental</h3>
        <label className="block mb-1">Medical / Dental Expenses</label>
        <input
          type="number"
          value={expenses.medical || ""}
          onChange={(e) => updateField("medical", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />
      </div>

      {/* Education */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Education</h3>
        <label className="block mb-1">Tuition or Student Loan Interest Paid</label>
        <input
          type="number"
          value={expenses.education || ""}
          onChange={(e) => updateField("education", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />
      </div>

      {/* Other Expenses */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Other Expenses</h3>
        <label className="block mb-1">Other deductible expenses</label>
        <textarea
          value={expenses.other || ""}
          onChange={(e) => updateField("other", e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Describe other expenses..."
          rows={3}
        />
      </div>
    </div>
  );
}
