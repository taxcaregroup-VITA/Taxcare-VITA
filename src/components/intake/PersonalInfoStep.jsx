import React from "react";

export default function PersonalInfoStep({ formData, setFormData }) {
  const personal = formData.personal || {};

  // Safer update using functional setter (recommended)
  const update = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Personal Information</h2>

      {/* Taxpayer Name */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">First Name</label>
          <input
            value={personal.firstName || ""}
            onChange={(e) => update("firstName", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Middle Initial</label>
          <input
            value={personal.middleInitial || ""}
            onChange={(e) => update("middleInitial", e.target.value)}
            className="border p-2 rounded w-full"
            maxLength={1}
          />
        </div>
        <div>
          <label className="block mb-1">Last Name</label>
          <input
            value={personal.lastName || ""}
            onChange={(e) => update("lastName", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* DOB + Job */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            value={personal.dob || ""}
            onChange={(e) => update("dob", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Job Title</label>
          <input
            value={personal.jobTitle || ""}
            onChange={(e) => update("jobTitle", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Mailing Address */}
      <div className="space-y-3">
        <h3 className="font-semibold">Mailing Address</h3>
        <input
          placeholder="Street Address"
          value={personal.address || ""}
          onChange={(e) => update("address", e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          placeholder="Apt #"
          value={personal.apt || ""}
          onChange={(e) => update("apt", e.target.value)}
          className="border p-2 rounded w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            placeholder="City"
            value={personal.city || ""}
            onChange={(e) => update("city", e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="State"
            value={personal.state || ""}
            onChange={(e) => update("state", e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="ZIP Code"
            value={personal.zip || ""}
            onChange={(e) => update("zip", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            value={personal.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Email Address</label>
          <input
            type="email"
            value={personal.email || ""}
            onChange={(e) => update("email", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Marital Status */}
      <div>
        <label className="block mb-1">Marital Status (as of Dec 31)</label>
        <select
          value={personal.maritalStatus || ""}
          onChange={(e) => update("maritalStatus", e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select</option>
          <option value="never">Never Married</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="separated">Legally Separated</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>

      {/* Spouse Information - Fixed layout */}
      {personal.maritalStatus === "married" && (
        <div className="space-y-6 pt-4 border-t">
          <h3 className="font-semibold text-lg">Spouse Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">First Name</label>
              <input
                placeholder="Spouse's First Name"
                value={personal.spouseFirstName || ""}
                onChange={(e) => update("spouseFirstName", e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Middle Initial</label>
              <input
                placeholder="Spouse's Middle Initial"
                value={personal.spouseMiddleInitial || ""}
                onChange={(e) => update("spouseMiddleInitial", e.target.value)}
                className="border p-2 rounded w-full"
                maxLength={1}
              />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input
                placeholder="Spouse's Last Name"
                value={personal.spouseLastName || ""}
                onChange={(e) => update("spouseLastName", e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Date of Birth</label>
              <input
                type="date"
                value={personal.spouseDob || ""}
                onChange={(e) => update("spouseDob", e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Job Title</label>
              <input
                value={personal.spouseJobTitle || ""}
                onChange={(e) => update("spouseJobTitle", e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Yes/No Questions - unchanged but properly spaced */}
      <div className="space-y-4">
        {[
          ["multiState", "Did you live or work in more than one state?"],
          ["claimedDependent", "Can anyone claim you or your spouse as a dependent?"],
          ["citizen", "Are you a U.S. citizen?"],
          ["visa", "Are you in the U.S. on a visa?"],
          ["student", "Are you a full-time student?"],
          ["blind", "Are you legally blind?"],
          ["disabled", "Totally/permanently disabled?"],
          ["ipPin", "Issued an IRS Identity Protection PIN?"],
          ["crypto", "Own digital assets (crypto)?"],
        ].map(([field, label]) => (
          <div key={field}>
            <label className="block mb-1">{label}</label>
            <select
              value={personal[field] || ""}
              onChange={(e) => update(field, e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">Select</option>
              <option value="you">You</option>
              <option value="spouse">Spouse</option>
              <option value="both">Both</option>
              <option value="no">No</option>
            </select>
          </div>
        ))}
      </div>

      {/* Refund & Payment - unchanged */}
      <div className="space-y-4">
        {/* ... same as your original ... */}
      </div>

      {/* Language & Donation - unchanged */}
      <div className="space-y-4">
        {/* ... same as your original ... */}
      </div>
    </div>
  );
}
