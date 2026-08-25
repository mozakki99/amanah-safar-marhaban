'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { PhoneCall, Menu, X, ShieldCheck, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Paket Umrah', href: '/paket-umrah' },
    { name: 'Paket Haji', href: '/paket-haji' },
    { name: 'Keunggulan', href: '/#why-us' },
    { name: 'Testimoni', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      {/* Top Bar with Exact Official PPIU & PIHK Numbers */}
      <div className="bg-[#4B2476] dark:bg-[#1A0C30] text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 leading-tight border-b border-purple-900/60">
        <ShieldCheck className="w-3.5 h-3.5 text-[#F5B027] shrink-0" />
        <span className="truncate">
          PT Amanah Tangguh Mandiri • PPIU: 23022300424760012 | PIHK: 23022300424760013
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#120822]/95 backdrop-blur-md shadow-xs py-3 border-b border-gray-100 dark:border-purple-900/60'
            : 'bg-white dark:bg-[#120822] border-b border-gray-100 dark:border-purple-900/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand: Single-Line Modern Sans Text */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl p-0.5 border border-purple-100 shadow-2xs flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src="/logo.jpg"
                alt="Logo Amanah Safar Marhaban"
                width={36}
                height={36}
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            <span className="font-sans font-bold text-base sm:text-lg text-[#4B2476] dark:text-purple-200 tracking-tight whitespace-nowrap">
              Amanah Safar Marhaban
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 relative group ${
                    isActive
                      ? 'text-[#4B2476] dark:text-[#F5B027]'
                      : 'text-gray-700 dark:text-purple-200/90 hover:text-[#4B2476] dark:hover:text-[#F5B027]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#F5B027] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-[#1E1136] text-gray-700 dark:text-[#F5B027] hover:bg-purple-100 dark:hover:bg-[#2B184C] transition-colors focus:outline-none border border-gray-200 dark:border-purple-700/60"
              aria-label="Toggle Night Mode"
              title={theme === 'dark' ? 'Mode Terang' : 'Night Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F5B027]" />
              ) : (
                <Moon className="w-4 h-4 text-[#4B2476]" />
              )}
            </button>

            <a
              href="https://wa.me/6282132323030?text=Assalamu%27alaikum%20Amanah%20Safar%20Marhaban,%20saya%20ingin%20konsultasi%20paket%20Umrah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-400 dark:text-gray-950 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-2xs hover:shadow-md transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5B027] dark:text-gray-950" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-[#1E1136] text-gray-700 dark:text-[#F5B027] focus:outline-none border border-gray-200 dark:border-purple-700/60"
              aria-label="Toggle Night Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#F5B027]" />
              ) : (
                <Moon className="w-5 h-5 text-[#4B2476]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 dark:text-white bg-white dark:bg-[#1E1136] focus:outline-none border border-gray-200 dark:border-purple-700/60"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#4B2476] dark:text-[#F5B027]" /> : <Menu className="w-6 h-6 text-[#4B2476] dark:text-[#F5B027]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-between bg-white dark:bg-[#0E061A] text-gray-900 dark:text-white animate-fadeIn">
          <div className="px-4 py-3.5 border-b border-gray-100 dark:border-purple-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 bg-white rounded-lg p-0.5 border border-purple-100 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-sans font-bold text-base text-[#4B2476] dark:text-purple-200 whitespace-nowrap">
                Amanah Safar Marhaban
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-purple-50 dark:bg-[#1E1136] text-[#4B2476] dark:text-white focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-6 overflow-y-auto space-y-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-bold text-gray-800 dark:text-purple-100 hover:text-[#4B2476] dark:hover:text-[#F5B027] hover:bg-purple-50 dark:hover:bg-[#1E1136] px-4 py-3.5 rounded-2xl transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-[#F5B027] text-sm">➔</span>
              </Link>
            ))}
          </div>

          <div className="p-6 bg-gray-50 dark:bg-[#090312] border-t border-gray-200 dark:border-purple-900/60 space-y-3">
            <a
              href="https://wa.me/6282132323030?text=Assalamu%27alaikum%20Amanah%20Safar%20Marhaban,%20saya%20ingin%20konsultasi%20paket%20Umrah"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-bold text-sm py-3.5 rounded-xl shadow-md text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
              <span>Konsultasi WA Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
