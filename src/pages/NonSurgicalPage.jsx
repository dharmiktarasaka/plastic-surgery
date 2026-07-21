import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { procedureCategories } from '../data/proceduresData';

export default function NonSurgicalPage() {
  const category = procedureCategories.find(c => c.id === 'non-surgical') || procedureCategories[6];

  return (
    <SubpageLayout>
      <Helmet>
        <title>Non-Surgical Medical Aesthetics | TARASAKA Centre</title>
        <meta name="description" content="Hyaluronic acid dermal fillers, neuromodulators, and non-surgical facial harmonization with zero downtime." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-6">
          {category.title}
        </h1>
        <p className="text-base text-[#262126]/80 max-w-3xl font-light mb-12">
          {category.shortDesc}
        </p>

        <div className="p-8 sm:p-12 rounded-3xl border border-[#FFE2E2] glass-panel-light shadow-xl">
          {category.procedures.map(proc => (
            <div key={proc.id} className="space-y-6">
              <h2 className="font-serif-editorial text-4xl font-bold text-[#3A243F]">{proc.name}</h2>
              <p className="text-sm text-[#262126]/80 leading-relaxed font-light">{proc.overview}</p>
              <div className="space-y-2">
                {proc.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#262126]">
                    <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/book-consultation" className="px-8 py-3.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider inline-block">
                  Book Aesthetic Harmonization
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
