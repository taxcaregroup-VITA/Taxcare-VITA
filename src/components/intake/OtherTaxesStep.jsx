export default function OtherTaxesStep({ formData, setFormData }) {
  const options = [
    "Estimated tax payments made",
    "Household employee taxes (nanny, caregiver)",
    "First-time homebuyer credit repayment",
    "Health savings account (HSA)",
    "Advance child tax credit received",
    "Marketplace premium tax credit repayment",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Other Taxes</h2>

      <p className="text-gray-600 max-w-2xl">
        Select any items that apply to you.
      </p>

      <div className="space-y-3">
        {options.map((label) => (
          <label key={label} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.otherTaxes?.includes(label) || false}
              onChange={(e) => {
                const existing = formData.otherTaxes || [];
                setFormData({
                  ...formData,
                  otherTaxes: e.target.checked
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
