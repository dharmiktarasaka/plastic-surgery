import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function JourneyPage() {
  const steps = [
    { num: '01', title: 'Private Consultation', desc: 'Detailed 45-minute medical evaluation with lead plastic surgeon.' },
    { num: '02', title: '3D Vector Simulation', desc: 'Volumetric surface scanning for precise anatomical modeling.' },
    { num: '03', title: 'Bespoke Surgical Architecture', desc: 'Custom protocol detailing incisions, anesthesia, and recovery timelines.' },
    { num: '04', title: 'Pre-Op Preparation', desc: 'Blood panels, medical clearance, and personalized pre-op handbook.' },
    { num: '05', title: 'Procedure Day', desc: 'State-of-the-art NABH laminar flow operating theater with cardiac anesthesia.' },
    { num: '06', title: 'Post-Op Recovery Suite', desc: '24/7 specialized nursing care in private luxury recovery quarters.' },
    { num: '07', title: 'Long-Term Check-Ups', desc: 'Scheduled follow-up inspections at 1 week, 1 month, 6 months, and 1 year.' }
  ];

  return (
    <SubpageLayout>
      <Helmet>
        <title>Your Consultation Journey | TARASAKA Centre</title>
        <meta name="description" content="Step-by-step roadmap from private consultation and 3D simulation to surgery and long-term follow-up." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          The TARASAKA Clinical Roadmap
        </h1>

        <div className="space-y-6 max-w-4xl">
          {steps.map((step) => (
            <div key={step.num} className="p-6 rounded-2xl glass-panel-light border border-[#FFE2E2] flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-[#3A243F] text-[#FBEFEF] font-mono font-bold flex items-center justify-center shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-1">{step.title}</h3>
                <p className="text-xs text-[#262126]/80 leading-relaxed font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
