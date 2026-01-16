export default function BenefitsSection() {
  const benefits = [
    {
      title: "100% Free",
      description: "No hidden costs, no upgrades, no surprises.",
    },
    {
      title: "IRS-Certified Volunteers",
      description: "All preparers are trained and certified by the IRS.",
    },
    {
      title: "Secure & Virtual",
      description: "Upload documents and meet safely from home.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Choose Our VITA Program?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="
                bg-gray-50 p-8 rounded-xl
                shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h3 className="font-semibold text-lg mb-3">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
