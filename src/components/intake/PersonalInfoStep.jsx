import React from "react";

export default function PersonalInfoStep({ formData, setFormData }) {
  const personal = formData.personal || {};

  const update = (field, value) => {
    setFormData({
      ...formData,
      personal: { ...personal, [field]: value },
    });
  };

  const yesNoOptions = ["you", "spouse", "both", "no"];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Personal Information</h2>

      {/* Taxpayer Name */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label>First Name</label>
          <input
            value={personal.firstName || ""}
            onChange={(e) => update("firstName", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label>Middle Initial</label>
          <input
            value={personal.middleInitial || ""}
            onChange={(e) => update("middleInitial", e.target.value)}
            className="border p-2 rounded w-full"
            maxLength={1}
          />
        </div>

        <div>
          <label>Last Name</label>
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
          <label>Date of Birth</label>
          <input
            type="date"
            value={personal.dob || ""}
            onChange={(e) => update("dob", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label>Job Title</label>
          <input
            value={personal.jobTitle || ""}
            onChange={(e) => update("jobTitle", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Address */}
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
          <label>Phone Number</label>
          <input
            value={personal.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label>Email Address</label>
          <input
            value={personal.email || ""}
            onChange={(e) => update("email", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Filing Status */}
      <div>
        <label>Marital Status (as of Dec 31)</label>
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

      {/* Spouse */}
      {personal.maritalStatus === "married" && (
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h3 className="font-semibold">Spouse Information</h3>

          <input
            placeholder="Spouse's First Name"
            value={personal.spouseFirstName || ""}
            onChange={(e) => update("spouseFirstName", e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            placeholder="Spouse's Middle Initial"
            value={personal.spouseMiddleInitial || ""}
            onChange={(e) => update("spouseMiddleInitial", e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            placeholder="Spouse's Last Name"
            value={personal.spouseLastName || ""}
            onChange={(e) => update("spouseLastName", e.target.value)}
            className="border p-2 rounded w-full"
          </div>

      {/* DOB + Job */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
          <input
            placeholder="Spouse Date of Birth"
            type="date"
            value={personal.spouseDob || ""}
            onChange={(e) => update("spouseDob", e.target.value)}
            className="border p-2 rounded w-full"
          />

          <div>
          <label>Spouse's Job Title</label>
          <input
            value={personal.spouseJobTitle || ""}
            onChange={(e) => update("spouseJobTitle", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
          </div>
        </div>
      )}

      {/* IRS Yes / No Questions */}
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
            <label>{label}</label>
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

      {/* Refund & Payment */}
      <div className="space-y-4">
        <div>
          <label>Refund Method</label>
          <select
            value={personal.refundMethod || ""}
            onChange={(e) => update("refundMethod", e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select</option>
            <option value="directDeposit">Direct Deposit</option>
            <option value="check">Check by Mail</option>
            <option value="split">Split Refund</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>How will you pay taxes owed?</label>
          <select
            value={personal.paymentMethod || ""}
            onChange={(e) => update("paymentMethod", e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select</option>
            <option value="bank">Bank Account</option>
            <option value="irsDirect">IRS Direct Pay</option>
            <option value="installment">Installment Plan</option>
            <option value="mail">Mail Payment</option>
          </select>
        </div>
      </div>

      {/* Language & Donation */}
      <div className="space-y-4">
        <div>
          <label>Preferred Language</label>
          <input
            placeholder="Specify language or leave blank"
            value={personal.language || ""}
            onChange={(e) => update("language", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label>Presidential Election Campaign Fund ($3)</label>
          <select
            value={personal.campaignFund || ""}
            onChange={(e) => update("campaignFund", e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select</option>
            <option value="you">You</option>
            <option value="spouse">Spouse</option>
            <option value="both">Both</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
    </div>
  );
}
