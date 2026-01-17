import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import BenefitsSection from "../components/home/BenefitsSection";

export default function Home() {
  return (
    <div className="space-y-20">

      {/* Hero Section */}
      <HeroSection />

      {/* Benefits / Features Section */}
      <BenefitsSection />

      {/* Call-to-Action Section */}
      <section className="text-center py-20 bg-emerald-50 rounded-xl shadow-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to File Your Taxes?
        </h2>
        <Link
          to="/get-started"
          className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-emerald-700 transition"
        >
          Get Started Now
        </Link>
      </section>

    </div>
  );
}
