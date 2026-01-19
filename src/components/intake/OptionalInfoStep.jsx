export default function OtherInfoStep({ formData, setFormData }) {
  const info = formData.otherInfo || {};

  const update = (field, value) => {
    setFormData({
      ...formData,
      otherInfo: { ...info, [field]: value },
    });
  };

  const questions = [
    ["crypto", "Did you buy, sell, or receive cryptocurrency?"],
    ["foreignAccount", "Did you have a foreign bank account?"],
    ["identityTheft", "Were you a victim of identity theft?"],
    ["disasterLoss", "Did you have a disaster loss?"],
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Other Information</h2>

      {questions.map(([key, label]) => (
        <div key={key}>
          <label className="block font-medium">{label}</label>
          <select
            className="border p-2 rounded w-full"
            value={info[key] || ""}
            onChange={(e) => update(key, e.target.value)}
          >
            <option value="">Select</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      ))}
    </div>
  );
}
