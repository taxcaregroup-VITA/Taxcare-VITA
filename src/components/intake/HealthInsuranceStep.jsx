import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from '../LanguageContext';

export default function HealthInsuranceStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const insurance = data.insurance || {};

  const update = (field, value) => {
    onChange({ ...data, insurance: { ...insurance, [field]: value } });
  };

  const YesNoRadio = ({ field, label }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <span className="text-slate-700">{label}</span>
      <RadioGroup
        value={insurance[field] === true ? 'yes' : insurance[field] === false ? 'no' : ''}
        onValueChange={(v) => update(field, v === 'yes')}
        className="flex gap-4"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yes" id={`${field}-yes`} />
          <Label htmlFor={`${field}-yes`}>{t('yes')}</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="no" id={`${field}-no`} />
          <Label htmlFor={`${field}-no`}>{t('no')}</Label>
        </div>
      </RadioGroup>
    </div>
  );

  return (
    <div className="space-y-6 bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {language === 'es' ? 'Cobertura de Seguro Médico' : 'Health Insurance Coverage'}
      </h3>

      <YesNoRadio field="covered_all_year" label={language === 'es' ? '¿Estuvo cubierto todo el año?' : 'Covered all year?'} />
      <YesNoRadio field="premium_assistance" label={language === 'es' ? '¿Recibió asistencia para primas?' : 'Received premium assistance?'} />
      <YesNoRadio field="medicare" label={language === 'es' ? '¿Recibió Medicare?' : 'Received Medicare?'} />
      <YesNoRadio field="medicaid" label={language === 'es' ? '¿Recibió Medicaid?' : 'Received Medicaid?'} />
      <YesNoRadio field="other_insurance" label={language === 'es' ? '¿Otro seguro?' : 'Other insurance?'} />
    </div>
  );
}
