import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { dealershipInfo } from '../data/dealershipData';

export default function Hero() {
  const scrollToVehicles = (e) => {
    e.preventDefault();
    const el = document.querySelector('#vehicles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden bg-tvs-dark"
    >
      {/* Background Cinematic Gradients and Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* TVS Racing Blue Radial Aura */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-tvs-blue/30 rounded-full blur-[120px]" />
        
        {/* TVS Red Heat Glow */}
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-tvs-red/15 rounded-full blur-[150px]" />
        
        {/* Automotive Grid / Track Line effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Subtle Diagonal Speedline */}
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent rotate-12 transform origin-top" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Trust and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge & Authorized Status */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 self-start"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-tvs-red/15 text-tvs-red-light border border-tvs-red/30 text-xs font-bold tracking-wider uppercase font-racing">
                <Sparkles className="w-3.5 h-3.5 text-tvs-red" />
                HONEY TVS
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-tvs-blue/20 text-blue-200 border border-tvs-blue-accent/30 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                TVS Authorized Dealer
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-hindi tracking-tight leading-[1.2] mb-3">
                “{dealershipInfo.taglines.primary}”
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-gray-300 font-hindi mb-4">
                {dealershipInfo.taglines.secondary}
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 font-hindi leading-relaxed max-w-xl mb-6"
            >
              {dealershipInfo.taglines.supporting}
            </motion.p>

            {/* Location Pill */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 text-sm text-gray-400 font-medium mb-8"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-tvs-red/20 text-tvs-red border border-tvs-red/30">
                <MapPin className="w-4 h-4" />
              </span>
              <span>{dealershipInfo.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="#vehicles"
                onClick={scrollToVehicles}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-tvs-red to-tvs-red-dark text-white font-bold text-base shadow-xl shadow-tvs-red/30 hover:shadow-tvs-red/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-red-500/50"
                id="hero-explore-btn"
              >
                <span>Explore Vehicles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={dealershipInfo.phones[0].link}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-tvs-dark-surface/90 hover:bg-tvs-dark-card text-white font-semibold text-base border border-white/15 hover:border-white/30 transition-all hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-tvs-red" />
                <span>Call: {dealershipInfo.phones[0].display}</span>
              </a>
            </motion.div>

            {/* Mini Trust Strip in Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-400"
            >
              <span className="font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-tvs-red" />
                Authorized TVS Dealership
              </span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="text-gray-300">
                Sales • Service • Spare Parts • Accessories
              </span>
            </motion.div>

          </div>

          {/* Right Column: Cinematic Vehicle & Proprietor Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg"
            >
              {/* Radial Highlight behind bike */}
              <div className="absolute inset-0 bg-radial-radial from-blue-600/20 via-red-600/10 to-transparent blur-2xl transform scale-110" />

              {/* Layered Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/10 via-tvs-dark-card/90 to-tvs-dark-surface p-4 sm:p-6 border border-white/15 shadow-2xl backdrop-blur-md overflow-hidden group">
                
                {/* Top Label & Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/tvs-horse-logo.webp"
                      alt="TVS"
                      className="h-5 w-auto object-contain"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300 font-racing">
                      Official Dealership Showcase
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    In Stock
                  </span>
                </div>

                {/* Hero Featured Bike: Apache RTR from the official poster */}
                <div className="relative flex items-center justify-center py-4">
                  <motion.img
                    src="/assets/apache-rtr.webp"
                    alt="TVS Apache RTR Featured at Honey TVS"
                    className="w-full max-h-72 object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500 ease-out"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  />
                  {/* Under-bike Realistic Shadow */}
                  <div className="absolute bottom-2 left-10 right-10 h-4 bg-black/80 blur-md rounded-[100%]" />
                </div>

                {/* Bike Badge & Caption */}
                <div className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-black text-white font-racing tracking-wide">
                      TVS Apache RTR
                    </h3>
                    <p className="text-xs text-tvs-red font-hindi font-medium">
                      “रफ्तार भी, भरोसा भी”
                    </p>
                  </div>
                  <a
                    href="#vehicles"
                    onClick={scrollToVehicles}
                    className="text-xs text-gray-300 hover:text-white flex items-center gap-1 font-semibold group/link"
                  >
                    <span>View All 4 Models</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Proprietor Trust Stamp Floating Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3 bg-black/40 rounded-xl p-2.5 border border-white/5"
                >
                  <img
                    src="/assets/proprietor.webp"
                    alt="Kinkar Singh - Proprietor Honey TVS"
                    className="w-12 h-12 rounded-lg object-cover border border-white/20 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white truncate">
                        {dealershipInfo.proprietor}
                      </span>
                      <span className="text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded">
                        Proprietor
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-300 font-hindi truncate">
                      “{dealershipInfo.taglines.promise}”
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
