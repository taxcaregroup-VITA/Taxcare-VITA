import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../LanguageContext";
import { Briefcase, Building, DollarSign, TrendingUp } from "lucide-react";

export default function IncomeStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const income = data.income || {};

  const update = (field, value) => {
    onChange({ ...data, income: { ...income, [field]: value } });
  };

  const YesNoRadio = ({ field, label }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <span className="text-slate-700">{label}</span>
      <RadioGroup
        value={income[field] === true ? "yes" : income[field] === false ? "no" : ""}
        onValueChange={(v) => update(field, v === "yes")}
        className="flex gap-4"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yes" id={`${field}-yes`} />
          <Label htmlFor={`${field}-yes`}>{t("yes")}</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="no" id={`${field}-no`} />
          <Label htmlFor={`${field}-no`}>{t("no")}</Label>
        </div>
      </RadioGroup>
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">{t("incomeInfo")}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        {t("incomeInfoInstructions")}
      </p>

      {/* Employment Income */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("employmentIncome")}</h3>
        </div>

        <YesNoRadio field="hasWages" label={t("receivedWages")} />

        {income.hasWages && (
          <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-slate-50 rounded-lg">
            <div>
              <Label>{t("numJobs")}</Label>
              <Input
                type="number"
                min="0"
                value={income.numJobs || ""}
                onChange={(e) => update("numJobs", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <Label>{t("numW2s")}</Label>
              <Input
                type="number"
                min="0"
                value={income.numW2s || ""}
                onChange={(e) => update("numW2s", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Retirement / Social Security */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Building className="h-5 w-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("retirementIncome")}</h3>
        </div>

        <YesNoRadio field="hasRetirement" label={t("receivedRetirement")} />
        <YesNoRadio field="hasSocialSecurity" label={t("receivedSocialSecurity")} />
      </div>

      {/* Self-Employment / Other Income */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("selfEmployment")}</h3>
        </div>

        <YesNoRadio field="hasSelfEmployment" label={t("selfEmployed")} />
        <YesNoRadio field="hasOtherIncome" label={t("otherIncome")} />

        {income.hasOtherIncome && (
          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
            <Label>{t("otherIncomeDescription")}</Label>
            <Textarea
              value={income.otherIncomeDescription || ""}
              onChange={(e) => update("otherIncomeDescription", e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>
        )}
      </div>
    </div>
  );
}
