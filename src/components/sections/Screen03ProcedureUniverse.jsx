import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Layers, ChevronRight } from 'lucide-react';
import { procedureCategories } from '../../data/proceduresData';

export default function Screen03ProcedureUniverse() {
  const [activeCategoryId, setActiveCategoryId] = useState('face');

  const activeCategory = procedureCategories.find(c => c.id === activeCategoryId) || procedureCategories[0];

  return (
    <section className="fullscreen-section bg-gradient-to-br from-[#FFE2E2] via-[#FBEFEF] to-[#C5B3D3]/30 flex items-center justify-center relative overflow-hidden transition-all duration-700">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5B3D3]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
                03 / Procedures Universe
              </span>
              <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3A243F]" /> Interactive 3D Exhibition
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#3A243F] leading-none">
              Explore Surgical Spectrum
            </h2>
          </div>

          <Link
            to="/procedures"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-panel-dark text-[#FFF9F8] text-xs uppercase tracking-widest font-medium hover:bg-[#3A243F] transition-all shadow-md"
          >
            <span>Full Procedure Index</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Floating 3D Overlapping Perspective Panels Grid (Ref 2 Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto perspective-container">
          
          {/* Left Column: 3D Depth Stacked Category Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative preserve-3d">
            {procedureCategories.map((cat, index) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <motion.div
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  animate={{
                    scale: isActive ? 1.03 : 0.96,
                    z: isActive ? 50 : 0,
                    x: isActive ? 12 : 0,
                    opacity: isActive ? 1 : 0.75
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                  className={`cursor-pointer p-5 rounded-2xl border backdrop-blur-lg transition-all shadow-lg flex items-center justify-between ${
                    isActive
                      ? 'bg-[#3A243F] text-[#FFF9F8] border-[#C5B3D3]/40 shadow-2xl'
                      : 'glass-panel-light text-[#3A243F] border-[#FFE2E2] hover:border-[#C5B3D3]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#F5CBCB]' : 'text-[#C5B3D3]'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-serif-editorial text-xl font-semibold leading-snug">
                        {cat.title}
                      </h4>
                      <p className={`text-[11px] truncate max-w-xs ${isActive ? 'text-[#FFF9F8]/80' : 'text-[#262126]/60'}`}>
                        {cat.procedures.length} Specialized Procedures
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-[#F5CBCB]' : 'text-[#3A243F]/40'}`} />
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Active Floating Panel Showcase Details */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-3xl overflow-hidden glass-panel-light border border-[#FFE2E2] shadow-2xl relative flex flex-col justify-between p-8"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    className="w-full h-full object-cover opacity-20 filter saturate-150"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F8] via-[#FFF9F8]/90 to-transparent" />
                </div>

                {/* Overlaid Details */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#3A243F]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#3A243F] font-bold">
                      Category Showcase
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#3A243F] mb-3">
                    {activeCategory.title}
                  </h3>
                  <p className="text-sm text-[#262126]/80 leading-relaxed max-w-xl mb-6">
                    {activeCategory.shortDesc}
                  </p>
                </div>

                {/* Procedure Pill List */}
                <div className="relative z-10 my-auto">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#3A243F] font-semibold mb-3">
                    Available Procedures:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.procedures.map((p) => (
                      <span
                        key={p.id}
                        className="px-4 py-2 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-medium shadow-sm flex items-center gap-1.5"
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="relative z-10 pt-4 border-t border-[#3A243F]/10 flex items-center justify-between">
                  <span className="text-xs text-[#262126]/60 italic">
                    All procedures performed in NABH surgical suites.
                  </span>
                  <Link
                    to={`/procedures#${activeCategory.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A243F] hover:text-[#C5B3D3] transition-colors"
                  >
                    View All {activeCategory.title} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-[#262126]/60 font-mono">
          Hover or tap panels to inspect surgical category details.
        </div>

      </div>

    </section>
  );
}
