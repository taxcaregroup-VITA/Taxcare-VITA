import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/common/Logo';
import LanguageToggle from '@/components/common/LanguageToggle';
import { useTranslation } from '@/components/common/translations';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu,
  Shield,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { routes } from '@/utils/routes';

// Language Context
export const LanguageContext = createContext({ language: 'en', setLanguage: () => {} });
export const useLanguage = () => useContext(LanguageContext);

export default function Layout({ children, currentPageName }) {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), path: routes.Home, key: 'Home' },
    { name: t('getStarted'), path: routes.GetStarted, key: 'GetStarted' },
    { name: t('scheduleAppointment'), path: routes.Schedule, key: 'Schedule' },
    { name: t('faq'), path: routes.FAQ, key: 'FAQ' },
    { name: t('aboutUs'), path: routes.About, key: 'About' },
    { name: t('privacyPolicy'), path: routes.Privacy, key: 'Privacy' },
    { name: t('contact'), path: routes.Contact, key: 'Contact' }
  ];

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen flex flex-col bg-gray-50">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-2 px-4 text-sm">
          <Shield className="inline h-4 w-4 mr-2" />
          IRS-Certified VITA Program • 100% Free Tax Preparation
          <Award className="inline h-4 w-4 ml-2" />
        </div>

        {/* Header */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">

              {/* Logo */}
              <Link to={routes.Home}>
                <Logo size="md" />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map(item => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPageName === item.key
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                <LanguageToggle language={language} setLanguage={setLanguage} />

                <Link to={routes.GetStarted} className="hidden sm:block">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    {t('getStarted')}
                  </Button>
                </Link>

                {/* Mobile Menu */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <nav className="flex flex-col space-y-1">
                      {navItems.map(item => (
                        <Link
                          key={item.key}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <Logo size="md" />
              <p className="mt-4 text-sm text-gray-400">{t('footerDesc')}</p>
              <div className="flex gap-4 mt-4">
                <Facebook className="h-5 w-5 hover:text-emerald-400" />
                <Twitter className="h-5 w-5 hover:text-emerald-400" />
                <Instagram className="h-5 w-5 hover:text-emerald-400" />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> support@taxcaregroup.org</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> (555) 123-4567</li>
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-emerald-400" /> Nationwide Virtual Service</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()} Tax Care Group VITA. {t('allRightsReserved')}
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}

