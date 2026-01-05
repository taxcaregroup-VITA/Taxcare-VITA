// src/components/home/FeaturesSection.jsx
import React from 'react';
import { Check } from 'lucide-react';

export default function FeaturesSection({ t }) {
  const features = [
    t('feature1') || 'Free tax preparation for all eligible clients',
    t('feature2') || 'Certified volunteers ensure accuracy',
    t('feature3') || 'Virtual and in-person appointments available',
    t('feature4') || 'Fast refunds and expert guidance',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">{t('featuresTitle') || 'Why Choose Us'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-lg transition">
              <Check className="h-6 w-6 text-emerald-500 mt-1" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
