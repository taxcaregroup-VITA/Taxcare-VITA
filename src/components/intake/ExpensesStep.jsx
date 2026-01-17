import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../LanguageContext";
import { Gift, TrendingUp } from "lucide-react";

export default function ExpensesStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const expenses = data.expenses || {};

  const update = (field, value) => {
    onChange({ ...data, expenses: { ...expenses, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">{t("expensesInfo")}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        {t("expensesInfoInstructions")}
      </p>

      {/* Childcare / Dependent Care Expenses */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Gift className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("childcareExpenses")}</h3>
        </div>

        <Label>{t("childcareAmount")}</Label>
        <Input
          type="number"
          min="0"
          value={expenses.childcareAmount || ""}
          onChange={(e) => update("childcareAmount", parseFloat(e.target.value))}
          className="mt-1"
        />

        <Label className="mt-4">{t("childcareProvider")}</Label>
        <Input
          type="text"
          value={expenses.childcareProvider || ""}
          onChange={(e) => update("childcareProvider", e.target.value)}
          className="mt-1"
        />
      </div>

      {/* Medical Expenses */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-pink-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{t("medicalExpenses")}</h3>
        </div>

        <Label>{t("medicalAmount")}</Label>
        <Input
          type="number"
          min="0"
          value={expenses.medicalAmount || ""}
          onChange={(e) => update("medicalAmount", parseFloat(e.target.value))}
          className="mt-1"
        />

        <Label className="mt-4">{t("medicalNotes")}</Label>
        <Textarea
          value={expenses.medicalNotes || ""}
          onChange={(e) => update("medicalNotes", e.target.value)}
          className="mt-1"
          rows={3}
        />
      </div>

      {/* Other Expenses */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <Label>{t("otherExpenses")}</Label>
        <Textarea
          value={expenses.other || ""}
          onChange={(e) => update("other", e.target.value)}
          className="mt-1"
          rows={4}
          placeholder={language === "es" ? "Ingrese cualquier otro gasto relevante..." : "Enter any other relevant expenses..."}
        />
      </div>
    </div>
  );
}
