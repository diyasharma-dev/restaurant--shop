import React, { useState } from 'react';
import { INSTALLATION_PROJECTS } from '../data/restaurantData';
import { Eye, MapPin, CheckCircle2, X, Sparkles, ChevronRight, Layers } from 'lucide-react';

export default function InstallationGallery({ onOpenQuoteModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Cookline', 'Bar Setup', 'Prep & Storage', 'Refrigeration'];

  const filteredProjects = activeFilter === 'All' 
    ? INSTALLATION_PROJECTS 
    : INSTALLATION_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="gallery-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Commercial Field Installations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Kitchen Installations & Project Gallery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Inspect how Restaurant Pro Shop equips high-volume commercial kitchens, award-winning breweries, fast casuals, and luxury resorts across the nation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-700 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 hover:border-cyan-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  {proj.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-cyan-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 bg-white text-slate-900 font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-cyan-700" />
                    <span>View Project Specs & Equipment List</span>
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 bg-slate-950 text-white flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 font-medium">
                    {proj.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-slate-400 mr-1">Gear:</span>
                  {proj.equipmentUsed.map((gear, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold bg-slate-900 text-cyan-400 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {gear}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-slate-900 text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700 relative animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white transition-colors"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative aspect-[16/9] w-full bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedProject.tagline}. Designed for extreme temperature endurance and heavy-traffic kitchen workflow.
                  </p>
                </div>

                {/* Client Quote */}
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                  <span className="text-xs font-bold text-amber-300 block mb-1">Client Feedback:</span>
                  <p className="text-xs sm:text-sm italic text-slate-200">
                    "{selectedProject.clientQuote}"
                  </p>
                </div>

                {/* Equipment List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Commercial Equipment Specified</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-300">
                    {selectedProject.equipmentUsed.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Need a similar kitchen design?</span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal();
                    }}
                    className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 font-bold text-xs rounded-xl text-white transition-colors"
                  >
                    Request Layout & Equipment Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
