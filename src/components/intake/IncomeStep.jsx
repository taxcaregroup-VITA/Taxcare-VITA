export default function IncomeStep({ formData, setFormData }) {
  const income = formData.income || {};

  const toggle = (field) => {
    setFormData({
      ...formData,
      income: { ...income, [field]: !income[field] },
    });
  };

  const items = [
    ["w2", "W-2 wages"],
    ["selfEmployment", "Self-employment / 1099-NEC"],
    ["interest", "Interest income (1099-INT)"],
    ["dividends", "Dividends (1099-DIV)"],
    ["unemployment", "Unemployment (1099-G)"],
    ["socialSecurity", "Social Security (SSA-1099)"],
    ["retirement", "Pensions / IRA / 401(k)"],
    ["other", "Other income (cash, gig, misc)"],
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Income</h2>
      <p className="text-gray-600">
        Select all income types received during the tax year.
      </p>

      {items.map(([key, label]) => (
        <label key={key} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={income[key] || false}
            onChange={() => toggle(key)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
