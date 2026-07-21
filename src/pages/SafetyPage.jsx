import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { ShieldCheck, Activity, Cpu, Lock } from 'lucide-react';

export default function SafetyPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Safety & Surgical Infrastructure | TARASAKA Centre</title>
        <meta name="description" content="Explore our NABH accredited surgical facility, laminar air flow operating theaters, cardiac anesthesia team, and 24/7 emergency care." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Surgical Rigor & Safety Infrastructure
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <ShieldCheck className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-3xl font-bold text-[#3A243F] mb-2">HEPA Laminar Operating Suites</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed">
              Ultra-clean air circulation filtering airborne micro-particles continuously to prevent surgical infection risks.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <Activity className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-3xl font-bold text-[#3A243F] mb-2">Consultant Anesthesiologists</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed">
              Board-certified cardiac anesthesiologists managing continuous real-time vital monitoring from induction through recovery.
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
