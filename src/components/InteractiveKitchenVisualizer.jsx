import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Eye, 
  ShoppingCart, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data/restaurantData';

export default function InteractiveKitchenVisualizer({ onQuickView, onAddToCart, cartItems }) {
  const [activeTab, setActiveTab] = useState('cookline');
  const [activePin, setActivePin] = useState(null);

  const zones = {
    cookline: {
      title: "Commercial Hot Line & Cook Suite",
      description: "Engineered for 500+ covers per shift. 140,000 BTU convection ovens paired with 12-burner gas ranges and 80lb recovery fryers.",
      image: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/hero-slider.jpg",
      pins: [
        {
          id: 'pin-1',
          top: '38%',
          left: '28%',
          productId: 'pcg140b-ti-pro',
          label: 'Double Convection Oven',
          sub: 'PCG140B/TI-PRO (Save 55%)'
        },
        {
          id: 'pin-2',
          top: '46%',
          left: '58%',
          productId: 'ir-12-e-c',
          label: '12-Burner Gas Range',
          sub: 'IR-12-E-C Dual Oven Base'
        },
        {
          id: 'pin-3',
          top: '52%',
          left: '82%',
          productId: 'r18a-4',
          label: '4-Tube Commercial Fryer',
          sub: '80lb Oil High Recovery'
        }
      ]
    },
    bar: {
      title: "Craft Beverage & Draft Taproom Bar",
      description: "Under-counter draft line refrigeration maintaining 36°F with zero foam, heavy-duty stainless glass chillers, and bottle speed rails.",
      image: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Bar-Equipment.jpg",
      pins: [
        {
          id: 'pin-4',
          top: '42%',
          left: '45%',
          productId: 'bbn68hc-b',
          label: '68" Draft Back Bar Cooler',
          sub: 'Beverage-Air R290 System'
        }
      ]
    },
    prep: {
      title: "Food Prep & Pan Stacker Optimization",
      description: "Multiply back-of-house storage by 250% using patented Dunne Rite pan stackers and Serv-ware refrigerated sandwich prep tables.",
      image: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Introducing-Pan-Stackers.jpg",
      pins: [
        {
          id: 'pin-5',
          top: '48%',
          left: '52%',
          productId: '4603cc-5r',
          label: '60" Refrigerated Prep Table',
          sub: '16 Food Pan Capacity'
        }
      ]
    },
    cold: {
      title: "Heavy-Duty Commercial Refrigeration",
      description: "High-visibility glass merchandisers and solid door reach-in freezers built to withstand 100°F+ ambient kitchen temperatures.",
      image: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Commercial-Refrigeration-Equipment.png",
      pins: [
        {
          id: 'pin-6',
          top: '35%',
          left: '50%',
          productId: 'mmf19hc-1-b',
          label: 'MarketMax Glass Merchandiser',
          sub: 'Beverage-Air 19 Cu. Ft.'
        }
      ]
    }
  };

  const currentZone = zones[activeTab];

  // Helper to find product
  const getProduct = (productId) => PRODUCTS.find(p => p.id === productId);

  return (
    <section id="kitchen-visualizer" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Kitchen Tour & Image Visualizer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See Commercial Equipment In Action
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Click the interactive hotspot pins on the photograph below to inspect exact commercial models, spec sheets, and instant wholesale pricing.
          </p>
        </div>

        {/* Layout Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => { setActiveTab('cookline'); setActivePin(null); }}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'cookline'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40 ring-2 ring-cyan-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <span>🔥 Heavy-Duty Cookline</span>
          </button>

          <button
            onClick={() => { setActiveTab('bar'); setActivePin(null); }}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'bar'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40 ring-2 ring-cyan-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <span>🍺 Taproom & Bar Station</span>
          </button>

          <button
            onClick={() => { setActiveTab('prep'); setActivePin(null); }}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'prep'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40 ring-2 ring-cyan-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <span>🥗 Prep & Pan Stacker System</span>
          </button>

          <button
            onClick={() => { setActiveTab('cold'); setActivePin(null); }}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'cold'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40 ring-2 ring-cyan-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <span>❄️ Merchandisers & Cold Line</span>
          </button>
        </div>

        {/* Visualizer Frame with Interactive Hotspots */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9] max-h-[620px] group">
          <img
            src={currentZone.image}
            alt={currentZone.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />

          {/* Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60 pointer-events-none"></div>

          {/* Top Title Overlay */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-md bg-slate-950/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-700/60">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              {currentZone.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              {currentZone.description}
            </p>
          </div>

          {/* Interactive Hotspot Pins */}
          {currentZone.pins.map((pin) => {
            const product = getProduct(pin.productId);
            const isPinActive = activePin === pin.id;

            return (
              <div
                key={pin.id}
                style={{ top: pin.top, left: pin.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Pulsing Pin Button */}
                <button
                  onClick={() => setActivePin(isPinActive ? null : pin.id)}
                  className="relative group/pin p-2 focus:outline-none"
                  aria-label={`Hotspot for ${pin.label}`}
                >
                  <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping"></span>
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-600 hover:bg-cyan-500 border-2 border-white shadow-xl flex items-center justify-center text-white transform group-hover/pin:scale-115 transition-transform duration-200">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                </button>

                {/* Hotspot Floating Card */}
                {isPinActive && product && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-80 bg-slate-900/95 text-white rounded-2xl p-4 shadow-2xl border border-cyan-500/40 backdrop-blur-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-200">
                        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{product.brand}</span>
                        <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-sm font-extrabold text-emerald-400">${product.price.toLocaleString()}</span>
                          <span className="text-[11px] text-slate-400 line-through">${product.originalPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                      <button
                        onClick={() => onQuickView(product)}
                        className="flex-1 py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-center transition-colors"
                      >
                        Specs & Zoom
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 py-1.5 px-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        <span>Add Quote</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom helper notice */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-[11px] text-slate-300 hidden sm:flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click any glowing marker to explore commercial equipment specs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
