import { useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL, bookingUrl } from "../config";

const REFERENCE = /^TC-\d{6}-[A-HJ-NP-Z2-9]{5}$/;

export default function Schedule() {
  const [ref, setRef] = useState("");
  const clean = ref.trim().toUpperCase();
  const valid = REFERENCE.test(clean);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold">Book Your Appointment</h1>
        <p className="text-gray-700 text-lg">
          Appointments are for taxpayers who have completed our online intake. Enter the reference number from your confirmation page.
        </p>
      </div>

      {!BOOKING_URL ? (
        <p className="rounded-xl bg-gray-50 border p-5 text-gray-700">
          Online booking isn't open yet. After you complete the intake, a volunteer will contact you to schedule.
        </p>
      ) : (
        <div className="space-y-5">
          <label className="block">
            <span className="block mb-1 text-sm font-medium">Reference number</span>
            <input
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              placeholder="TC-261101-7KQ4M"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full font-mono uppercase focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {ref && !valid && <span className="block mt-1 text-sm text-amber-800">Reference numbers look like TC-261101-7KQ4M.</span>}
          </label>
          <div className="rounded-xl border p-5 space-y-3">
            <p className="text-gray-700">
              A 30-minute Zoom or Google Meet appointment. A volunteer confirms your identity and goes over your intake answers with you.
              Have your photo ID and Social Security cards or ITIN letters ready. If you're filing jointly, both spouses need to attend.
            </p>
            <a
              href={valid ? bookingUrl(clean) : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!valid}
              className={`inline-flex px-6 py-3 rounded-lg font-semibold ${valid ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-gray-200 text-gray-500 pointer-events-none"}`}
            >
              Book my appointment
            </a>
          </div>
        </div>
      )}

      <p className="text-gray-700">
        Don't have a reference number yet? <Link to="/get-started" className="underline text-emerald-800">Start your intake</Link>. It takes about 15 minutes.
      </p>
    </div>
  );
}
