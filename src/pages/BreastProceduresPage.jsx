import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { procedureCategories } from '../data/proceduresData';

export default function BreastProceduresPage() {
  const category = procedureCategories.find(c => c.id === 'breast') || procedureCategories[1];

  return (
    <SubpageLayout>
      <Helmet>
        <title>Breast Surgery & Augmentation | TARASAKA Centre</title>
        <meta name="description" content="Dual-plane breast augmentation, mastopexy breast lift, and reduction mammaplasty with natural ergonomic silicone implants and soft movement." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono uppercase">
            Breast Aesthetics
          </span>
          <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
            Ergonomic & Natural Proportions
          </span>
        </div>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-6">
          {category.title}
        </h1>
        <p className="text-base sm:text-lg text-[#262126]/80 max-w-3xl font-light leading-relaxed mb-12">
          {category.shortDesc}
        </p>

        <div className="space-y-12">
          {category.procedures.map((proc) => (
            <div
              key={proc.id}
              id={proc.id}
              className="p-8 sm:p-12 rounded-3xl border border-[#FFE2E2] glass-panel-light shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-[#C5B3D3] uppercase tracking-widest font-bold block">
                  Breast Procedure
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#3A243F]">
                  {proc.name}
                </h2>
                <p className="text-sm text-[#262126]/80 leading-relaxed font-light">
                  {proc.overview}
                </p>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#3A243F] mb-2">Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proc.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#262126]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFF9F8] border border-[#FFE2E2] flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#3A243F] mb-2">Suitable Candidates:</h4>
                  <p className="text-xs text-[#262126]/80 leading-relaxed mb-6 italic">
                    "{proc.suitableFor}"
                  </p>
                </div>

                <Link
                  to="/book-consultation"
                  className="w-full py-3 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#262126] transition-all shadow-md"
                >
                  Book Private Breast Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
