import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold">About The TaxCare Group</h1>
      <p className="text-lg text-gray-700">
        The TaxCare Group, Inc. is a nonprofit that provides free tax preparation through the IRS Volunteer Income Tax Assistance
        (VITA) program. Our IRS-certified volunteers help individuals and families file accurately, safely, and from home.
      </p>
      <p className="text-lg text-gray-700">
        We focus on low- to moderate-income taxpayers, seniors, people with disabilities, and taxpayers who need language assistance.
      </p>
      <Link to="/get-started" className="inline-flex bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700">
        Get Started
      </Link>
    </div>
  );
}
