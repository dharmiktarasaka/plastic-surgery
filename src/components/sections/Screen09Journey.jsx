import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, ArrowUpRight, Compass } from 'lucide-react';

export default function Screen09Journey() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      step: '01',
      title: 'Private Consultation',
      subtitle: '45-Minute In-Depth Evaluation',
      desc: 'Meet directly with your lead plastic surgeon in a confidential setting. Discuss your aesthetic wishes, medical history, and personal expectations.',
      details: ['Anatomical assessment', '3D surface imaging', 'Medical history review']
    },
    {
      step: '02',
      title: 'Assessment & Goals',
      subtitle: '3D Simulation & Vector Analysis',
      desc: 'We map your facial or body proportions using high-resolution 3D volumetric scanners to simulate realistic post-surgical contours.',
      details: ['Vector proportion mapping', 'Realistic outcome modeling', 'Surgical option review']
    },
    {
      step: '03',
      title: 'Personalised Treatment Plan',
      subtitle: 'Bespoke Surgical Architecture',
      desc: 'Your surgeon designs a tailored surgical protocol detailing incision placement, tissue handling techniques, anesthesia selection, and transparent fee breakdown.',
      details: ['Custom incision placement', 'Anesthesia protocol', 'Transparent pricing']
    },
    {
      step: '04',
      title: 'Pre-Operative Preparation',
      subtitle: 'Health Optimization & Clearance',
      desc: 'Complete routine blood work and receive your personalized pre-op handbook with diet, supplement, and skin preparation guidelines.',
      details: ['Blood clearance panel', 'Pre-op handbook', 'Dedicated patient coordinator']
    },
    {
      step: '05',
      title: 'Procedure Day',
      subtitle: 'NABH Surgical Suite & Anesthesia',
      desc: 'Undergo your procedure in our state-of-the-art laminar air flow operating theater under continuous board-certified anesthesia monitoring.',
      details: ['HEPA sterile environment', 'Board cardiac anesthesiologist', 'Microsurgical precision']
    },
    {
      step: '06',
      title: 'Recovery & Aftercare',
      subtitle: 'Concierge Nursing & Comfort',
      desc: 'Rest in a private suite with 24/7 specialized post-operative nursing care, custom compression garments, and pain management protocols.',
      details: ['Private suite recovery', 'Custom compression gear', 'Daily nurse monitoring']
    },
    {
      step: '07',
      title: 'Long-Term Follow-Up',
      subtitle: 'Maturity Inspections & Care',
      desc: 'Scheduled check-ups at 1 week, 1 month, 6 months, and 1 year ensure proper scar maturation and long-term satisfaction.',
      details: ['Structured check-up schedule', 'Scar management therapy', 'Permanent patient relationship']
    }
  ];

  const activeData = journeySteps[activeStep];

  return (
    <section className="fullscreen-section bg-[#FBEFEF] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Soft Curved SVG Pathway */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 text-[#C5B3D3]" viewBox="0 0 1000 600">
        <motion.path
          d="M 50 300 C 250 100, 400 500, 600 200 C 750 50, 850 450, 950 300"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
                09 / Patient Roadmap
              </span>
              <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C5B3D3]" /> Structured Clinical Protocol
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#3A243F] leading-none">
              Your Consultation Journey
            </h2>
          </div>

          <Link
            to="/journey"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#262126] transition-all shadow-md"
          >
            <span>Read Journey Handbook</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 7-Step Interactive Organic Curved Node Progression */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Interactive Step Selector Path */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {journeySteps.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-102 font-semibold'
                      : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      isActive ? 'bg-[#C5B3D3] text-[#3A243F]' : 'bg-[#3A243F]/10 text-[#3A243F]'
                    }`}>
                      {item.step}
                    </span>
                    <span className="text-xs uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>
                  {isActive && <Sparkles className="w-4 h-4 text-[#F5CBCB]" />}
                </button>
              );
            })}
          </div>

          {/* Right Side: Detailed Card for Active Journey Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel-light p-8 sm:p-10 rounded-3xl border border-[#FFE2E2] shadow-2xl relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[#C5B3D3] uppercase font-bold">
                    Stage {activeData.step} of 07
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFE2E2] text-[#3A243F] text-xs font-medium">
                    {activeData.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-[#3A243F] mb-4">
                  {activeData.title}
                </h3>

                <p className="text-sm text-[#262126]/80 leading-relaxed mb-6 font-normal">
                  {activeData.desc}
                </p>

                <div className="space-y-2.5 mb-8">
                  {activeData.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#3A243F] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#3A243F]/10">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    className="text-xs uppercase tracking-wider font-semibold text-[#3A243F] disabled:opacity-30 hover:underline"
                  >
                    Previous Stage
                  </button>
                  <button
                    disabled={activeStep === journeySteps.length - 1}
                    onClick={() => setActiveStep(prev => Math.min(journeySteps.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#3A243F] disabled:opacity-30 hover:underline"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-[#262126]/60 font-mono">
          Select any stage above to inspect details of your surgical journey.
        </div>

      </div>

    </section>
  );
}
