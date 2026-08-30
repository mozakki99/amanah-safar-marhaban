'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { PhoneCall, Menu, X, Sun, Moon, ChevronDown, Sparkles, Crown, Plane } from 'lucide-react';
import BookingFormModal from './BookingFormModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const programSubItems = [
    {
      name: 'Paket Umrah',
      href: '/paket-umrah',
      desc: 'Program Umrah Reguler Bintang 3, 4, 5',
      icon: Plane,
    },
    {
      name: 'Umrah Private',
      href: '/rancang-umrah',
      desc: 'Perjalanan Mandiri & Rombongan Keluarga',
      icon: Sparkles,
    },
    {
      name: 'Paket Haji VIP',
      href: '/paket-haji',
      desc: 'Haji Furoda & Haji Plus Tanpa Antre',
      icon: Crown,
    },
  ];

  const isProgramActive = programSubItems.some((item) => pathname === item.href);

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xs py-3 border-b border-gray-100 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand - Clean & Minimalist */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl p-0.5 border border-purple-100 flex items-center justify-center overflow-hidden shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Image
                src="/logo.jpg"
                alt="Amanah Safar Marhaban Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            <span className="font-sans font-extrabold text-base sm:text-lg tracking-tight text-[#4B2476] dark:text-purple-300">
              Amanah Safar Marhaban
            </span>
          </Link>

          {/* Desktop Navigation with Dropdown */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Beranda */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-bold transition-all ${
                pathname === '/'
                  ? 'text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-purple-950/60'
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#4B2476] dark:hover:text-[#F5B027] hover:bg-gray-50 dark:hover:bg-slate-800'
              }`}
            >
              Beranda
            </Link>

            {/* Dropdown Program Ibadah */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  isProgramActive || dropdownOpen
                    ? 'text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-purple-950/60'
                    : 'text-gray-700 dark:text-gray-200 hover:text-[#4B2476] dark:hover:text-[#F5B027] hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>Program Ibadah</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#F5B027]' : ''}`} />
              </button>

              {/* Dropdown Menu Box */}
              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 top-full mt-1.5 w-64 bg-white dark:bg-[#160C26] rounded-2xl shadow-xl border border-purple-100 dark:border-purple-800/60 p-2 space-y-1 animate-fadeIn z-50"
                >
                  {programSubItems.map((sub) => {
                    const IconComp = sub.icon;
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                          isSubActive
                            ? 'bg-purple-50 dark:bg-purple-900/40 text-[#4B2476] dark:text-[#F5B027]'
                            : 'hover:bg-purple-50/70 dark:hover:bg-purple-950/50 text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-[#4B2476] dark:text-[#F5B027] shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-extrabold text-xs sm:text-sm leading-snug">{sub.name}</div>
                          <div className="text-[11px] text-gray-500 dark:text-purple-200/70 font-normal">{sub.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-bold transition-all ${
                pathname === '/blog'
                  ? 'text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-purple-950/60'
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#4B2476] dark:hover:text-[#F5B027] hover:bg-gray-50 dark:hover:bg-slate-800'
              }`}
            >
              Blog
            </Link>

            {/* Testimoni */}
            <Link
              href="/#testimonials"
              className="px-3.5 py-2 rounded-full text-xs xl:text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-[#4B2476] dark:hover:text-[#F5B027] hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
            >
              Testimoni
            </Link>

            {/* FAQ */}
            <Link
              href="/#faq"
              className="px-3.5 py-2 rounded-full text-xs xl:text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-[#4B2476] dark:hover:text-[#F5B027] hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
            >
              FAQ
            </Link>

          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-amber-400 hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Night Mode"
              title={theme === 'dark' ? 'Mode Terang' : 'Night Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F5B027]" />
              ) : (
                <Moon className="w-4 h-4 text-[#4B2476]" />
              )}
            </button>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-500 dark:text-gray-900 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-2xs hover:shadow-md transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5B027] dark:text-gray-900" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-amber-400 focus:outline-none border border-gray-200 dark:border-slate-700"
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
              className="p-2 rounded-xl text-gray-800 dark:text-white bg-white dark:bg-slate-800 focus:outline-none border border-gray-200 dark:border-slate-700"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#4B2476] dark:text-[#F5B027]" /> : <Menu className="w-6 h-6 text-[#4B2476] dark:text-[#F5B027]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-between bg-white dark:bg-slate-900 text-gray-900 dark:text-white animate-fadeIn">
          <div className="px-4 py-3.5 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
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
              <span className="font-sans font-bold text-base text-[#4B2476] dark:text-purple-300 whitespace-nowrap">
                Amanah Safar Marhaban
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-purple-50 dark:bg-slate-800 text-[#4B2476] dark:text-white focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-6 overflow-y-auto space-y-2 flex-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-gray-800 dark:text-gray-100 px-4 py-3 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800"
            >
              <span>Beranda</span>
              <span className="text-[#F5B027] text-sm">➔</span>
            </Link>

            {/* Mobile Expandable Program Ibadah */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex items-center justify-between text-base font-bold text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-purple-950/60 px-4 py-3 rounded-2xl"
              >
                <span>Program Ibadah</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileDropdownOpen && (
                <div className="pl-4 space-y-1.5 pt-1">
                  {programSubItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 font-bold text-sm text-gray-800 dark:text-gray-100 hover:text-[#4B2476] dark:hover:text-[#F5B027]"
                    >
                      <div>{sub.name}</div>
                      <div className="text-xs font-normal text-gray-500 dark:text-gray-400">{sub.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-gray-800 dark:text-gray-100 px-4 py-3 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800"
            >
              <span>Blog & Artikel</span>
              <span className="text-[#F5B027] text-sm">➔</span>
            </Link>

            <Link
              href="/#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-gray-800 dark:text-gray-100 px-4 py-3 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800"
            >
              <span>Testimoni</span>
              <span className="text-[#F5B027] text-sm">➔</span>
            </Link>

            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-gray-800 dark:text-gray-100 px-4 py-3 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800"
            >
              <span>FAQ</span>
              <span className="text-[#F5B027] text-sm">➔</span>
            </Link>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 text-white font-bold text-sm py-3.5 rounded-xl shadow-md text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-gray-900" />
              <span>Konsultasi WA Sekarang</span>
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
