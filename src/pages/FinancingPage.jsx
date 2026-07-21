import React from 'react';
import { Helmet } from 'react-helmet-async';
import SubpageLayout from '../components/layout/SubpageLayout';
import { CreditCard, ShieldCheck } from 'lucide-react';

export default function FinancingPage() {
  return (
    <SubpageLayout>
      <Helmet>
        <title>Financing & Payment Options | TARASAKA Centre</title>
        <meta name="description" content="Transparent surgical pricing, flexible zero-percent EMI financing, insurance guidance for reconstructive procedures." />
      </Helmet>

      <section className="px-6 sm:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#3A243F] font-light mb-8">
          Flexible Financing & Payment
        </h1>

        <div className="p-8 sm:p-12 rounded-3xl glass-panel-light border border-[#FFE2E2] max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-[#3A243F]">
            <CreditCard className="w-6 h-6 text-[#C5B3D3]" />
            <h3 className="font-serif-editorial text-2xl font-bold">0% Interest EMI Payment Plans</h3>
          </div>
          <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
            We partner with leading healthcare financial institutions to offer flexible 6, 12, and 18-month installment options with quick approval.
          </p>

          <div className="pt-4 border-t border-[#FFE2E2]">
            <h4 className="font-serif-editorial text-xl font-bold text-[#3A243F] mb-2">Reconstructive Insurance Claims</h4>
            <p className="text-xs text-[#262126]/80 leading-relaxed font-light">
              Reconstructive procedures such as post-oncology breast reconstruction or facial burn repair are eligible for medical insurance cashless claims.
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
