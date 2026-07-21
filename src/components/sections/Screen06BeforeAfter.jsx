import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Sparkles, SlidersHorizontal, Info } from 'lucide-react';
import { beforeAfterCases } from '../../data/galleryData';

export default function Screen06BeforeAfter() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  const activeCase = beforeAfterCases[activeCaseIndex] || beforeAfterCases[0];

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section className="fullscreen-section bg-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
                06 / Results Gallery
              </span>
              <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5B3D3]" /> Patient Consent Verified
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#3A243F] leading-none">
              Before & After Transformations
            </h2>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#262126] transition-all shadow-md"
          >
            <span>Full Gallery Index</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Interactive Drag Slider Container */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Before/After Split Image Slider */}
          <div className="lg:col-span-7">
            <div
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#FFE2E2] cursor-ew-resize select-none"
            >
              {/* "AFTER" Image (Base layer) */}
              <img
                src={activeCase.afterImage}
                alt={`After ${activeCase.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#3A243F]/80 text-[#FBEFEF] text-[10px] font-mono tracking-widest uppercase">
                AFTER ({activeCase.timeline})
              </div>

              {/* "BEFORE" Image (Clipped overlay layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={`Before ${activeCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 text-white text-[10px] font-mono tracking-widest uppercase">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#FFF9F8] shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#3A243F] text-[#FBEFEF] border-2 border-[#FFF9F8] flex items-center justify-center shadow-lg">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="mt-2 text-center text-xs text-[#262126]/60 font-mono">
              Drag slider left or right to inspect surgical transformation.
            </div>
          </div>

          {/* Right Column: Case Clinical Notes & Surgeon Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="glass-panel-light p-8 rounded-3xl border border-[#FFE2E2] shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#C5B3D3] uppercase tracking-widest font-bold">
                  Clinical Case File
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FFE2E2] text-[#3A243F]">
                  Age {activeCase.patientAge} Patient
                </span>
              </div>

              <h3 className="font-serif-editorial text-3xl font-bold text-[#3A243F] mb-1">
                {activeCase.title}
              </h3>
              <p className="text-xs font-semibold text-[#C5B3D3] uppercase tracking-wider mb-4">
                Procedure: {activeCase.procedureName}
              </p>

              <div className="p-4 rounded-2xl bg-[#FBEFEF] border border-[#FFE2E2] mb-6">
                <span className="text-[10px] font-mono text-[#3A243F] font-bold uppercase block mb-1">
                  Surgeon's Assessment Notes:
                </span>
                <p className="text-xs text-[#262126]/80 leading-relaxed italic">
                  "{activeCase.surgeonNote}"
                </p>
                <div className="mt-3 text-[11px] font-medium text-[#3A243F]">
                  Lead Surgeon: {activeCase.surgeon}
                </div>
              </div>

              {/* Consent & Ethics Note */}
              <div className="flex items-start gap-2.5 text-xs text-[#262126]/70 p-3 rounded-xl bg-[#FFF9F8] border border-[#FFE2E2]">
                <Info className="w-4 h-4 text-[#C5B3D3] shrink-0 mt-0.5" />
                <span>
                  Individual outcomes vary depending on anatomical baseline. Images published with formal written patient consent.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Case Selection Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {beforeAfterCases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                idx === activeCaseIndex
                  ? 'bg-[#3A243F] text-[#FBEFEF] shadow-md scale-105'
                  : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              {c.category.toUpperCase()} — {c.title}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}
