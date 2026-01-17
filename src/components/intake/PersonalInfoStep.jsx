import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "../LanguageContext";

export default function PersonalInfoStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const personal = data.personalInfo.taxpayer;

  const update = (field, value) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        taxpayer: { ...personal, [field]: value }
      }
    });
  };

  const YesNoRadio = ({ field, label }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <span className="text-slate-700">{label}</span>
      <RadioGroup
        value={personal[field] ? "yes" : personal[field] === false ? "no" : ""}
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
      <h2 className="text-2xl font-bold mb-4">{t("personal_info")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>{t("first_name")}</Label>
          <Input
            value={personal.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("middle_initial")}</Label>
          <Input
            value={personal.middleInitial}
            onChange={(e) => update("middleInitial", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("last_name")}</Label>
          <Input
            value={personal.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("dob")}</Label>
          <Input
            type="date"
            value={personal.dob}
            onChange={(e) => update("dob", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("job_title")}</Label>
          <Input
            value={personal.jobTitle}
            onChange={(e) => update("jobTitle", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("phone")}</Label>
          <Input
            value={personal.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("email")}</Label>
          <Input
            type="email"
            value={personal.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>

        <div>
          <Label>{t("address_street")}</Label>
          <Input
            value={personal.address.street}
            onChange={(e) =>
              onChange({
                ...data,
                personalInfo: {
                  ...data.personalInfo,
                  taxpayer: {
                    ...personal,
                    address: { ...personal.address, street: e.target.value }
                  }
                }
              })
            }
          />
        </div>

        <div>
          <Label>{t("address_apt")}</Label>
          <Input
            value={personal.address.apt}
            onChange={(e) =>
              onChange({
                ...data,
                personalInfo: {
                  ...data.personalInfo,
                  taxpayer: {
                    ...personal,
                    address: { ...personal.address, apt: e.target.value }
                  }
                }
              })
            }
          />
        </div>

        <div>
          <Label>{t("city")}</Label>
          <Input
            value={personal.address.city}
            onChange={(e) =>
              onChange({
                ...data,
                personalInfo: {
                  ...data.personalInfo,
                  taxpayer: {
                    ...personal,
                    address: { ...personal.address, city: e.target.value }
                  }
                }
              })
            }
          />
        </div>

        <div>
          <Label>{t("state")}</Label>
          <Input
            value={personal.address.state}
            onChange={(e) =>
              onChange({
                ...data,
                personalInfo: {
                  ...data.personalInfo,
                  taxpayer: {
                    ...personal,
                    address: { ...personal.address, state: e.target.value }
                  }
                }
              })
            }
          />
        </div>

        <div>
          <Label>{t("zip")}</Label>
          <Input
            value={personal.address.zip}
            onChange={(e) =>
              onChange({
                ...data,
                personalInfo: {
                  ...data.personalInfo,
                  taxpayer: {
                    ...personal,
                    address: { ...personal.address, zip: e.target.value }
                  }
                }
              })
            }
          />
        </div>
      </div>

      {/* Yes/No Fields */}
      <YesNoRadio field="fullTimeStudent" label={t("full_time_student")} />
      <YesNoRadio field="blind" label={t("blind")} />
      <YesNoRadio field="disabled" label={t("disabled")} />
    </div>
  );
}
