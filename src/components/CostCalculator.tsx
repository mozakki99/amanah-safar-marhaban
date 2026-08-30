'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function CostCalculator() {
  return (
    <section id="umrah-planner" className="py-12 sm:py-20 bg-gray-50 dark:bg-[#0B0514] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Full-Width Purple CTA Banner */}
        <div className="bg-gradient-to-r from-[#4B2476] via-[#38195E] to-[#240F3E] dark:from-[#1E0C36] dark:via-[#16092A] dark:to-[#0F041D] rounded-3xl p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-purple-800/80">
          
          {/* Ambient Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Copywriting Left Side */}
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-[#F5B027] border border-white/20">
                <Sparkles className="w-4 h-4 text-[#F5B027]" />
                <span>LAYANAN KONSULTASI PRIVAT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight leading-tight">
                Rancang Umrah Mandiri & Privat Sesuai Keinginan Anda
              </h2>

              <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed">
                Ingin tanggal keberangkatan fleksibel, durasi hari khusus, atau hotel bintang 5 langsung di depan pelataran Ka'bah untuk rombongan keluarga Anda? Klik di bawah untuk menyusun paket kustom Anda.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-amber-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F5B027]" />
                  <span>PPIU Kemenhaj: 23022300424760012</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#F5B027]" />
                  <span>Pendampingan Muthawwif Dedicated</span>
                </span>
              </div>
            </div>

            {/* Action CTA Button Right Side */}
            <div className="shrink-0">
              <Link
                href="/rancang-umrah"
                className="inline-flex items-center justify-center gap-2 bg-[#F5B027] hover:bg-amber-400 text-gray-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
              >
                <span>Rancang Umrah Mandiri Sekarang</span>
                <ArrowRight className="w-5 h-5 text-gray-950" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
