import React from "react";

export default function HealthInsuranceStep({ formData, setFormData }) {
  const health = formData.health || {};

  const update = (field, value) => {
    setFormData({ ...formData, health: { ...health, [field]: value } });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Health Insurance</h2>

      <div>
        <label>Did you have health coverage in the past year?</label>
        <select
          value={health.coverage || ""}
          onChange={(e) => update("coverage", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label>Insurance Provider</label>
        <input
          type="text"
          value={health.provider || ""}
          onChange={(e) => update("provider", e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Policy Number</label>
        <input
          type="text"
          value={health.policy || ""}
          onChange={(e) => update("policy", e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
}
