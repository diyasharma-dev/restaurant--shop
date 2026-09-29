import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  BadgePercent,
  Sparkles,
  ArrowRight,
  User,
  Flame,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES, PRODUCTS } from '../data/restaurantData';

export default function Header({ 
  cartItems, 
  onOpenCart, 
  onSelectCategory, 
  selectedCategory, 
  onOpenQuoteModal,
  onSelectProduct
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  // Filter products for search dropdown
  const searchResults = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
      {/* Top Bar Announcement */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Manufacturer Wholesale Pricing</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-emerald-400" /> Free Freight on Qualified Commercial Orders
            </span>
            <span className="hidden lg:inline-block text-slate-500">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Full Factory Warranties
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a 
              href={`tel:${COMPANY_INFO.directPhone}`} 
              className="flex items-center gap-1.5 text-white hover:text-cyan-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Specialist: {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-rose-300 font-bold">
              <Flame className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Weekly Clearance: Save up to 67%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = COMPANY_INFO.logoCircle;
                }}
              />
              <div className="hidden xl:block border-l border-slate-200 pl-3">
                <span className="block text-[11px] font-bold tracking-wider uppercase text-cyan-700">Commercial Grade</span>
                <span className="block text-xs font-semibold text-slate-500">Kitchen Equipment</span>
              </div>
            </a>
          </div>

          {/* Search Bar with live autocomplete */}
          <div className="flex-1 max-w-2xl relative hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search commercial ranges, refrigeration, fryers, model numbers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                className="w-full pl-11 pr-24 py-2.5 bg-slate-50 hover:bg-white focus:bg-white text-sm text-slate-800 rounded-xl border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button 
                type="button" 
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                Search
              </button>
            </div>

            {/* Live Autocomplete Results Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-xs text-slate-500 font-semibold px-3">
                  <span>Found {searchResults.length} matching products</span>
                  <span className="text-cyan-700">Click to view details</span>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {searchResults.map((product) => (
                    <div 
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        setSearchQuery('');
                      }}
                      className="p-3 hover:bg-cyan-50/60 cursor-pointer flex items-center gap-3 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                            {product.brand}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">
                            Model: {product.model}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 truncate mt-0.5">{product.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-sm font-bold text-emerald-700">${product.price.toLocaleString()}</span>
                          <span className="text-xs text-slate-400 line-through">${product.originalPrice.toLocaleString()}</span>
                          <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-1 rounded">Save {product.discountPercentage}%</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone / Contact Badge */}
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[11px] font-medium text-slate-500">Need Equipment Help?</span>
              <a 
                href={`tel:${COMPANY_INFO.directPhone}`} 
                className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors flex items-center gap-1 justify-end"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Hot Deals & Clearance Button */}
            <button
              onClick={() => {
                onSelectCategory('Hot Sellers');
                const el = document.getElementById('products-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-rose-200 transition-all shadow-xs"
            >
              <Flame className="w-4 h-4 text-rose-600 fill-rose-600" />
              <span>Deals & Clearance</span>
            </button>

            {/* Cart / Quote Basket Drawer Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-cyan-900/10 transition-all transform active:scale-98"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Quote Cart</span>
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Categories Bar & Mega Menu */}
      <nav className="bg-slate-800 text-white border-t border-slate-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 text-xs font-semibold tracking-wide">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {/* All Categories Dropdown Button */}
              <div 
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button 
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2.5 rounded-md transition-colors font-bold"
                >
                  <Menu className="w-4 h-4" />
                  <span>ALL CATEGORIES</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                </button>

                {/* Mega Menu Dropdown */}
                {megaMenuOpen && (
                  <div className="absolute left-0 top-full mt-0 w-[780px] bg-white text-slate-900 rounded-b-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-3 gap-6 z-50 animate-in fade-in duration-150">
                    {CATEGORIES.slice(0, 9).map((cat) => (
                      <div 
                        key={cat.id} 
                        onClick={() => {
                          onSelectCategory(cat.name);
                          setMegaMenuOpen(false);
                          const el = document.getElementById('products-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group/item cursor-pointer p-2.5 rounded-xl hover:bg-cyan-50/70 transition-colors border border-transparent hover:border-cyan-100 flex items-start gap-3"
                      >
                        <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden group-hover/item:border-cyan-400">
                          <img src={cat.image} alt={cat.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-cyan-700 transition-colors">
                            {cat.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">{cat.count}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {cat.subcategories.slice(0, 2).map((sub, i) => (
                              <span key={i} className="text-[10px] text-slate-400">
                                {sub}{i === 0 ? ' •' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Fast links */}
              <button 
                onClick={() => {
                  onSelectCategory('Cooking Equipment');
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-2 rounded hover:text-cyan-300 transition-colors ${selectedCategory === 'Cooking Equipment' ? 'text-cyan-400 font-bold' : 'text-slate-200'}`}
              >
                Cooking Equipment
              </button>
              
              <button 
                onClick={() => {
                  onSelectCategory('Refrigeration Equipment');
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-2 rounded hover:text-cyan-300 transition-colors ${selectedCategory === 'Refrigeration Equipment' ? 'text-cyan-400 font-bold' : 'text-slate-200'}`}
              >
                Refrigeration
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById('bar-equipment-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded hover:text-cyan-300 transition-colors text-slate-200"
              >
                Bar Equipment
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById('servware-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded hover:text-amber-300 text-amber-300 transition-colors flex items-center gap-1.5"
              >
                <span>Serv-ware Spotlight</span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-bold">Featured</span>
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById('kitchen-visualizer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded hover:text-cyan-300 text-cyan-300 transition-colors flex items-center gap-1.5 font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Interactive Kitchen Tour</span>
              </button>

              <button 
                onClick={() => {
                  const el = document.getElementById('gallery-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded hover:text-cyan-300 transition-colors text-slate-200"
              >
                Installations Showcase
              </button>
            </div>

            {/* Hot sellers fast badge */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  onSelectCategory('All Equipment');
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-1 text-rose-400 hover:text-rose-300 font-bold transition-colors"
              >
                <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>HOT SELLERS</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white border-t border-slate-800 p-4 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-800 text-sm text-white rounded-lg border border-slate-700 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-800 text-sm">
            <div className="font-bold text-xs uppercase tracking-wider text-slate-400 pb-1">Shop Categories</div>
            {CATEGORIES.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.name);
                  setMobileMenuOpen(false);
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left py-1.5 px-2 hover:bg-slate-800 rounded text-slate-200 flex justify-between items-center"
              >
                <span>{cat.name}</span>
                <span className="text-xs text-slate-400">{cat.count}</span>
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button 
                onClick={() => {
                  onOpenQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-cyan-700 hover:bg-cyan-600 font-bold rounded-lg text-center text-white text-xs"
              >
                Request Commercial Quote
              </button>
              <a 
                href={`tel:${COMPANY_INFO.directPhone}`} 
                className="block w-full py-2 bg-slate-800 font-semibold rounded-lg text-center text-slate-200 text-xs"
              >
                📞 Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
