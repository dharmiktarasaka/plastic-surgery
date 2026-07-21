import React from 'react';
import { motion } from 'framer-motion';
import FacialModelCanvas from '../3d/FacialModelCanvas';

export default function Screen04FacialHarmony() {
  return (
    <section className="fullscreen-section bg-[#FBEFEF] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Subtle Gradient Layer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE2E2] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Section Header */}
        <div className="px-6 sm:px-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
              04 / Facial Harmony
            </span>
            <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
              Interactive 3D Anatomical Analysis
            </span>
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#3A243F] font-light leading-none">
            Anatomical Facial Harmony
          </h2>
        </div>

        {/* 3D Facial Canvas & Interactive Focus Zones */}
        <div className="my-auto w-full h-[520px]">
          <FacialModelCanvas />
        </div>

        {/* Footer Note */}
        <div className="px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#262126]/60">
          <span className="italic">
            Interactive educational model — tailored surgical planning is finalized during in-person 3D facial imaging.
          </span>
          <span className="font-mono text-[#3A243F]">
            Touch / Drag head to rotate 360°
          </span>
        </div>

      </div>

    </section>
  );
}
