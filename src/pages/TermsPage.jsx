import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';

export default function TermsPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Terms & Conditions | TARASAKA Plastic Surgery</title>
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-4xl mx-auto space-y-6 text-xs text-[#262126]/80 leading-relaxed font-light">
        <h1 className="font-serif-editorial text-4xl font-bold text-[#3A243F]">Terms and Conditions</h1>
        <p>
          By accessing this website, you agree to comply with all applicable medical website guidelines and copyright laws.
        </p>
        <h3 className="font-serif-editorial text-xl font-bold text-[#3A243F]">Intellectual Property</h3>
        <p>
          All digital exhibition assets, 3D interactive models, and text copy are the exclusive intellectual property of TARASAKA DIGITAL Solutions.
        </p>
      </section>
    </SubpageLayout>
  );
}
