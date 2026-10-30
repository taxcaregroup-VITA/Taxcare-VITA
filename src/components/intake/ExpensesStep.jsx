// Form 13614-C (Rev. 10-2026), page 3: expenses and tax-related events.
import { Check, Choice, YesNo, Section, ScopeNote } from "./fields";

export default function ExpensesStep({ formData, setFormData }) {
  const ex = formData.expenses || {};
  const set = (field, value) =>
    setFormData((prev) => ({ ...prev, expenses: { ...prev.expenses, [field]: value } }));
  const box = (field, label, children) => (
    <Check key={field} label={label} checked={ex[field]} onChange={(v) => set(field, v)}>{children}</Check>
  );

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold">Expenses and Life Events</h2>
        <p className="text-gray-600 mt-1">Check only the boxes that apply to you and/or your spouse in 2026.</p>
      </div>

      <Section title="Did you pay any of these expenses?" description="These matter only if you itemize deductions instead of taking the standard deduction.">
        <div>
          {box("mortgage", "Mortgage interest")}
          {box("taxes", "Taxes: state, local, real estate, sales, etc.")}
          {box("medical", "Medical, dental or prescription expenses")}
          {box("charity", "Charitable contributions")}
          <ScopeNote formData={formData} ids={["itemize"]} />
        </div>
      </Section>

      <Section title="Did you pay any of these?">
        <div>
          {box("studentLoan", "Student loan interest")}
          {box("childCare", "Child and dependent care")}
          {box("retirementContrib", "Contributions to a retirement account", (
            <>
              <Choice
                name="retirementContribType"
                label="What kind of account?"
                value={ex.retirementContribType}
                onChange={(v) => set("retirementContribType", v)}
                options={[["roth401k", "Roth IRA or 401(k)"], ["traditional", "Traditional IRA"], ["unsure", "Not sure"]]}
              />
              <ScopeNote formData={formData} ids={["iraTraditional", "iraUnsure"]} />
            </>
          ))}
          {box("educator", "School supplies bought by a teacher, teacher's aide or other educator")}
          {box("alimonyPaid", "Alimony payments (not child support)")}
        </div>
      </Section>

      <Section title="Did any of these happen?">
        <div>
          {box("education", "You or someone in your family took educational classes (technical school, college, job-related, etc.)")}
          {box("homeSale", "Sold a home", <ScopeNote formData={formData} ids={["homeSale"]} />)}
          {box("hsa", "Had a health savings account (HSA)", <ScopeNote formData={formData} ids={["hsa"]} />)}
          {box("marketplace", "Bought health insurance through the Marketplace (Exchange)", <ScopeNote formData={formData} ids={["marketplace"]} />)}
          {box("newVehicle", "Purchased a new vehicle", (
            <>
              <YesNo name="newVehicleLoan" label="Did you take out a loan to buy it?" value={ex.newVehicleLoan} onChange={(v) => set("newVehicleLoan", v)} />
              <ScopeNote formData={formData} ids={["newVehicleLoan"]} />
            </>
          ))}
          {box("debtCancelled", "Had credit card, mortgage or other debt cancelled or forgiven by a lender", <ScopeNote formData={formData} ids={["debtCancelled"]} />)}
          {box("disasterLoss", "Had a loss related to a federally declared disaster area", <ScopeNote formData={formData} ids={["disasterLoss"]} />)}
          {box("creditDisallowed", "Had a tax credit disallowed in a previous year (for example: earned income credit, child tax credit, or American opportunity credit)")}
          {box("irsLetter", "Received a letter or bill from the IRS", <ScopeNote formData={formData} ids={["irsLetter"]} />)}
          {box("estimatedPayments", "Made estimated tax payments or applied last year's refund to 2026 taxes")}
          {box("lastYearReturn", "I will bring (or upload) last year's tax return")}
        </div>
      </Section>
    </div>
  );
}
