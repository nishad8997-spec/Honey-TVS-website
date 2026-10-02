import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { vehiclesData, dealershipInfo } from '../data/dealershipData';

export default function VehicleShowcase() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehiclesData[0]);

  return (
    <section id="vehicles" className="py-24 bg-tvs-dark-surface relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tvs-blue/15 rounded-full blur-[160px]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-tvs-red/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-tvs-red" />
              Official Lineup from Honey TVS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-racing tracking-tight uppercase">
              Find Your Next Ride
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-400 font-hindi">
              Explore the models available at Honey TVS.
            </p>
          </div>

          {/* Quick Stats / Category Indicators */}
          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <span className="text-xs text-gray-400 font-medium">Available in Bhiriya Bazar:</span>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-tvs-red/20 text-red-200 border border-tvs-red/30">
              4 Featured Models
            </span>
          </div>
        </div>

        {/* Model Selector Tabs (Mobile & Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {vehiclesData.map((vehicle) => {
            const isSelected = selectedVehicle.id === vehicle.id;
            return (
              <button
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isSelected
                    ? 'bg-tvs-dark-card border-tvs-red shadow-lg shadow-tvs-red/20 scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                id={`vehicle-tab-${vehicle.id}`}
              >
                {/* Active Red Accent Line */}
                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tvs-red via-red-400 to-tvs-red"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {vehicle.category}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-tvs-red animate-ping" />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white font-racing tracking-wide">
                    {vehicle.name}
                  </h3>
                </div>

                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-tvs-red font-hindi font-medium truncate">
                    {vehicle.hindiTagline}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-tvs-red translate-x-1' : 'text-gray-500'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Editorial Automotive Stage */}
        <div className="rounded-3xl bg-gradient-to-br from-tvs-dark-card via-tvs-dark to-[#050811] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVehicle.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Details Panel */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-tvs-blue/30 text-blue-300 border border-tvs-blue-accent/30 text-xs font-bold uppercase tracking-wider font-racing">
                    {selectedVehicle.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    TVS Genuine Model
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white font-racing tracking-tight uppercase mb-2">
                  TVS {selectedVehicle.name}
                </h3>

                {/* Poster Hindi Tagline */}
                <div className="inline-block bg-white/5 border-l-4 border-tvs-red px-4 py-2 rounded-r-lg mb-4">
                  <p className="text-lg sm:text-xl font-bold text-white font-hindi">
                    “{selectedVehicle.hindiTagline}”
                  </p>
                </div>

                <p className="text-sm sm:text-base text-gray-300 font-hindi leading-relaxed mb-6">
                  {selectedVehicle.description}
                </p>

                {/* Features Highlights from Dealership */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>उपलब्ध टेस्ट राइड एवं तुरंत डिलीवरी सुविधा</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>आसान फाइनेंस एवं एक्सचेंज सुविधा उपलब्ध</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-300">
                    <Shield className="w-4 h-4 text-tvs-blue-accent flex-shrink-0" />
                    <span>कंपनी अधिकृत वारंटी एवं असली स्पेयर पार्ट्स सपोर्ट</span>
                  </div>
                </div>

                {/* Call to Inquire Button */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={dealershipInfo.phones[0].link}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-tvs-red to-tvs-red-dark text-white font-bold text-sm shadow-xl shadow-tvs-red/30 hover:scale-[1.02] active:scale-[0.98] transition-all border border-red-500/40"
                    id={`inquire-btn-${selectedVehicle.id}`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Inquire About {selectedVehicle.name}</span>
                  </a>
                  
                  <span className="text-xs text-gray-400 font-hindi">
                    Honey TVS, भिरिया बाजार, बस्ती
                  </span>
                </div>

              </div>

              {/* Right Hero Vehicle Visual with Cinematic Animation */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                
                {/* Rotating Radial Ambient Light */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/20 via-red-600/10 to-yellow-500/10 blur-3xl animate-pulse-slow" />
                </div>

                {/* Animated Vehicle Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, x: 25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full flex flex-col items-center"
                >
                  <img
                    src={selectedVehicle.image}
                    alt={`TVS ${selectedVehicle.name} available at Honey TVS`}
                    className="max-h-[320px] sm:max-h-[420px] w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105"
                  />

                  {/* Dynamic Realistic Ground Shadow */}
                  <div className="w-3/4 h-5 bg-black/90 blur-lg rounded-[100%] mt-2" />

                  {/* Watermark / Authentic Poster Label */}
                  <div className="mt-4 px-3 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-sm text-[11px] text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tvs-red" />
                    <span>Honey TVS Official Showroom Display</span>
                  </div>
                </motion.div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
