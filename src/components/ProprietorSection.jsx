import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Phone, MapPin, CheckCircle, Shield } from 'lucide-react';
import { dealershipInfo } from '../data/dealershipData';

export default function ProprietorSection() {
  return (
    <section id="about" className="py-24 bg-tvs-blue-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tvs-blue/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tvs-red/15 rounded-full blur-[130px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-tvs-dark-card/95 via-[#081533] to-[#040C20] border border-blue-400/20 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          
          {/* Subtle Red Top Accent Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-tvs-red via-tvs-red-light to-tvs-blue" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Large Authentic Portrait from Client Poster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Aura behind portrait */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-tvs-red/40 via-blue-500/20 to-transparent rounded-2xl blur-lg" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                  <img
                    src="/assets/proprietor.webp"
                    alt={`${dealershipInfo.proprietor} - Proprietor, Honey TVS`}
                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-widest text-tvs-red font-bold font-racing">
                        Dealership Leadership
                      </p>
                      <h4 className="text-xl font-bold font-racing tracking-wide">
                        {dealershipInfo.proprietor}
                      </h4>
                      <p className="text-xs text-gray-300">
                        {dealershipInfo.proprietorTitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Verified Badge */}
                <div className="absolute -bottom-3 -right-3 bg-tvs-red text-white px-3.5 py-1.5 rounded-xl shadow-lg border border-red-400 text-xs font-bold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Bhiriya Bazar, Basti</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Message and Commitment */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-gray-300 uppercase tracking-widest self-start mb-4">
                <Quote className="w-3.5 h-3.5 text-tvs-red" />
                Leadership Message
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-racing tracking-tight mb-1">
                {dealershipInfo.proprietor}
              </h2>

              <p className="text-base text-tvs-red font-bold font-racing tracking-wider uppercase mb-6">
                {dealershipInfo.proprietorTitle}
              </p>

              {/* Main Quote Callout */}
              <div className="relative pl-6 border-l-4 border-tvs-red mb-6 py-1">
                <p className="text-xl sm:text-2xl font-bold text-white font-hindi leading-snug">
                  “{dealershipInfo.taglines.promise}”
                </p>
              </div>

              {/* Verified Trust Statement */}
              <p className="text-base sm:text-lg text-gray-300 font-hindi leading-relaxed mb-6">
                “भरोसेमंद सेवा और बेहतर ग्राहक अनुभव के साथ Honey TVS आपके साथ है।”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>ग्राहक-प्रथम व्यक्तिगत ध्यान</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>पारदर्शी लेन-देन एवं विश्वास</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>सर्विस में त्वरित सहायता</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>स्थानीय क्षेत्र में विश्वसनीय पहचान</span>
                </div>
              </div>

              {/* Direct Call to Proprietor's Dealership */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={dealershipInfo.phones[0].link}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-tvs-red to-tvs-red-dark text-white font-bold text-sm shadow-xl shadow-tvs-red/20 hover:scale-[1.02] active:scale-[0.98] transition-all border border-red-500/40"
                  id="proprietor-call-btn"
                >
                  <Phone className="w-4 h-4" />
                  <span>Speak With Us: {dealershipInfo.phones[0].display}</span>
                </a>

                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-tvs-red" />
                  <span>{dealershipInfo.location}</span>
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
