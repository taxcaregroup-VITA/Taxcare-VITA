// src/components/home/TestimonialsSection.jsx
import React from 'react';
import { User } from 'lucide-react';

export default function TestimonialsSection({ t }) {
  const testimonials = [
    {
      name: 'John D.',
      text: t('testimonial1') || 'Great experience! The volunteers were super helpful and friendly.',
    },
    {
      name: 'Maria S.',
      text: t('testimonial2') || 'Fast and easy tax preparation. Highly recommend VITA services!',
    },
    {
      name: 'Alex P.',
      text: t('testimonial3') || 'I got my refund without any stress thanks to the team.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">{t('testimonialsTitle') || 'What Our Clients Say'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">&quot;{item.text}&quot;</p>
              <div className="flex items-center justify-center gap-2">
                <User className="h-5 w-5 text-emerald-500" />
                <span className="font-semibold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
