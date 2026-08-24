'use client';

import React from 'react';
import { PhoneCall, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface ClosingCtaProps {
  onOpenBookingForm: (topic: string) => void;
}

export default function ClosingCta({ onOpenBookingForm }: ClosingCtaProps) {
  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-[#0F0F14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-[#4B2476] via-[#371A58] to-[#25103E] dark:from-[#200A38] dark:to-[#120524] rounded-3xl p-8 sm:p-16 text-white shadow-2xl relative overflow-hidden text-center space-y-6 border border-purple-900">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#F5B027] border border-white/20">
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>Niat Suci Jangan Tertunda</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Segera Konsultasikan Rencana Perjalanan Umrah & Haji Anda
          </h2>

          <p className="text-purple-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tim Konsultan **Amanah Safar Marhaban (PT Amanah Tangguh Mandiri)** siap membantu konsultasi pendaftaran, penyesuaian jadwal, dan pengurusan dokumen paspor Anda.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingForm('Konsultasi Pendaftaran Umrah & Haji')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5B027] hover:bg-amber-500 text-gray-900 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all text-sm sm:text-base text-center"
            >
              <PhoneCall className="w-5 h-5 text-gray-900" />
              <span>Isi Form Konsultasi WhatsApp</span>
            </button>
          </div>

          <p className="text-xs text-purple-200 pt-2 font-mono">
            PPIU: 23022300424760012 • PIHK: 23022300424760013 • Berizin Resmi Kemenag RI
          </p>

        </div>

      </div>
    </section>
  );
}
