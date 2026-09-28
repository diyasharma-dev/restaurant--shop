import React from 'react';
import { BLOG_POSTS } from '../data/restaurantData';
import { BookOpen, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function BuyingGuides({ onOpenQuoteModal }) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-cyan-700" />
              <span>Industry Insights & Best Practices</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Foodservice Guides & News
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Equip your culinary operation with expert knowledge on codes, utility load balancing, and equipment longevity.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-800 transition-colors self-start md:self-auto"
          >
            <span>Consult an Equipment Specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-cyan-700 group-hover:text-cyan-800">
                  <span>Read Full Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
