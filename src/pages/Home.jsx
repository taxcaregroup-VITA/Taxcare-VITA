// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-b from-emerald-50 to-white py-20 rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Free Virtual Tax Help
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          IRS-Certified VITA volunteers provide 100% free tax preparation — securely from your home.
        </p>
        <a
          href="/intake"
          className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 shadow-md transition"
        >
          Get Started
        </a>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <h3 className="font-semibold text-lg mb-2">100% Free</h3>
          <p className="text-gray-700 text-sm">No hidden fees. No upsells. Ever.</p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <h3 className="font-semibold text-lg mb-2">IRS-Certified</h3>
          <p className="text-gray-700 text-sm">All volunteers are IRS VITA/TCE certified.</p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <h3 className="font-semibold text-lg mb-2">Secure & Virtual</h3>
          <p className="text-gray-700 text-sm">File safely without leaving your home.</p>
        </div>
      </section>
    </div>
  );
}
