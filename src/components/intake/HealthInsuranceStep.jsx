import React from "react";

export default function HealthInsuranceStep({ formData, setFormData }) {
  const health = formData.health || {};

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      health: { ...health, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Health Insurance</h2>

      {/* Coverage Questions */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Coverage Status</h3>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            id="hadCoverage"
            checked={health.hadCoverage || false}
            onChange={(e) => updateField("hadCoverage", e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="hadCoverage">Did you have health insurance coverage for the year?</label>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            id="acaExempt"
            checked={health.acaExempt || false}
            onChange={(e) => updateField("acaExempt", e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="acaExempt">Were you exempt from ACA coverage?</label>
        </div>
      </div>

      {/* Marketplace Coverage */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Marketplace Coverage</h3>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            id="receivedForm1095A"
            checked={health.receivedForm1095A || false}
            onChange={(e) => updateField("receivedForm1095A", e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="receivedForm1095A">
            Did you receive Form 1095-A (Health Insurance Marketplace)?
          </label>
        </div>
      </div>

      {/* Other Health Notes */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Additional Health Info</h3>
        <textarea
          value={health.notes || ""}
          onChange={(e) => updateField("notes", e.target.value)}
          className="w-full border rounded p-2"
          rows={3}
          placeholder="Any other health insurance information..."
        />
      </div>
    </div>
  );
}
