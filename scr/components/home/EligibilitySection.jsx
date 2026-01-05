// src/components/home/EligibilitySection.jsx
import React from 'react';
import { Check } from 'lucide-react';

export default function EligibilitySection({ t }) {
  const eligibilityItems = [
    t('eligibilityItem1') || 'Must have earned income',
    t('eligibilityItem2') || 'Must be a U.S. resident',
    t('eligibilityItem3') || 'Cannot exceed income limits',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">{t('eligibilityTitle') || 'Eligibility Requirements'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eligibilityItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-lg transition">
              <Check className="h-6 w-6 text-emerald-500 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
