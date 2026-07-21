import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, Mail, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import HandwrittenAnnotation from '../ui/HandwrittenAnnotation';

export default function Screen12ConsultationCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    procedure: 'Rhinoplasty',
    consultType: 'In-Person (Ahmedabad)',
    preferredDate: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="fullscreen-section bg-[#FFF9F8] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Soft Glow Layer */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFE2E2] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between py-14 z-10">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] text-[11px] font-mono tracking-[0.2em] uppercase">
              12 / Private Booking
            </span>
            <span className="text-xs uppercase tracking-widest text-[#3A243F]/70 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5B3D3]" /> Strict Confidentiality Assured
            </span>
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#3A243F] leading-tight max-w-4xl">
            Your next chapter begins with an <br />
            <span className="italic font-serif-display text-[#262126]">honest conversation.</span>
          </h2>
        </div>

        {/* Private Consultation Form & Location / Contact Info Grid */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Private Consultation Form */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-3xl bg-[#3A243F] text-[#FBEFEF] shadow-2xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C5B3D3]/20 text-[#F5CBCB] flex items-center justify-center mx-auto mb-4 border border-[#C5B3D3]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-editorial text-3xl font-bold text-[#FFF9F8] mb-2">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#FBEFEF]/80 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.fullName}</strong>. Our senior medical coordinator will contact you within 2 hours to confirm your private appointment with Dr. Tarasaka.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#F5CBCB] text-[#3A243F] text-xs font-semibold uppercase tracking-wider hover:bg-[#FFF9F8] transition-all"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel-light p-6 sm:p-8 rounded-3xl border border-[#FFE2E2] shadow-xl space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#3A243F] font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F8] border border-[#FFE2E2] text-xs text-[#262126] focus:outline-none focus:border-[#3A243F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#3A243F] font-bold mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F8] border border-[#FFE2E2] text-xs text-[#262126] focus:outline-none focus:border-[#3A243F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#3A243F] font-bold mb-1">
                      Procedure Interest
                    </label>
                    <select
                      value={formData.procedure}
                      onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F8] border border-[#FFE2E2] text-xs text-[#262126] focus:outline-none focus:border-[#3A243F] transition-colors"
                    >
                      <option>Rhinoplasty (Nose Surgery)</option>
                      <option>Deep-Plane Facelift</option>
                      <option>Breast Augmentation / Lift</option>
                      <option>HD VASER Liposuction</option>
                      <option>Abdominoplasty / Tummy Tuck</option>
                      <option>Mommy Makeover</option>
                      <option>Micro-FUE Hair Transplant</option>
                      <option>Non-Surgical Dermal Fillers</option>
                      <option>Reconstructive Microsurgery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#3A243F] font-bold mb-1">
                      Consultation Mode
                    </label>
                    <select
                      value={formData.consultType}
                      onChange={(e) => setFormData({ ...formData, consultType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F8] border border-[#FFE2E2] text-xs text-[#262126] focus:outline-none focus:border-[#3A243F] transition-colors"
                    >
                      <option>In-Person (TARASAKA Centre, Ahmedabad)</option>
                      <option>Virtual 3D Video Consultation</option>
                      <option>International Patient VIP Concierge</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#3A243F] font-bold mb-1">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Briefly describe your aesthetic goals or medical history..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F8] border border-[#FFE2E2] text-xs text-[#262126] focus:outline-none focus:border-[#3A243F] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 rounded text-[#3A243F] focus:ring-[#3A243F]"
                  />
                  <label htmlFor="consent" className="text-[11px] text-[#262126]/80">
                    I agree to receive private medical communications in accordance with TARASAKA Privacy Policy.
                  </label>
                </div>

                {/* Submit button + Handwritten Annotation inspired by Ref 1 */}
                <div className="pt-2 flex items-center gap-6 relative">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold tracking-wider uppercase hover:bg-[#262126] transition-all shadow-xl hover:shadow-2xl"
                  >
                    Request a Private Consultation
                  </button>

                  <div className="hidden sm:block pointer-events-none">
                    <HandwrittenAnnotation text="Your consultation starts here" />
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right Side: Contact Details & Reassurance Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
            
            <div className="p-6 rounded-3xl glass-panel-light border border-[#FFE2E2] space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#3A243F]">
                <Phone className="w-4 h-4 text-[#C5B3D3]" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#3A243F]/60">Direct Desk</span>
                  <strong className="text-sm">+91 98765 43210</strong>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#3A243F]">
                <MessageSquare className="w-4 h-4 text-[#C5B3D3]" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#3A243F]/60">WhatsApp VIP Concierge</span>
                  <strong className="text-sm">+91 98765 43211</strong>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#3A243F]">
                <Clock className="w-4 h-4 text-[#C5B3D3]" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#3A243F]/60">Clinic Hours</span>
                  <span>Monday – Saturday: 09:00 AM – 07:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#3A243F]">
                <MapPin className="w-4 h-4 text-[#C5B3D3] shrink-0 mt-1" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#3A243F]/60">Centre Location</span>
                  <span>TARASAKA Aesthetic Tower, SG Highway, Ahmedabad, Gujarat 380054</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#3A243F] text-[#FFF9F8] text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#F5CBCB]">
                <ShieldCheck className="w-4 h-4" /> 100% Medical Privacy Reassurance
              </div>
              <p className="text-[11px] text-[#FFF9F8]/80 leading-relaxed">
                All patient inquiries are transmitted over encrypted medical channels and handled strictly under doctor-patient confidentiality protocols.
              </p>
            </div>

          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-[#262126]/60 font-mono">
          Private consultations available in-person in Ahmedabad or worldwide via secure 3D Tele-health.
        </div>

      </div>

    </section>
  );
}
