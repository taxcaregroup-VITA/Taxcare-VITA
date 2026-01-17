import React from "react";

export default function IncomeStep({ formData, setFormData }) {
  const income = formData.income || {};

  const update = (field, value) => {
    setFormData({ ...formData, income: { ...income, [field]: value } });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Income</h2>

      <div>
        <label>Employment Income</label>
        <input
          type="number"
          value={income.employment || ""}
          onChange={(e) => update("employment", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Self-Employment Income</label>
        <input
          type="number"
          value={income.selfEmployment || ""}
          onChange={(e) =>
            update("selfEmployment", parseFloat(e.target.value))
          }
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Unemployment</label>
        <input
          type="number"
          value={income.unemployment || ""}
          onChange={(e) => update("unemployment", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Other Income</label>
        <input
          type="number"
          value={income.other || ""}
          onChange={(e) => update("other", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}
