import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            100% Free IRS-Certified Help
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Free Virtual Tax Help
          </h1>

          <p className="text-lg text-emerald-100 max-w-xl mb-8">
            File your taxes securely from home with IRS-certified VITA volunteers.
            No fees. No upsells. Ever.
          </p>

          <Link to="/get-started">
  <Button
    size="lg"
    className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    Get Started
  </Button>
</Link>
        </div>

        {/* Image */}
        <div className="hidden lg:block relative">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
            alt="Tax preparation"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
