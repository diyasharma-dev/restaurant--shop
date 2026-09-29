import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Truck, 
  Flame, 
  ShieldCheck, 
  ShoppingBag, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Clock,
  BadgePercent,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  Eye,
  Star
} from 'lucide-react';

export default function Hero({ onSelectCategory, onQuickView }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const mainBanners = [
    {
      id: 0,
      tag: "Commercial Cookline Super Sale",
      discount: "UP TO 55% OFF",
      discountBadgeColor: "bg-rose-600 text-white",
      headline: "Commercial Ranges, Convection Ovens & Fryers",
      subline: "Equip your line with Southbend, Imperial & Platinum PRO. Heavy-duty 304 stainless steel cooklines, 140,000 BTU double convection ovens, and 80lb deep fryers.",
      priceTag: "$18,034.00",
      listPrice: "$40,076.00",
      saveTag: "Save $22,042",
      ctaText: "Shop Cooking Equipment",
      category: "Cooking Equipment",
      bgGradient: "from-slate-950 via-slate-900 to-slate-950",
      featuredProduct: {
        id: "pcg140b-ti-pro",
        title: "PCG140B/TI-PRO Double Convection Oven",
        brand: "Platinum PRO / Southbend",
        image: "https://api.aq-fes.com/products-api/resources/pictures/0f0e16c1-a4c6-4952-8540-76621dd6162b/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
        price: "$18,034.00",
        regularPrice: "$40,076.00",
        specs: "140,000 BTU • Double Deck • NSF & CSA",
        rating: "5.0 ★ (24 Reviews)"
      },
      secondaryProducts: [
        {
          src: "https://api.aq-fes.com/products-api/resources/pictures/477249f1-eb5e-4ac5-bfd8-3397b047e292/group-picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
          title: "Imperial 12-Burner Range",
          price: "$14,450",
          save: "Save 56%"
        },
        {
          src: "https://api.aq-fes.com/products-api/resources/pictures/884febc2-e799-4c94-94c3-4a102f83bd10/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
          title: "4-Tube Gas Fryer 80lb",
          price: "$6,380",
          save: "Save 55%"
        }
      ]
    },
    {
      id: 1,
      tag: "Commercial Cold Storage Expo",
      discount: "UP TO 67% OFF",
      discountBadgeColor: "bg-cyan-600 text-white",
      headline: "Refrigeration, Merchandisers & Bar Coolers",
      subline: "Beverage-Air, Serv-ware & Maxx Cold high-efficiency R290 refrigeration. Maintain 36°F draft lines, zero-frost merchandisers, and 60\" sandwich prep stations.",
      priceTag: "$4,254.40",
      listPrice: "$12,951.00",
      saveTag: "Save $8,696",
      ctaText: "Shop Refrigeration & Bar",
      category: "Refrigeration Equipment",
      bgGradient: "from-slate-950 via-cyan-950 to-slate-950",
      featuredProduct: {
        id: "bbn68hc-b",
        title: 'Beverage-Air 68" Back Bar Cooler',
        brand: "Beverage-Air Pro",
        image: "https://api.aq-fes.com/products-api/resources/pictures/8e18feb2-ba18-4546-8894-42f613a1ef30/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
        price: "$4,254.40",
        regularPrice: "$12,951.00",
        specs: "Holds 3 Kegs / 360 Cans • R290 Eco System",
        rating: "4.9 ★ (31 Reviews)"
      },
      secondaryProducts: [
        {
          src: "https://api.aq-fes.com/products-api/resources/pictures/df451b47-296a-4bf7-8efd-02f6d415a568/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
          title: "Glass Merchandiser Freezer",
          price: "$4,980",
          save: "Save 56%"
        },
        {
          src: "https://api.aq-fes.com/products-api/resources/pictures/e2876a83-d398-4c95-b2a6-2fd4222c388e/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
          title: 'Serv-ware 60" Prep Table',
          price: "$3,620",
          save: "Save 57%"
        }
      ]
    },
    {
      id: 2,
      tag: "Food Prep & Space Optimization",
      discount: "FACTORY WHOLESALE",
      discountBadgeColor: "bg-emerald-600 text-white",
      headline: "Refrigerated Prep Tables & Pan Stackers",
      subline: "Triple your back-of-house capacity with Serv-ware stainless sandwich prep stations, planetary mixers, and patented Dunne Rite pan stackers.",
      priceTag: "$3,620.00",
      listPrice: "$8,450.00",
      saveTag: "Save $4,830",
      ctaText: "Shop Prep & Storage",
      category: "Storage & Transport",
      bgGradient: "from-slate-950 via-emerald-950 to-slate-950",
      featuredProduct: {
        id: "4603cc-5r",
        title: 'Serv-ware 60" Sandwich Prep Station',
        brand: "Serv-ware Foodservice",
        image: "https://api.aq-fes.com/products-api/resources/pictures/e2876a83-d398-4c95-b2a6-2fd4222c388e/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
        price: "$3,620.00",
        regularPrice: "$8,450.00",
        specs: "16 Food Pans Included • 10\" Board",
        rating: "4.8 ★ (38 Reviews)"
      },
      secondaryProducts: [
        {
          src: "https://api.aq-fes.com/products-api/resources/pictures/9d53f53f-1b8b-42e3-ba65-7fdac6f9b648/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
          title: "Dunne Rite Pan Stacker",
          price: "$890",
          save: "Save 54%"
        },
        {
          src: "https://api.aq-fes.com/products-api/resources/pictures/d9077b80-56d3-4d65-a898-ad2a19e4f5d3/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
          title: "60-Gal Steam Kettle",
          price: "$26,417",
          save: "Save 55%"
        }
      ]
    }
  ];

  const categoryTiles = [
    {
      title: "Commercial Ranges & Ovens",
      badge: "Save 55%",
      badgeColor: "bg-rose-600",
      deal: "1,420+ Models In Stock",
      image: "https://api.aq-fes.com/products-api/resources/pictures/d7c32f23-ba96-4d03-8205-725a77a66fde/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
      category: "Cooking Equipment"
    },
    {
      title: "Commercial Refrigeration",
      badge: "Save 67%",
      badgeColor: "bg-cyan-600",
      deal: "Reach-Ins, Prep & Freezers",
      image: "https://api.aq-fes.com/products-api/resources/pictures/baa7ccde-75fa-4494-9a7d-bf86c559ec1f/picture.jpg?subscription-key=4d35778ac3264cd3a8ae7bb4ec84844c",
      category: "Refrigeration Equipment"
    },
    {
      title: "Bar Equipment & Tap Systems",
      badge: "Top Rated",
      badgeColor: "bg-amber-600",
      deal: "Draft Towers, Coolers & Chillers",
      image: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Bar-Equipment.jpg",
      category: "Refrigeration Equipment"
    },
    {
      title: "Food Prep & Pan Stackers",
      badge: "New Innovation",
      badgeColor: "bg-emerald-600",
      deal: "Mixers, Slicers & Racks",
      image: "https://restaurantproshop.elocalisdemo.top/wp-content/uploads/2026/03/Introducing-Pan-Stackers.jpg",
      category: "Storage & Transport"
    }
  ];

  // Auto rotate banner every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % mainBanners.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [mainBanners.length]);

  const slide = mainBanners[activeSlide];

  const scrollToProducts = (category = 'All') => {
    onSelectCategory(category);
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-100 py-6 sm:py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* 1. Main E-Commerce Hero Slider Banner with ZERO blank space */}
        <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r ${slide.bgGradient} text-white border border-slate-700 min-h-[500px] flex flex-col justify-between transition-colors duration-700`}>
          
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Slider Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex-1 flex flex-col justify-between">
            
            {/* Top Row: Badges & Live Status */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black uppercase px-3 py-1 rounded-full shadow-md ${slide.discountBadgeColor}`}>
                  {slide.discount}
                </span>
                <span className="text-xs font-bold bg-white/10 backdrop-blur-md text-cyan-300 px-3 py-1 rounded-full border border-white/10">
                  {slide.tag}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-3 py-1 rounded-full">
                <Truck className="w-3.5 h-3.5" />
                <span>Free Freight on Commercial Orders $2,500+</span>
              </div>
            </div>

            {/* Middle Row: Text on Left (6 cols), Product Showcase on Right (6 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
              
              {/* Left Content (6 Columns) */}
              <div className="lg:col-span-6 space-y-4">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                  {slide.subline}
                </p>

                {/* Price and Savings Callout */}
                <div className="pt-2 flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    {slide.priceTag}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    {slide.listPrice}
                  </span>
                  <span className="text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-800 px-2.5 py-1 rounded-lg">
                    {slide.saveTag}
                  </span>
                </div>

                {/* Primary Shopping CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToProducts(slide.category)}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-950/50 transition-all transform hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={() => scrollToProducts('Hot Sellers')}
                    className="flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
                  >
                    <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>View Hot Sellers</span>
                  </button>
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Full Factory Warranty
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Liftgate Freight Included
                  </span>
                </div>
              </div>

              {/* Right Side Showcase: Prominent Featured Product Card + 2 Secondary Thumbs (6 Columns) */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Main Highlight Stage Card */}
                <div 
                  onClick={() => scrollToProducts(slide.category)}
                  className="group/mainprod cursor-pointer relative bg-white text-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-white/20 hover:border-cyan-400 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5"
                >
                  <div className="w-full sm:w-48 aspect-square rounded-2xl bg-slate-50 p-3 flex items-center justify-center overflow-hidden border border-slate-200 flex-shrink-0">
                    <img 
                      src={slide.featuredProduct.image} 
                      alt={slide.featuredProduct.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover/mainprod:scale-108"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase bg-slate-900 text-white px-2.5 py-0.5 rounded shadow">
                        {slide.featuredProduct.brand}
                      </span>
                      <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {slide.featuredProduct.rating}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover/mainprod:text-cyan-700 transition-colors leading-snug line-clamp-2">
                      {slide.featuredProduct.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium">
                      {slide.featuredProduct.specs}
                    </p>

                    <div className="pt-2 flex items-baseline justify-between border-t border-slate-100">
                      <div>
                        <span className="text-lg font-black text-emerald-700">
                          {slide.featuredProduct.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through ml-2">
                          {slide.featuredProduct.regularPrice}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-cyan-700 group-hover/mainprod:text-cyan-800 flex items-center gap-1">
                        <span>Shop Model</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/mainprod:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Two Secondary Product Quick Tiles */}
                <div className="grid grid-cols-2 gap-3">
                  {slide.secondaryProducts.map((sec, idx) => (
                    <div
                      key={idx}
                      onClick={() => scrollToProducts(slide.category)}
                      className="group/sec cursor-pointer bg-slate-900/90 border border-slate-700 hover:border-cyan-400 rounded-2xl p-3 flex items-center gap-3 transition-all hover:bg-slate-800"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center flex-shrink-0">
                        <img src={sec.src} alt={sec.title} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[11px] font-bold text-white truncate group-hover/sec:text-cyan-300">
                          {sec.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs font-extrabold text-emerald-400">{sec.price}</span>
                          <span className="text-[9px] font-bold text-rose-400 bg-rose-950 px-1 rounded">{sec.save}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom Slider Dots & Navigation */}
            <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {mainBanners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeSlide ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + mainBanners.length) % mainBanners.length)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % mainBanners.length)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. 4-Grid Image Banners (Actual E-Commerce Retail Visual Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryTiles.map((tile, idx) => (
            <div
              key={idx}
              onClick={() => scrollToProducts(tile.category)}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden p-3 flex items-center justify-center">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-106"
                />
                
                {/* Sale Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-black uppercase text-white px-2 py-0.5 rounded shadow ${tile.badgeColor}`}>
                    {tile.badge}
                  </span>
                </div>
              </div>

              {/* Title & Shop Button */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-1">
                    {tile.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {tile.deal}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-cyan-700 group-hover:text-white text-slate-500 flex items-center justify-center transition-colors flex-shrink-0 ml-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Clean E-Commerce Trust Badges Strip */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Free Freight Shipping</h4>
                <p className="text-[11px] text-slate-500">On commercial orders over $2,500</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Rapid 24-48hr Dispatch</h4>
                <p className="text-[11px] text-slate-500">Nationwide warehouse fulfillment</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">OEM Factory Warranties</h4>
                <p className="text-[11px] text-slate-500">1 to 5 years parts & compressor</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                <BadgePercent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Wholesale Dealer Pricing</h4>
                <p className="text-[11px] text-slate-500">Direct-from-manufacturer rates</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
