import React, { useEffect } from 'react';
import LuxuryNavbar from './LuxuryNavbar';
import EditorialFooter from './EditorialFooter';
import SchemaMarkup from '../ui/SchemaMarkup';

export default function SubpageLayout({ children, title = "TARASAKA Plastic Surgery" }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F8] text-[#262126] flex flex-col font-sans">
      <SchemaMarkup />
      <LuxuryNavbar currentSectionIndex={0} totalSections={1} sectionTheme="light" />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <EditorialFooter />
    </div>
  );
}
