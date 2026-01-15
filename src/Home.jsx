import EligibilitySection from './components/home/EligibilitySection';
import TestimonialsSection from './components/home/TestimonialsSection';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Free Virtual Tax Help
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          IRS-Certified VITA volunteers provide 100% free tax preparation — securely from your home.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/get-started"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700"
          >
            Get Started
          </a>
          <a
            href="/faq"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features / Trust Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-semibold text-lg mb-2">100% Free</h3>
          <p className="text-gray-600 text-sm">
            No hidden fees. No upsells. Ever.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">IRS-Certified</h3>
          <p className="text-gray-600 text-sm">
            All volunteers are IRS VITA/TCE certified.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Secure & Virtual</h3>
          <p className="text-gray-600 text-sm">
            File safely without leaving your home.
          </p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-gray-50 rounded-xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Who Qualifies?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          VITA services are generally available if you earn $67,000 or less, have a disability, 
          or need language assistance.
        </p>
        <a
          href="/get-started"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700"
        >
          Check Your Eligibility
        </a>
      </section>

      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">“Amazing service! I filed my taxes from home and it was so easy.”</p>
            <p className="font-semibold">— Sarah M.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">“The volunteers were super helpful and explained everything clearly.”</p>
            <p className="font-semibold">— Jamal R.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">“100% free and completely virtual — exactly what I needed!”</p>
            <p className="font-semibold">— Maria L.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to File Your Taxes?</h2>
        <a
          href="/get-started"
          className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700"
        >
          Get Started Now
        </a>
      </section>

    </div>
  )
}
