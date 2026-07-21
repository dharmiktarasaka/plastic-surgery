import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover on interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Smooth Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#3A243F]/40 bg-[#C5B3D3]/10 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(58, 36, 63, 0.8)' : 'rgba(58, 36, 63, 0.4)',
          backgroundColor: isHovered ? 'rgba(245, 203, 203, 0.25)' : 'rgba(197, 179, 211, 0.1)'
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#3A243F]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 40
        }}
      />
    </div>
  );
}
