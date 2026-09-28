import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/restaurantData';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { 
  Sparkles, 
  Flame, 
  Filter, 
  SlidersHorizontal, 
  ShieldCheck, 
  Truck, 
  LayoutGrid, 
  List, 
  X, 
  RotateCcw,
  ShoppingCart,
  Eye,
  Check,
  Star,
  ArrowRight
} from 'lucide-react';

export default function ProductSection({ 
  selectedCategory, 
  onSelectCategory, 
  onQuickView, 
  onAddToCart, 
  cartItems,
  onOpenQuoteModal
}) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Filter state
  const [filters, setFilters] = useState({
    category: selectedCategory || 'All',
    maxPrice: 30000,
    brands: [],
    powerTypes: [],
    certifications: [],
    inStockOnly: false,
    freeFreightOnly: false,
    hotDealsOnly: false
  });

  // Sync external selectedCategory if changed from header or category cards
  React.useEffect(() => {
    if (selectedCategory) {
      setFilters(prev => ({ ...prev, category: selectedCategory }));
    }
  }, [selectedCategory]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => {
      const updated = { ...prev, [key]: value };
      if (key === 'category') {
        onSelectCategory(value);
      }
      return updated;
    });
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'All',
      maxPrice: 30000,
      brands: [],
      powerTypes: [],
      certifications: [],
      inStockOnly: false,
      freeFreightOnly: false,
      hotDealsOnly: false
    });
    onSelectCategory('All');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category
      if (filters.category && filters.category !== 'All' && filters.category !== 'All Equipment') {
        if (p.category !== filters.category) return false;
      }

      // Max Price
      if (p.price > filters.maxPrice) return false;

      // Brands (Multi-select)
      if (filters.brands && filters.brands.length > 0) {
        if (!filters.brands.includes(p.brand)) return false;
      }

      // Power Types (Multi-select)
      if (filters.powerTypes && filters.powerTypes.length > 0) {
        if (!filters.powerTypes.includes(p.powerType)) return false;
      }

      // Certifications
      if (filters.certifications && filters.certifications.length > 0) {
        const hasAllCerts = filters.certifications.some(c => p.certifications && p.certifications.includes(c));
        if (!hasAllCerts) return false;
      }

      // In stock
      if (filters.inStockOnly && !p.inStock) return false;

      // Free freight
      if (filters.freeFreightOnly && !p.freeFreight) return false;

      // Hot deals
      if (filters.hotDealsOnly && (!p.isHotSeller && p.discountPercentage < 55)) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'discount') return b.discountPercentage - a.discountPercentage;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured' keeps original order
    });
  }, [filters, sortBy]);

  const isItemInCart = (id) => cartItems.some(i => i.id === id);

  // Active filter chip helpers
  const activeChips = [];
  if (filters.category && filters.category !== 'All') {
    activeChips.push({ label: `Category: ${filters.category}`, onRemove: () => handleFilterChange('category', 'All') });
  }
  if (filters.maxPrice < 30000) {
    activeChips.push({ label: `Under $${filters.maxPrice.toLocaleString()}`, onRemove: () => handleFilterChange('maxPrice', 30000) });
  }
  (filters.brands || []).forEach(b => {
    activeChips.push({ 
      label: `Brand: ${b}`, 
      onRemove: () => handleFilterChange('brands', filters.brands.filter(x => x !== b)) 
    });
  });
  (filters.powerTypes || []).forEach(pt => {
    activeChips.push({ 
      label: `Fuel: ${pt}`, 
      onRemove: () => handleFilterChange('powerTypes', filters.powerTypes.filter(x => x !== pt)) 
    });
  });
  (filters.certifications || []).forEach(c => {
    activeChips.push({ 
      label: `Cert: ${c}`, 
      onRemove: () => handleFilterChange('certifications', filters.certifications.filter(x => x !== c)) 
    });
  });
  if (filters.inStockOnly) {
    activeChips.push({ label: 'In Stock Only', onRemove: () => handleFilterChange('inStockOnly', false) });
  }
  if (filters.freeFreightOnly) {
    activeChips.push({ label: 'Free Freight', onRemove: () => handleFilterChange('freeFreightOnly', false) });
  }
  if (filters.hotDealsOnly) {
    activeChips.push({ label: 'Hot Deals', onRemove: () => handleFilterChange('hotDealsOnly', false) });
  }

  return (
    <section id="products-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>Full Commercial Catalog & Interactive Filters</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Restaurant Equipment & Supplies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Filter by brand, fuel/power source, certifications, price range, and stock availability to pinpoint the exact equipment your kitchen demands.
            </p>
          </div>

          {/* Controls: Sort & View Mode */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters ({activeChips.length})</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-xs cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="discount">Highest Discount %</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-slate-300 rounded-xl p-0.5 bg-slate-50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-xs text-cyan-700 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-xs text-cyan-700 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                title="Detailed Table / List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips Bar */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 py-4 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-1">Active Filters:</span>
            {activeChips.map((chip, i) => (
              <span 
                key={i} 
                className="inline-flex items-center gap-1.5 bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                <span>{chip.label}</span>
                <button 
                  onClick={chip.onRemove} 
                  className="hover:text-rose-600 rounded-full p-0.5 transition-colors"
                  aria-label="Remove filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 underline ml-2 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Main Products Grid with Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28">
            <ProductFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              totalMatching={filteredProducts.length}
              totalAvailable={PRODUCTS.length}
            />
          </div>

          {/* Products Results Container */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Result Header Count */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
              <span>
                Displaying <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> matching commercial models
              </span>
              <span className="hidden sm:inline">Wholesale Freight Guaranteed</span>
            </div>

            {/* Zero State if filters match nothing */}
            {filteredProducts.length === 0 ? (
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center mx-auto">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No equipment matches your current filters</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try widening your price range or unchecking specific brand/fuel filters to view more commercial options.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              /* GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                    onAddToCart={onAddToCart}
                    isInCart={isItemInCart(product.id)}
                  />
                ))}
              </div>
            ) : (
              /* DETAILED TABLE / LIST VIEW */
              <div className="space-y-4">
                {filteredProducts.map((product) => {
                  const inCart = isItemInCart(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col sm:flex-row gap-5 items-center justify-between"
                    >
                      {/* Product Thumbnail */}
                      <div 
                        onClick={() => onQuickView(product)}
                        className="w-full sm:w-36 h-36 bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center justify-center flex-shrink-0 cursor-pointer overflow-hidden group"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" 
                        />
                      </div>

                      {/* Product Middle Specs */}
                      <div className="flex-1 min-w-0 space-y-2 text-left w-full sm:w-auto">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase bg-slate-900 text-white px-2 py-0.5 rounded">
                            {product.brand}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">
                            Model: {product.model}
                          </span>
                          <span className="text-xs font-bold text-cyan-700">
                            • {product.powerType}
                          </span>
                          {product.certifications && product.certifications.length > 0 && (
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                              {product.certifications.join(', ')}
                            </span>
                          )}
                        </div>

                        <h3 
                          onClick={() => onQuickView(product)}
                          className="text-base font-bold text-slate-900 hover:text-cyan-700 transition-colors cursor-pointer"
                        >
                          {product.name}
                        </h3>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                          {product.features.slice(0, 2).map((feat, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 flex-shrink-0"></span>
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5 pt-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>{product.leadTime}</span>
                          {product.freeFreight && (
                            <span className="text-slate-400">| Free Commercial Freight</span>
                          )}
                        </div>
                      </div>

                      {/* Right Pricing & Actions */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-48 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
                        <div className="text-left sm:text-right">
                          <div className="text-xl sm:text-2xl font-black text-slate-950">
                            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </div>
                          <div className="text-xs text-slate-400 line-through">
                            List: ${product.originalPrice.toLocaleString()}
                          </div>
                          <div className="text-[11px] font-bold text-rose-600">
                            Save ${(product.saveAmount).toLocaleString()} ({product.discountPercentage}% OFF)
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => onQuickView(product)}
                            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                            title="View Specs & Zoom"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onAddToCart(product)}
                            className={`py-2 px-3 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm ${
                              inCart 
                                ? 'bg-emerald-600 text-white' 
                                : 'bg-cyan-700 hover:bg-cyan-800 text-white'
                            }`}
                          >
                            {inCart ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-3.5 h-3.5" />
                                <span>Add Quote</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </div>

        {/* Mobile Filter Slide-out Drawer */}
        {mobileFilterOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileFilterOpen(false)}
          >
            <div 
              className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-6 space-y-4 animate-in slide-in-from-right duration-250"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="text-base font-extrabold text-slate-900">Filter Commercial Models</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ProductFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                totalMatching={filteredProducts.length}
                totalAvailable={PRODUCTS.length}
              />

              <div className="pt-4">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 bg-cyan-700 text-white font-bold text-xs rounded-xl shadow-md text-center"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
