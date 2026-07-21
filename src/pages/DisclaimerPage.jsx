import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';

export default function DisclaimerPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Medical Disclaimer | TARASAKA Plastic Surgery</title>
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-4xl mx-auto space-y-6 text-xs text-[#262126]/80 leading-relaxed font-light">
        <h1 className="font-serif-editorial text-4xl font-bold text-[#3A243F]">Medical Disclaimer</h1>
        <p>
          The content published on this website is for educational and informational purposes only and does not constitute formal medical diagnosis or advice.
        </p>
        <p>
          Individual surgical outcomes vary depending on patient anatomy, healing capacity, and adherence to post-operative protocols. Surgical plans are finalized during in-person medical consultations.
        </p>
      </section>
    </SubpageLayout>
  );
}
