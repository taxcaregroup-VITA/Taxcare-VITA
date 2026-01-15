export default function GetStarted() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started with Taxcare Group</h1>
      <p className="text-gray-700 text-lg mb-6">
        Follow these simple steps to begin filing your taxes with our IRS-certified volunteers:
      </p>
      <ol className="text-left text-gray-700 list-decimal list-inside space-y-2">
        <li>Check your eligibility.</li>
        <li>Create your secure account.</li>
        <li>Upload your tax documents.</li>
        <li>Meet virtually with a certified volunteer.</li>
        <li>File your taxes for free.</li>
      </ol>
      <a
        href="/schedule"
        className="mt-6 inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition"
      >
        Schedule Your Appointment
      </a>
    </div>
  );
}
