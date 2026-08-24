'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PhoneCall, Menu, X, ShieldCheck, Award } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Keunggulan & Legalitas', href: '#why-us' },
    { name: 'Paket Umrah & Haji', href: '#packages' },
    { name: 'Jadwal Keberangkatan', href: '#schedule' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#4B2476] text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#F5B027]" />
        <span>Travel Umrah Resmi Kemenag RI | PPIU No. 91203004512</span>
        <span className="hidden md:inline-block">• Kebanggaan Pelayanan Ibadah Sesuai Sunnah</span>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-14 bg-white rounded-lg p-1 border border-purple-100 shadow-xs flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Logo Amanah Safar Marhaban"
                width={48}
                height={56}
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <span className="block font-bold text-lg leading-tight tracking-tight text-[#4B2476] uppercase font-serif">
                Amanah Safar
              </span>
              <span className="block font-extrabold text-sm leading-tight text-[#F5B027] tracking-widest uppercase">
                MARHABAN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#4B2476] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5B027] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Assalamu%27alaikum%20Amanah%20Safar%20Marhaban,%20saya%20ingin%20konsultasi%20paket%20Umrah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4B2476] hover:bg-[#371A58] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5B027]" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#4B2476]" /> : <Menu className="w-6 h-6 text-[#4B2476]" />}
          </button>
        </div>

        {/* Mobile Nav Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-800 hover:text-[#4B2476] hover:bg-purple-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/6281234567890?text=Assalamu%27alaikum%20Amanah%20Safar%20Marhaban,%20saya%20ingin%20konsultasi%20paket%20Umrah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#4B2476] text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-sm text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027]" />
                <span>Konsultasi WA Sekarang</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
