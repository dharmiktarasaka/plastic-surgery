import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { surgeonsData } from '../../data/surgeonsData';

export default function Screen08Surgeons() {
  const [activeSurgeonIndex, setActiveSurgeonIndex] = useState(0);

  const activeSurgeon = surgeonsData[activeSurgeonIndex] || surgeonsData[0];

  const handleNext = () => {
    setActiveSurgeonIndex((prev) => (prev + 1) % surgeonsData.length);
  };

  const handlePrev = () => {
    setActiveSurgeonIndex((prev) => (prev - 1 + surgeonsData.length) % surgeonsData.length);
  };

  return (
    <section className="fullscreen-section bg-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Subtle Typography Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-serif-editorial text-[20vw] leading-none text-[#3A243F] font-bold">
        MAESTROS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
                08 / Surgical Leadership
              </span>
              <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C5B3D3]" /> World-Class Medical Faculty
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#3A243F] leading-none">
              Meet the Plastic Surgeons
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#3A243F]/20 hover:bg-[#FFE2E2] transition-all text-[#3A243F]"
              aria-label="Previous Surgeon"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[#3A243F]">
              {String(activeSurgeonIndex + 1).padStart(2, '0')} / {String(surgeonsData.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#3A243F]/20 hover:bg-[#FFE2E2] transition-all text-[#3A243F]"
              aria-label="Next Surgeon"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Fashion-Editorial Single Surgeon Spotlight Grid */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Fashion Editorial Portrait & Animated Signature Line */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSurgeon.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-[2.5rem] overflow-hidden border border-[#FFE2E2] shadow-2xl"
              >
                <img
                  src={activeSurgeon.image}
                  alt={activeSurgeon.name}
                  className="w-full h-full object-cover filter brightness-105 contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3A243F] via-transparent to-transparent opacity-70" />
                
                {/* Vertical Qualifications Overlay Badge */}
                <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-[#FFF9F8]/90 text-[#3A243F] text-[10px] font-mono tracking-widest font-bold uppercase backdrop-blur-md">
                  {activeSurgeon.experience}
                </div>

                {/* Signature overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-[#FBEFEF]">
                  <span className="font-handwritten text-3xl text-[#F5CBCB] block mb-1">
                    {activeSurgeon.signature}
                  </span>
                  <p className="text-xs font-serif-editorial text-[#FFF9F8] italic">
                    "{activeSurgeon.quote}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Surgeon Dossier & Approach to Care */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSurgeon.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-mono text-[#C5B3D3] uppercase tracking-widest block mb-2 font-bold">
                  {activeSurgeon.title}
                </span>

                <h3 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#3A243F] mb-3">
                  {activeSurgeon.name}
                </h3>

                <p className="text-xs font-mono text-[#3A243F]/80 mb-6 pb-4 border-b border-[#FFE2E2]">
                  Qualifications: {activeSurgeon.qualifications}
                </p>

                <p className="text-sm text-[#262126]/80 leading-relaxed mb-6 font-normal">
                  {activeSurgeon.bio}
                </p>

                {/* Professional Memberships */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#3A243F] font-bold block mb-3">
                    Board Memberships & Fellowships:
                  </span>
                  <div className="space-y-2">
                    {activeSurgeon.memberships.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#262126]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/surgeons"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs uppercase tracking-wider font-semibold hover:bg-[#262126] transition-all shadow-md"
                  >
                    <span>View Full Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-panel-light text-[#3A243F] text-xs uppercase tracking-wider font-semibold hover:bg-[#FFE2E2] transition-all shadow-sm"
                  >
                    <span>Consult Dr. {activeSurgeon.name.split(' ')[1]}</span>
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {surgeonsData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveSurgeonIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                idx === activeSurgeonIndex
                  ? 'bg-[#3A243F] text-[#FBEFEF] shadow-md'
                  : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}
