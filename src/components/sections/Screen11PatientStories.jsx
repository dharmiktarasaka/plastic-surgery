import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { patientStories } from '../../data/patientStoriesData';

export default function Screen11PatientStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const active = patientStories[currentIndex] || patientStories[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % patientStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + patientStories.length) % patientStories.length);
  };

  return (
    <section className="fullscreen-section bg-[#3A243F] text-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5B3D3]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#FFF9F8]/10 text-[#F5CBCB] text-[11px] font-mono tracking-[0.2em] uppercase border border-[#C5B3D3]/20">
                11 / Patient Narrative
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5B3D3] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5CBCB]" /> Real Experiences & Transformation
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#FFF9F8] leading-none">
              Patient Transformation Stories
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#C5B3D3]/30 hover:bg-[#FFF9F8]/10 transition-all text-[#FFF9F8]"
              aria-label="Previous Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[#C5B3D3]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(patientStories.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#C5B3D3]/30 hover:bg-[#FFF9F8]/10 transition-all text-[#FFF9F8]"
              aria-label="Next Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Testimonial Card */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Portrait Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-[#C5B3D3]/20 shadow-2xl"
              >
                <img
                  src={active.image}
                  alt={active.patientName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A243F] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-mono text-[#F5CBCB] uppercase tracking-widest block mb-1">
                    {active.procedure}
                  </span>
                  <h4 className="font-serif-editorial text-2xl text-[#FFF9F8] font-bold">
                    {active.patientName}, {active.age}
                  </h4>
                  <span className="text-[11px] text-[#C5B3D3] block">{active.location}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Quotation Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-12 h-12 text-[#C5B3D3]/40 mb-4" />

                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F5CBCB] font-light leading-snug mb-6">
                  "{active.headline}"
                </h3>

                <p className="text-sm sm:text-base text-[#FFF9F8]/90 leading-relaxed font-light mb-6">
                  "{active.quote}"
                </p>

                <div className="p-4 rounded-2xl bg-[#FFF9F8]/5 border border-[#C5B3D3]/20">
                  <span className="text-[10px] font-mono text-[#C5B3D3] uppercase tracking-widest font-bold block mb-1">
                    Recovery Notes:
                  </span>
                  <p className="text-xs text-[#FFF9F8]/80 leading-relaxed italic">
                    {active.recoveryExperience}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-[#C5B3D3]/70 font-mono">
          Patient testimonials reflect individual subjective experiences. Results vary based on personal surgical plans.
        </div>

      </div>

    </section>
  );
}
