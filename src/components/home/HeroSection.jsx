import { Link } from "react-router-dom";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Free Virtual Tax Help
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            IRS-Certified VITA volunteers provide 100% free tax preparation — securely from your home.
          </p>
          <Link to="/get-started">
            <button className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
