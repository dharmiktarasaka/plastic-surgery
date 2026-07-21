import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default function LuxuryNavbar({ currentSectionIndex = 0, totalSections = 13, sectionTheme = 'light' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Toggle body scroll locking when mobile menu opens
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Color variables based on section theme (light bg vs dark bg)
  const isDarkSection = sectionTheme === 'dark' || currentSectionIndex === 6; // Screen 07 is dark cinematic
  const textColor = isDarkSection ? 'text-[#FFF9F8]' : 'text-[#262126]';
  const subTextColor = isDarkSection ? 'text-[#C5B3D3]' : 'text-[#3A243F]';
  const navBg = isDarkSection 
    ? 'bg-[#262126]/80 border-[#C5B3D3]/20 text-[#FFF9F8]' 
    : 'bg-[#FFF9F8]/80 border-[#FFE2E2] text-[#262126]';

  const menuItems = [
    { name: 'Home', path: '/', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80' },
    { name: 'The Art of Transformation', path: '/#section-01', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Procedures Universe', path: '/procedures', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80' },
    { name: 'Facial Harmony', path: '/procedures/face', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Body Contouring', path: '/procedures/body', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
    { name: 'Meet Surgeons', path: '/surgeons', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Before & After Gallery', path: '/gallery', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80' },
    { name: 'Safety & Technology', path: '/safety', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80' },
    { name: 'Recovery & Aftercare', path: '/recovery', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80' },
    { name: 'Contact & Location', path: '/contact', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto transition-all duration-500"
      >
        <div className={`flex items-center justify-between px-6 py-3.5 rounded-full border backdrop-blur-md shadow-lg transition-all duration-500 ${navBg}`}>
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#3A243F] text-[#FBEFEF] flex items-center justify-center font-serif-editorial font-bold text-xl transition-transform duration-300 group-hover:scale-105 shadow-md">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-lg sm:text-xl font-bold tracking-wider uppercase leading-none">
                TARASAKA
              </span>
              <span className="text-[9px] tracking-[0.25em] font-medium opacity-70 uppercase leading-tight mt-0.5">
                Plastic & Cosmetic Surgery
              </span>
            </div>
          </Link>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase font-medium">
            <Link to="/" className="hover:text-[#C5B3D3] transition-colors relative py-1 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3A243F] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/procedures" className="hover:text-[#C5B3D3] transition-colors relative py-1 group">
              Procedures
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3A243F] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/surgeons" className="hover:text-[#C5B3D3] transition-colors relative py-1 group">
              Surgeons
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3A243F] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/gallery" className="hover:text-[#C5B3D3] transition-colors relative py-1 group">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3A243F] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/safety" className="hover:text-[#C5B3D3] transition-colors relative py-1 group">
              Safety
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3A243F] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Section Counter & CTA */}
          <div className="flex items-center gap-4">
            {isHomePage && (
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono opacity-80 border-r border-current/20 pr-4">
                <span className="font-bold text-[#C5B3D3]">
                  {String(currentSectionIndex + 1).padStart(2, '0')}
                </span>
                <span className="opacity-40">/</span>
                <span className="opacity-60">{String(totalSections).padStart(2, '0')}</span>
              </div>
            )}

            <Link
              to="/book-consultation"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-medium tracking-wider uppercase hover:bg-[#262126] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile / Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Section Progress Bar */}
        {isHomePage && (
          <div className="w-full h-[2px] bg-black/10 mt-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#3A243F] via-[#C5B3D3] to-[#F5CBCB]"
              animate={{ width: `${((currentSectionIndex + 1) / totalSections) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        )}
      </motion.header>

      {/* Full-Screen Editorial Mobile/Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#3A243F] text-[#FFF9F8] flex flex-col justify-between p-8 sm:p-16 overflow-y-auto"
          >
            {/* Top Close Header */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-12">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B3D3]">
                TARASAKA Portfolio Exhibition
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#FBEFEF] hover:text-[#C5B3D3] flex items-center gap-2 text-xs uppercase tracking-widest"
              >
                Close <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items + Preview Image Split Grid */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8">
              <div className="lg:col-span-7 flex flex-col gap-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onMouseEnter={() => setHoveredMenuItem(item.image)}
                    className="group"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-serif-editorial text-3xl sm:text-5xl font-light hover:italic hover:pl-4 transition-all duration-300 flex items-center gap-4 text-[#FBEFEF] group-hover:text-[#F5CBCB]"
                    >
                      <span className="text-xs font-mono text-[#C5B3D3] font-normal">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Dynamic Preview Image */}
              <div className="hidden lg:block lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-[#C5B3D3]/30 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={hoveredMenuItem || menuItems[0].image}
                    src={hoveredMenuItem || menuItems[0].image}
                    alt="Menu Preview"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A243F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-xs text-[#FBEFEF]/80">
                  <p className="font-serif-editorial text-lg text-[#FFF9F8]">Sculpted Elegance</p>
                  <p>TARASAKA Plastic & Cosmetic Centre</p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="max-w-7xl mx-auto w-full border-t border-[#C5B3D3]/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#C5B3D3]">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Accredited Surgical Facility</span>
                <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> +91 98765 43210</span>
              </div>
              <p className="text-[11px] opacity-70">Developed by TARASAKA DIGITAL Solutions</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
