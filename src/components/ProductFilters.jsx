import React, { useState } from 'react';
import { 
  Filter, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Flame, 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Truck,
  Sparkles,
  Tag
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/restaurantData';

export default function ProductFilters({
  filters,
  onFilterChange,
  onResetFilters,
  totalMatching,
  totalAvailable
}) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    brand: true,
    power: true,
    cert: true,
    specials: true
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Distinct brands with counts
  const brandList = Array.from(new Set(PRODUCTS.map(p => p.brand))).map(b => ({
    name: b,
    count: PRODUCTS.filter(p => p.brand === b).length
  }));

  // Distinct power types
  const powerTypes = [
    { label: "Natural Gas", value: "Natural Gas" },
    { label: "Liquid Propane (LP)", value: "Liquid Propane (LP)" },
    { label: "Electric (115V)", value: "Electric (115V)" },
    { label: "Electric (208-240V)", value: "Electric (208-240V)" },
    { label: "Manual (Non-Electric)", value: "Manual (Non-Electric)" }
  ];

  // Distinct Certifications
  const certOptions = ["NSF", "CSA Star", "UL", "Energy Star"];

  // Handle multi-select toggle
  const handleCheckboxToggle = (filterKey, value) => {
    const current = filters[filterKey] || [];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    onFilterChange(filterKey, updated);
  };

  const hasActiveFilters = 
    (filters.category && filters.category !== 'All') ||
    (filters.brands && filters.brands.length > 0) ||
    (filters.powerTypes && filters.powerTypes.length > 0) ||
    (filters.certifications && filters.certifications.length > 0) ||
    filters.inStockOnly ||
    filters.freeFreightOnly ||
    filters.hotDealsOnly ||
    filters.maxPrice < 30000;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 space-y-6">
      
      {/* Filters Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">Equipment Filters</h3>
            <span className="text-[11px] text-slate-500 font-medium">
              {totalMatching} of {totalAvailable} models
            </span>
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-700"
        >
          <span>Equipment Category</span>
          {openSections.category ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {openSections.category && (
          <div className="space-y-1.5 pt-1 max-h-48 overflow-y-auto pr-1">
            <label className="flex items-center justify-between text-xs text-slate-700 hover:text-cyan-700 cursor-pointer p-1 rounded hover:bg-slate-50">
              <span className="flex items-center gap-2">
                <input
                  type="radio"
                  name="filterCategory"
                  checked={!filters.category || filters.category === 'All'}
                  onChange={() => onFilterChange('category', 'All')}
                  className="text-cyan-600 focus:ring-cyan-500"
                />
                <span className={(!filters.category || filters.category === 'All') ? 'font-bold text-cyan-800' : ''}>All Categories</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">{PRODUCTS.length}</span>
            </label>

            {CATEGORIES.slice(0, 8).map((cat) => {
              const count = PRODUCTS.filter(p => p.category === cat.name).length;
              return (
                <label 
                  key={cat.id} 
                  className="flex items-center justify-between text-xs text-slate-700 hover:text-cyan-700 cursor-pointer p-1 rounded hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2 truncate">
                    <input
                      type="radio"
                      name="filterCategory"
                      checked={filters.category === cat.name}
                      onChange={() => onFilterChange('category', cat.name)}
                      className="text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className={`truncate ${filters.category === cat.name ? 'font-bold text-cyan-800' : ''}`}>{cat.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{count > 0 ? count : '10+'}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. Price Range Filter */}
      <div className="pt-4 border-t border-slate-200/80 space-y-3">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-700"
        >
          <span>Maximum Price Range</span>
          {openSections.price ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {openSections.price && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-500">$500</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Up to ${filters.maxPrice.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="1000"
              max="30000"
              step="500"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-700"
            />

            {/* Quick bracket pills */}
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
              <button
                type="button"
                onClick={() => onFilterChange('maxPrice', 4000)}
                className={`py-1 px-2 rounded-lg border text-center transition-colors ${
                  filters.maxPrice === 4000 ? 'bg-cyan-700 text-white font-bold border-cyan-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Under $4,000
              </button>
              <button
                type="button"
                onClick={() => onFilterChange('maxPrice', 10000)}
                className={`py-1 px-2 rounded-lg border text-center transition-colors ${
                  filters.maxPrice === 10000 ? 'bg-cyan-700 text-white font-bold border-cyan-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Under $10,000
              </button>
              <button
                type="button"
                onClick={() => onFilterChange('maxPrice', 18500)}
                className={`py-1 px-2 rounded-lg border text-center transition-colors ${
                  filters.maxPrice === 18500 ? 'bg-cyan-700 text-white font-bold border-cyan-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Under $18,500
              </button>
              <button
                type="button"
                onClick={() => onFilterChange('maxPrice', 30000)}
                className={`py-1 px-2 rounded-lg border text-center transition-colors ${
                  filters.maxPrice === 30000 ? 'bg-cyan-700 text-white font-bold border-cyan-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Price Ranges
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. Brand / Manufacturer Filter */}
      <div className="pt-4 border-t border-slate-200/80 space-y-3">
        <button
          onClick={() => toggleSection('brand')}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-700"
        >
          <span>Commercial Brands</span>
          {openSections.brand ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {openSections.brand && (
          <div className="space-y-1.5 pt-1">
            {brandList.map((brand) => {
              const isChecked = (filters.brands || []).includes(brand.name);
              return (
                <label 
                  key={brand.name} 
                  className="flex items-center justify-between text-xs text-slate-700 hover:text-cyan-700 cursor-pointer p-1 rounded hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxToggle('brands', brand.name)}
                      className="rounded text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className={isChecked ? 'font-bold text-slate-900' : ''}>{brand.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{brand.count}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. Power & Fuel Type Filter */}
      <div className="pt-4 border-t border-slate-200/80 space-y-3">
        <button
          onClick={() => toggleSection('power')}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-700"
        >
          <span>Fuel & Power Source</span>
          {openSections.power ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {openSections.power && (
          <div className="space-y-1.5 pt-1">
            {powerTypes.map((pt) => {
              const isChecked = (filters.powerTypes || []).includes(pt.value);
              const count = PRODUCTS.filter(p => p.powerType === pt.value).length;
              return (
                <label 
                  key={pt.value} 
                  className="flex items-center justify-between text-xs text-slate-700 hover:text-cyan-700 cursor-pointer p-1 rounded hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxToggle('powerTypes', pt.value)}
                      className="rounded text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className={isChecked ? 'font-bold text-slate-900' : ''}>{pt.label}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{count}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. Commercial Certifications */}
      <div className="pt-4 border-t border-slate-200/80 space-y-3">
        <button
          onClick={() => toggleSection('cert')}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-700"
        >
          <span>Certifications</span>
          {openSections.cert ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {openSections.cert && (
          <div className="space-y-1.5 pt-1">
            {certOptions.map((cert) => {
              const isChecked = (filters.certifications || []).includes(cert);
              const count = PRODUCTS.filter(p => p.certifications && p.certifications.includes(cert)).length;
              return (
                <label 
                  key={cert} 
                  className="flex items-center justify-between text-xs text-slate-700 hover:text-cyan-700 cursor-pointer p-1 rounded hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxToggle('certifications', cert)}
                      className="rounded text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className={isChecked ? 'font-bold text-slate-900' : ''}>{cert} Certified</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{count}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 6. Availability & Special Deals */}
      <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
        <button
          onClick={() => toggleSection('specials')}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-700"
        >
          <span>Availability & Deals</span>
          {openSections.specials ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {openSections.specials && (
          <div className="space-y-2 pt-1 text-xs">
            <label className="flex items-center gap-2 text-slate-700 hover:text-cyan-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => onFilterChange('inStockOnly', e.target.checked)}
                className="rounded text-cyan-600 focus:ring-cyan-500"
              />
              <span className={filters.inStockOnly ? 'font-bold text-emerald-800' : ''}>In Stock - Ships 24 Hours</span>
            </label>

            <label className="flex items-center gap-2 text-slate-700 hover:text-cyan-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.freeFreightOnly}
                onChange={(e) => onFilterChange('freeFreightOnly', e.target.checked)}
                className="rounded text-cyan-600 focus:ring-cyan-500"
              />
              <span className={filters.freeFreightOnly ? 'font-bold text-cyan-800' : ''}>Free Freight Eligible</span>
            </label>

            <label className="flex items-center gap-2 text-slate-700 hover:text-cyan-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.hotDealsOnly}
                onChange={(e) => onFilterChange('hotDealsOnly', e.target.checked)}
                className="rounded text-rose-600 focus:ring-rose-500"
              />
              <span className={`flex items-center gap-1 ${filters.hotDealsOnly ? 'font-bold text-rose-700' : ''}`}>
                <Flame className="w-3 h-3 text-rose-500 fill-rose-500" />
                <span>Hot Sellers (55%+ OFF)</span>
              </span>
            </label>
          </div>
        )}
      </div>

    </div>
  );
}
