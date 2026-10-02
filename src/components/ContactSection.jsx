import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Navigation, Clock, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { dealershipInfo } from '../data/dealershipData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-tvs-dark relative overflow-hidden">
      {/* Visual lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-tvs-red/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-tvs-blue/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tvs-red/10 border border-tvs-red/30 text-xs font-bold text-tvs-red uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Honey TVS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-hindi tracking-tight mb-3">
            अपनी अगली राइड के लिए Honey TVS से जुड़ें
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-hindi">
            नई बाइक/स्कूटर खरीद, टेस्ट राइड, एक्सचेंज, फाइनेंस अथवा सर्विस के लिए सीधे संपर्क करें।
          </p>
        </div>

        {/* Contact & Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Calling Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-tvs-dark-card via-tvs-dark-surface to-[#0A0E1A] border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tvs-red/20 text-tvs-red border border-tvs-red/30 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>

              <h3 className="text-2xl font-black text-white font-racing tracking-wide uppercase mb-2">
                Direct Showroom Calling Lines
              </h3>
              
              <p className="text-sm text-gray-300 font-hindi mb-8">
                तुरंत पूछताछ के लिए हमारे आधिकारिक नंबरों पर सीधे कॉल करें।
              </p>

              {/* Phone Action Buttons */}
              <div className="space-y-4">
                {dealershipInfo.phones.map((phone, idx) => (
                  <a
                    key={phone.display}
                    href={phone.link}
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-gradient-to-r hover:from-tvs-red hover:to-tvs-red-dark border border-white/10 hover:border-red-500/50 transition-all duration-300 shadow-lg"
                    id={`contact-call-btn-${idx + 1}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-tvs-red/20 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-white/80 font-semibold block">
                          Line {idx + 1}
                        </span>
                        <span className="text-xl sm:text-2xl font-black text-white font-racing tracking-wider">
                          {phone.display}
                        </span>
                      </div>
                    </div>

                    <span className="px-4 py-2 rounded-xl bg-white/10 group-hover:bg-white text-white group-hover:text-tvs-red text-xs sm:text-sm font-bold transition-colors">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Registered Contacts: Kinkar Singh (Proprietor)</span>
            </div>
          </motion.div>

          {/* Location & Directions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-tvs-dark-card via-tvs-dark-surface to-[#0A0E1A] border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white font-racing tracking-wide uppercase mb-2">
                Dealership Location
              </h3>

              <p className="text-sm text-gray-300 font-hindi mb-6">
                हमारे शोरूम पर पधारें और TVS के नए मॉडल्स का लाइव अनुभव लें।
              </p>

              {/* Location Badge Box */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-tvs-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white font-racing tracking-wide">
                      Honey TVS Showroom
                    </h4>
                    <p className="text-base text-gray-200 font-medium mt-1">
                      {dealershipInfo.location}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      भिरिया बाजार, बस्ती (उत्तर प्रदेश)
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={dealershipInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-tvs-blue via-tvs-blue-light to-tvs-blue text-white font-bold text-base shadow-xl shadow-tvs-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/30"
                id="get-directions-btn"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Basti District, Uttar Pradesh</span>
              <span className="text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Welcoming Visitors
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
