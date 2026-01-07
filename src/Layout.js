import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Navigation links
const navItems = [
  { name: 'Home', page: '/' },
  { name: 'Get Started', page: '/get-started' },
  { name: 'Schedule', page: '/schedule' },
  { name: 'FAQ', page: '/faq' },
  { name: 'About', page: '/about' },
  { name: 'Privacy Policy', page: '/privacy' },
  { name: 'Contact', page: '/contact' }
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-emerald-600 font-bold text-xl">
            Taxcare Group
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-center">
          © 2024 Taxcare Group, Inc.
        </div>
      </footer>
    </div>
  );
}
