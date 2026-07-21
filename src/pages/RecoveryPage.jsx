import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Heart, Clock, ShieldAlert } from 'lucide-react';

export default function RecoveryPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Recovery & Aftercare Handbook | TARASAKA Centre</title>
        <meta name="description" content="Detailed recovery timelines, care protocols, compression garment instructions, and 24/7 medical helpline access." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Recovery & Aftercare Protocols
        </h1>

        <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2] space-y-6 max-w-4xl">
          <div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">Stage 1: First 24 Hours</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Rest in private suite under nurse monitoring. Ice compresses applied, oral pain medications as prescribed.
            </p>
          </div>

          <div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">Stage 2: First Week (Days 2 - 7)</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Splint and suture removal on Day 6–7. Wear custom compression garments continuously to reduce swelling.
            </p>
          </div>

          <div>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">Stage 3: Weeks 2 - 4</h3>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Resume light desk work and daily routine. Avoid heavy lifting (&gt;5kg) or strenuous exercise.
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
