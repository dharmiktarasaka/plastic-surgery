import React from 'react';
import { motion } from 'framer-motion';

export default function SectionNavigator({ currentSectionIndex, totalSections, sectionTitles, onSelectSection }) {
  return (
    <div className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto">
      {Array.from({ length: totalSections }).map((_, index) => {
        const isActive = index === currentSectionIndex;
        const numberStr = String(index + 1).padStart(2, '0');
        const title = sectionTitles[index] || `Screen ${numberStr}`;

        return (
          <button
            key={index}
            onClick={() => onSelectSection(index)}
            className="group flex items-center gap-3 focus:outline-none transition-all"
            title={title}
          >
            {/* Expanded active label */}
            <motion.span
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 10,
                display: isActive ? 'inline-block' : 'none'
              }}
              transition={{ duration: 0.3 }}
              className="text-[11px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full bg-[#3A243F] text-[#FBEFEF] shadow-sm whitespace-nowrap"
            >
              {numberStr} — {title}
            </motion.span>

            {/* Inactive line dot or active indicator */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isActive ? '#3A243F' : 'rgba(58, 36, 63, 0.25)'
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-[#3A243F]`}
              />
              {isActive && (
                <motion.div
                  layoutId="activeDotRing"
                  className="absolute w-5 h-5 rounded-full border border-[#3A243F]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
