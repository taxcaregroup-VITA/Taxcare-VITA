import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Amazing service! I filed my taxes from home and it was so easy.",
      name: "Sarah M.",
    },
    {
      quote: "The volunteers were patient and explained everything clearly.",
      name: "Jamal R.",
    },
    {
      quote: "100% free and completely virtual — exactly what I needed!",
      name: "Maria L.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-600 mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
