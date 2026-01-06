// src/components/home/SignUpSection.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SignUpSection({ t, language }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We received: ${email}`);
    setEmail('');
  };

  return (
    <section className="py-20 bg-emerald-600 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('signUpTitle') || 'Join Our Mailing List'}</h2>
        <p className="mb-8">{t('signUpSubtitle') || 'Get updates and helpful tax tips directly to your inbox.'}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder={t('emailPlaceholder') || 'Enter your email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-md text-gray-800 flex-1"
          />
          <Button type="submit" className="bg-white text-emerald-600 hover:bg-gray-100">
            {t('signUpButton') || 'Sign Up'}
          </Button>
        </form>
      </div>
    </section>
  );
}
