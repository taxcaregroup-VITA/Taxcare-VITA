import React from "react";

export default function EligibilitySection() {
  const items = [
    "Household income generally under $67,000",
    "Valid SSN or ITIN",
    "U.S. citizen or resident alien",
    "Not filing complex returns (e.g. large business)",
  ];

  return (
    <section className="flex items-start gap-3
  bg-gray-50 p-4 rounded-xl
  shadow-sm hover:shadow-lg hover:-translate-y-1
  transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4">Who Qualifies?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        VITA services are available to individuals and families who meet the following criteria:
      </p>

      <ul className="max-w-xl mx-auto text-left list-disc list-inside text-gray-700 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
