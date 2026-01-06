export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria R.',
      quote:
        'The volunteers were incredibly helpful. I filed my taxes from home and paid nothing.',
    },
    {
      name: 'James L.',
      quote:
        'Fast, secure, and professional. I finally understand my tax return.',
    },
    {
      name: 'Angela T.',
      quote:
        'As a first-time filer, this service made everything stress-free.',
    },
  ]

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          What Clients Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-700 mb-4">
                “{t.quote}”
              </p>
              <p className="text-sm font-semibold text-emerald-600">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
