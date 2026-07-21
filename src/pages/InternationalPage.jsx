import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Plane, Globe, ShieldCheck } from 'lucide-react';

export default function InternationalPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>International Patients VIP Concierge | TARASAKA Centre</title>
        <meta name="description" content="Concierge surgical care for international patients: airport transfer, virtual 3D consultations, luxury recovery suites, and dedicated translators." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          International Patient Concierge
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <Plane className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">Chauffeur & Airport Pickup</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Direct private transfer from Sardar Vallabhbhai Patel International Airport (AMD) to your recovery suite.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <Globe className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">Virtual 3D Consultation</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Complete pre-travel evaluation via encrypted video call with preliminary 3D volumetric simulation.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <ShieldCheck className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">VIP Recovery Apartments</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Luxury serviced apartments with dedicated in-suite nursing care and customized dietary plans.
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
