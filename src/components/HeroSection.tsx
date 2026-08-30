'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, PhoneCall, Sparkles, Users, Plane, Building2, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingForm: (topic?: string) => void;
}

export default function HeroSection({ onOpenBookingForm }: HeroSectionProps) {
  // Frasa dinamis baris ke-2 (User Approved Copywriting)
  const lineTwoPhrases = [
    'dengan Travel Resmi',
    'Perjalanan Aman',
    'Ibadah Nyaman',
    'Pulang Penuh Kesan',
  ];

  const [index, setIndex] = useState(0);

  // Background slides (authentic Makkah & Madinah photos)
  const heroBackgrounds = [
    {
      url: '/images/pixabay-kabah-4372290.jpg',
      title: "Ka'bah Suci Makkah Al-Mukarramah",
    },
    {
      url: '/images/pixabay-madinah-3782640.jpg',
      title: 'Masjid Nabawi Madinah Munawwarah',
    },
    {
      url: '/images/pixabay-nabawi-3347602.jpg',
      title: 'Pelataran Payung Nabawi',
    },
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // Headline rotator timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lineTwoPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [lineTwoPhrases.length]);

  // Background slide timer (Auto-play 6s)
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(bgTimer);
  }, [heroBackgrounds.length]);

  return (
    <section id="hero" className="relative bg-[#0F071C] text-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      
      {/* Immersive Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroBackgrounds[bgIndex].url}
              alt={heroBackgrounds[bgIndex].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Luxury Gradient Overlays for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F071C]/95 via-[#0F071C]/85 to-[#0F071C]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F071C] via-transparent to-[#0F071C]/80"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8 text-left">
          
          {/* Official PPIU Tag Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-amber-400/40 text-amber-300 shadow-md">
            <Sparkles className="w-4 h-4 text-[#F5B027]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase">
              BIRO KONSULTAN UMRAH & HAJI KHUSUS RESMI KEMENAG RI
            </span>
          </div>

          {/* Headline Utama */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight leading-[1.2]">
            <span className="block">Wujudkan Umrah Impian</span>
            
            {/* Dinamis Rotator Line 2 */}
            <span className="block mt-1 sm:mt-2 min-h-[1.3em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block text-[#F5B027] relative z-10 leading-tight"
                >
                  {lineTwoPhrases[index]}
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-400/20 -z-10 rounded-full"></span>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Sub-headline Copywriting */}
          <p className="text-sm sm:text-base lg:text-xl text-purple-100/90 leading-relaxed font-normal max-w-2xl">
            Wujudkan rindu ke Tanah Suci tanpa cemas bersama travel resmi Amanah Safar Marhaban. Nikmati fleksibilitas memilih paket umrah reguler, privat, atau mandiri. Kami upayakan pelayanan maksimal sepenuh hati.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/paket-umrah"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5B027] hover:bg-amber-400 text-gray-950 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all text-sm sm:text-base hover:scale-105"
            >
              <span>Lihat Katalog Umrah</span>
              <ArrowRight className="w-5 h-5 text-gray-950" />
            </Link>

            <button
              onClick={() => onOpenBookingForm('Konsultasi Hero Immersive')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-extrabold border border-white/25 px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5 text-[#F5B027]" />
              <span>Konsultasi via WhatsApp</span>
            </button>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#F5B027] shrink-0" />
              <div>
                <div className="font-extrabold text-white">PPIU Kemenag</div>
                <div className="text-purple-200/80 text-[11px]">23022300424760012</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
              <Users className="w-5 h-5 text-[#F5B027] shrink-0" />
              <div>
                <div className="font-extrabold text-white">10.000+ Jamaah</div>
                <div className="text-purple-200/80 text-[11px]">Amanah & Berkesan</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
              <Plane className="w-5 h-5 text-[#F5B027] shrink-0" />
              <div>
                <div className="font-extrabold text-white">Penerbangan Direct</div>
                <div className="text-purple-200/80 text-[11px]">Saudia & Garuda</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
              <Building2 className="w-5 h-5 text-[#F5B027] shrink-0" />
              <div>
                <div className="font-extrabold text-white">Hotel Bintang 3-5</div>
                <div className="text-purple-200/80 text-[11px]">Dekat Pelataran</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
