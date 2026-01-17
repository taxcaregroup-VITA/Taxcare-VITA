// src/components/home/EligibilitySection.jsx
import React from "react";

export default function EligibilitySection() {
  const items = [
    "Household income generally under $67,000",
    "Valid SSN or ITIN",
    "U.S. citizen or resident alien",
    "Not filing complex returns (e.g. large business)",
  ];

  return (
    <section className="bg-gray-50 p-10 rounded-xl text-center max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Who Qualifies?</h2>
      <p className="text-gray-700 mb-6">
        VITA services are available to individuals and families who meet the following criteria:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-left max-w-md mx-auto">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
