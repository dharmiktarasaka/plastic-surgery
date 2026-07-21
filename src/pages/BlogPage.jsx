import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { BookOpen } from 'lucide-react';

export default function BlogPage() {
  const articles = [
    {
      title: 'Structural Preservation vs Traditional Open Rhinoplasty',
      date: 'July 14, 2026',
      author: 'Dr. Vikramaditya Tarasaka',
      excerpt: 'Why preservation rhinoplasty techniques maintain natural cartilage elasticity while providing predictable long-term profile slope.'
    },
    {
      title: 'Understanding the Deep-Plane Facelift: Re-elevating SMAS Ligaments',
      date: 'June 28, 2026',
      author: 'Dr. Vikramaditya Tarasaka',
      excerpt: 'How sub-SMAS surgical dissection avoids skin tension and eliminates the windswept pulled look.'
    },
    {
      title: 'Postpartum Physique Restoration: Designing a Safe Mommy Makeover',
      date: 'May 19, 2026',
      author: 'Dr. Ananya Roy Tarasaka',
      excerpt: 'Single-stage body contouring combining breast mastopexy with rectus muscle repair.'
    }
  ];

  return (
    <SubpageLayout>
      <Helmet>
        <title>Surgical Journal & Educational Blog | TARASAKA Centre</title>
        <meta name="description" content="Read clinical insights on plastic surgery techniques, rhinoplasty preservation, deep-plane lifts, and body sculpting by Dr. Tarasaka." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          The Plastic Surgery Journal
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2] shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#C5B3D3] uppercase font-bold block mb-2">{art.date} • {art.author}</span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-3">{art.title}</h3>
                <p className="text-xs text-[#262126]/80 leading-relaxed font-light">{art.excerpt}</p>
              </div>
              <span className="mt-6 text-xs font-semibold uppercase text-[#3A243F] tracking-wider block">Read Article →</span>
            </div>
          ))}
        </div>
      </section>
    </SubpageLayout>
  );
}
