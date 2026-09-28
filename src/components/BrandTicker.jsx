import React from 'react';
import { BRANDS } from '../data/restaurantData';
import { ShieldCheck } from 'lucide-react';

export default function BrandTicker() {
  return (
    <section className="bg-white border-y border-slate-200 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 flex-shrink-0">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span>Authorized Commercial Brands</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10">
            {BRANDS.map((b, i) => (
              <div 
                key={i} 
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 flex items-center justify-center h-10 px-3 hover:scale-105"
                title={b.description}
              >
                <img 
                  src={b.logo} 
                  alt={b.name} 
                  className="max-h-9 w-auto max-w-[120px] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    if (b.altLogo) e.target.src = b.altLogo;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
