import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import HandwrittenAnnotation from '../ui/HandwrittenAnnotation';

export default function Screen02ArtOfTransformation() {
  return (
    <section className="fullscreen-section bg-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Soft Lavender Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5B3D3]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-16">
        
        {/* Left Column: Asymmetrical Close-up Editorial Portrait with Surgeon Markup Graphic */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md h-[460px] sm:h-[540px] rounded-[3rem] overflow-hidden border border-[#FFE2E2] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
              alt="Natural Skin Texture & Facial Harmony"
              className="w-full h-full object-cover"
            />

            {/* Surgeon Planning Markup Line Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-[#C5B3D3]/80" viewBox="0 0 400 600">
              {/* Nasal vectors */}
              <motion.path
                d="M 200 220 L 200 320"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Cheek Malar Highlight Contour */}
              <motion.path
                d="M 140 290 Q 200 340 260 290"
                stroke="#F5CBCB"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.8 }}
              />
              {/* Chin Vector */}
              <motion.circle
                cx="200"
                cy="420"
                r="18"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </svg>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-dark text-[#FFF9F8] text-xs">
              <span className="text-[10px] font-mono text-[#F5CBCB] uppercase tracking-widest block mb-1">
                Surgeon Vector Mapping
              </span>
              <p className="text-[11px] opacity-80 leading-snug">
                Anatomical planning respects individual bone structure and tissue elasticity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Oversized Typography & Narrative Philosophy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
              02 / Philosophy
            </span>
            <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
              The Art of Natural Transformation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-editorial text-4xl sm:text-6xl text-[#3A243F] font-light leading-[1.05] tracking-tight mb-8"
          >
            Transformation should <br />
            <span className="italic font-serif-display text-[#262126]">never look artificial.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-[#262126]/80 font-normal leading-relaxed mb-8"
          >
            The hallmark of world-class plastic surgery is subtlety. True cosmetic perfection does not distort your features; it harmonizes your underlying anatomy, restoring youthful vitality while preserving your distinct facial identity.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl glass-panel-light border border-[#FFE2E2]">
              <h4 className="font-serif-editorial text-xl font-bold text-[#3A243F] mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5B3D3]" /> Patient-First Ethics
              </h4>
              <p className="text-xs text-[#262126]/75 leading-relaxed">
                We decline unnecessary procedures to uphold strict medical safety and long-term wellbeing.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-panel-light border border-[#FFE2E2]">
              <h4 className="font-serif-editorial text-xl font-bold text-[#3A243F] mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5B3D3]" /> Anatomical Precision
              </h4>
              <p className="text-xs text-[#262126]/75 leading-relaxed">
                Bespoke surgical mapping tailored to unique bone contours, skin density, and facial expressions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <HandwrittenAnnotation text="Explore your possibilities" />
          </div>

        </div>

      </div>

    </section>
  );
}
