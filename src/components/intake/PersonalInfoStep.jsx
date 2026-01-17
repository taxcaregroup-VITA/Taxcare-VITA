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
    <div className="space-y-4">
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
    </div>
  );
}
