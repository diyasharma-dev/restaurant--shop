import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/restaurantData';

export default function QuoteDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onProceedCheckout 
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalRegular = cartItems.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
  const totalSaved = totalRegular - subtotal;
  const isFreeFreight = subtotal > 2500;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-cyan-700" />
            <h3 className="text-base font-extrabold text-slate-900">Commercial Equipment Quote Cart</h3>
            <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Freight Progress Bar */}
        <div className="p-3 bg-cyan-950 text-white text-xs px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-400" />
            <span>
              {isFreeFreight 
                ? '✓ Qualified for FREE Commercial Freight Delivery!' 
                : `Add $${(2500 - subtotal).toLocaleString(undefined, { minimumFractionDigits: 2 })} more for Free Freight`}
            </span>
          </div>
          {isFreeFreight && (
            <span className="text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
              Free Freight
            </span>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Your Quote Cart is Empty</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Browse our commercial kitchen equipment catalog and add ranges, fryers, or refrigeration to create your custom quote.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Browse Equipment Catalog
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="py-4 flex gap-3 items-center">
                <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.brand}</span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h5 className="text-xs font-bold text-slate-900 truncate">{item.name}</h5>
                  <div className="text-[11px] text-slate-500">Model: {item.model}</div>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-black text-slate-900">
                        ${(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[10px] text-slate-400">
                          (${item.price.toLocaleString()} ea)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-slate-200 text-slate-600"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-slate-200 text-slate-600"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Subtotal & Actions */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Estimated Subtotal:</span>
                <span className="font-bold text-slate-900 text-sm">
                  ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </div>
              {totalSaved > 0 && (
                <div className="flex justify-between text-rose-600 font-semibold">
                  <span>Wholesale Discount Savings:</span>
                  <span>-${totalSaved.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Commercial Freight:</span>
                <span className={isFreeFreight ? "font-bold text-emerald-600" : "font-semibold text-slate-700"}>
                  {isFreeFreight ? "FREE Freight Included" : "Calculated at Freight Dispatch"}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => {
                  onClose();
                  onProceedCheckout();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-800 hover:to-cyan-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Submit For Instant Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                Factory Warranties
              </span>
              <span>•</span>
              <span>Net 30 / Lease Available</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
