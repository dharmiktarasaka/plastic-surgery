import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import FooterSculptureCanvas from '../3d/FooterSculptureCanvas';

export default function Screen13FooterSection() {
  return (
    <section className="fullscreen-section bg-[#262126] text-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* 3D Background Sculpture Layer */}
      <div className="absolute inset-0 z-0">
        <FooterSculptureCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-12 z-10">
        
        {/* Top Header & Brand Message */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#C5B3D3]/20">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#F5CBCB] block mb-2 font-semibold">
              TARASAKA Portfolio Exhibition
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#FFF9F8] leading-none">
              Sculpted Elegance & Surgical Science
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F5CBCB] text-[#262126] text-xs font-semibold uppercase tracking-wider hover:bg-[#FFF9F8] transition-all shadow-xl"
            >
              <span>Book Private Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Multi-Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 my-auto text-xs">
          
          {/* Col 1: Facial Procedures */}
          <div>
            <h4 className="font-serif-editorial text-lg font-bold text-[#F5CBCB] mb-3 uppercase tracking-wider">
              Facial Surgery
            </h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/procedures/face#rhinoplasty" className="hover:text-[#FFF9F8] transition-colors">Structural Rhinoplasty</Link></li>
              <li><Link to="/procedures/face#facelift" className="hover:text-[#FFF9F8] transition-colors">Deep-Plane Facelift</Link></li>
              <li><Link to="/procedures/face#eyelid-surgery" className="hover:text-[#FFF9F8] transition-colors">Blepharoplasty</Link></li>
              <li><Link to="/procedures/face#chin-neck-lift" className="hover:text-[#FFF9F8] transition-colors">Chin Augmentation</Link></li>
              <li><Link to="/procedures/face" className="hover:text-[#FFF9F8] transition-colors">Neck Sculpting</Link></li>
            </ul>
          </div>

          {/* Col 2: Body & Breast */}
          <div>
            <h4 className="font-serif-editorial text-lg font-bold text-[#F5CBCB] mb-3 uppercase tracking-wider">
              Body & Breast
            </h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/procedures/body#vaser-liposuction" className="hover:text-[#FFF9F8] transition-colors">HD VASER Liposuction</Link></li>
              <li><Link to="/procedures/body#tummy-tuck" className="hover:text-[#FFF9F8] transition-colors">Abdominoplasty</Link></li>
              <li><Link to="/procedures/body#mommy-makeover" className="hover:text-[#FFF9F8] transition-colors">Mommy Makeover</Link></li>
              <li><Link to="/procedures/breast#breast-augmentation" className="hover:text-[#FFF9F8] transition-colors">Breast Augmentation</Link></li>
              <li><Link to="/procedures/breast#breast-lift" className="hover:text-[#FFF9F8] transition-colors">Mastopexy Breast Lift</Link></li>
            </ul>
          </div>

          {/* Col 3: Specialized Care */}
          <div>
            <h4 className="font-serif-editorial text-lg font-bold text-[#F5CBCB] mb-3 uppercase tracking-wider">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/procedures/hair" className="hover:text-[#FFF9F8] transition-colors">Micro-FUE Hair Transplant</Link></li>
              <li><Link to="/procedures/reconstructive" className="hover:text-[#FFF9F8] transition-colors">Reconstructive Surgery</Link></li>
              <li><Link to="/procedures/non-surgical" className="hover:text-[#FFF9F8] transition-colors">Dermal Harmonization</Link></li>
              <li><Link to="/international" className="hover:text-[#FFF9F8] transition-colors">International Patients</Link></li>
              <li><Link to="/financing" className="hover:text-[#FFF9F8] transition-colors">Financing Options</Link></li>
            </ul>
          </div>

          {/* Col 4: Patient Resources */}
          <div>
            <h4 className="font-serif-editorial text-lg font-bold text-[#F5CBCB] mb-3 uppercase tracking-wider">
              Patient Resources
            </h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/gallery" className="hover:text-[#FFF9F8] transition-colors">Before & After Gallery</Link></li>
              <li><Link to="/surgeons" className="hover:text-[#FFF9F8] transition-colors">Meet the Surgeons</Link></li>
              <li><Link to="/safety" className="hover:text-[#FFF9F8] transition-colors">Safety Infrastructure</Link></li>
              <li><Link to="/recovery" className="hover:text-[#FFF9F8] transition-colors">Recovery Handbook</Link></li>
              <li><Link to="/faqs" className="hover:text-[#FFF9F8] transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 5: Legal & Compliance */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif-editorial text-lg font-bold text-[#F5CBCB] mb-3 uppercase tracking-wider">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-[#FFF9F8]/75">
              <li><Link to="/privacy" className="hover:text-[#FFF9F8] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#FFF9F8] transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#FFF9F8] transition-colors">Medical Disclaimer</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFF9F8] transition-colors">Clinic Location Map</Link></li>
            </ul>
          </div>

        </div>

        {/* Oversized Brand Typography */}
        <div className="text-center my-2 select-none pointer-events-none">
          <h1 className="font-serif-editorial text-6xl sm:text-9xl font-bold tracking-widest text-[#FFF9F8]/10 uppercase leading-none">
            TARASAKA
          </h1>
        </div>

        {/* Bottom Legal Credits & TARASAKA DIGITAL Solutions Branding */}
        <div className="pt-6 border-t border-[#C5B3D3]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#C5B3D3]">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#FFF9F8]">Developed by TARASAKA DIGITAL Solutions</span>
            <span>•</span>
            <span>All rights reserved by TARASAKA DIGITAL Solutions</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#FFF9F8] transition-colors" title="Global Site"><Globe className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#FFF9F8] transition-colors" title="Share"><Share2 className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#FFF9F8] transition-colors" title="Message"><MessageCircle className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#FFF9F8] transition-colors" title="Contact"><Send className="w-4 h-4" /></a>
          </div>
        </div>

      </div>

    </section>
  );
}
