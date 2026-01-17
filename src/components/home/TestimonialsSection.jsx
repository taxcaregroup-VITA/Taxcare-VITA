// src/components/home/TestimonialsSection.jsx
import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria S.",
      text: "The VITA volunteers made filing my taxes so easy and stress-free. Highly recommend!",
    },
    {
      name: "James K.",
      text: "I got all my questions answered and filed my return safely from home. Great service!",
    },
    {
      name: "Aisha T.",
      text: "Professional, friendly, and completely free. VITA is amazing!",
    },
  ];

  return (
    <section className="my-16 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-semibold text-gray-900">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
