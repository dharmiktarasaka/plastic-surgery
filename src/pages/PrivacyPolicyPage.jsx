import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';

export default function PrivacyPolicyPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Privacy Policy | TARASAKA Plastic Surgery</title>
        <meta name="description" content="Read TARASAKA Centre's strict medical privacy policy and HIPAA/GDPR data protection standards." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-4xl mx-auto space-y-6 text-xs text-[#262126]/80 leading-relaxed font-light">
        <h1 className="font-serif-editorial text-4xl font-bold text-[#3A243F]">Medical Privacy Policy</h1>
        <p>
          TARASAKA Plastic & Cosmetic Surgery Centre is committed to maintaining strict confidentiality regarding all patient communications, medical records, and digital inquiries.
        </p>
        <h3 className="font-serif-editorial text-xl font-bold text-[#3A243F]">1. Patient Data Security</h3>
        <p>
          All consultation forms, 3D imaging scans, and clinical notes are stored on encrypted medical servers accessible solely by authorized medical personnel.
        </p>
        <h3 className="font-serif-editorial text-xl font-bold text-[#3A243F]">2. Photography & Consent</h3>
        <p>
          Before-and-after photography is published strictly with explicit prior written authorization from the patient. Unconsented image publication is strictly prohibited.
        </p>
      </section>
    </SubpageLayout>
  );
}
