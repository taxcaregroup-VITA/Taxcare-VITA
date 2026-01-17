// src/components/home/BenefitsSection.jsx
import React from "react";

export default function BenefitsSection() {
  const benefits = [
    { title: "100% Free", description: "No hidden fees. No upsells. Ever." },
    { title: "IRS-Certified", description: "All volunteers are IRS VITA/TCE certified." },
    { title: "Secure & Virtual", description: "File safely without leaving your home." },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-8 text-center my-16">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
          <p className="text-gray-700 text-sm">{benefit.description}</p>
        </div>
      ))}
    </section>
  );
}
