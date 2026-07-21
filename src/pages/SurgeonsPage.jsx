import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Link } from 'react-router-dom';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { surgeonsData } from '../data/surgeonsData';

export default function SurgeonsPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Meet the Plastic Surgeons | TARASAKA Centre</title>
        <meta name="description" content="Meet our world-class board-certified plastic surgeons specializing in structural rhinoplasty, deep-plane facelifts, and high-definition body sculpting." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono uppercase">
            Medical Faculty
          </span>
          <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
            Board-Certified Plastic Surgeons
          </span>
        </div>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-12">
          Surgical Maestros & Clinical Leadership
        </h1>

        <div className="space-y-16">
          {surgeonsData.map((surgeon, index) => (
            <div
              key={surgeon.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border border-[#FFE2E2] glass-panel-light shadow-xl ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-5 relative h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[#FFE2E2]">
                <img
                  src={surgeon.image}
                  alt={surgeon.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel-dark text-[#FFF9F8] text-xs">
                  <span className="font-handwritten text-2xl text-[#F5CBCB] block">{surgeon.signature}</span>
                  <p className="italic">"{surgeon.quote}"</p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#C5B3D3] font-bold uppercase tracking-widest block mb-1">
                    {surgeon.title}
                  </span>
                  <h2 className="font-serif-editorial text-4xl font-bold text-[#3A243F] mb-2">
                    {surgeon.name}
                  </h2>
                  <p className="text-xs font-mono text-[#3A243F]/80 pb-4 border-b border-[#FFE2E2]">
                    {surgeon.qualifications} — {surgeon.experience}
                  </p>
                </div>

                <p className="text-sm text-[#262126]/80 leading-relaxed font-light">
                  {surgeon.bio}
                </p>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#3A243F] mb-3">Memberships & Fellowships:</h4>
                  <div className="space-y-1.5">
                    {surgeon.memberships.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#262126]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#262126] transition-all shadow-md"
                  >
                    <span>Book Private Consultation with {surgeon.name.split(' ')[1]}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
