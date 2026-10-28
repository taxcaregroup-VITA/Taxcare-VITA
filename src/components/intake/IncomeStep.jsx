// Form 13614-C (Rev. 10-2026), page 2: income.
import { Check, YesNo, TextField, ScopeNote } from "./fields";

export default function IncomeStep({ formData, setFormData }) {
  const inc = formData.income || {};
  const set = (field, value) =>
    setFormData((prev) => ({ ...prev, income: { ...prev.income, [field]: value } }));
  const yn = (field, label, opts = {}) => (
    <YesNo name={field} label={label} value={inc[field]} onChange={(v) => set(field, v)} {...opts} />
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold">Income</h2>
        <p className="text-gray-600 mt-1">
          Did you or your spouse receive money from any of the following in 2026? Check only the ones that apply.
        </p>
      </div>

      <div>
        <Check label="Wages as a part-time or full-time employee (W-2)" checked={inc.wages} onChange={(v) => set("wages", v)}>
          <TextField label="How many jobs?" type="number" value={inc.jobs} onChange={(v) => set("jobs", v)} />
          {yn("overtime", "Did you receive overtime pay?")}
          <ScopeNote formData={formData} ids={["overtime"]} />
        </Check>

        <Check label="Tips" checked={inc.tips} onChange={(v) => set("tips", v)}>
          {yn("tipsOnW2", "Were all of your tips reported on your W-2?", { unsure: true })}
          <ScopeNote formData={formData} ids={["tipsUnreported", "tipsDeduction"]} />
        </Check>

        <Check label="Retirement account, pension or annuity (Form 1099-R)" checked={inc.retirement} onChange={(v) => set("retirement", v)}>
          {yn("retirementTaxableShown", "Does box 2a of your Form 1099-R show the taxable amount?", { unsure: true })}
          {yn("qcd", "Did you have any of it paid directly to a charity?")}
          <ScopeNote formData={formData} ids={["retirementTaxable", "retirementUnsure", "qcd"]} />
        </Check>

        <Check label="Disability benefits (such as payments from insurance or workers' compensation)" checked={inc.disability} onChange={(v) => set("disability", v)} />

        <Check label="Social Security or Railroad Retirement benefits" checked={inc.socialSecurity} onChange={(v) => set("socialSecurity", v)}>
          {yn("railroadPension", "Did you receive a Railroad Retirement pension (Form RRB-1099-R)?")}
          <ScopeNote formData={formData} ids={["railroadPension"]} />
        </Check>

        <Check label="Unemployment benefits (Form 1099-G)" checked={inc.unemployment} onChange={(v) => set("unemployment", v)} />
        <Check label="Refund of state or local income tax" checked={inc.stateRefund} onChange={(v) => set("stateRefund", v)} />
        <Check label="Interest or dividends (bank account, bonds, etc.)" checked={inc.interestDividends} onChange={(v) => set("interestDividends", v)} />

        <Check label="Sale of stocks, bonds or real estate" checked={inc.stockSales} onChange={(v) => set("stockSales", v)}>
          <ScopeNote formData={formData} ids={["stockSales"]} />
        </Check>
        <div className="py-2 border-b border-gray-100">
          {yn("priorCapitalLoss", "Did you report a loss from selling stocks, bonds or real estate on last year's return?")}
          <ScopeNote formData={formData} ids={["capitalLossCarryover"]} />
        </div>

        <Check label="Alimony received" checked={inc.alimony} onChange={(v) => set("alimony", v)} />

        <Check label="Income from renting out your house or a room in your house" checked={inc.rentHome} onChange={(v) => set("rentHome", v)}>
          {yn("rentHomeUnder15", "Did you use it as your home and rent it for fewer than 15 days?")}
          <ScopeNote formData={formData} ids={["rentHome"]} />
        </Check>
        <Check label="Income from renting out personal property, such as a vehicle" checked={inc.rentProperty} onChange={(v) => set("rentProperty", v)}>
          <ScopeNote formData={formData} ids={["rentProperty"]} />
        </Check>

        <Check label="Gambling winnings, including lottery" checked={inc.gambling} onChange={(v) => set("gambling", v)} />

        <Check label="Payments for contract or self-employment work (1099-NEC)" checked={inc.selfEmployment} onChange={(v) => set("selfEmployment", v)}>
          {yn("selfEmploymentPriorLoss", "Did you report a loss from this work on last year's return?")}
          <ScopeNote formData={formData} ids={["selfEmployment"]} />
        </Check>
        <div className="py-2 border-b border-gray-100">
          {yn("gig", "Did you have gig income (rideshare, food or grocery delivery, etc.)?")}
          {inc.gig === "yes" && !inc.selfEmployment && <ScopeNote formData={formData} ids={["selfEmployment"]} />}
        </div>

        <Check
          label="Any other money received during the year (for example: cash payments, jury duty, awards, digital assets, royalties, union strike benefits)"
          checked={inc.otherMoney}
          onChange={(v) => set("otherMoney", v)}
        >
          <TextField label="Please describe" value={inc.otherMoneyDesc} onChange={(v) => set("otherMoneyDesc", v)} />
          <ScopeNote formData={formData} ids={["otherIncome"]} />
        </Check>
      </div>
    </div>
  );
}
