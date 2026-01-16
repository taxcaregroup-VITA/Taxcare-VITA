import React from "react";

export default function EligibilitySection() {
  const items = [
    "Household income generally under $67,000",
    "Valid SSN or ITIN",
    "U.S. citizen or resident alien",
    "Not filing complex returns (e.g. large business)",
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Who Qualifies?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          VITA services are available to individuals and families who meet the following criteria:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white p-4 rounded-xl text-left
                shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
