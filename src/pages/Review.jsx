import { Link } from "react-router-dom";

// Placeholder while the Form 13614-C / 14446 PDF download feature is finished.
// The previous draft of this page is in git history (commit aba79f0).
export default function Review() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-emerald-800">Review Your Information</h1>
      <p className="mt-4 text-gray-600">
        This page is being updated. Please check back soon, or contact us and a
        volunteer will help you complete your intake.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/contact"
          className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
        >
          Contact Us
        </Link>
        <Link
          to="/"
          className="px-5 py-2 rounded-lg font-semibold text-emerald-700 border border-emerald-600 hover:bg-emerald-50 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
