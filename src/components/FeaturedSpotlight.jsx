import React from 'react';
import { ShieldCheck, Truck, Sparkles, ArrowRight, Award, Check } from 'lucide-react';

export default function FeaturedSpotlight({ onSelectCategory, onOpenQuoteModal }) {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Spotlight 1: Serv-ware Products Showcase */}
        <div id="servware-section" className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-2xl border border-slate-700 p-8 sm:p-12">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Premier Authorized Distributor</span>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src="https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/05/serrv-ware-logo.webp" 
                  alt="Serv-ware Logo" 
                  className="h-10 sm:h-12 w-auto bg-white p-2 rounded-xl object-contain shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/SW.400.200_240x240-1.png";
                  }}
                />
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  We Carry Serv-ware Products
                </h2>
              </div>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Serv-ware delivers high-quality, value-priced foodservice equipment backed by fast, no-hassle warranty support. Built with heavy-gauge 304/430 stainless steel to endure punishing commercial kitchen shifts.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3-Year Parts & Labor Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>5-Year Compressor Coverage</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Eco-Friendly R290 Hydrocarbons</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>NSF & ETL Sanitation Certified</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    onSelectCategory('Refrigeration Equipment');
                    const el = document.getElementById('products-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Explore Serv-ware Collection
                </button>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-colors"
                >
                  Download Serv-ware Spec Catalog
                </button>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src="https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/05/serve-ware-products.webp"
                  alt="Serv-ware Commercial Kitchen Equipment"
                  className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-500"
                />
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Refrigerated Prep & Storage Line</span>
                    <span className="text-[11px] text-slate-400">High efficiency compressors and heavy-duty casters</span>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotlight 2: Dual Split Banners (Bar Equipment & Pan Stackers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Bar Equipment */}
          <div id="bar-equipment-section" className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800 flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Bar-Equipment.jpg"
                alt="Commercial Bar Equipment"
                className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-cyan-700 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Beverage & Draft Gear
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-slate-950/90">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Commercial Bar Equipment & Draft Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Upgrade your bar with durable, commercial-grade equipment built for peak volume efficiency. Back bar coolers, draft beer towers, glass chillers, and underbar sinks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Over 360+ Bar Models Available</span>
                <button
                  onClick={() => {
                    onSelectCategory('Refrigeration Equipment');
                    const el = document.getElementById('products-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Shop Bar Gear</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Introducing Pan Stackers */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800 flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Introducing-Pan-Stackers.jpg"
                alt="Introducing Pan Stackers"
                className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Patented Innovation
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-slate-950/90">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Introducing Pan Stackers
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Maximize vertical prep space and stop damaging expensive hotel pans. Designed specifically to stack sheet pans securely and speed up high-volume assembly lines.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Heavy-Duty Stainless Grade</span>
                <button
                  onClick={() => {
                    onSelectCategory('Storage & Transport');
                    const el = document.getElementById('products-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                >
                  <span>Explore Pan Stackers</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
