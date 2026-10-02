import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import VehicleShowcase from './components/VehicleShowcase';
import ServicesSection from './components/ServicesSection';
import DealershipTrust from './components/DealershipTrust';
import ProprietorSection from './components/ProprietorSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { dealershipInfo } from './data/dealershipData';

export default function App() {
  return (
    <div className="min-h-screen bg-tvs-dark text-white selection:bg-tvs-red selection:text-white relative">
      {/* Top Fixed Navigation */}
      <Navbar />

      <main>
        {/* 1. Cinematic Automotive Hero */}
        <Hero />

        {/* 2. Trust Highlights Strip from Poster */}
        <TrustStrip />

        {/* 3. Interactive Vehicle Showcase (Apache RTR, Jupiter, Radeon, NTORQ) */}
        <VehicleShowcase />

        {/* 4. Complete Services Section (Sales, Service, Spare Parts, Accessories, Exchange, Finance) */}
        <ServicesSection />

        {/* 5. Dealership Trust & Official Shield Badge */}
        <DealershipTrust />

        {/* 6. Proprietor Section (Kinkar Singh Portrait & Authentic Quote) */}
        <ProprietorSection />

        {/* 7. Contact Section & Direct Dialing */}
        <ContactSection />
      </main>

      {/* 8. Official Footer */}
      <Footer />

      {/* Floating Call Button for Mobile Visitors */}
      <div className="sm:hidden fixed bottom-5 right-5 z-40">
        <a
          href={dealershipInfo.phones[0].link}
          className="flex items-center gap-2 bg-gradient-to-r from-tvs-red to-tvs-red-dark text-white px-4 py-3 rounded-full shadow-2xl shadow-tvs-red/60 border border-red-400 font-bold text-sm tracking-wide active:scale-95 transition-all"
          aria-label="Call Honey TVS"
          id="mobile-floating-call"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call Showroom</span>
        </a>
      </div>
    </div>
  );
}
