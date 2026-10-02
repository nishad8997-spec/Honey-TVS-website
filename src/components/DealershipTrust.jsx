import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp, Wrench, CheckCircle } from 'lucide-react';
import { dealershipInfo } from '../data/dealershipData';

export default function DealershipTrust() {
  const pillars = [
    {
      title: "बेहतरीन क्वालिटी",
      english: "Superior Quality Standards",
      desc: "हर TVS वाहन कंपनी के कड़े गुणवत्ता मानकों पर खरा उतरता है।",
      icon: Award
    },
    {
      title: "किफायती सर्विस",
      english: "Transparent & Fair Pricing",
      desc: "सर्विस और स्पेयर पार्ट्स में कोई छुपा हुआ खर्च नहीं, पूरी ईमानदारी।",
      icon: CheckCircle
    },
    {
      title: "अनुभवी स्टाफ",
      english: "Certified TVS Mechanics",
      desc: "TVS कंपनी प्रशिक्षित स्टाफ द्वारा सटीक निदान और समय पर डिलीवरी।",
      icon: Wrench
    },
    {
      title: "100% ग्राहक संतुष्टि",
      english: "Customer Happiness First",
      desc: "बिक्री के बाद भी निरंतर सहयोग और परिवार जैसा आत्मीय व्यवहार।",
      icon: ThumbsUp
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-tvs-dark via-tvs-blue-dark/50 to-tvs-dark relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-tvs-red/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-tvs-blue/20 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Dealer Badge & Shield from Poster */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-tvs-red via-blue-600 to-yellow-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />
              
              <div className="relative rounded-2xl bg-tvs-dark-card border border-white/20 p-8 shadow-2xl flex flex-col items-center text-center backdrop-blur-md">
                <img
                  src="/assets/tvs-dealer-badge.webp"
                  alt="TVS अधिकृत डीलर - आपका भरोसा हमारी पहचान"
                  className="max-h-72 w-auto object-contain filter drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />

                <div className="mt-6 pt-4 border-t border-white/10 w-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-tvs-blue/40 border border-tvs-blue-accent/40 text-blue-200 text-xs font-bold font-racing uppercase tracking-wider">
                    Official TVS Dealership Badge
                  </span>
                  <p className="mt-2 text-xs text-gray-400 font-hindi">
                    भिरिया बाजार, बस्ती (उत्तर प्रदेश)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Honey TVS & Trust Pillars */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tvs-blue/20 border border-tvs-blue-accent/30 text-xs font-bold text-blue-300 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Why Honey TVS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-hindi tracking-tight mb-4">
              “{dealershipInfo.taglines.dealerIdentity}”
            </h2>

            <p className="text-base text-gray-300 font-hindi leading-relaxed mb-8 max-w-2xl">
              Honey TVS में हम केवल दोपहिया वाहन नहीं बेचते, बल्कि आपके हर सफर को सुरक्षित, सुगम और भरोसेमंद बनाते हैं।
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-tvs-red/20 text-tvs-red border border-tvs-red/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white font-hindi">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-300 font-hindi leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Statement from Poster */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-tvs-red/20 to-tvs-blue/20 border border-white/10">
              <p className="text-sm font-hindi text-gray-200 text-center sm:text-left italic">
                “{dealershipInfo.taglines.mission}”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
