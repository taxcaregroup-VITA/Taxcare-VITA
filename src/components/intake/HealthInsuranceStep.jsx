export default function HealthInsuranceStep({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Health Insurance</h2>

      <p className="text-gray-600 max-w-2xl">
        Answer the following questions about health coverage for you and your household.
      </p>

      <div className="space-y-4">
        <label className="block">
          <span className="font-medium">
            Did you have health insurance for the entire year?
          </span>
          <select
            className="mt-2 border rounded-lg px-4 py-3 w-full"
            value={formData.fullYearCoverage || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullYearCoverage: e.target.value,
              })
            }
          >
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not sure</option>
          </select>
        </label>

        <label className="block">
          <span className="font-medium">
            Did anyone in your household have Marketplace (ACA) insurance?
          </span>
          <select
            className="mt-2 border rounded-lg px-4 py-3 w-full"
            value={formData.marketplaceInsurance || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                marketplaceInsurance: e.target.value,
              })
            }
          >
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not sure</option>
          </select>
        </label>

        <label className="block">
          <span className="font-medium">
            Did you receive Form 1095-A?
          </span>
          <select
            className="mt-2 border rounded-lg px-4 py-3 w-full"
            value={formData.form1095A || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                form1095A: e.target.value,
              })
            }
          >
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not sure</option>
          </select>
        </label>
      </div>
    </div>
  );
}
