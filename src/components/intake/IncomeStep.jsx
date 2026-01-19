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
    ["tips", "Tips"],
    ["retirement", "Pensions / IRA / 401(k)"],
    ["disability", "Disability Benefits (e.g. Payments from insurance and worker's compensation)"],
    ["socialSecurity", "Social Security or Railroad Retirement Benefits (SSA-1099 or 1099-R)"],
    ["unemployment", "Unemployment (1099-G)"],
    ["refund", "Refund of state of local income tax (1099-G)"],
    ["interest", "Interest income (1099-INT)"],
    ["dividends", "Dividends (1099-DIV)"],
    ["interest", "Interest income (1099-INT)"],
    ["stocks", "Sale of stocks, bonds, or real estate (1099-B)"],
    ["carryover", "Capital loss carryover"],
    ["alimony", "Alimony"],
    ["rentalIncome", "Did you rent you rent out your house or room in your house?"],
    ["gambling", "Gambling winnings, including lottery (W2-G)"],    
    ["selfEmployment", "Self-employment (1099-MISC, 1099-NEC, 1099-K)"],
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
