'use client';

import React, { useState } from 'react';
import { BookOpen, ShieldCheck, MessageCircle, HeartHandshake, Award, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PainPointsSection() {
  const commitments = [
    {
      icon: BookOpen,
      title: 'Bimbingan Ibadah yang Tenang & Sesuai Sunnah',
      subtitle: 'Pembimbing Berpengalaman',
      description: 'Anda tidak perlu khawatir tentang tata cara ibadah di Tanah Suci. Muthawwif kami akan mendampingi dan memandu rukun ibadah Anda dengan sabar, agar Anda bisa beribadah dengan tenang dan khusyuk.',
    },
    {
      icon: ShieldCheck,
      title: 'Terdaftar Resmi, Hati Lebih Tenang',
      subtitle: 'Legalitas Terjamin',
      description: 'Kami sangat mengerti pentingnya rasa aman saat memilih travel. Amanah Safar Marhaban telah memiliki izin resmi penyelenggara ibadah. Anda cukup meluruskan niat, biarkan kami yang menjaga amanah ini dengan sebaik-baiknya.',
    },
    {
      icon: MessageCircle,
      title: 'Teman Diskusi Sebelum Berangkat',
      subtitle: 'Layanan Konsultasi Ramah',
      description: 'Masih ragu atau ada kekhawatiran tertentu? Jangan sungkan untuk bertanya. Tim kami siap mendengarkan dan membantu memberikan solusi layaknya keluarga sendiri, tanpa ada tekanan atau keharusan untuk langsung mendaftar.',
    },
    {
      icon: HeartHandshake,
      title: 'Sigap Mendampingi dalam Setiap Dinamika',
      subtitle: 'Komunikasi & Pendampingan Responsif',
      description: 'Kami menyadari perjalanan jauh seringkali memiliki dinamikanya tersendiri. Jika terjadi penyesuaian di luar kendali, tim kami berkomitmen untuk selalu berkomunikasi secara transparan, sigap mencari solusi, dan tidak akan membiarkan Anda kebingungan sendirian.',
    },
  ];

  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const nextMobile = () => {
    setActiveMobileIndex((prev) => (prev + 1) % commitments.length);
  };

  const prevMobile = () => {
    setActiveMobileIndex((prev) => (prev - 1 + commitments.length) % commitments.length);
  };

  return (
    <section className="py-14 sm:py-24 bg-white dark:bg-[#0B0514] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950/80 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800/80">
            <Award className="w-4 h-4 text-[#F5B027]" />
            <span>Komitmen Marhaban</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight leading-tight">
            Kami Paham, Memilih Travel Umrah <span className="text-[#4B2476] dark:text-[#F5B027]">Kadang Membingungkan</span>
          </h2>

          <p className="text-gray-600 dark:text-purple-200/90 text-sm sm:text-base leading-relaxed">
            Ada banyak pilihan baik di luar sana, dan wajar jika Anda ingin mencari yang paling amanah untuk perjalanan suci ini. Izinkan Amanah Safar Marhaban hadir untuk melegakan hati Anda. Kami berkomitmen mengurus setiap detail keberangkatan dengan transparan dan sepenuh hati, agar Anda bisa fokus sepenuhnya pada ibadah.
          </p>
        </div>

        {/* 1. TAMPILAN DESKTOP: 2-Column Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFD] dark:bg-[#160C26] rounded-3xl p-7 border border-gray-200 dark:border-purple-800/60 shadow-2xs space-y-4 hover:border-purple-300 dark:hover:border-purple-600 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#4B2476]/10 dark:bg-purple-950/90 text-[#4B2476] dark:text-[#F5B027] group-hover:bg-[#4B2476] dark:group-hover:bg-[#F5B027] group-hover:text-[#F5B027] dark:group-hover:text-gray-950 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-[#251545] px-3 py-1 rounded-full border border-purple-100 dark:border-purple-700/60">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-purple-200/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Layanan Utama Marhaban</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. TAMPILAN MOBILE: Sempurna Interactive Carousel Slider */}
        <div className="sm:hidden space-y-4">
          <div className="relative overflow-hidden rounded-3xl bg-[#FAFAFD] dark:bg-[#160C26] p-6 border border-gray-200 dark:border-purple-800/60 shadow-md min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {/* Icon & Subtitle Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#4B2476] dark:bg-[#F5B027] text-[#F5B027] dark:text-gray-950 flex items-center justify-center font-bold">
                    {React.createElement(commitments[activeMobileIndex].icon, { className: 'w-5 h-5' })}
                  </div>
                  <span className="text-[10px] font-bold text-[#4B2476] dark:text-[#F5B027] bg-purple-100 dark:bg-[#251545] px-3 py-1 rounded-full border border-purple-200 dark:border-purple-700/60">
                    {commitments[activeMobileIndex].subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug">
                  {commitments[activeMobileIndex].title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-purple-200/80 leading-relaxed">
                  {commitments[activeMobileIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200/80 dark:border-purple-900/50">
              <span className="text-xs font-extrabold text-[#4B2476] dark:text-[#F5B027]">
                Komitmen {activeMobileIndex + 1} dari {commitments.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevMobile}
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#251545] text-gray-800 dark:text-white flex items-center justify-center border border-gray-200 dark:border-purple-700/60 shadow-2xs focus:outline-none"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1">
                  {commitments.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMobileIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeMobileIndex ? 'w-4 bg-[#4B2476] dark:bg-[#F5B027]' : 'w-2 bg-gray-300 dark:bg-purple-900/60'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextMobile}
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#251545] text-gray-800 dark:text-white flex items-center justify-center border border-gray-200 dark:border-purple-700/60 shadow-2xs focus:outline-none"
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
