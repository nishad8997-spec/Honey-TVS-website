import React from 'react';
import { MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';
import { dealershipInfo } from '../data/dealershipData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] text-gray-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle brand top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tvs-blue via-tvs-red to-tvs-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
                <img
                  src="/assets/tvs-horse-logo.webp"
                  alt="TVS"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white uppercase font-racing tracking-wide">
                Honey <span className="text-tvs-red">TVS</span>
              </span>
            </div>

            {/* Poster Motto */}
            <p className="text-base text-gray-200 font-hindi font-semibold mb-3">
              “{dealershipInfo.taglines.primary}”
            </p>

            <p className="text-xs text-gray-400 font-hindi leading-relaxed max-w-sm mb-4">
              {dealershipInfo.taglines.mission}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-tvs-red" />
              <span>TVS Authorized Dealer • Basti</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-racing mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-tvs-red/60" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-racing mb-4">
              Showroom Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tvs-red flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{dealershipInfo.shortLocation}</p>
                  <p className="text-xs text-gray-400">Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-tvs-red flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  {dealershipInfo.phones.map((phone) => (
                    <a
                      key={phone.display}
                      href={phone.link}
                      className="text-white hover:text-tvs-red font-mono font-medium transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-500">
                <p>Proprietor: <span className="text-gray-300 font-semibold">{dealershipInfo.proprietor}</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Honey TVS. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>TVS Authorized Two-Wheeler Sales & Service</span>
            <span>•</span>
            <span className="text-gray-400">Bhiriya Bazar, Basti</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
