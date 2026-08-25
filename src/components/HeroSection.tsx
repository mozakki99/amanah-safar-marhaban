'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Star, ArrowRight, PhoneCall } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingForm: (topic?: string) => void;
}

export default function HeroSection({ onOpenBookingForm }: HeroSectionProps) {
  // Frasa dinamis baris ke-2
  const lineTwoPhrases = [
    'dengan Tenang & Nyaman',
    'bersama Marhaban',
    'penerbangan Direct Flight',
    'sesuai Tuntunan Sunnah',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lineTwoPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [lineTwoPhrases.length]);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#FAF7FC] via-white to-gray-50 dark:from-[#130724] dark:via-[#0B0514] dark:to-[#08030F] py-10 sm:py-24 overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30 dark:opacity-60">
        <div className="absolute top-5 left-5 w-72 sm:w-96 h-72 sm:h-96 bg-purple-300/40 dark:bg-purple-700/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 w-72 sm:w-80 h-72 sm:h-80 bg-amber-300/30 dark:bg-amber-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Headline Proporsional & Bebas Clipping di HP */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight leading-[1.2]">
              {/* Baris 1 */}
              <span className="block text-gray-900 dark:text-white">
                Wujudkan Umrah Impian
              </span>

              {/* Baris 2: Dinamis Rotator */}
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
                    {/* Garis Kuning Highlight */}
                    <span className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-[#F5B027]/40 dark:bg-amber-400/30 -z-10 rounded-full"></span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-purple-200/90 leading-relaxed max-w-2xl">
              Layanan penyelenggaraan perjalanan ibadah Umrah dan Haji Khusus bersama <strong className="text-gray-900 dark:text-amber-300">Amanah Safar Marhaban</strong>. Pilihan penerbangan direct flight, hotel di area strategis, serta pendampingan muthawwif berpengalaman.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              {/* Tombol 1: Lihat Katalog Umrah */}
              <Link
                href="/paket-umrah"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-400 dark:text-gray-950 text-white font-extrabold px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl shadow-xl transition-all text-sm sm:text-base text-center"
              >
                <span>Lihat Katalog Umrah</span>
                <ArrowRight className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
              </Link>

              {/* Tombol 2: Konsultasi via WhatsApp -> Triggers Form Modal */}
              <button
                onClick={() => onOpenBookingForm('Konsultasi Hero Section')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-50 dark:bg-[#1E1136] hover:bg-amber-100 dark:hover:bg-[#2A184A] text-[#4B2476] dark:text-purple-200 font-extrabold border-2 border-[#F5B027] dark:border-amber-400 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-amber-400" />
                <span>Konsultasi via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative bg-white dark:bg-[#160C26] rounded-3xl p-4 sm:p-5 shadow-2xl border border-purple-100 dark:border-purple-800/60 overflow-hidden">
              
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                  alt="Masjidil Haram Makkah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                <div className="absolute top-3.5 left-3.5 bg-white/95 dark:bg-[#12091F]/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#4B2476] dark:text-[#F5B027]" />
                  <span className="text-xs font-bold text-[#4B2476] dark:text-purple-100">Verifikasi Resmi Kemenag</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <div className="flex items-center gap-1 text-[#F5B027] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B027]" />
                    ))}
                    <span className="text-xs text-white font-bold ml-1">Layanan Berpengalaman</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg leading-snug">Pengalaman Ibadah Nyaman & Khusyuk</h3>
                </div>
              </div>

              <div className="mt-3.5 bg-[#F9F6FC] dark:bg-[#20133A] rounded-2xl p-3.5 border border-purple-100 dark:border-purple-800/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4B2476] dark:bg-[#F5B027] text-[#F5B027] dark:text-gray-950 font-bold text-lg flex items-center justify-center shadow-md">
                    M
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-gray-500 dark:text-purple-300/80">Pemberangkatan Terdekat</span>
                    <span className="block text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Musim Umrah 1448 H / 2026</span>
                  </div>
                </div>
                <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-300/30">
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
