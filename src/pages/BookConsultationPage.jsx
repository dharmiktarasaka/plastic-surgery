import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import Screen12ConsultationCTA from '../components/sections/Screen12ConsultationCTA';

export default function BookConsultationPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Book a Private Consultation | TARASAKA Centre</title>
        <meta name="description" content="Request a private 1-on-1 plastic surgery consultation in-person in Ahmedabad or via 3D virtual tele-health." />
      </Helmet>

      <div className="py-8">
        <Screen12ConsultationCTA />
      </div>
    </SubpageLayout>
  );
}
