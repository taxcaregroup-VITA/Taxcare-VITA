export default function IncomeStep({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Income</h2>

      <div className="space-y-3">
        {[
          "Wages (W-2)",
          "Self-Employment",
          "Interest",
          "Dividends",
          "Social Security",
          "Unemployment",
          "Retirement Income",
          "Other Income",
        ].map((label) => (
          <label key={label} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.income?.includes(label) || false}
              onChange={(e) => {
                const existing = formData.income || [];
                setFormData({
                  ...formData,
                  income: e.target.checked
                    ? [...existing, label]
                    : existing.filter((i) => i !== label),
                });
              }}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
