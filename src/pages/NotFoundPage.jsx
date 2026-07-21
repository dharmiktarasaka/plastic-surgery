import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SubpageLayout from '../components/layout/SubpageLayout';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>404 — Page Not Found | TARASAKA Plastic Surgery</title>
      </Helmet>

      <section className="px-6 sm:px-12 py-24 max-w-4xl mx-auto text-center">
        <h1 className="font-serif-editorial text-7xl font-bold text-[#3A243F] mb-4">404</h1>
        <h2 className="font-serif-editorial text-3xl text-[#262126] font-light mb-6">Screen or Page Not Found</h2>
        <p className="text-sm text-[#262126]/70 mb-8 max-w-md mx-auto">
          The surgical portfolio exhibition page you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs font-semibold uppercase tracking-wider hover:bg-[#262126] transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Exhibition</span>
        </Link>
      </section>
    </SubpageLayout>
  );
}
