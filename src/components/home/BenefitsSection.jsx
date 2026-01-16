export default function BenefitsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-2">100% Free</h3>
          <p className="text-gray-700 text-sm">
            No hidden fees. No upsells. Ever.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-2">IRS-Certified</h3>
          <p className="text-gray-700 text-sm">
            All volunteers are IRS VITA/TCE certified.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-2">Secure & Virtual</h3>
          <p className="text-gray-700 text-sm">
            File safely without leaving your home.
          </p>
        </div>

      </div>
    </section>
  )
}
