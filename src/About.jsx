import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Tax Care VITA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tax Care VITA is a program of IRS-certified volunteers providing free tax preparation services to eligible taxpayers across the nation. Our mission is to make tax filing easy, accessible, and safe from the comfort of your home.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-semibold text-lg mb-2">Certified Volunteers</h3>
          <p className="text-gray-600 text-sm">
            Every volunteer is trained and certified by the IRS.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Free for Everyone</h3>
          <p className="text-gray-600 text-sm">
            No fees, no hidden costs — always free.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Secure Filing</h3>
          <p className="text-gray-600 text-sm">
            All your data is handled securely and confidentially.
          </p>
        </div>
      </section>
    </div>
  );
}
