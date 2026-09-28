import React from 'react';
import { 
  Eye, 
  ShoppingCart, 
  Check, 
  Star, 
  Truck, 
  Flame, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  isInCart 
}) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-cyan-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1">
          {product.isHotSeller && (
            <span className="inline-flex items-center gap-1 bg-rose-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
              <Flame className="w-3 h-3 fill-white" />
              <span>Hot Seller</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
            Save {product.discountPercentage}%
          </span>
        </div>

        <span className="text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-slate-100 px-2.5 py-0.5 rounded-full">
          {product.brand}
        </span>
      </div>

      {/* Product Image Area with Hover Zoom & Quick View trigger */}
      <div className="relative pt-[80%] bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-contain transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Hover overlay with Quick View button */}
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 bg-white text-slate-900 hover:bg-cyan-50 font-bold text-xs px-4 py-2 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-700" />
            <span>Quick Specs & Zoom</span>
          </button>
        </div>
      </div>

      {/* Product Body Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Model */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
            <span className="truncate max-w-[160px] text-cyan-800">{product.category}</span>
            <span>Model: {product.model}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-slate-700">5.0</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>

          {/* Key Spec Feature Highlights */}
          <div className="mt-3 space-y-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1 flex-shrink-0"></span>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="mt-5 pt-3.5 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-950">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="line-through">${product.originalPrice.toLocaleString()}</span>
                <span className="text-rose-600 font-semibold">Save ${(product.saveAmount).toLocaleString()}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                In Stock
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onQuickView(product)}
              className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors text-center"
            >
              Specs Sheet
            </button>
            
            <button
              onClick={() => onAddToCart(product)}
              className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-97 ${
                isInCart 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-cyan-700 hover:bg-cyan-800 text-white'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-3" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Quote</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
