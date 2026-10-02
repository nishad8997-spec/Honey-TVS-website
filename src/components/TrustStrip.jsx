import React from 'react';
import { Award, Wallet, Users, ThumbsUp, ShieldCheck } from 'lucide-react';
import { trustHighlights } from '../data/dealershipData';

export default function TrustStrip() {
  const iconMap = {
    Award: Award,
    Wallet: Wallet,
    Users: Users,
    ThumbsUp: ThumbsUp,
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-tvs-blue-dark via-tvs-blue to-tvs-blue-dark rounded-2xl border border-blue-400/20 shadow-2xl p-4 sm:p-6 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {trustHighlights.map((item, index) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 sm:gap-4 ${
                  index !== 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-hindi tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-blue-200/80 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
