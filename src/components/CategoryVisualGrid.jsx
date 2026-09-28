import React, { useState } from 'react';
import { CATEGORIES } from '../data/restaurantData';
import { ArrowUpRight, Sparkles, Layers, ChevronRight } from 'lucide-react';

export default function CategoryVisualGrid({ onSelectCategory, selectedCategory }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Hot Line & Cooking', 'Cold Storage & Bar', 'Prep & Sanitation'];

  const filteredCategories = CATEGORIES.filter(cat => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Hot Line & Cooking') {
      return ['Cooking Equipment', 'Holding & Warming Equipment', 'Food Preparation'].includes(cat.name);
    }
    if (activeFilter === 'Cold Storage & Bar') {
      return ['Refrigeration Equipment', 'Bar Equipment', 'Beverage Equipment', 'Food Display & Merchandising'].includes(cat.name);
    }
    if (activeFilter === 'Prep & Sanitation') {
      return ['Warewashing, Tables & Sinks', 'Storage & Transport', 'Commercial Smallwares', 'Janitorial & Sanitation'].includes(cat.name);
    }
    return true;
  });

  return (
    <section id="categories-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Kitchen Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Equipment Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Engineered for busy restaurants, hotels, bakeries, and bars. Every piece of equipment is backed by comprehensive commercial warranties.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-200/80 p-1 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === tab 
                    ? 'bg-white text-slate-900 shadow-sm font-bold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Category Visual Grid with Rich Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
          {filteredCategories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.name);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                  isSelected 
                    ? 'border-cyan-600 ring-2 ring-cyan-500/20 shadow-md' 
                    : 'border-slate-200 hover:border-cyan-300'
                }`}
              >
                {/* Badge if available */}
                {cat.badge && (
                  <div className="absolute top-2.5 right-2.5 z-10 bg-slate-900/85 backdrop-blur-md text-amber-300 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    {cat.badge}
                  </div>
                )}

                {/* Category Image Box with Zoom */}
                <div className="relative pt-[85%] bg-gradient-to-b from-slate-50 to-white overflow-hidden p-3 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Category Info */}
                <div className="p-3.5 border-t border-slate-100 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-1">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {cat.count}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-cyan-700 opacity-90 group-hover:opacity-100">
                    <span>Shop Gear</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
