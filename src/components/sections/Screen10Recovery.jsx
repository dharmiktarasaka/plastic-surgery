import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShieldAlert, CheckCircle2, ArrowUpRight, Clock } from 'lucide-react';

export default function Screen10Recovery() {
  const [activeStage, setActiveStage] = useState('24h');

  const timelineStages = [
    {
      id: '24h',
      label: 'First 24 Hours',
      title: 'Immediate Post-Op Monitoring & Rest',
      progress: 'Initial awakening & vital monitoring',
      care: 'Rest in private suite, continuous nurse checkups, ice compression, prescribed oral analgesics.',
      followUp: 'Surgeon round inspection before discharge.',
      warning: 'Excessive sudden bleeding, sharp localized pain unalleviated by medication, or fever above 100.4°F.'
    },
    {
      id: '1week',
      label: 'First Week (Days 2 - 7)',
      title: 'Tissue Healing & Splint / Suture Removal',
      progress: 'Peak swelling subsiding, gentle mobility',
      care: 'Keep head elevated, apply prescribed antibiotic ointment, wear custom compression garment continuously.',
      followUp: 'In-clinic suture and nasal splint removal on Day 6–7.',
      warning: 'Asymmetrical swelling expansion or localized skin redness spreading outwards.'
    },
    {
      id: '2-4weeks',
      label: 'Two to Four Weeks',
      title: 'Resumption of Light Daily Activities',
      progress: '70% swelling resolution, bruising faded',
      care: 'Resume desk work, gentle walking. Avoid vigorous exercise, heavy lifting (>5kg), or direct sun exposure.',
      followUp: '3-week clinical scar inspection and lymphatic massage guidance.',
      warning: 'Persistent hardness or fluid accumulation (seroma).'
    },
    {
      id: 'routine',
      label: 'Return to Routine (Month 2)',
      title: 'Full Exercise & Lifestyle Clearance',
      progress: '90% swelling resolution, soft natural feel',
      care: 'Resume full gym workouts, swimming, and normal physical routines. Apply silicone gel scar sheet.',
      followUp: '2-month photographic progress documentation.',
      warning: 'Hyperpigmentation around scar lines if exposed to sun without SPF 50+.'
    },
    {
      id: 'long-term',
      label: 'Long-Term (6 - 12 Months)',
      title: 'Final Surgical Result Maturity',
      progress: '100% final structural outcome',
      care: 'Scars fade to fine pale lines. Natural tissue flexibility fully established.',
      followUp: 'Annual complimentary surgical wellness check.',
      warning: 'None under normal post-op progression.'
    }
  ];

  const currentStageData = timelineStages.find(s => s.id === activeStage) || timelineStages[0];

  return (
    <section className="fullscreen-section bg-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Soft Natural Lighting Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80"
          alt="Peaceful Recovery & Wellness Environment"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
                10 / Aftercare Protocol
              </span>
              <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C5B3D3]" /> Gentle Healing & Long-Term Comfort
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#3A243F] leading-none">
              Recovery & Aftercare Journey
            </h2>
          </div>

          <Link
            to="/recovery"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#262126] transition-all shadow-md"
          >
            <span>Full Recovery Guide</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Timeline Stage Selectors */}
        <div className="my-auto">
          
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {timelineStages.map((stage) => {
              const isActive = stage.id === activeStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`px-5 py-3 rounded-2xl text-xs font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-102 font-semibold'
                      : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
                  }`}
                >
                  <Clock className={`w-3.5 h-3.5 ${isActive ? 'text-[#F5CBCB]' : 'text-[#C5B3D3]'}`} />
                  <span>{stage.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Card for Selected Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStageData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-panel-light p-8 sm:p-10 rounded-3xl border border-[#FFE2E2] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C5B3D3] uppercase tracking-widest block mb-2 font-bold">
                    Stage Focus: {currentStageData.label}
                  </span>
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#3A243F] mb-3">
                    {currentStageData.title}
                  </h3>
                  
                  <div className="mb-4 text-xs font-semibold text-[#3A243F] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" /> Expected Progress: {currentStageData.progress}
                  </div>

                  <p className="text-xs text-[#262126]/80 leading-relaxed mb-4">
                    <strong className="text-[#3A243F]">Care Instructions:</strong> {currentStageData.care}
                  </p>

                  <p className="text-xs text-[#262126]/80 leading-relaxed">
                    <strong className="text-[#3A243F]">Follow-Up Plan:</strong> {currentStageData.followUp}
                  </p>
                </div>
              </div>

              {/* Warning Signs Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFE2E2]/60 border border-[#F5CBCB] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3A243F] font-bold mb-2">
                    <ShieldAlert className="w-4 h-4 text-[#3A243F]" /> Warning Signs to Report Immediately:
                  </div>
                  <p className="text-xs text-[#3A243F]/90 leading-relaxed italic">
                    "{currentStageData.warning}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F5CBCB]/60 text-[11px] text-[#3A243F]">
                  Emergency Medical Helpline: <strong>+91 98765 43210 (24/7 On-Call)</strong>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Footer Medical Note */}
        <div className="text-center text-xs text-[#262126]/60 italic font-mono">
          Note: Exact recovery timelines vary depending on surgical scope, individual healing capacity, and adherence to post-op care protocols.
        </div>

      </div>

    </section>
  );
}
