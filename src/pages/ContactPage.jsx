import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Screen12ConsultationCTA from '../components/sections/Screen12ConsultationCTA';

export default function ContactPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Contact Us & Clinic Location | TARASAKA Centre</title>
        <meta name="description" content="Contact TARASAKA Plastic Surgery Centre in Ahmedabad. Direct phone, WhatsApp concierge, clinic hours, and location address." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Contact & Location Details
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-6 glass-panel-light p-8 rounded-3xl border border-[#FFE2E2] shadow-xl">
            <h3 className="font-serif-editorial text-3xl font-bold text-[#3A243F]">Flagship Aesthetic Centre</h3>
            
            <div className="space-y-4 text-xs text-[#262126]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5B3D3] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#3A243F]">Address</strong>
                  <span>TARASAKA Aesthetic Tower, SG Highway, Ahmedabad, Gujarat 380054, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5B3D3] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#3A243F]">Direct Appointments</strong>
                  <span>+91 98765 43210 / +91 98765 43211</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5B3D3] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#3A243F]">Email Inquiries</strong>
                  <span>concierge@tarasaka-plasticsurgery.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5B3D3] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#3A243F]">Consultation Hours</strong>
                  <span>Monday – Saturday: 09:00 AM – 07:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 h-96 rounded-3xl overflow-hidden shadow-xl border border-[#FFE2E2] bg-[#FFE2E2]/30 flex items-center justify-center text-xs text-[#3A243F] font-mono">
            [ Interactive Map Placeholder — SG Highway, Ahmedabad ]
          </div>
        </div>

        <div className="my-12">
          <Screen12ConsultationCTA />
        </div>
      </section>
    </SubpageLayout>
  );
}
