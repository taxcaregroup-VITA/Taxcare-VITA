import { Link } from "react-router-dom";

export default function SignUpSection() {
  return (
    <section className="bg-emerald-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to File Your Taxes?
        </h2>

        <p className="text-emerald-100 mb-8">
          Get started today with free, secure, IRS-certified tax assistance.
        </p>

        <Link
          to="/get-started"
          className="inline-block bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
