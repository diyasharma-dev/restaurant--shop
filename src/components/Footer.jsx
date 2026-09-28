import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Sparkles,
  Send,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/restaurantData';

export default function Footer({ onSelectCategory, onOpenQuoteModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Newsletter / Discount Offer Bar */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">Exclusive Dealer Newsletter</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Sign Up For Direct Restaurant Equipment Discounts
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Get secret factory clearance alerts, seasonal rebate codes, and equipment maintenance guides.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Use code <strong className="text-white underline font-mono">PROSHOP5</strong> for 5% off your first quote.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter business email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-80 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Get VIP Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = COMPANY_INFO.logoCircle;
                }}
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your one-stop source for top-quality commercial restaurant equipment and foodservice supplies. Providing culinary operators with direct manufacturer pricing and seamless freight delivery across the USA.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <a 
                href={`tel:${COMPANY_INFO.directPhone}`}
                className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Toll-Free Equipment Desk</span>
                  <span className="font-extrabold text-sm text-white">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Email Direct Orders & Bids</span>
                  <span className="font-medium text-slate-200">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Support Hours</span>
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Equipment Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.name);
                      const el = document.getElementById('products-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('kitchen-visualizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Interactive Kitchen Tour
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('servware-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Serv-ware Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('bar-equipment-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Bar Equipment Line
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('gallery-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Installations Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenQuoteModal}
                  className="text-amber-300 hover:text-amber-200 transition-colors font-semibold"
                >
                  Custom Project Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Legal, Warranties & Compliance */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Commercial Assurance
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1.5">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  OEM Factory Warranties
                </span>
                <p className="text-[11px] text-slate-400 leading-normal">
                  All refrigeration, ranges, and kettles carry comprehensive 1 to 5 year parts and compressor warranties.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1.5">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  Liftgate Freight Available
                </span>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Nationwide logistics network with curbside liftgate, terminal pickup, and inside delivery options.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Restaurant Pro Shop. All Rights Reserved. Engineered for Commercial Foodservice.
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Freight Damage Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
