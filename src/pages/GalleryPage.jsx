import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { SlidersHorizontal, ShieldCheck, Info } from 'lucide-react';
import { beforeAfterCases } from '../data/galleryData';

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredCases = selectedFilter === 'all'
    ? beforeAfterCases
    : beforeAfterCases.filter(c => c.category === selectedFilter);

  return (
    <SubpageLayout>
      <Helmet>
        <title>Before & After Results Gallery | TARASAKA Centre</title>
        <meta name="description" content="Browse clinical before and after plastic surgery results for rhinoplasty, deep-plane facelifts, VASER liposuction, and breast procedures." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono uppercase">
            Clinical Documentation
          </span>
          <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5B3D3]" /> Patient Consent Verified
          </span>
        </div>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Before & After Gallery
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['all', 'face', 'body', 'breast', 'hair'].map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedFilter === filter
                  ? 'bg-[#3A243F] text-[#FBEFEF] shadow-md'
                  : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCases.map(item => (
            <div key={item.id} className="glass-panel-light p-6 rounded-3xl border border-[#FFE2E2] shadow-xl space-y-4">
              <div className="grid grid-cols-2 gap-2 h-72 rounded-2xl overflow-hidden relative">
                <div className="relative h-full">
                  <img src={item.beforeImage} alt={`Before ${item.title}`} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-white text-[10px] font-mono">BEFORE</span>
                </div>
                <div className="relative h-full">
                  <img src={item.afterImage} alt={`After ${item.title}`} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#3A243F]/80 text-[#FBEFEF] text-[10px] font-mono">AFTER ({item.timeline})</span>
                </div>
              </div>

              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F]">{item.title}</h3>
                <p className="text-xs text-[#C5B3D3] font-mono uppercase font-bold mt-1">Procedure: {item.procedureName}</p>
                <p className="text-xs text-[#262126]/80 italic mt-3 bg-[#FBEFEF] p-3 rounded-xl border border-[#FFE2E2]">
                  "{item.surgeonNote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-[#FFE2E2]/60 border border-[#F5CBCB] flex items-center gap-3 text-xs text-[#3A243F]">
          <Info className="w-5 h-5 shrink-0" />
          <span>
            Individual surgical outcomes vary depending on anatomical starting point. All photography published under explicit patient authorization.
          </span>
        </div>
      </section>
    </SubpageLayout>
  );
}
