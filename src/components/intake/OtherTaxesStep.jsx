import React from "react";

export default function OtherTaxesStep({ formData, setFormData }) {
  const otherTaxes = formData.otherTaxes || {};

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      otherTaxes: { ...otherTaxes, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Other Taxes</h2>

      {/* State / Local Taxes */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">State and Local Taxes</h3>
        <label className="block mb-1">State / Local Tax Refunds Received</label>
        <input
          type="number"
          value={otherTaxes.stateRefund || ""}
          onChange={(e) => updateField("stateRefund", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />
      </div>

      {/* Estimated Tax Payments */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Estimated Tax Payments</h3>
        <label className="block mb-1">Estimated Federal Payments Made</label>
        <input
          type="number"
          value={otherTaxes.estimatedFederal || ""}
          onChange={(e) => updateField("estimatedFederal", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />

        <label className="block mt-2 mb-1">Estimated State Payments Made</label>
        <input
          type="number"
          value={otherTaxes.estimatedState || ""}
          onChange={(e) => updateField("estimatedState", parseFloat(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="0"
        />
      </div>

      {/* Other Taxes */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Other Taxes</h3>
        <label className="block mb-1">Other Taxes Paid</label>
        <textarea
          value={otherTaxes.other || ""}
          onChange={(e) => updateField("other", e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Describe other taxes..."
          rows={3}
        />
      </div>
    </div>
  );
}
