import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ChevronRight } from 'lucide-react';
import { dealershipInfo } from '../data/dealershipData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-tvs-dark/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              id="brand-logo-link"
            >
              <div className="relative flex items-center bg-white/10 rounded-lg p-1.5 border border-white/10 backdrop-blur-sm group-hover:border-tvs-red/50 transition-colors">
                <img
                  src="/assets/tvs-horse-logo.webp"
                  alt="TVS Official Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-racing">
                    Honey <span className="text-tvs-red">TVS</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-tvs-blue/80 text-blue-200 border border-tvs-blue-accent/30">
                    Authorized Dealer
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-tvs-red" />
                  Bhiriya Bazar, Basti
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-tvs-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </a>
              ))}
            </nav>

            {/* Right Action: Call CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={dealershipInfo.phones[0].link}
                className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-tvs-red to-tvs-red-dark text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-tvs-red/20 hover:shadow-tvs-red/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-red-500/40"
                id="header-call-btn"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>Call Now: {dealershipInfo.phones[0].display}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={dealershipInfo.phones[0].link}
                className="p-2 bg-tvs-red text-white rounded-lg shadow-md"
                aria-label="Call Dealership"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-tvs-dark-surface/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold px-1">
                Direct Contact Lines:
              </p>
              {dealershipInfo.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={phone.link}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-tvs-red/20 text-white border border-tvs-red/40 rounded-lg font-medium text-sm hover:bg-tvs-red transition-colors"
                >
                  <Phone className="w-4 h-4 text-tvs-red" />
                  <span>Call {phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
