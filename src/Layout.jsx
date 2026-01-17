import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact", to: "/contact" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-emerald-700">
            TaxCare VITA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-emerald-700"
                      : "text-gray-600 hover:text-emerald-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/get-started"
              className="ml-4 bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/get-started"
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-semibold text-emerald-700"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} TaxCare VITA
      </footer>
    </div>
  );
}
