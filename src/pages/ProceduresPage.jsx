import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { procedureCategories } from '../data/proceduresData';

export default function ProceduresPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Surgical & Aesthetic Procedures | TARASAKA Centre</title>
        <meta name="description" content="Explore our complete spectrum of plastic, cosmetic, hair restoration, and non-surgical procedures tailored to individual facial and body proportions." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono uppercase">
            Procedure Index
          </span>
          <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
            Facial, Breast, Body & Regenerative Spectrum
          </span>
        </div>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-12">
          Bespoke Surgical Architecture
        </h1>

        <div className="space-y-16">
          {procedureCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="p-8 sm:p-12 rounded-3xl border border-[#FFE2E2] glass-panel-light shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#FFE2E2]">
                <div>
                  <span className="text-xs font-mono text-[#C5B3D3] font-bold uppercase tracking-widest block mb-1">
                    Surgical Category
                  </span>
                  <h2 className="font-serif-editorial text-4xl font-bold text-[#3A243F]">
                    {category.title}
                  </h2>
                  <p className="text-xs text-[#262126]/75 mt-1">{category.shortDesc}</p>
                </div>
                <Link
                  to={`/procedures/${category.id}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#262126] transition-all shadow-md shrink-0"
                >
                  <span>Category Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.procedures.map((proc) => (
                  <div
                    key={proc.id}
                    className="p-6 rounded-2xl bg-[#FFF9F8] border border-[#FFE2E2] flex flex-col justify-between hover:border-[#3A243F]/30 transition-all shadow-sm"
                  >
                    <div>
                      <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">
                        {proc.name}
                      </h3>
                      <p className="text-xs text-[#262126]/80 leading-relaxed mb-4">
                        {proc.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#FFE2E2] flex items-center justify-between text-[11px] font-mono text-[#3A243F]">
                      <span>Recovery: {proc.recoveryTime}</span>
                      <span>{proc.anesthesia}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
