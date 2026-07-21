import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { ShieldCheck, Award, Heart, Sparkles } from 'lucide-react';
import HandwrittenAnnotation from '../components/ui/HandwrittenAnnotation';

export default function AboutPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>About Us | TARASAKA Plastic & Cosmetic Surgery Centre</title>
        <meta name="description" content="Discover TARASAKA Centre — premier plastic and cosmetic surgery clinic combining surgical precision, natural facial harmony, and patient-first medical safety." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono uppercase">
            About TARASAKA
          </span>
          <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold">
            Sculpted Elegance — Science & Artistry
          </span>
        </div>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Redefining Luxury Medical & Surgical Excellence
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-base text-[#262126]/80 leading-relaxed font-light">
            <p>
              Founded in 2004 by Dr. Vikramaditya Tarasaka, TARASAKA Plastic & Cosmetic Surgery Centre was established with a singular vision: to liberate plastic surgery from artificial trends and re-anchor it in anatomical precision, individual facial harmony, and ethical patient care.
            </p>
            <p>
              Our flagship facility in Ahmedabad spans over 25,000 square feet, featuring ultra-sterile laminar flow operating theaters, dedicated microsurgical suites, 3D vector imaging labs, and luxury private recovery rooms.
            </p>
            <div className="pt-2">
              <HandwrittenAnnotation text="Designed around you" />
            </div>
          </div>

          <div className="lg:col-span-5 relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-[#FFE2E2]">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
              alt="TARASAKA Surgical Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <Award className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">22+ Years Faculty Experience</h3>
            <p className="text-xs text-[#262126]/75 leading-relaxed">
              Our board-certified plastic surgeons hold international fellowships in Paris, Milan, and Seoul.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <ShieldCheck className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">NABH Facility Accreditation</h3>
            <p className="text-xs text-[#262126]/75 leading-relaxed">
              Equipped with HEPA air filtration, cardiac anesthesia, and 24/7 post-operative nursing care.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-light border border-[#FFE2E2]">
            <Heart className="w-8 h-8 text-[#3A243F] mb-4" />
            <h3 className="font-serif-editorial text-2xl font-bold text-[#3A243F] mb-2">Ethical Patient Advocacy</h3>
            <p className="text-xs text-[#262126]/75 leading-relaxed">
              We never perform unnecessary procedures. Every treatment plan prioritizes natural outcomes and safety.
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
