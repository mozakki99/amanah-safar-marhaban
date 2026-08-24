'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Star, Users, Calendar, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const dynamicPhrases = [
    'dengan Aman',
    'bersama Marhaban',
    'dengan Nyaman & Khusyuk',
    'sesuai Sunnah',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dynamicPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [dynamicPhrases.length]);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#FAF7FC] via-white to-gray-50 pt-10 pb-20 overflow-hidden">
      {/* Subtle Background Pattern Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100/80 border border-purple-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#4B2476] shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#F5B027]" />
              <span>Bimbingan Ibadah Sesuai Sunnah & Izin Resmi Kemenag</span>
            </div>

            {/* Main Headline with Dynamic Rotator */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Wujudkan Umrah Impian{' '}
              <span className="block mt-2 text-[#4B2476] min-h-[1.3em] font-serif">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block bg-gradient-to-r from-[#4B2476] to-[#65339B] bg-clip-text text-transparent relative"
                  >
                    {dynamicPhrases[index]}
                    {/* Underline Highlight */}
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-[#F5B027]/40 -z-10 rounded-full"></span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Nikmati perjalanan ibadah Umrah dan Haji Khusus yang tenang, nyaman, dan transparan bersama <strong>Amanah Safar Marhaban</strong>. Hotel dekat pelataran masjid & penerbangan tanpa transit.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-gray-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Penerbangan Direct (Tanpa Transit)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Hotel Bintang 4 & 5 Walking Distance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Kepastian Kuota & Transparansi Biaya</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-base"
              >
                <span>Lihat Paket Umrah</span>
                <ArrowRight className="w-5 h-5 text-[#F5B027]" />
              </a>

              <a
                href="https://wa.me/6281234567890?text=Assalamu%27alaikum%20Amanah%20Safar%20Marhaban,%20saya%20ingin%20tanya%20paket%20Umrah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-[#4B2476] font-bold border-2 border-[#F5B027] px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all text-base"
              >
                <span>Konsultasi WA Gratis</span>
              </a>
            </div>

            {/* Key Metric Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200/80 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#4B2476]">10.000+</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Jamaah Diberangkatkan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#4B2476]">99.8%</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Tingkat Kepuasan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#4B2476]">100%</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Izin Resmi Kemenag</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual / Card Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Card */}
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-purple-100 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Image Container with Makkah/Madinah Ka'bah Illustration Banner */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                  alt="Masjidil Haram Makkah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Top Badge on Image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-[#4B2476]" />
                  <span className="text-xs font-bold text-[#4B2476]">PPIU Kemenag Resmi</span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-[#F5B027] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B027]" />
                    ))}
                    <span className="text-xs text-white font-bold ml-1">5.0 (Review Jamaah)</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug">Pengalaman Ibadah Nyaman & Penuh Keberkahan</h3>
                  <p className="text-xs text-gray-200 mt-1">Pembimbing Ibadah Berlisensi & Muthawwif Berpengalaman</p>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="mt-4 bg-[#F9F6FC] rounded-xl p-4 border border-purple-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4B2476] flex items-center justify-center text-[#F5B027] font-bold text-lg">
                    M
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500">Pemberangkatan Terdekat</span>
                    <span className="block text-sm font-bold text-gray-900">Musim Umrah 1448 H / 2026</span>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  Sisa Seat
                </span>
              </div>

            </div>

            {/* Decorative Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3 z-20">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-[#4B2476]">
                <Users className="w-6 h-6 text-[#4B2476]" />
              </div>
              <div>
                <span className="block font-extrabold text-sm text-gray-900">Fasilitas Hotel Bintang 5</span>
                <span className="block text-xs text-gray-500">Jarak Terdekat Ke Masjidil Haram</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
