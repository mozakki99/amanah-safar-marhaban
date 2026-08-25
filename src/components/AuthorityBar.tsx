'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function AuthorityBar() {
  const airlines = [
    {
      name: 'Saudia Airlines',
      logo: '/airlines/saudia.png',
    },
    {
      name: 'Garuda Indonesia',
      logo: '/airlines/garuda.png',
    },
    {
      name: 'Emirates',
      logo: '/airlines/emirates.png',
    },
    {
      name: 'Etihad Airways',
      logo: '/airlines/etihad.png',
    },
    {
      name: 'Qatar Airways',
      logo: '/airlines/qatar.png',
    },
    {
      name: 'Lion Air',
      logo: '/airlines/lion.png',
    },
    {
      name: 'AirAsia',
      logo: '/airlines/airasia.png',
    },
  ];

  return (
    <div className="bg-[#4B2476] dark:bg-[#1A0A2D] text-white py-6 border-y border-purple-900 dark:border-purple-800 transition-colors overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info: Legal Licenses */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-purple-800/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F5B027] shrink-0" />
            <div>
              <h4 className="font-extrabold text-sm text-white leading-tight">
                PT Amanah Tangguh Mandiri
              </h4>
              <span className="text-xs text-purple-200">Izin Resmi Kemenag RI (PPIU & PIHK)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-amber-300 bg-white/10 px-4 py-2 rounded-xl border border-white/15">
            <span>PPIU: <strong>23022300424760012</strong></span>
            <span>|</span>
            <span>PIHK: <strong>23022300424760013</strong></span>
          </div>
        </div>

      </div>

      {/* Full-Bleed Running Marquee with Smooth Left/Right Soft Fade Effect */}
      <div className="pt-4 relative w-full overflow-hidden">
        {/* Left Soft Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-[#4B2476] dark:from-[#1A0A2D] to-transparent z-10"></div>
        
        {/* Right Soft Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-[#4B2476] dark:from-[#1A0A2D] to-transparent z-10"></div>

        {/* Marquee Track */}
        <div className="flex items-center gap-5 animate-marquee whitespace-nowrap">
          {[...airlines, ...airlines, ...airlines, ...airlines].map((air, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 backdrop-blur-md px-4 py-2 rounded-2xl border border-purple-200 dark:border-slate-800 shadow-md shrink-0 text-gray-900 dark:text-white"
            >
              <div className="relative w-12 h-7 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={air.logo}
                  alt={air.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xs text-gray-900 dark:text-white">{air.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
