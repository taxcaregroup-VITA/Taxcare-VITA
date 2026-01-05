import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ t }) {
  return (
    <section className="bg-emerald-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t('heroTitle')}</h1>
        <p className="text-lg sm:text-xl mb-8">{t('heroSubtitle')}</p>
        <Button className="bg-white text-emerald-600 hover:bg-gray-100">{t('getStarted')}</Button>
      </div>
    </section>
  );
}
