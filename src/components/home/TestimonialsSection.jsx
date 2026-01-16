export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria R.",
      quote:
        "The volunteers were incredibly helpful. I filed my taxes from home and paid nothing.",
    },
    {
      name: "James L.",
      quote:
        "Fast, secure, and professional. I finally understand my tax return.",
    },
    {
      name: "Angela T.",
      quote:
        "As a first-time filer, this service made everything stress-free.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Clients Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                bg-gray-50 p-6 rounded-xl
                shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <p className="text-gray-700 mb-4">“{t.quote}”</p>
              <p className="font-semibold text-emerald-600">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
