'use client';

import React from 'react';
import { ShieldCheck, Plane, Building2, BookOpen, Wallet, Sparkles, Award, FileCheck2 } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Legalitas Resmi Kemenag RI',
      description: 'Terdaftar secara resmi sebagai Penyelenggara Perjalanan Ibadah Umrah (PPIU) dengan Nomor Izin Resmi Kemenag No. 91203004512.',
      highlight: 'Terverifikasi & Amanah',
    },
    {
      icon: Plane,
      title: 'Penerbangan Direct (Tanpa Transit)',
      description: 'Menggunakan maskapai terkemuka seperti Saudia Airlines & Garuda Indonesia dengan penerbangan langsung Jakarta-Madinah/Jeddah.',
      highlight: 'Perjalanan Efisien & Anti Lelah',
    },
    {
      icon: Building2,
      title: 'Hotel Bintang Walking Distance',
      description: 'Pilihan hotel bintang 4 & 5 yang terletak di pelataran utama Masjidil Haram & Masjid Nabawi untuk kenyamanan ibadah Anda.',
      highlight: 'Dekat & Bebas Repot',
    },
    {
      icon: BookOpen,
      title: 'Bimbingan Sesuai Sunnah',
      description: 'Dampingan Muthawwif & Ustadz berpengalaman yang membimbing setiap rukun dan wajibat Umrah sesuai tuntunan Rasulullah SAW.',
      highlight: 'Muthawwif Khusyuk & Ramah',
    },
    {
      icon: Wallet,
      title: 'Transparansi Biaya (Tanpa Biaya Tersembunyi)',
      description: 'Seluruh harga paket tertera secara jelas dan mencakup fasilitas lengkap mulai dari tiket, visa, hotel, makan, hingga perlengkapan.',
      highlight: 'Jujur & Terpercaya',
    },
    {
      icon: Sparkles,
      title: 'Perlengkapan Premium & Layanan VIP',
      description: 'Koper hardcase eksklusif, batik seragam premium, perlengkapan ihram/mukena kualitas tinggi, serta layanan handling bagasi.',
      highlight: 'Fasilitas Kelas Satu',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-[#4B2476] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#F5B027]" />
            <span>Mengapa Memilih Kami?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif">
            Alasan Mengapa <span className="text-[#4B2476]">Umrah Bersama Marhaban</span> Adalah Pilihan Terbaik
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Kami mengutamakan kepastian keberangkatan, kenyamanan ibadah, dan bimbingan yang sesuai dengan tuntunan syariat.
          </p>
        </div>

        {/* Legal Banner Highlight */}
        <div className="bg-gradient-to-r from-[#4B2476] to-[#371A58] rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[#F5B027] font-bold text-sm tracking-wide uppercase">
                <FileCheck2 className="w-5 h-5" />
                <span>Kepastian Legalitas & Keselamatan Jamaah</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                Travel Umrah Resmi Berizin Kemenag RI (PPIU & PIHK)
              </h3>
              <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                PT. Amanah Safar Marhaban telah memegang izin resmi PPIU Kemenag RI No. 91203004512 dan PIHK Khusus. Seluruh visa, jadwal penerbangan, dan reservasi hotel dapat diverifikasi secara transparan melalui sistem SISKOPATUH Kemenag.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
                <span className="block text-xs text-purple-200 uppercase font-semibold">Nomor Izin PPIU</span>
                <span className="block text-xl font-extrabold text-[#F5B027] mt-0.5">No. 91203004512</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center">
                <span className="block text-xs text-purple-200 uppercase font-semibold">Status Akreditasi</span>
                <span className="block text-xl font-extrabold text-emerald-400 mt-0.5">A (Sangat Baik)</span>
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
                className="bg-[#FAFAFD] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-2xs hover:shadow-xl hover:border-purple-200 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#4B2476]/10 text-[#4B2476] group-hover:bg-[#4B2476] group-hover:text-[#F5B027] flex items-center justify-center transition-colors duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="inline-block text-xs font-bold text-[#4B2476] bg-purple-50 px-3 py-1 rounded-full mb-3">
                    {item.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4B2476] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
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
