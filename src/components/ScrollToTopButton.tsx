'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      // Tampil hanya ketika discroll kebawah > 300px
      if (window.scrollY > 300) {
        setIsVisible(true);

        // Sembunyi otomatis jika diam (idle) selama 2.2 detik
        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsVisible(false);
        }, 2200);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="fixed bottom-6 right-5 sm:right-7 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-[#4B2476] dark:bg-[#F5B027] text-white dark:text-gray-950 rounded-full shadow-2xl flex items-center justify-center border-2 border-amber-400/80 dark:border-purple-800 hover:scale-110 active:scale-95 transition-transform group"
          title="Ke Atas Halaman"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
