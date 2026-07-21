import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Activity } from 'lucide-react';

export default function Screen05BodyContouring() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bodyProcedures = [
    {
      id: 'vaser-lipo',
      title: 'HD VASER Liposculpture',
      subtitle: 'Ultrasound Muscular Etching & Fat Emulsification',
      desc: 'Targeted ultrasound waves break down fat deposits while preserving essential nerves and vasculature. Creates sharp athletic muscular definition and promotes skin tightening contraction.',
      recovery: '7 - 10 Days',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      tag: 'Athletic Etching'
    },
    {
      id: 'tummy-tuck',
      title: 'Abdominoplasty (Tummy Tuck)',
      subtitle: 'Abdominal Muscle Repair & Lax Skin Resection',
      desc: 'Surgically repairs separated abdominal rectus muscles (diastasis recti) and removes redundant lower belly skin folds for a firm, ultra-flat midsection contour.',
      recovery: '14 - 21 Days',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      tag: 'Core Repair'
    },
    {
      id: 'mommy-makeover',
      title: 'Bespoke Mommy Makeover',
      titleHighlight: 'Pre-Pregnancy Restoration',
      desc: 'A synchronized single-stage combination of breast elevation/augmentation, tummy tuck, and flank liposuction tailored to your unique anatomical postpartum changes.',
      recovery: '2 - 3 Weeks',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
      tag: 'Full Restoration'
    },
    {
      id: 'body-lift',
      title: '360 Belt Body Lift',
      subtitle: 'Circumferential Contouring Post Weight Loss',
      desc: 'Eliminates circumferential skin sag around flanks, lower back, and buttocks following massive weight loss, creating a continuous athletic silhouette.',
      recovery: '3 Weeks',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
      tag: 'Post-Bariatric'
    },
    {
      id: 'male-contouring',
      title: 'Male Chest & Body Sculpting',
      subtitle: 'Gynecomastia Correction & Torso Etching',
      desc: 'Removes excess glandular chest tissue and carves the pectoral margin for a masculine, firm chest contour with hidden incision placement.',
      recovery: '5 - 7 Days',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
      tag: 'Masculine Sculpting'
    }
  ];

  const active = bodyProcedures[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bodyProcedures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bodyProcedures.length) % bodyProcedures.length);
  };

  return (
    <section className="fullscreen-section bg-[#262126] text-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Soft Animated Contour Graphic Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-[#C5B3D3]" viewBox="0 0 1000 600">
        <path d="M 0 300 Q 250 150 500 300 T 1000 300" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M 0 350 Q 250 200 500 350 T 1000 350" stroke="#F5CBCB" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
                05 / Body Contouring Story
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5B3D3] font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#F5CBCB]" /> Silhouette & Posture Elegance
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#FFF9F8] leading-none">
              Sculpting Silhouette & Confidence
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#C5B3D3]/30 hover:bg-[#3A243F] transition-all text-[#FFF9F8]"
              aria-label="Previous Procedure"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[#C5B3D3]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(bodyProcedures.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#C5B3D3]/30 hover:bg-[#3A243F] transition-all text-[#FFF9F8]"
              aria-label="Next Procedure"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Full-Screen Horizontal Visual Slider Content */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Large Editorial Image */}
          <div className="lg:col-span-7 relative h-[350px] sm:h-[440px] rounded-3xl overflow-hidden border border-[#C5B3D3]/20 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#262126] via-transparent to-transparent opacity-80" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 rounded-full bg-[#3A243F]/90 backdrop-blur-md text-[#F5CBCB] text-xs font-mono tracking-wider font-semibold">
                {active.tag}
              </span>
            </div>
          </div>

          {/* Right Side: Procedure Story Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-mono text-[#C5B3D3] uppercase tracking-widest block mb-2">
                  {active.subtitle}
                </span>

                <h3 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#FFF9F8] mb-4">
                  {active.title}
                </h3>

                <p className="text-sm text-[#FFF9F8]/80 leading-relaxed mb-6 font-light">
                  {active.desc}
                </p>

                <div className="p-4 rounded-2xl bg-[#3A243F]/60 border border-[#C5B3D3]/20 mb-8 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#C5B3D3] block text-[10px] uppercase font-mono">Estimated Recovery</span>
                    <span className="font-semibold text-[#FFF9F8] text-sm">{active.recovery}</span>
                  </div>
                  <div>
                    <span className="text-[#C5B3D3] block text-[10px] uppercase font-mono">Technique</span>
                    <span className="font-semibold text-[#FFF9F8] text-sm">Ultra-Sound Assisted</span>
                  </div>
                </div>

                <Link
                  to="/procedures/body"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F5CBCB] text-[#262126] text-xs font-semibold uppercase tracking-wider hover:bg-[#FFF9F8] transition-all shadow-lg"
                >
                  <span>Explore Body Contouring</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Horizontal Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {bodyProcedures.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all ${
                idx === currentIndex
                  ? 'bg-[#3A243F] text-[#F5CBCB] border border-[#C5B3D3]'
                  : 'bg-[#262126] text-[#FFF9F8]/60 hover:text-[#FFF9F8]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}
