import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '../data/faqData';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SubpageLayout>
      <Helmet>
        <title>Frequently Asked Questions | TARASAKA Centre</title>
        <meta name="description" content="Find clear medical answers regarding plastic surgery consultations, recovery timelines, facility safety, and treatment plans." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-12 max-w-4xl">
          {faqsData.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h2 className="font-serif-editorial text-3xl font-bold text-[#3A243F] border-b border-[#FFE2E2] pb-2">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((q, qIdx) => {
                  const globalIdx = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === globalIdx;
                  return (
                    <div key={qIdx} className="rounded-2xl glass-panel-light border border-[#FFE2E2] overflow-hidden">
                      <button
                        onClick={() => toggle(globalIdx)}
                        className="w-full p-5 text-left flex items-center justify-between font-serif-editorial text-xl font-bold text-[#3A243F]"
                      >
                        <span>{q.q}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[#C5B3D3]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs text-[#262126]/80 leading-relaxed font-light border-t border-[#FFE2E2]/60 pt-3">
                          {q.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
