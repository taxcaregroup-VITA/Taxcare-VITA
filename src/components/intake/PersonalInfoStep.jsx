import React from "react";

export default function PersonalInfoStep({ formData, setFormData }) {
  const personal = formData.personal || {};

  const update = (field, value) => {
    setFormData({
      ...formData,
      personal: { ...personal, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>

      <div className="flex flex-col gap-2">
        <label>First Name</label>
        <input
          type="text"
          value={personal.firstName || ""}
          onChange={(e) => update("firstName", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Last Name</label>
        <input
          type="text"
          value={personal.lastName || ""}
          onChange={(e) => update("lastName", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Date of Birth</label>
        <input
          type="date"
          value={personal.dob || ""}
          onChange={(e) => update("dob", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>SSN or ITIN</label>
        <input
          type="text"
          value={personal.ssn || ""}
          onChange={(e) => update("ssn", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Phone Number</label>
        <input
          type="tel"
          value={personal.phone || ""}
          onChange={(e) => update("phone", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Email</label>
        <input
          type="email"
          value={personal.email || ""}
          onChange={(e) => update("email", e.target.value)}
          className="border p-2 rounded"
        />
      </div>
    <div>
  <label className="block font-medium mb-1">Filing Status</label>
  <select
    value={personal.filingStatus || ""}
    onChange={(e) => update("filingStatus", e.target.value)}
    className="border p-2 rounded w-full"
  >
    <option value="">Select filing status</option>
    <option value="single">Single</option>
    <option value="mfj">Married Filing Jointly</option>
    <option value="mfs">Married Filing Separately</option>
    <option value="hoh">Head of Household</option>
  </select>
</div>
{(personal.filingStatus === "mfj" ||
  personal.filingStatus === "mfs") && (
  <div className="mt-6 border-t pt-6 space-y-4">
    <h3 className="text-lg font-semibold">Spouse Information</h3>

    <div>
      <label>Spouse Full Name</label>
      <input
        type="text"
        value={personal.spouseName || ""}
        onChange={(e) => update("spouseName", e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>

    <div>
      <label>Spouse SSN / ITIN</label>
      <input
        type="text"
        value={personal.spouseSSN || ""}
        onChange={(e) => update("spouseSSN", e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>

    <div>
      <label>Spouse Date of Birth</label>
      <input
        type="date"
        value={personal.spouseDOB || ""}
        onChange={(e) => update("spouseDOB", e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
    
    <div>
      <label>Spouse Occupation</label>
      <input
        type="text"
        value={personal.spouseOccupation || ""}
        onChange={(e) => update("spouseOccupation", e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  </div>
)}



    </div>
  );
}
