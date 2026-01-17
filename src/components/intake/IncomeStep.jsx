import React from "react";

export default function IncomeStep({ formData, setFormData }) {
  const income = formData.income || {};

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      income: { ...income, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Income</h2>

      {/* Employment Income */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Employment Income</h3>
        <label className="block mb-1">Did you receive wages (W-2)?</label>
        <select
          value={income.has_wages || ""}
          onChange={(e) => updateField("has_wages", e.target.value)}
          className="w-full border rounded p-2 mb-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {income.has_wages === "yes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label># of Jobs</label>
              <input
                type="number"
                value={income.num_jobs || ""}
                onChange={(e) => updateField("num_jobs", parseInt(e.target.value))}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label># of W-2s</label>
              <input
                type="number"
                value={income.num_w2s || ""}
                onChange={(e) => updateField("num_w2s", parseInt(e.target.value))}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        )}
      </div>

      {/* Retirement Income */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Retirement & Benefits</h3>
        <label className="block mb-1">Did you receive retirement/pension/annuity income?</label>
        <select
          value={income.has_retirement || ""}
          onChange={(e) => updateField("has_retirement", e.target.value)}
          className="w-full border rounded p-2 mb-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {income.has_retirement === "yes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label># of 1099-R</label>
              <input
                type="number"
                value={income.num_1099r || ""}
                onChange={(e) => updateField("num_1099r", parseInt(e.target.value))}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label>QCD Amount</label>
              <input
                type="number"
                value={income.qcd_amount || ""}
                onChange={(e) => updateField("qcd_amount", parseFloat(e.target.value))}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        )}
      </div>

      {/* Unemployment */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Unemployment</h3>
        <label className="block mb-1">Did you receive unemployment?</label>
        <select
          value={income.has_unemployment || ""}
          onChange={(e) => updateField("has_unemployment", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Interest & Dividends */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Interest & Dividends</h3>
        <label className="block mb-1">Did you receive interest/dividends?</label>
        <select
          value={income.has_interest_dividends || ""}
          onChange={(e) => updateField("has_interest_dividends", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Self-Employment */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Self-Employment</h3>
        <label className="block mb-1">Did you have self-employment income?</label>
        <select
          value={income.has_self_employment || ""}
          onChange={(e) => updateField("has_self_employment", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Rental Income */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Rental Income</h3>
        <label className="block mb-1">Did you have rental income?</label>
        <select
          value={income.has_rental_income || ""}
          onChange={(e) => updateField("has_rental_income", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Alimony */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Alimony</h3>
        <label className="block mb-1">Did you receive alimony?</label>
        <select
          value={income.has_alimony || ""}
          onChange={(e) => updateField("has_alimony", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Gambling */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Gambling</h3>
        <label className="block mb-1">Did you have gambling winnings?</label>
        <select
          value={income.has_gambling || ""}
          onChange={(e) => updateField("has_gambling", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Other Income */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold mb-2">Other Income</h3>
        <label className="block mb-1">Did you have other income (cash, jury duty, etc.)?</label>
        <select
          value={income.has_other_income || ""}
          onChange={(e) => updateField("has_other_income", e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {income.has_other_income === "yes" && (
          <textarea
            value={income.other_income_description || ""}
            onChange={(e) => updateField("other_income_description", e.target.value)}
            className="w-full border rounded p-2 mt-2"
            placeholder="Describe other income..."
          />
        )}
      </div>
    </div>
  );
}
