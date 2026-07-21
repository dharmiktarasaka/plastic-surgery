import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Cpu, Lock, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Screen07PrecisionSafety() {
  return (
    <section className="fullscreen-section bg-[#1A161A] text-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Background High-Contrast Cinematic Operating Theatre Image */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Sterile Operating Theatre Environment"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A161A] via-[#1A161A]/80 to-[#1A161A]" />
      </div>

      {/* Technical Animated Overlay Grid & Scanline */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[linear-gradient(to_right,#C5B3D3_1px,transparent_1px),linear-gradient(to_bottom,#C5B3D3_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5CBCB] to-transparent animate-scanline" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-16 z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase border border-[#C5B3D3]/30">
                07 / Precision & Safety
              </span>
              <span className="text-xs uppercase tracking-widest text-[#F5CBCB] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5CBCB]" /> Medical Credibility & Surgical Rigor
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#FFF9F8] leading-none">
              Precision, Technology & Safety
            </h2>
          </div>

          <Link
            to="/safety"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3A243F] text-[#FFF9F8] text-xs uppercase tracking-widest font-medium border border-[#C5B3D3]/30 hover:bg-[#262126] transition-all shadow-md"
          >
            <span>Safety Infrastructure</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Technical Safety Features Grid */}
        <div className="my-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-[#262126]/90 border border-[#C5B3D3]/20 backdrop-blur-md relative overflow-hidden group hover:border-[#F5CBCB]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3A243F] text-[#F5CBCB] flex items-center justify-center mb-4 border border-[#C5B3D3]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#FFF9F8] mb-2">
              NABH Surgical Facility
            </h3>
            <p className="text-xs text-[#FFF9F8]/75 leading-relaxed mb-4">
              HEPA laminar air circulation system, ultra-sterile operating theaters, and hospital-grade infection control protocols.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#F5CBCB] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> ISO 9001 Certified Standards
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#262126]/90 border border-[#C5B3D3]/20 backdrop-blur-md relative overflow-hidden group hover:border-[#F5CBCB]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3A243F] text-[#F5CBCB] flex items-center justify-center mb-4 border border-[#C5B3D3]/20">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#FFF9F8] mb-2">
              Board Anesthesia Team
            </h3>
            <p className="text-xs text-[#FFF9F8]/75 leading-relaxed mb-4">
              Dedicated consultant cardiac anesthesiologists monitoring multiparameter vital signs continuously through all surgical stages.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#F5CBCB] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> Zero Compromise Anesthesia
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#262126]/90 border border-[#C5B3D3]/20 backdrop-blur-md relative overflow-hidden group hover:border-[#F5CBCB]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3A243F] text-[#F5CBCB] flex items-center justify-center mb-4 border border-[#C5B3D3]/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#FFF9F8] mb-2">
              3D Vector Imaging
            </h3>
            <p className="text-xs text-[#FFF9F8]/75 leading-relaxed mb-4">
              High-resolution 3D volumetric planning allows precise sub-millimeter surgical mapping and transparent outcome simulations.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#F5CBCB] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pre-Op Simulation Software
            </div>
          </motion.div>

        </div>

        {/* Footer Technical Bar */}
        <div className="p-4 rounded-2xl bg-[#3A243F]/80 border border-[#C5B3D3]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C5B3D3]">
          <span className="flex items-center gap-2 font-mono">
            <Lock className="w-4 h-4 text-[#F5CBCB]" /> Emergency ICU Support & 24/7 In-House Nursing Care
          </span>
          <span className="opacity-80">
            Full risk disclosure and informed consent reviewed during consultation.
          </span>
        </div>

      </div>

    </section>
  );
}
