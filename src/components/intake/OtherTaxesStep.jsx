import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from '../LanguageContext';

export default function OtherTaxesStep({ data, onChange }) {
  const { t, language } = useLanguage();
  const taxes = data.taxes || {};

  const update = (field, value) => {
    onChange({ ...data, taxes: { ...taxes, [field]: value } });
  };

  return (
    <div className="space-y-6 bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {language === 'es' ? 'Otros Impuestos' : 'Other Taxes'}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>{language === 'es' ? 'Reembolso del año anterior' : 'Last year refund'}</Label>
          <Input
            type="number"
            min="0"
            value={taxes.previous_refund || ''}
            onChange={(e) => update('previous_refund', parseFloat(e.target.value))}
            className="mt-1"
          />
        </div>

        <div>
          <Label>{language === 'es' ? 'Pago estimado del año anterior' : 'Last year estimated payments'}</Label>
          <Input
            type="number"
            min="0"
            value={taxes.estimated_payments || ''}
            onChange={(e) => update('estimated_payments', parseFloat(e.target.value))}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
