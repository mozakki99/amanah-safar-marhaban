'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, Heart, Globe, MessageCircle, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#120822] dark:bg-[#07030D] text-gray-300 pt-16 pb-8 border-t border-purple-950 dark:border-purple-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-purple-900/50">
          
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative w-9 h-9 bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="Logo Amanah Safar Marhaban"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-sans font-bold text-lg text-white tracking-tight whitespace-nowrap">
                Amanah Safar Marhaban
              </span>
            </Link>

            <p className="text-sm text-purple-200/80 leading-relaxed max-w-xl">
              Biro penyelenggara perjalanan ibadah umrah resmi dan terverifikasi oleh Kemenhaj. Melyani program-program umrah reguler dan private.
            </p>

            <div className="space-y-1.5 bg-[#1B0F33] dark:bg-[#150A26] border border-purple-800/80 p-3.5 rounded-2xl text-xs max-w-xl">
              <div className="flex items-center gap-2 text-[#F5B027] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#F5B027] shrink-0" />
                <span>Izin Resmi Kemenag RI (PT Amanah Tangguh Mandiri)</span>
              </div>
              <div className="text-purple-200/90 space-y-0.5 pl-6 font-mono text-[11px]">
                <div>PPIU : <strong>23022300424760012</strong></div>
                <div>PIHK : <strong>23022300424760013</strong></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#F5B027] text-purple-200/80 transition-colors">Beranda</Link></li>
              <li><Link href="/paket-umrah" className="hover:text-[#F5B027] text-purple-200/80 transition-colors">Katalog Paket Umrah</Link></li>
              <li><Link href="/paket-haji" className="hover:text-[#F5B027] text-purple-200/80 transition-colors">Program Haji VIP</Link></li>
              <li><a href="/#why-us" className="hover:text-[#F5B027] text-purple-200/80 transition-colors">Keunggulan & Legalitas</a></li>
              <li><a href="/#testimonials" className="hover:text-[#F5B027] text-purple-200/80 transition-colors">Testimoni Jamaah</a></li>
              <li><a href="/#faq" className="hover:text-[#F5B027] text-purple-200/80 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Kantor & Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5B027] shrink-0 mt-1" />
                <span className="text-purple-200/80">Jl. Hadi Mulyono, Wonosalam, Sukoharjo, Ngaglik, Sleman, DI Yogyakarta 55581</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5B027] shrink-0" />
                <span className="text-purple-200/80">0821-3232-3030</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5B027] shrink-0" />
                <span className="text-purple-200/80">marhabanmulia@gmail.com</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-purple-950/80 text-purple-200 hover:bg-[#F5B027] hover:text-gray-950 flex items-center justify-center transition-colors border border-purple-800/60" title="Instagram">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-purple-950/80 text-purple-200 hover:bg-[#F5B027] hover:text-gray-950 flex items-center justify-center transition-colors border border-purple-800/60" title="Facebook">
                <Share2 className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/6282132323030?text=${encodeURIComponent("Assalamu'alaikum Amanah Safar Marhaban, saya ingin konsultasi paket Umrah")}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-purple-950/80 text-purple-200 hover:bg-[#F5B027] hover:text-gray-950 flex items-center justify-center transition-colors border border-purple-800/60" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-purple-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PT Amanah Tangguh Mandiri (Amanah Safar Marhaban). Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan khusyuk untuk Jamaah Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}
