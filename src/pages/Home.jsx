// src/pages/Home.jsx
import React from "react";

// Sections
import HeroSection from "../components/home/HeroSection";
import BenefitsSection from "../components/home/BenefitsSection";
import EligibilitySection from "../components/home/EligibilitySection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-32">
      
      {/* Hero */}
      <HeroSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* Eligibility */}
      <EligibilitySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call-to-Action */}
      <section className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to File Your Taxes?
        </h2>
        <a
  href="/intake"
  className="mt-6 inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition"
>
  Get Started
</a>

      </section>
    </div>
  );
}
