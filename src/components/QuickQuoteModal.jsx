import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Truck, 
  Phone, 
  ShieldCheck, 
  FileText,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/restaurantData';

export default function QuickQuoteModal({ isOpen, onClose, cartItems }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: 'New Restaurant Opening',
    timeframe: 'Immediately (1-2 Weeks)',
    liftgateNeeded: true,
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full my-8 overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-extrabold text-white">Commercial Foodservice Quote Request</h3>
              <p className="text-xs text-slate-300">Direct Dealer Pricing & Freight Optimization</p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Commercial Quote Transmitted!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-800">{formData.contactName || 'Valued Partner'}</span>. Your quote request for <span className="font-bold text-slate-800">{formData.businessName || 'your operation'}</span> has been routed to our commercial sales engineers.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700 text-left space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-500">Reference Quote ID:</span>
                  <span className="font-mono font-bold text-cyan-700">RPS-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-500">Estimated Response Time:</span>
                  <span className="font-bold text-emerald-700">Within 2 Business Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-500">Assigned Dealer Desk:</span>
                  <span className="font-bold text-slate-800">{COMPANY_INFO.phone}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Return to Equipment Catalog
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected items notification if from cart */}
              {cartItems && cartItems.length > 0 && (
                <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-xl text-xs text-cyan-900 flex items-center justify-between">
                  <span className="font-semibold">
                    Including <strong className="font-bold">{cartItems.reduce((a, b) => a + b.quantity, 0)} items</strong> from your active quote cart
                  </span>
                  <span className="font-bold text-cyan-800">
                    ${cartItems.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Restaurant / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Copper Hearth Bistro"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Name / Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Brian Miller (General Mgr)"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="chef@restaurant.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none bg-white cursor-pointer"
                  >
                    <option value="New Restaurant Opening">New Restaurant Opening</option>
                    <option value="Kitchen Remodel / Cookline Upgrade">Kitchen Remodel / Cookline</option>
                    <option value="Single Equipment Replacement">Single Equipment Replacement</option>
                    <option value="Multi-Unit Franchise Package">Multi-Unit Franchise Package</option>
                    <option value="Bar & Taproom Renovation">Bar & Taproom Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Delivery Timeframe
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none bg-white cursor-pointer"
                  >
                    <option value="Immediately (1-2 Weeks)">Immediately (1-2 Weeks)</option>
                    <option value="3-4 Weeks Ahead">3-4 Weeks Ahead</option>
                    <option value="1-3 Months (Planning Phase)">1-3 Months (Planning Phase)</option>
                    <option value="Just Budgeting / Researching">Just Budgeting / Price Matching</option>
                  </select>
                </div>
              </div>

              {/* Delivery dock options */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
                <span className="font-bold text-slate-800 block">Freight Delivery Preferences:</span>
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.liftgateNeeded}
                    onChange={(e) => setFormData({ ...formData, liftgateNeeded: e.target.checked })}
                    className="rounded text-cyan-600 focus:ring-cyan-500"
                  />
                  <span>Require Hydraulic Liftgate Truck Delivery (Recommended if no loading dock)</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Model Notes or Custom Kitchen Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Need natural gas or propane? Specific electrical phase? Let our team know..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-800 hover:to-cyan-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Custom Quote Request</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>🔒 Secure 256-Bit SSL Encryption</span>
                <span>Direct Dealer Wholesale Guarantee</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
