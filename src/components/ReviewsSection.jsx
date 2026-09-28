import React from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Commercial Operators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Trusted by independent restaurant owners, multi-unit franchise operators, and executive chefs across the United States.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-200 mt-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900">4.9 / 5.0 Rating</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-semibold">Google Verified Foodservice Dealer</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* User avatar & Google badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-700 to-cyan-500 text-white font-black text-sm flex items-center justify-center shadow-sm">
                      {rev.initial}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                      <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Verified Buyer</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <h5 className="text-sm font-bold text-slate-800 mb-2">
                  "{rev.title}"
                </h5>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>{rev.source}</span>
                <span className="text-cyan-700 font-semibold">Restaurant Operator</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
