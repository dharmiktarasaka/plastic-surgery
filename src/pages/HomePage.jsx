import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import LuxuryNavbar from '../components/layout/LuxuryNavbar';
import SectionNavigator from '../components/layout/SectionNavigator';
import SchemaMarkup from '../components/ui/SchemaMarkup';

import Screen01Hero from '../components/sections/Screen01Hero';
import Screen02ArtOfTransformation from '../components/sections/Screen02ArtOfTransformation';
import Screen03ProcedureUniverse from '../components/sections/Screen03ProcedureUniverse';
import Screen04FacialHarmony from '../components/sections/Screen04FacialHarmony';
import Screen05BodyContouring from '../components/sections/Screen05BodyContouring';
import Screen06BeforeAfter from '../components/sections/Screen06BeforeAfter';
import Screen07PrecisionSafety from '../components/sections/Screen07PrecisionSafety';
import Screen08Surgeons from '../components/sections/Screen08Surgeons';
import Screen09Journey from '../components/sections/Screen09Journey';
import Screen10Recovery from '../components/sections/Screen10Recovery';
import Screen11PatientStories from '../components/sections/Screen11PatientStories';
import Screen12ConsultationCTA from '../components/sections/Screen12ConsultationCTA';
import Screen13FooterSection from '../components/sections/Screen13FooterSection';

export default function HomePage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isLockedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const location = useLocation();

  const totalSections = 13;

  const sectionTitles = [
    'Introduction',
    'Art of Transformation',
    'Procedure Universe',
    'Facial Harmony',
    'Body Contouring',
    'Before & After Results',
    'Precision & Safety',
    'Meet the Surgeons',
    'Consultation Journey',
    'Recovery & Aftercare',
    'Patient Stories',
    'Private Consultation',
    'TARASAKA Exhibition'
  ];

  // Theme tracking for header: dark background sections vs light background sections
  const isDarkSection = [4, 6, 10, 12].includes(currentSectionIndex);

  // Jump to specific section cleanly with smooth locking transition
  const goToSection = useCallback((index) => {
    if (index < 0 || index >= totalSections || isLockedRef.current) return;

    isLockedRef.current = true;
    setCurrentSectionIndex(index);

    setTimeout(() => {
      isLockedRef.current = false;
    }, 1000); // 1000ms silky smooth transition lock
  }, [totalSections]);

  // Handle hash navigation (e.g. #section-03)
  useEffect(() => {
    if (location.hash) {
      const match = location.hash.match(/#section-(\d+)/);
      if (match) {
        const secIndex = parseInt(match[1], 10) - 1;
        if (secIndex >= 0 && secIndex < totalSections) {
          goToSection(secIndex);
        }
      }
    }
  }, [location.hash, goToSection, totalSections]);

  // Wheel event listener for smooth section-by-section snap scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      if (isLockedRef.current) return;

      const threshold = 20; // Lower threshold for smooth wheel reactivity
      if (e.deltaY > threshold) {
        goToSection(currentSectionIndex + 1);
      } else if (e.deltaY < -threshold) {
        goToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex, goToSection]);

  // Touch Swipe event listener for mobile smooth section snapping
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isLockedRef.current || !e.changedTouches[0]) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;

      const minSwipeDistance = 40;
      if (deltaY > minSwipeDistance) {
        goToSection(currentSectionIndex + 1);
      } else if (deltaY < -minSwipeDistance) {
        goToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSectionIndex, goToSection]);

  // Keyboard Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.code)) {
        if (e.code === 'Space' && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        e.preventDefault();
        goToSection(currentSectionIndex + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        goToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSectionIndex, goToSection]);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      
      {/* Schema Markup for Medical SEO */}
      <SchemaMarkup />

      {/* Luxury Navbar with theme auto-switcher */}
      <LuxuryNavbar
        currentSectionIndex={currentSectionIndex}
        totalSections={totalSections}
        sectionTheme={isDarkSection ? 'dark' : 'light'}
      />

      {/* Right Side Vertical Section Navigator */}
      <SectionNavigator
        currentSectionIndex={currentSectionIndex}
        totalSections={totalSections}
        sectionTitles={sectionTitles}
        onSelectSection={goToSection}
      />

      {/* Controlled Viewport Container: Silky smooth cubic-bezier transform */}
      <div
        className="w-full h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{ transform: `translateY(-${currentSectionIndex * 100}vh)` }}
      >
        <Screen01Hero />
        <Screen02ArtOfTransformation />
        <Screen03ProcedureUniverse />
        <Screen04FacialHarmony />
        <Screen05BodyContouring />
        <Screen06BeforeAfter />
        <Screen07PrecisionSafety />
        <Screen08Surgeons />
        <Screen09Journey />
        <Screen10Recovery />
        <Screen11PatientStories />
        <Screen12ConsultationCTA />
        <Screen13FooterSection />
      </div>

    </div>
  );
}
