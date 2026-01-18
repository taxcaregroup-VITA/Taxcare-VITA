export default function HouseholdStep({ formData, setFormData }) {
  const data = formData.household || {};

  const update = (field, value) => {
    setFormData({
      ...formData,
      household: { ...data, [field]: value },
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Household Information</h2>

      <div>
        <label className="block font-medium">Marital status as of Dec 31</label>
        <select
          className="border p-2 rounded w-full"
          value={data.maritalStatus || ""}
          onChange={(e) => update("maritalStatus", e.target.value)}
        >
          <option value="">Select</option>
          <option value="single">Single</option>
          <option value="married_joint">Married Filing Jointly</option>
          <option value="married_separate">Married Filing Separately</option>
          <option value="head">Head of Household</option>
          <option value="widow">Qualifying Widow(er)</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">
          Did you live apart from your spouse in the last 6 months?
        </label>
        <select
          className="border p-2 rounded w-full"
          value={data.livedApart || ""}
          onChange={(e) => update("livedApart", e.target.value)}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
}
