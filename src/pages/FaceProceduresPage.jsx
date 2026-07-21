import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { procedureCategories } from '../data/proceduresData';

export default function FaceProceduresPage() {
  const category = procedureCategories.find(c => c.id === 'face') || procedureCategories[0];

  return (
    <SubpageLayout>
      <Helmet>
        <title>Facial Plastic Surgery & Rhinoplasty | TARASAKA Centre</title>
        <meta name="description" content="Structural preservation rhinoplasty, deep-plane facelift, blepharoplasty, and chin augmentation tailored to natural facial proportions." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono uppercase">
            Facial Surgery
          </span>
          <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
            Anatomical Facial Harmony
          </span>
        </div>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-6">
          {category.title}
        </h1>
        <p className="text-base sm:text-lg text-[#262126]/80 max-w-3xl font-light leading-relaxed mb-12">
          {category.shortDesc} Our facial plastic surgeons utilize sub-plane preservation techniques to refine nasal contours, elevate midface ligaments, and refresh eyelid skin without artificial tightness.
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
                  Anatomical Procedure
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#3A243F]">
                  {proc.name}
                </h2>
                <p className="text-sm text-[#262126]/80 leading-relaxed font-light">
                  {proc.overview}
                </p>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#3A243F] mb-2">Key Surgical Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proc.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#262126]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-[#3A243F]">
                  <span className="px-3 py-1.5 rounded-full bg-[#FFE2E2]">Duration: {proc.duration}</span>
                  <span className="px-3 py-1.5 rounded-full bg-[#FFE2E2]">Anesthesia: {proc.anesthesia}</span>
                  <span className="px-3 py-1.5 rounded-full bg-[#FFE2E2]">Recovery: {proc.recoveryTime}</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFF9F8] border border-[#FFE2E2] flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#3A243F] mb-2">Ideal Patient Candidate:</h4>
                  <p className="text-xs text-[#262126]/80 leading-relaxed mb-6 italic">
                    "{proc.suitableFor}"
                  </p>
                </div>

                <Link
                  to="/book-consultation"
                  className="w-full py-3 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#262126] transition-all shadow-md"
                >
                  Consult Doctor for {proc.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
