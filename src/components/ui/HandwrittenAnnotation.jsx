import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenAnnotation({ text = "Begin your transformation", className = "", arrowDirection = "down-right" }) {
  return (
    <div className={`inline-flex items-center gap-2 font-handwritten text-[#3A243F] text-xl sm:text-2xl tracking-wide select-none ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rotate-[-3deg] font-semibold text-[#3A243F]"
      >
        {text}
      </motion.span>
      
      {/* Animated curved SVG Arrow */}
      <svg className="w-10 h-10 text-[#C5B3D3] overflow-visible" viewBox="0 0 50 50" fill="none" stroke="currentColor">
        <motion.path
          d="M 5 10 Q 25 5, 35 25 T 45 40"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M 38 35 L 45 40 L 40 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
      </svg>
    </div>
  );
}
