export default function ExpensesStep({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Expenses & Deductions</h2>

      <div className="space-y-3">
        {[
          "Childcare Expenses",
          "Education Expenses",
          "Medical Expenses",
          "Mortgage Interest",
          "Charitable Donations",
          "Student Loan Interest",
          "Property Taxes",
        ].map((label) => (
          <label key={label} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.expenses?.includes(label) || false}
              onChange={(e) => {
                const existing = formData.expenses || [];
                setFormData({
                  ...formData,
                  expenses: e.target.checked
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
