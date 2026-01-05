import React from 'react';
import { useLanguage } from '../layout';
import { useTranslation } from '@/components/common/translations';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import EligibilitySection from '@/components/home/EligibilitySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import SignUpSection from '@/components/home/SignUpSection';

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div>
      <HeroSection t={t} />
      <FeaturesSection t={t} />
      <EligibilitySection t={t} />
      <TestimonialsSection t={t} />
      <SignUpSection t={t} language={language} />
    </div>
  );
}
