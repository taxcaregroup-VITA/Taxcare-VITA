export default function expensesStep({ formData, setFormData }) {
  const expenses = formData.expenses || {};

  const toggle = (field) => {
    setFormData({
      ...formData,
      expenses: { ...expenses, [field]: !expenses[field] },
    });
  };

  const items = [
    ["mortgageInterest", "Mortgage Interest"],
    ["taxes", "Taxes: state, local, real estate, sales, etc."],
    ["medical", "Medical, dental, prescription expenses"],
    ["charity", "Charitable contributions"],
    ["studentLoan", "Student loan interest"],
    ["childCare", "Child and dependent care"],
    ["retirement", "Contributions to a retirement account"],
    ["schoolSupplies", "School supplies by a teacher, teacher’s aide or other educator"],
    ["alimony", "Alimony payments"],
    ["education", "You or someone in your family took educational classes (technical school, college, job related, etc.)"],
    ["homeSale", "Sell a home"],
    ["healthSavings", "Have a health savings account (HSA)"],
    ["insurance", "Purchase health insurance through Marketplace"],
    ["energyEfficient", "Purchase and install energy-efficient home items (example: windows, furnace, insulation, etc.)"],
    ["other", "Other expenses (example: purchased a new vehicle, etc.)"],
	["debtCancel", "Have credit card, mortgage, or other debt cancelled/forgiven by a lender"],    
    ["fedDisaster", "Have a loss related to a declared Federal disaster area"],
	["irsLetters", "Receive any letter or bill from the IRS"],    
    ["priorReturn", "Make estimated tax payments or apply last year’s refund to 2025 taxes"],
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Expenses and Tax Related Events</h2>
      <p className="text-gray-600">
        Select all expenses types received during the tax year.
      </p>

      {items.map(([key, label]) => (
        <label key={key} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={expenses[key] || false}
            onChange={() => toggle(key)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
