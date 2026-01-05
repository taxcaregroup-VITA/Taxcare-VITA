import React from 'react';
import { Check } from 'lucide-react';

export default function FeaturesSection({ t }) {
  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">{t('featuresTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <Check className="h-6 w-6 text-emerald-500" />
              <p>{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
