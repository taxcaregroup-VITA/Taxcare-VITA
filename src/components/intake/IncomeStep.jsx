import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "../LanguageContext";
import {
  Briefcase,
  Building,
  DollarSign,
  Gift,
  TrendingUp,
  FileText,
  BarChart,
} from "lucide-react";

export default function IncomeStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const income = data.income || {};

  const update = (field, value) => {
    onChange({
      ...data,
      income: { ...income, [field]: value },
    });
  };

  const YesNoRadio = ({ field, label }) => (
    <div className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
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

      {/* Employment Income */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("employmentIncome")}</h3>
        </div>

        <YesNoRadio field="has_wages" label={t("wages")} />
        {income.has_wages && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label>{t("numJobs")}</Label>
              <Input
                type="number"
                min="0"
                value={income.num_jobs || ""}
                onChange={(e) => update("num_jobs", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <Label>{t("numW2s")}</Label>
              <Input
                type="number"
                min="0"
                value={income.num_w2s || ""}
                onChange={(e) => update("num_w2s", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
        )}
        <YesNoRadio field="has_tips" label={t("tips")} />
      </div>

      {/* Retirement & Benefits */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Building className="h-5 w-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("retirement")}</h3>
        </div>

        <YesNoRadio field="has_retirement" label={t("retirementPension")} />
        {income.has_retirement && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label>{t("num1099r")}</Label>
              <Input
                type="number"
                min="0"
                value={income.num_1099r || ""}
                onChange={(e) => update("num_1099r", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <Label>{t("qcdAmount")}</Label>
              <Input
                type="number"
                min="0"
                value={income.qcd_amount || ""}
                onChange={(e) => update("qcd_amount", parseFloat(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
        )}
        <YesNoRadio field="has_disability" label={t("disability")} />
        <YesNoRadio field="has_social_security" label={t("socialSecurity")} />

      </div>

      {/* Unemployment */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <YesNoRadio field="has_unemployment" label={t("unemployment")} />
        {income.has_unemployment && (
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>{t("num1099g")}</Label>
              <Input
                type="number"
                min="0"
                value={income.num_1099g || ""}
                onChange={(e) => update("num_1099g", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Other Income */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <YesNoRadio field="has_other_income" label={t("otherIncomeType")} />
        {income.has_other_income && (
          <Textarea
            value={income.other_income_description || ""}
            onChange={(e) => update("other_income_description", e.target.value)}
            rows={3}
            placeholder={t("otherDescription")}
            className="mt-2 w-full"
          />
        )}
      </div>

      {/* Self-Employment */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("selfEmployment")}</h3>
        </div>
        <YesNoRadio field="has_self_employment" label={t("selfEmployed")} />
        {income.has_self_employment && (
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <Label>{t("numMisc")}</Label>
              <Input
                type="number"
                min="0"
                value={income.num_1099misc || ""}
                onChange={(e) => update("num_1099misc", parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <Label>{t("expenses")}</Label>
              <Input
                type="number"
                min="0"
                value={income.self_employment_expenses || ""}
                onChange={(e) => update("self_employment_expenses", parseFloat(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Notes */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <Label>{t("notes")}</Label>
        <Textarea
          value={income.income_notes || ""}
          onChange={(e) => update("income_notes", e.target.value)}
          rows={4}
          placeholder={language === "es" ? "Notas adicionales sobre ingresos..." : "Additional notes about income..."}
        />
      </div>

    </div>
  );
}
