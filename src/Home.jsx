export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Free Virtual Tax Help
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          IRS-Certified VITA volunteers providing 100% free tax preparation —
          securely from your home.
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

      {/* Trust Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center mb-20">
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
        <h2 className="text-2xl font-bold mb-4">
          Who Qualifies?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          VITA services are generally available if you earn
          $67,000 or less, have a disability, or need language assistance.
        </p>

        <
