import React from 'react';

export default function FAQ() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of the most common questions about our virtual VITA program.
        </p>
      </section>

      <section className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">Who qualifies for VITA services?</h3>
          <p className="text-gray-600 text-sm">
            Generally, if you earn $67,000 or less, have a disability, or need language assistance, you qualify.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">How do I get started?</h3>
          <p className="text-gray-600 text-sm">
            Click the "Get Started" button on the homepage and follow the steps to schedule your appointment.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">Is it really free?</h3>
          <p className="text-gray-600 text-sm">
            Yes! Our services are 100% free and provided by IRS-certified volunteers.
          </p>
        </div>
      </section>
    </div>
  );
}
