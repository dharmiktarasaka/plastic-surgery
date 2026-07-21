import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Globe, Share2, MessageCircle, Send } from 'lucide-react';

export default function EditorialFooter() {
  return (
    <footer className="bg-[#262126] text-[#FFF9F8] pt-16 pb-12 px-6 sm:px-12 border-t border-[#C5B3D3]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#C5B3D3]/20 text-xs">
          
          <div className="md:col-span-1">
            <Link to="/" className="font-serif-editorial text-2xl font-bold tracking-wider text-[#FFF9F8] uppercase block mb-3">
              TARASAKA
            </Link>
            <p className="text-[#FFF9F8]/70 text-xs leading-relaxed mb-4">
              Luxury Plastic Surgery & Cosmetic Centre. Personalised facial harmony, body sculpting, and micro-precision aesthetics.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#F5CBCB]">
              <ShieldCheck className="w-4 h-4 text-[#C5B3D3]" /> NABH Accredited Facility
            </span>
          </div>

          <div>
            <h4 className="font-serif-editorial text-base font-bold text-[#F5CBCB] mb-3 uppercase">Procedures</h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/procedures/face" className="hover:text-[#FFF9F8]">Facial Surgery</Link></li>
              <li><Link to="/procedures/breast" className="hover:text-[#FFF9F8]">Breast Procedures</Link></li>
              <li><Link to="/procedures/body" className="hover:text-[#FFF9F8]">Body Contouring</Link></li>
              <li><Link to="/procedures/hair" className="hover:text-[#FFF9F8]">Hair Restoration</Link></li>
              <li><Link to="/procedures/non-surgical" className="hover:text-[#FFF9F8]">Medical Aesthetics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-editorial text-base font-bold text-[#F5CBCB] mb-3 uppercase">Patients</h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/gallery" className="hover:text-[#FFF9F8]">Before & After Gallery</Link></li>
              <li><Link to="/surgeons" className="hover:text-[#FFF9F8]">Meet the Surgeons</Link></li>
              <li><Link to="/safety" className="hover:text-[#FFF9F8]">Safety & Infrastructure</Link></li>
              <li><Link to="/recovery" className="hover:text-[#FFF9F8]">Recovery Handbook</Link></li>
              <li><Link to="/international" className="hover:text-[#FFF9F8]">International Patients</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-editorial text-base font-bold text-[#F5CBCB] mb-3 uppercase">Contact</h4>
            <p className="text-[#FFF9F8]/75 text-xs mb-2">
              TARASAKA Tower, SG Highway, Ahmedabad, Gujarat 380054
            </p>
            <p className="text-[#FFF9F8]/75 text-xs mb-4">
              Phone: +91 98765 43210
            </p>
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#F5CBCB] hover:text-[#262126] transition-all"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#C5B3D3]">
          <div>
            <span>Developed by TARASAKA DIGITAL Solutions</span> — All rights reserved by TARASAKA DIGITAL Solutions
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#FFF9F8]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FFF9F8]">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-[#FFF9F8]">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
