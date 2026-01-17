import React from "react";

export default function ExpensesStep({ formData, setFormData }) {
  const expenses = formData.expenses || {};

  const update = (field, value) => {
    setFormData({ ...formData, expenses: { ...expenses, [field]: value } });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>

      <div>
        <label>Medical Expenses</label>
        <input
          type="number"
          value={expenses.medical || ""}
          onChange={(e) => update("medical", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Education Expenses</label>
        <input
          type="number"
          value={expenses.education || ""}
          onChange={(e) => update("education", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Other Expenses</label>
        <input
          type="number"
          value={expenses.other || ""}
          onChange={(e) => update("other", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}
