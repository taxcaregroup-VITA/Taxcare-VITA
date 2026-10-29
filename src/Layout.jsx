import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "FAQ", to: "/faq" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 font-bold text-lg text-gray-900">
            <img src="/taxcare-seal.svg" alt="" className="h-12 w-12" width="48" height="48" />
            <span>Taxcare Group</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `font-medium transition ${isActive ? "text-emerald-700" : "text-gray-700 hover:text-emerald-700"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/get-started"
            className="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Get Started <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-gray-800"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden bg-white border-t" aria-label="Mobile">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block px-6 py-4 text-gray-800 hover:bg-gray-50">
                {item.name}
              </Link>
            ))}
            <Link to="/get-started" onClick={() => setOpen(false)} className="block px-6 py-4 font-semibold text-emerald-700">
              Get Started
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-emerald-950 text-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-bold text-lg">
              <img src="/taxcare-seal.svg" alt="" className="h-10 w-10" width="40" height="40" />
              Taxcare Group
            </div>
            <p className="text-sm text-emerald-100/80 max-w-xs">
              Free tax preparation by IRS-certified volunteers, completed securely from home.
            </p>
          </div>
          <nav className="space-y-2 text-sm" aria-label="Footer">
            <p className="font-semibold text-white">Explore</p>
            {[...navItems, { name: "Get Started", to: "/get-started" }, { name: "What to Have Ready", to: "/documents" }, { name: "Privacy Policy", to: "/privacy" }].map((item) => (
              <Link key={item.to} to={item.to} className="block text-emerald-100/80 hover:text-white">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-white">Need help in person?</p>
            <a href="https://freetaxassistance.for.irs.gov/s/sitelocator" target="_blank" rel="noreferrer" className="block text-emerald-100/80 hover:text-white underline">
              Find an IRS free tax help site near you
            </a>
          </div>
        </div>
        <div className="border-t border-emerald-900">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-emerald-100/70">
            © {new Date().getFullYear()} The TaxCare Group, Inc. A Volunteer Income Tax Assistance (VITA) site.
          </p>
        </div>
      </footer>
    </div>
  );
}
