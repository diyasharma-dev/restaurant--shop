import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Flame, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Award,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/restaurantData';

export default function Hero({ onOpenQuoteModal, onSelectCategory }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      badge: "Commercial Grade Cookline Suites",
      title: "Commercial Ranges, Convection Ovens & Fryers",
      subtitle: "Equip your line with battle-tested commercial foodservice gear. Direct-from-manufacturer pricing with savings up to 55% OFF list price.",
      tag: "Heavy-Duty 304 Stainless",
      bgImage: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/hero-slider.jpg",
      highlightItem: {
        name: "PCG140B/TI-PRO Double Convection Oven",
        price: "$18,034.00",
        regularPrice: "$40,076.00",
        save: "$22,042 Saved",
        rating: "5.0 ★ (24 Reviews)"
      },
      ctaCategory: "Cooking Equipment",
      accent: "from-cyan-900/90 via-slate-900/80 to-slate-950/90"
    },
    {
      id: 1,
      badge: "Draft & Refrigeration Headquarters",
      title: "Precision Temperature Back Bar & Merchandisers",
      subtitle: "Keep your draft lines ice cold and food safely stored with Beverage-Air, Serv-ware & Maxx Cold refrigeration systems with eco-friendly R290 refrigerant.",
      tag: "NSF-7 Food Safety Certified",
      bgImage: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Bar-Equipment.jpg",
      highlightItem: {
        name: "BBN68HC-B 68\" Back Bar Cooler",
        price: "$4,254.40",
        regularPrice: "$12,951.00",
        save: "$8,696 Saved",
        rating: "4.9 ★ (31 Reviews)"
      },
      ctaCategory: "Refrigeration Equipment",
      accent: "from-blue-950/90 via-slate-900/80 to-slate-950/90"
    },
    {
      id: 2,
      badge: "Kitchen Space Optimization",
      title: "Introducing Pan Stackers & Modular Prep Systems",
      subtitle: "Eliminate kitchen clutter and save 250% more vertical space. Patented pan stacking gear engineered by foodservice veterans for peak rush efficiency.",
      tag: "Exclusive Innovation",
      bgImage: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Introducing-Pan-Stackers.jpg",
      highlightItem: {
        name: "Dunne Rite Pan Stacker Pro Series",
        price: "Commercial Pack",
        regularPrice: "Save 35%",
        save: "Triple Your Storage",
        rating: "5.0 ★ Tested"
      },
      ctaCategory: "Storage & Transport",
      accent: "from-emerald-950/90 via-slate-900/80 to-slate-950/90"
    }
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Image with Dynamic Fade and Overlay */}
      {slides.map((s, idx) => (
        <div 
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
          style={{
            backgroundImage: `url(${s.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transitionProperty: 'opacity, transform',
            transitionDuration: '1000ms'
          }}
        >
          {/* Multi-layer gradient overlays for high text legibility and rich contrast */}
          <div className={`absolute inset-0 bg-gradient-to-r ${s.accent}`}></div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text / Value Proposition */}
          <div className="lg:col-span-7 space-y-6 animate-in fade-in duration-500">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wide uppercase shadow-inner backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{current.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-amber-300 font-semibold">{current.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              {current.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {current.subtitle}
            </p>

            {/* Quick Benefits Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/60 p-2.5 rounded-lg">
                <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Nationwide Freight</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/60 p-2.5 rounded-lg">
                <DollarSign className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Direct Dealer Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/60 p-2.5 rounded-lg col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Full Factory Warranty</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  onSelectCategory(current.ctaCategory);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Shop {current.ctaCategory}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-500 font-bold text-sm backdrop-blur-md transition-all"
              >
                <span>Request Custom Quote</span>
              </button>
            </div>
          </div>

          {/* Right Spotlight Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing background halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      Featured Deal
                    </span>
                    <span className="text-xs text-slate-400">Verified Stock</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                    {current.highlightItem.rating}
                  </span>
                </div>

                <div className="my-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {current.highlightItem.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                      {current.highlightItem.price}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      {current.highlightItem.regularPrice}
                    </span>
                    <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">
                      {current.highlightItem.save}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 py-3 border-t border-slate-800/80 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Commercial Freight Inspection Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct Factory Backed 2-5 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Lease-to-Own & Net 30 Financing Available</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const el = document.getElementById('products-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl transition-all shadow-md text-center"
                  >
                    View Product Specifications
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Slide navigation controls */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-800/60">
          <div className="flex items-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
