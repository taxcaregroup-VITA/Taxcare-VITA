import React from "react";

export default function PersonalInfoStep({ formData, setFormData }) {
  const personal = formData.personalInfo || {};

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      personalInfo: { ...personal, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            value={personal.firstName || ""}
            onChange={(e) => updateField("firstName", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            value={personal.lastName || ""}
            onChange={(e) => updateField("lastName", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            value={personal.dob || ""}
            onChange={(e) => updateField("dob", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">SSN or ITIN</label>
          <input
            type="text"
            value={personal.ssn || ""}
            onChange={(e) => updateField("ssn", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Street Address</label>
          <input
            type="text"
            value={personal.address || ""}
            onChange={(e) => updateField("address", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">City</label>
          <input
            type="text"
            value={personal.city || ""}
            onChange={(e) => updateField("city", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">State</label>
          <input
            type="text"
            value={personal.state || ""}
            onChange={(e) => updateField("state", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">ZIP Code</label>
          <input
            type="text"
            value={personal.zip || ""}
            onChange={(e) => updateField("zip", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            value={personal.phone || ""}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={personal.email || ""}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </div>
    </div>
  );
}
