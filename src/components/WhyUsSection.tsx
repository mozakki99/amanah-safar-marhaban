'use client';

import React from 'react';
import { ShieldCheck, Plane, Building2, BookOpen, Wallet, Sparkles, Award, FileCheck2 } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Legalitas Resmi Kemenhaj RI',
      description: 'Terdaftar secara resmi sebagai PPIU (23022300424760012) & PIHK (23022300424760013) di bawah PT Amanah Tangguh Mandiri.',
      highlight: 'Terverifikasi SISKOPATUH',
    },
    {
      icon: Plane,
      title: 'Penerbangan Direct Flight',
      description: 'Pilihan penerbangan langsung tanpa transit menuju Kota Madinah / Jeddah menggunakan Saudia Airlines & Garuda Indonesia.',
      highlight: 'Perjalanan Lebih Nyaman',
    },
    {
      icon: Building2,
      title: 'Hotel Bintang Lokasi Strategis',
      description: 'Pilihan hotel bintang 4 & 5 di area strategis Makkah & Madinah untuk kemudahan akses jamaah menuju masjid.',
      highlight: 'Akses Mudah Ke Masjid',
    },
    {
      icon: BookOpen,
      title: 'Bimbingan Sesuai Sunnah',
      description: 'Pendampingan Muthawwif & Tour Leader berpengalaman yang siap membimbing pelaksanaan tata cara ibadah secara ramah.',
      highlight: 'Muthawwif Berpengalaman',
    },
    {
      icon: Wallet,
      title: 'Informasi Harga Transparan',
      description: 'Rincian biaya paket disampaikan secara terbuka mencakup penerbangan, visa, hotel, konsumsi, dan perlengkapan.',
      highlight: 'Informasi Terbuka',
    },
    {
      icon: Sparkles,
      title: 'Perlengkapan & Layanan Jamaah',
      description: 'Penyediaan koper hardcase, seragam batik, perlengkapan ibadah, serta pendampingan handling bagasi jamaah.',
      highlight: 'Fasilitas Lengkap',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-32 bg-white dark:bg-[#0F0F14] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-950/60 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-900">
            <Award className="w-4 h-4 text-[#F5B027]" />
            <span>Keunggulan Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight">
            Layanan Perjalanan Ibadah Bersama <span className="text-[#4B2476] dark:text-[#F5B027]">Amanah Safar Marhaban</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Kami berikhtiar memberikan kejelasan legalitas, kenyamanan akomodasi, serta bimbingan ibadah yang amanah.
          </p>
        </div>

        {/* Legal Banner Highlight */}
        <div className="bg-gradient-to-r from-[#4B2476] to-[#371A58] dark:from-[#25103E] dark:to-[#1A0A2D] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-16 sm:mb-20 relative overflow-hidden border border-purple-900 dark:border-purple-800">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[#F5B027] font-bold text-sm tracking-wide uppercase">
                <FileCheck2 className="w-5 h-5" />
                <span>Legalitas Perusahaan Resmi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                PT Amanah Tangguh Mandiri (Amanah Safar Marhaban)
              </h3>
              <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                Penyelenggara Perjalanan Ibadah Umrah (PPIU) dan Ibadah Haji Khusus (PIHK) terdaftar resmi di Kementerian Agama RI. Informasi jadwal dan reservasi transparan terhubung pada sistem Kemenhaj.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
                <span className="block text-xs text-purple-200 uppercase font-semibold">PPIU Kemenhaj RI</span>
                <span className="block text-lg font-extrabold text-[#F5B027] font-mono mt-0.5">23022300424760012</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
                <span className="block text-xs text-purple-200 uppercase font-semibold">PIHK Haji Khusus</span>
                <span className="block text-lg font-extrabold text-[#F5B027] font-mono mt-0.5">23022300424760013</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFD] dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#4B2476]/10 dark:bg-purple-950/80 text-[#4B2476] dark:text-[#F5B027] group-hover:bg-[#4B2476] dark:group-hover:bg-[#F5B027] group-hover:text-[#F5B027] dark:group-hover:text-gray-900 flex items-center justify-center transition-colors duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="inline-block text-xs font-bold text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-slate-800 px-3 py-1 rounded-full mb-3">
                    {item.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
