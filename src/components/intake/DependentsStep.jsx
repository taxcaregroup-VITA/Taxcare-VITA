import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../LanguageContext";
import { Plus, Trash } from "lucide-react";

export default function DependentsStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const dependents = data.dependents || [];

  const updateDependent = (index, field, value) => {
    const newDeps = [...dependents];
    newDeps[index] = { ...newDeps[index], [field]: value };
    onChange({ ...data, dependents: newDeps });
  };

  const addDependent = () => {
    onChange({
      ...data,
      dependents: [...dependents, { name: "", ssn: "", dob: "", relationship: "", monthsLived: "" }],
    });
  };

  const removeDependent = (index) => {
    const newDeps = dependents.filter((_, i) => i !== index);
    onChange({ ...data, dependents: newDeps });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">{t("dependents")}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        {t("dependents_instructions")}
      </p>

      {dependents.map((dep, index) => (
        <div
          key={index}
          className="bg-white border border-slate-200 rounded-2xl p-6 relative"
        >
          <div className="absolute top-4 right-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeDependent(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>{t("dependentName")}</Label>
              <Input
                value={dep.name || ""}
                onChange={(e) => updateDependent(index, "name", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label>{t("dependentSSN")}</Label>
              <Input
                value={dep.ssn || ""}
                onChange={(e) => updateDependent(index, "ssn", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label>{t("dependentDOB")}</Label>
              <Input
                type="date"
                value={dep.dob || ""}
                onChange={(e) => updateDependent(index, "dob", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label>{t("dependentRelationship")}</Label>
              <Input
                value={dep.relationship || ""}
                onChange={(e) => updateDependent(index, "relationship", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label>{t("dependentMonthsLived")}</Label>
              <Input
                type="number"
                min="0"
                max="12"
                value={dep.monthsLived || ""}
                onChange={(e) => updateDependent(index, "monthsLived", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      ))}

      <div>
        <Button
          variant="outline"
          size="lg"
          onClick={addDependent}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          {t("addDependent")}
        </Button>
      </div>
    </div>
  );
}
