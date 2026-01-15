import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contact Tax Care VITA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions or need help? Reach out to our team and we’ll get back to you as soon as possible.
        </p>
      </section>

      <section className="max-w-2xl mx-auto space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600">support@taxcaregroup.org</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-600">(555) 123-4567</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600">
            Virtual VITA Services — Nationwide Coverage
          </p>
        </div>
      </section>
    </div>
  );
}
