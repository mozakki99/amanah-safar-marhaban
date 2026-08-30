'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, PhoneCall, Award, Sparkles, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingForm: (topic?: string) => void;
}

export default function HeroSection({ onOpenBookingForm }: HeroSectionProps) {
  // Dynamic headline phrases for line 2
  const lineTwoPhrases = [
    'dengan Travel Resmi',
    'Perjalanan Aman',
    'Ibadah Nyaman',
    'Pulang Penuh Kesan',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lineTwoPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [lineTwoPhrases.length]);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#FAF7FC] via-white to-gray-50 dark:from-[#130724] dark:via-[#0B0514] dark:to-[#08030F] py-12 sm:py-24 overflow-hidden transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30 dark:opacity-60">
        <div className="absolute top-5 left-5 w-72 sm:w-96 h-72 sm:h-96 bg-purple-300/40 dark:bg-purple-700/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 w-72 sm:w-80 h-72 sm:h-80 bg-amber-300/30 dark:bg-amber-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Headline with Animated Rotator Line 2 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight leading-[1.2]">
              <span className="block text-gray-900 dark:text-white">
                Wujudkan Umrah Impian
              </span>

              <span className="block mt-1 sm:mt-2 text-[#4B2476] dark:text-[#F5B027] min-h-[1.3em] overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block max-w-full bg-gradient-to-r from-[#4B2476] via-purple-700 to-[#65339B] dark:from-[#F5B027] dark:via-amber-300 dark:to-yellow-400 bg-clip-text text-transparent relative z-10 leading-tight"
                  >
                    {lineTwoPhrases[index]}
                    {/* Garis Highlight */}
                    <span className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-[#F5B027]/40 dark:bg-amber-400/30 -z-10 rounded-full"></span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-purple-200/90 leading-relaxed max-w-2xl">
              Wujudkan rindu ke Tanah Suci tanpa cemas bersama travel resmi Amanah Safar Marhaban. Nikmati fleksibilitas memilih paket umrah reguler, privat, atau mandiri. Kami upayakan pelayanan maksimal sepenuh hati.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                href="/paket-umrah"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-400 dark:text-gray-950 text-white font-extrabold px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl shadow-xl transition-all text-sm sm:text-base text-center"
              >
                <span>Lihat Katalog Umrah</span>
                <ArrowRight className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
              </Link>

              <button
                onClick={() => onOpenBookingForm('Konsultasi Hero Section')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-50 dark:bg-[#1E1136] hover:bg-amber-100 dark:hover:bg-[#2A184A] text-[#4B2476] dark:text-purple-200 font-extrabold border-2 border-[#F5B027] dark:border-amber-400 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-amber-400" />
                <span>Konsultasi via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Visual Column (Static Clean Ka'bah Image Showcase) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Ambient Glow behind Card */}
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/20 via-purple-600/25 to-[#4B2476]/25 rounded-[2.5rem] blur-2xl pointer-events-none"></div>

            {/* Showcase Card */}
            <div className="relative bg-white dark:bg-[#160C26] rounded-3xl p-4 sm:p-5 shadow-2xl border border-purple-100 dark:border-purple-800/60 overflow-visible">
              
              {/* Floating Top Badge: PPIU Kemenag */}
              <div className="absolute -top-4 left-4 z-20 bg-white/95 dark:bg-[#1C0E33]/95 backdrop-blur-xl px-3.5 py-2 rounded-2xl shadow-lg border border-amber-300/60 dark:border-amber-400/40 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4B2476] dark:text-[#F5B027]" />
                <span className="text-xs font-bold text-gray-900 dark:text-white">
                  PPIU Kemenag: <strong className="text-[#4B2476] dark:text-[#F5B027]">23022300424760012</strong>
                </span>
              </div>

              {/* High-Res Static Ka'bah Image Container */}
              <div className="relative h-72 sm:h-88 w-full rounded-2xl overflow-hidden bg-purple-950/40 shadow-inner group">
                <img
                  src="/images/pixabay-kabah-4372290.jpg"
                  alt="Ka'bah Suci Makkah Al-Mukarramah"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay for Readable Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Top Right Tag */}
                <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5B027]" />
                  <span className="text-xs font-bold text-white">Thawaf Khusyuk &amp; Tertib</span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="flex items-center gap-1 text-[#F5B027]">
                    <Compass className="w-3.5 h-3.5 text-[#F5B027]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Makkah Al-Mukarramah</span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-xl leading-snug">
                    Ka'bah Suci Makkah Al-Mukarramah
                  </h3>
                </div>
              </div>

              {/* Bottom Schedule Card */}
              <div className="mt-3.5 bg-[#F9F6FC] dark:bg-[#20133A] rounded-2xl p-3.5 border border-purple-100 dark:border-purple-800/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4B2476] dark:bg-[#F5B027] text-[#F5B027] dark:text-gray-950 font-extrabold text-base flex items-center justify-center shadow-md shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-gray-500 dark:text-purple-300/80">Pemberangkatan Terdekat</span>
                    <span className="block text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Musim Umrah 1448 H / 2026</span>
                  </div>
                </div>

                <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-[11px] font-bold px-3 py-1 rounded-xl border border-amber-300/40 shrink-0">
                  Pendaftaran Buka
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
