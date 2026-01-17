import React from "react";

export default function OtherTaxesStep({ formData, setFormData }) {
  const otherTaxes = formData.otherTaxes || {};

  const update = (field, value) => {
    setFormData({ ...formData, otherTaxes: { ...otherTaxes, [field]: value } });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Other Taxes</h2>

      <div>
        <label>State Tax Paid</label>
        <input
          type="number"
          value={otherTaxes.state || ""}
          onChange={(e) => update("state", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Local Tax Paid</label>
        <input
          type="number"
          value={otherTaxes.local || ""}
          onChange={(e) => update("local", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Other Taxes</label>
        <input
          type="number"
          value={otherTaxes.other || ""}
          onChange={(e) => update("other", parseFloat(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}
