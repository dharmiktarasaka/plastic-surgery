import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import HeroSculptureCanvas from '../3d/HeroSculptureCanvas';
import HandwrittenAnnotation from '../ui/HandwrittenAnnotation';

export default function Screen01Hero() {
  return (
    <section className="fullscreen-section bg-gradient-to-br from-[#FBEFEF] via-[#FFF9F8] to-[#FFE2E2] flex items-center justify-center relative overflow-hidden">
      
      {/* 3D Background Sculpture Layer */}
      <div className="absolute inset-0 z-0 opacity-80">
        <HeroSculptureCanvas />
      </div>

      {/* Subtle background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5B3D3]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-16">
        
        {/* Left Column: Heading, Subtext, CTA & Annotation */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
              01 / Introduction
            </span>
            <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5B3D3]" /> ISAPS & APSI Accredited Excellence
            </span>
          </motion.div>

          {/* Animated Main Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-light text-[#3A243F] leading-[0.95] tracking-tight mb-8"
          >
            Naturally You. <br />
            <span className="italic font-normal text-[#262126] font-serif-display">
              Precisely Refined.
            </span>
          </motion.h1>

          {/* Supporting Narrative Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-[#262126]/80 font-normal max-w-2xl leading-relaxed mb-10"
          >
            Personalised plastic and cosmetic surgery designed around your unique anatomy, natural facial proportions, and long-term wellbeing. Where world-class surgical precision meets artistic refinement.
          </motion.p>

          {/* CTA Buttons + Handwritten Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 relative"
          >
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold tracking-widest uppercase hover:bg-[#262126] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
            >
              <span>Book a Private Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/procedures"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel-light text-[#3A243F] text-xs font-semibold tracking-widest uppercase hover:bg-[#FFE2E2] transition-all shadow-md"
            >
              <span>Explore Procedures</span>
            </Link>

            {/* Handwritten Annotation Callout beside CTA inspired by Reference 1 */}
            <div className="absolute -top-12 left-64 hidden sm:block pointer-events-none">
              <HandwrittenAnnotation text="Begin your transformation" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Editorial Portrait Layer */}
        <div className="lg:col-span-4 relative flex items-center justify-center hidden lg:flex">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative w-full h-[520px] rounded-[2.5rem] overflow-hidden border border-[#FFE2E2] shadow-2xl glass-panel-light"
          >
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
              alt="Confident Natural Beauty Portrait"
              className="w-full h-full object-cover"
            />
            
            {/* Elegant Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-dark text-[#FFF9F8] text-xs border border-[#C5B3D3]/20">
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif-editorial text-base text-[#F5CBCB] italic font-semibold">Sculpted Elegance</span>
                <span className="text-[10px] font-mono opacity-60">EST. 2004</span>
              </div>
              <p className="text-[11px] text-[#FFF9F8]/80 leading-snug">
                Personalized facial harmony & surgical excellence by Dr. V. Tarasaka.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#3A243F]">
          Scroll or Swipe Down
        </span>
        <div className="w-4 h-7 border border-[#3A243F] rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-[#3A243F] rounded-full"
          />
        </div>
      </div>

    </section>
  );
}
