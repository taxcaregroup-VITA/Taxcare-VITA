// src/components/home/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 rounded-xl">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Free Virtual Tax Help
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-xl">
            IRS-Certified VITA volunteers provide 100% free tax preparation — securely from your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/get-started"
              className="w-full sm:w-auto bg-white text-emerald-900 px-8 py-6 rounded-xl font-semibold shadow-lg hover:bg-emerald-50 transition-all flex items-center justify-center"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-3xl blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
            alt="Tax preparation"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
