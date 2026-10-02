import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Wrench, Cog, ShieldCheck, RefreshCw, IndianRupee, Sparkles, ArrowUpRight } from 'lucide-react';
import { servicesData, dealershipInfo } from '../data/dealershipData';

export default function ServicesSection() {
  const iconMap = {
    Bike: Bike,
    Wrench: Wrench,
    Cog: Cog,
    ShieldCheck: ShieldCheck,
    RefreshCw: RefreshCw,
    IndianRupee: IndianRupee,
  };

  return (
    <section id="services" className="py-24 bg-tvs-dark relative overflow-hidden">
      {/* Subtle Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-tvs-blue/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tvs-red/10 border border-tvs-red/30 text-xs font-bold text-tvs-red uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Automotive Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-racing tracking-tight uppercase">
            Everything You Need, Under One Roof
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 font-hindi">
            Honey TVS भिरिया बाजार में सेल्स से लेकर फाइनेंस और सर्विस तक की सम्पूर्ण सुविधाएं।
          </p>
        </div>

        {/* 6 Services Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Bike;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl bg-tvs-dark-card/80 hover:bg-tvs-dark-surface p-7 border border-white/10 hover:border-tvs-red/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Red Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tvs-red to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Icon & Index Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-tvs-red group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7 transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-2xl font-black text-white/20 font-racing group-hover:text-tvs-red/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Hindi Title */}
                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-white font-racing tracking-wide uppercase">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-tvs-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <span className="text-xs font-semibold text-tvs-red font-hindi">
                      {service.hindiTitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 font-hindi leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Footer status link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span>Honey TVS Facility</span>
                  <a
                    href={dealershipInfo.phones[0].link}
                    className="text-gray-300 hover:text-white font-medium flex items-center gap-1 group-hover:text-tvs-red transition-colors"
                  >
                    <span>Enquire</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
