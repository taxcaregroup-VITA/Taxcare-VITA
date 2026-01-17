import React from 'react';
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from '../LanguageContext';

export default function NotesStep({ data, onChange }) {
  const { language } = useLanguage();
  const notes = data.notes || '';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {language === 'es' ? 'Notas Adicionales' : 'Additional Notes'}
      </h3>
      <Textarea
        value={notes}
        onChange={(e) => onChange({ ...data, notes: e.target.value })}
        rows={4}
        placeholder={language === 'es' ? 'Ingrese cualquier nota adicional...' : 'Enter any additional notes...'}
      />
    </div>
  );
}
