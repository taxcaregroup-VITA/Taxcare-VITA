export default function Schedule() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule an Appointment</h1>
      <p className="text-gray-700 text-lg mb-6">
        Choose a date and time that works best for you to meet with an IRS-certified VITA volunteer.
      </p>
      <p className="text-gray-700 text-lg">
        (For now, this is a placeholder — we’ll add a scheduling form soon.)
      </p>
      <a
        href="/get-started"
        className="mt-6 inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition"
      >
        Back to Get Started
      </a>
    </div>
  );
}
