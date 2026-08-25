'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apa saja dokumen yang diperlukan untuk pendaftaran Umrah?',
      answer: 'Dokumen utama yang wajib disiapkan adalah: Paspor asli yang masih berlaku minimal 7 bulan sebelum tanggal keberangkatan dengan nama minimal 2 kata, Pas foto 4x6 latar belakang putih (fokus muka 80%), Fotokopi KTP & Kartu Keluarga (KK), Buku Nikah (bagi suami istri), dan Sertifikat Vaksin Meningitis (Sertifikat Internasional).',
    },
    {
      question: 'Bagaimana sistem pembayaran dan pelunasan paket Umrah?',
      answer: 'Pendaftaran dapat diawali dengan membayar DP (Down Payment) sebesar Rp 5.000.000 per jamaah untuk mengamankan tiket pesawat dan kuota seat. Pelunasan biaya paket dilakukan paling lambat 30 hari sebelum tanggal keberangkatan.',
    },
    {
      question: 'Apakah penerbangan Umrah Marhaban benar-benar tanpa transit (Direct Flight)?',
      answer: 'Ya, mayoritas paket reguler dan VIP kami menggunakan penerbangan Direct Flight tanpa transit (misalnya Saudia Airlines atau Garuda Indonesia) langsung menuju Kota Madinah atau Jeddah sehingga perjalanan jamaah jauh lebih singkat dan nyaman.',
    },
    {
      question: 'Apakah ada pendampingan Muthawwif selama di Tanah Suci?',
      answer: 'Tentu saja. Setiap rombongan jamaah akan didampingi oleh Tour Leader resmi dari Jakarta dan Muthawwif berpengalaman yang berdomisili di Saudi Arabia untuk membimbing seluruh rukun dan tata cara ibadah sesuai Al-Qur\'an dan As-Sunnah.',
    },
    {
      question: 'Bagaimana jika paspor saya belum selesai atau perlu bantuan pembuatan?',
      answer: 'Tim Amanah Safar Marhaban siap memberikan Surat Rekomendasi Resmi Kemenag untuk pembuatan / perpanjangan paspor di kantor Imigrasi setempat.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-white dark:bg-[#0F0F14] relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950/80 text-[#4B2476] dark:text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#F5B027]" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Frequently Asked <span className="text-[#4B2476] dark:text-[#F5B027]">Questions (FAQ)</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Temukan jawaban atas pertanyaan yang paling sering diajukan calon jamaah.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFD] dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 dark:text-white text-base sm:text-lg focus:outline-none hover:text-[#4B2476] dark:hover:text-[#F5B027]"
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-slate-800 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#4B2476] dark:text-[#F5B027]" /> : <ChevronDown className="w-5 h-5 text-[#4B2476] dark:text-[#F5B027]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-slate-800 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
