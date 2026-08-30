'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, PhoneCall, Sparkles, TrendingUp, Star, Users, CheckCircle2, Award } from 'lucide-react';

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
    <section id="hero" className="relative bg-gradient-to-b from-[#FAF7FC] via-white to-gray-50 dark:from-[#130724] dark:via-[#0B0514] dark:to-[#08030F] pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden transition-colors duration-300">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30 dark:opacity-60">
        <div className="absolute top-5 left-5 w-72 sm:w-96 h-72 sm:h-96 bg-purple-300/40 dark:bg-purple-700/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-5 w-72 sm:w-96 h-72 sm:h-96 bg-amber-300/30 dark:bg-amber-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Top Pill Category Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>TRAVEL UMRAH &amp; HAJI KHUSUS RESMI</span>
            </div>

            {/* Headline with Animated Rotator Line 2 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight leading-[1.18]">
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
                    {/* Garis Highlight Underline */}
                    <span className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-2.5 sm:h-3 bg-[#F5B027]/40 dark:bg-amber-400/30 -z-10 rounded-full"></span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-purple-200/90 leading-relaxed max-w-xl">
              Wujudkan rindu ke Tanah Suci tanpa cemas bersama travel resmi Amanah Safar Marhaban. Nikmati fleksibilitas memilih paket umrah reguler, privat, atau mandiri dengan penerbangan langsung tanpa transit.
            </p>

            {/* Dual Action Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/paket-umrah"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-400 dark:text-gray-950 text-white font-extrabold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base text-center group"
              >
                <span>Lihat Katalog Umrah</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white dark:text-gray-950" />
                </div>
              </Link>

              <button
                onClick={() => onOpenBookingForm('Konsultasi Hero Section')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1E1136] hover:bg-gray-50 dark:hover:bg-[#2A184A] text-gray-800 dark:text-purple-200 font-bold border border-gray-300 dark:border-purple-700/60 px-6 py-3.5 rounded-full shadow-2xs hover:shadow-md transition-all text-sm sm:text-base text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027]" />
                <span>Konsultasi via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Visual Column: 3D Saudia Airplane Soaring with Floating Metric Badges */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            
            {/* Ambient Backlight Blur */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 via-amber-400/25 to-emerald-400/20 rounded-[3rem] blur-3xl pointer-events-none"></div>

            {/* Showcase Container */}
            <div className="relative rounded-3xl p-3 sm:p-5 overflow-visible">
              
              {/* 3D Saudia Airplane Image */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-sky-50/60 via-purple-50/40 to-white dark:from-[#180B30] dark:via-[#130725] dark:to-[#0B0514] border border-purple-100 dark:border-purple-800/60">
                <img
                  src="/images/saudia-airplane-hero.png"
                  alt="Pesawat Saudia Airlines Terbang Menuju Tanah Suci"
                  className="w-full h-auto object-cover max-h-[440px] rounded-2xl hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Floating Metric Badge 1: Top Left (+100% Pasti Berangkat) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-4 left-0 sm:-left-3 z-20 bg-white/95 dark:bg-[#1C0E33]/95 backdrop-blur-xl px-3.5 py-2.5 rounded-2xl shadow-xl border border-gray-100 dark:border-purple-800/60 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">+100%</span>
                    <span className="text-[10px] font-bold bg-emerald-50 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded">Resmi</span>
                  </div>
                  <span className="block text-[11px] font-bold text-gray-700 dark:text-gray-200">Pasti Berangkat</span>
                </div>
              </motion.div>

              {/* Floating Metric Badge 2: Middle Right (4.9★ Rating Kepuasan) */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute top-1/3 right-0 sm:-right-4 z-20 bg-white/95 dark:bg-[#1C0E33]/95 backdrop-blur-xl px-3.5 py-2.5 rounded-2xl shadow-xl border border-gray-100 dark:border-purple-800/60 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-500 flex items-center justify-center font-bold shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-gray-900 dark:text-white">98%</span>
                  </div>
                  <span className="block text-[11px] font-bold text-gray-600 dark:text-purple-200/80">Kepuasan Jamaah</span>
                </div>
              </motion.div>

              {/* Floating Metric Badge 3: Bottom Left (+10.000 Jamaah) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-2 left-4 sm:left-6 z-20 bg-white/95 dark:bg-[#1C0E33]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-800/60 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#4B2476]/10 dark:bg-purple-900/60 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center font-bold shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-gray-900 dark:text-white">+10.000 Jamaah</span>
                  <span className="block text-[10px] font-semibold text-gray-500 dark:text-purple-300/80">Telah Diberangkatkan</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Trusted By Logos Bar (Bottom of Hero Section) */}
        <div className="pt-6 sm:pt-8 border-t border-purple-100/80 dark:border-purple-900/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-purple-300/70 shrink-0">
              Terdaftar Resmi &amp; Bekerja Sama:
            </span>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-6">
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#160C26] px-3.5 py-1.5 rounded-xl border border-gray-200/80 dark:border-purple-800/50 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#4B2476] dark:text-[#F5B027]" />
                <span className="text-xs font-extrabold text-gray-800 dark:text-gray-200">PPIU Kemenag RI</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white dark:bg-[#160C26] px-3.5 py-1.5 rounded-xl border border-gray-200/80 dark:border-purple-800/50 shadow-2xs">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-extrabold text-gray-800 dark:text-gray-200">PIHK Kemenag RI</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white dark:bg-[#160C26] px-3.5 py-1.5 rounded-xl border border-gray-200/80 dark:border-purple-800/50 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Saudia Airlines</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white dark:bg-[#160C26] px-3.5 py-1.5 rounded-xl border border-gray-200/80 dark:border-purple-800/50 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Garuda Indonesia</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
