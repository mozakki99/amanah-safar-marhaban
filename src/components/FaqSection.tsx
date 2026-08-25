'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const faqs = [
    {
      q: 'Apakah PT Amanah Tangguh Mandiri (Amanah Safar Marhaban) memiliki izin resmi Kemenag RI?',
      a: 'Ya, PT Amanah Tangguh Mandiri adalah penyelenggara perjalanan ibadah umrah & haji resmi dengan izin Kemenag RI: PPIU (No. 23022300424760012) dan PIHK (No. 23022300424760013).',
    },
    {
      q: 'Bagaimana proses pendaftaran Umrah & pembayaran?',
      a: 'Pendaftaran dapat dilakukan secara langsung di kantor Yogyakarta atau online melalui WhatsApp. Uang muka (DP) awal sangat terjangkau, dan pelunasan dilakukan maksimal 30 hari sebelum tanggal keberangkatan.',
    },
    {
      q: 'Maskapai apa yang digunakan untuk penerbangan Umrah?',
      a: 'Kami mengutamakan penerbangan Direct Flight (tanpa transit) menggunakan Saudia Airlines atau Garuda Indonesia mendarat langsung di Bandara Madinah atau Jeddah.',
    },
    {
      q: 'Apakah harga paket sudah termasuk seluruh fasilitas (All-In)?',
      a: 'Ya, harga yang tercantum sudah meliputi tiket pesawat PP, visa umrah resmi, akomodasi hotel, konsumsi catering 3x sehari menu Indonesia, muthawwif pembimbing, handling, dan perlengkapan ibadah lengkap.',
    },
    {
      q: 'Apakah menerima jamaah lansia atau berkebutuhan khusus?',
      a: 'Sangat bisa. Kami menyediakan fasilitas pendampingan khusus dan pilihan hotel yang berlokasi strategis di pelataran masjid untuk memudahkan mobilitas ibadah jamaah lansia.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-28 bg-white dark:bg-[#0B0514] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950/80 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800/80">
            <HelpCircle className="w-4 h-4 text-[#F5B027]" />
            <span>Pertanyaan Sering Diajukan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight">
            Informasi & <span className="text-[#4B2476] dark:text-[#F5B027]">Jawaban FAQ</span>
          </h2>
          <p className="text-gray-600 dark:text-purple-200/90 text-sm sm:text-base">
            Jawaban lengkap seputar pendaftaran, fasilitas, dan pelaksanaan ibadah Umrah bersama Marhaban.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFD] dark:bg-[#160C26] rounded-2xl border border-gray-200 dark:border-purple-800/60 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 dark:text-white text-base sm:text-lg focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#4B2476] dark:text-[#F5B027] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-gray-600 dark:text-purple-200/85 leading-relaxed border-t border-gray-100 dark:border-purple-900/40 pt-4 bg-white/50 dark:bg-[#1E1136]/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
