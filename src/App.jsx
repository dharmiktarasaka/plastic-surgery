import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CustomCursor from './components/ui/CustomCursor';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SurgeonsPage from './pages/SurgeonsPage';
import ProceduresPage from './pages/ProceduresPage';
import FaceProceduresPage from './pages/FaceProceduresPage';
import BreastProceduresPage from './pages/BreastProceduresPage';
import BodyProceduresPage from './pages/BodyProceduresPage';
import HairProceduresPage from './pages/HairProceduresPage';
import ReconstructivePage from './pages/ReconstructivePage';
import NonSurgicalPage from './pages/NonSurgicalPage';
import GalleryPage from './pages/GalleryPage';
import JourneyPage from './pages/JourneyPage';
import SafetyPage from './pages/SafetyPage';
import RecoveryPage from './pages/RecoveryPage';
import InternationalPage from './pages/InternationalPage';
import FinancingPage from './pages/FinancingPage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/surgeons" element={<SurgeonsPage />} />
          <Route path="/procedures" element={<ProceduresPage />} />
          <Route path="/procedures/face" element={<FaceProceduresPage />} />
          <Route path="/procedures/breast" element={<BreastProceduresPage />} />
          <Route path="/procedures/body" element={<BodyProceduresPage />} />
          <Route path="/procedures/hair" element={<HairProceduresPage />} />
          <Route path="/procedures/reconstructive" element={<ReconstructivePage />} />
          <Route path="/procedures/non-surgical" element={<NonSurgicalPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/international" element={<InternationalPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
