export default function CreditsStep({ formData, setFormData }) {
  const credits = formData.credits || {};

  const toggle = (field) => {
    setFormData({
      ...formData,
      credits: { ...credits, [field]: !credits[field] },
    });
  };

  const items = [
    ["childTaxCredit", "Child Tax Credit"],
    ["dependentCare", "Child & Dependent Care Credit"],
    ["education", "Education Credits"],
    ["retirementSaver", "Retirement Saver’s Credit"],
    ["eitc", "Earned Income Credit"],
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Credits</h2>
      <p className="text-gray-600">
        Check any credits that may apply to you.
      </p>

      {items.map(([key, label]) => (
        <label key={key} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={credits[key] || false}
            onChange={() => toggle(key)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
