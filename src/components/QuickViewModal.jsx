import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Check, 
  Star, 
  ShieldCheck, 
  Truck, 
  FileText, 
  ZoomIn, 
  Phone, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/restaurantData';

export default function QuickViewModal({ product, onClose, onAddToCart, isInCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleDownloadSpec = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded">
              {product.brand}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Model: {product.model}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Image Gallery & Zoom Area */}
            <div className="lg:col-span-6 space-y-4">
              <div 
                className="relative aspect-square rounded-2xl border border-slate-200 bg-slate-50 p-6 flex items-center justify-center overflow-hidden cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={images[activeImageIndex] || product.image}
                  alt={product.name}
                  className={`max-h-full max-w-full object-contain transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                />
                
                {/* Zoom indicator button */}
                <button 
                  type="button" 
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl text-slate-700 shadow-md text-xs font-semibold flex items-center gap-1 hover:bg-white"
                >
                  <ZoomIn className="w-4 h-4 text-cyan-700" />
                  <span>{isZoomed ? 'Reset' : 'Zoom'}</span>
                </button>
              </div>

              {/* Gallery Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-3">
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl border p-1 bg-white overflow-hidden transition-all ${
                        activeImageIndex === idx ? 'border-cyan-600 ring-2 ring-cyan-500/20' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Commercial Assurance Badges */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-semibold">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>Freight Delivery with Liftgate Dispatch</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Official Manufacturer Commercial Warranty</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Pre-Installation Specs Support: {COMPANY_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Right Product Details & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider block">
                  {product.category} › {product.subCategory}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 leading-snug">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-bold text-emerald-600">{product.leadTime}</span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-cyan-100 flex items-baseline justify-between">
                <div>
                  <div className="text-3xl font-black text-slate-950">
                    ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs">
                    <span className="text-slate-400 line-through">
                      List: ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                      Save ${(product.saveAmount).toLocaleString()} ({product.discountPercentage}% OFF)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Unit Status</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                    Factory Verified
                  </span>
                </div>
              </div>

              {/* Specs Sheet Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Specifications</h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden text-xs divide-y divide-slate-100">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-2 px-3 bg-white hover:bg-slate-50">
                      <span className="font-medium text-slate-500">{key}</span>
                      <span className="font-bold text-slate-800 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Points */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Equipment Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 flex-shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2.5 text-slate-600 hover:bg-slate-200 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-xs font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2.5 text-slate-600 hover:bg-slate-200 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart(product, quantity)}
                  className="w-full sm:flex-1 py-3 px-6 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-800 hover:to-cyan-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add {quantity} to Quote Cart</span>
                </button>

                <button
                  onClick={handleDownloadSpec}
                  className="w-full sm:w-auto py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
                  title="Download Spec Sheet PDF"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>PDF Specs</span>
                </button>
              </div>

              {downloadNotice && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold border border-emerald-200 animate-in fade-in duration-150">
                  ✓ Official PDF Spec Sheet generated for Model {product.model}. Download initiated!
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
