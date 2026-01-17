import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "../LanguageContext";

export default function PersonalInfoStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const personal = data.personal || {};

  const update = (field, value) => {
    onChange({ ...data, personal: { ...personal, [field]: value } });
  };

  const YesNoRadio = ({ field, label }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <span className="text-slate-700">{label}</span>
      <RadioGroup
        value={personal[field] === true ? "yes" : personal[field] === false ? "no" : ""}
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
      <h2 className="text-2xl font-bold mb-4">{t("personalInfo")}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        {t("personalInfoInstructions")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>{t("firstName")}</Label>
          <Input
            value={personal.firstName || ""}
            onChange={(e) => update("firstName", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("lastName")}</Label>
          <Input
            value={personal.lastName || ""}
            onChange={(e) => update("lastName", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("ssn")}</Label>
          <Input
            value={personal.ssn || ""}
            onChange={(e) => update("ssn", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("dob")}</Label>
          <Input
            type="date"
            value={personal.dob || ""}
            onChange={(e) => update("dob", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("phone")}</Label>
          <Input
            type="tel"
            value={personal.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("email")}</Label>
          <Input
            type="email"
            value={personal.email || ""}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="md:col-span-2">
          <Label>{t("address")}</Label>
          <Input
            value={personal.address || ""}
            onChange={(e) => update("address", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("city")}</Label>
          <Input
            value={personal.city || ""}
            onChange={(e) => update("city", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("state")}</Label>
          <Input
            value={personal.state || ""}
            onChange={(e) => update("state", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{t("zip")}</Label>
          <Input
            value={personal.zip || ""}
            onChange={(e) => update("zip", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      {/* Filing Status */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          {t("filingStatus")}
        </h3>

        {["single", "married_joint", "married_separate", "head_household", "qualifying_widow"].map((status) => (
          <div key={status} className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              id={status}
              name="filingStatus"
              value={status}
              checked={personal.filingStatus === status}
              onChange={(e) => update("filingStatus", e.target.value)}
              className="h-4 w-4"
            />
            <Label htmlFor={status}>{t(status)}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
