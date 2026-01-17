import React from "react";

export default function EligibilitySection() {
  const items = [
    "Household income generally under $67,000",
    "Valid SSN or ITIN",
    "U.S. citizen or resident alien",
    "Not filing complex returns (e.g. large business)",
  ];

  return (
    <section className="bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Who Qualifies?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-center">
        VITA services are available to individuals and families who meet the following criteria:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-md mx-auto">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
