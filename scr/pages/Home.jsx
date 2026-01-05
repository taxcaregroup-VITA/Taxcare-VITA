import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import EligibilitySection from '../components/EligibilitySection';
import TestimonialsSection from '../components/TestimonialsSection';
import SignUpSection from '../components/SignUpSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <EligibilitySection />
      <TestimonialsSection />
      <SignUpSection />
    </>
  );
}
