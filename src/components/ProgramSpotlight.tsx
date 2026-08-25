'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { packagesData, PackageItem } from '@/data/packagesData';
import PackageModal from './PackageModal';
import { Luggage, Star, Building, Plane, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgramSpotlightProps {
  onOpenBookingForm: (packageName: string) => void;
}

export default function ProgramSpotlight({ onOpenBookingForm }: ProgramSpotlightProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'reguler' | 'private' | 'haji'>('all');
  const [selectedModalPackage, setSelectedModalPackage] = useState<PackageItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredPackages = activeTab === 'all'
    ? packagesData
    : packagesData.filter((p) => p.type === activeTab);

  // Maximum slide index for showing 3 cards per view on desktop
  const maxSlide = Math.max(0, filteredPackages.length - 3);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Handle Tab change & reset slide index
  const handleTabChange = (tabId: 'all' | 'reguler' | 'private' | 'haji') => {
    setActiveTab(tabId);
    setCurrentSlide(0);
  };

  return (
    <section id="programs" className="py-16 sm:py-28 bg-gray-50/80 dark:bg-[#0B0514] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Blur for Dark Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950/90 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800/80 shadow-xs">
            <Luggage className="w-4 h-4 text-[#F5B027]" />
            <span>Katalog Program Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight">
            Pilihan Program <span className="text-[#4B2476] dark:text-[#F5B027]">Umrah & Haji Khusus</span>
          </h2>
          <p className="text-gray-600 dark:text-purple-200/90 text-sm sm:text-base">
            Pilih kategori program yang paling sesuai dengan rencana ibadah Anda.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 px-2">
          {[
            { id: 'all', name: 'Semua Program' },
            { id: 'reguler', name: 'Umrah Reguler' },
            { id: 'private', name: 'Umrah Private' },
            { id: 'haji', name: 'Haji Furoda' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-950 shadow-lg shadow-purple-950/40 dark:shadow-amber-500/20 scale-105'
                  : 'bg-white dark:bg-[#1A0E2E] text-gray-700 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/60 border border-gray-200 dark:border-purple-800/60'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Program Cards Carousel Slider Container */}
        <div className="relative">
          
          {/* Controls Header / Arrows (Visible on Desktop when items > 3 or on mobile) */}
          {filteredPackages.length > 1 && (
            <div className="flex items-center justify-end gap-2 mb-4">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-white dark:bg-[#1A0E2E] text-[#4B2476] dark:text-[#F5B027] shadow-md border border-gray-200 dark:border-purple-800/80 hover:bg-purple-50 dark:hover:bg-purple-900/60 transition-all focus:outline-none"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-white dark:bg-[#1A0E2E] text-[#4B2476] dark:text-[#F5B027] shadow-md border border-gray-200 dark:border-purple-800/80 hover:bg-purple-50 dark:hover:bg-purple-900/60 transition-all focus:outline-none"
                aria-label="Selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Cards Track */}
          <div className="overflow-hidden rounded-3xl p-1">
            <motion.div
              className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-out"
              animate={{ x: `-${currentSlide * (100 / (filteredPackages.length > 2 ? 3 : filteredPackages.length))}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white dark:bg-[#160C26] rounded-3xl overflow-hidden border border-gray-200 dark:border-purple-800/60 shadow-lg hover:shadow-2xl dark:shadow-purple-950/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative shrink-0"
                >
                  {pkg.badgeText && (
                    <div className="absolute top-4 left-4 z-10 bg-[#F5B027] text-gray-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                      {pkg.badgeText}
                    </div>
                  )}

                  <div>
                    {/* Image Header */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-purple-950/50">
                      <img
                        src={pkg.hotelMakkah.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                        <span className="text-xs bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-300 font-bold border border-white/10">
                          {pkg.duration}
                        </span>
                        <div className="flex items-center gap-1 text-[#F5B027] text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#F5B027]" />
                          <span>{pkg.rating} ({pkg.reviewCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors leading-snug">
                        {pkg.title}
                      </h3>

                      <p className="text-xs text-gray-600 dark:text-purple-200/80 line-clamp-2 leading-relaxed">
                        {pkg.subtitle}
                      </p>

                      {/* Facility Box */}
                      <div className="space-y-2 bg-[#FAFAFD] dark:bg-[#1E1136] p-3.5 rounded-2xl border border-gray-100 dark:border-purple-800/50 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200">
                            <Building className="w-3.5 h-3.5 text-[#4B2476] dark:text-[#F5B027]" />
                            <span>Makkah:</span>
                          </span>
                          <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white">{pkg.hotelMakkah.name}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200">
                            <Building className="w-3.5 h-3.5 text-[#F5B027]" />
                            <span>Madinah:</span>
                          </span>
                          <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white">{pkg.hotelMadinah.name}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200">
                            <Plane className="w-3.5 h-3.5 text-blue-500 dark:text-amber-400" />
                            <span>Maskapai:</span>
                          </span>
                          <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white">{pkg.airline.split(' ')[0]} Direct</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-gray-500 dark:text-purple-300/80">Jadwal: {pkg.departureDate}</span>
                        <span className="text-amber-800 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-700/80">
                          Sisa {pkg.seatLeft} Seat
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-gray-100 dark:border-purple-900/40 mt-2 space-y-3">
                    <div className="flex items-baseline justify-between pt-3">
                      <div>
                        <span className="text-xs text-gray-400 dark:text-purple-300/70 block font-medium">Mulai Dari</span>
                        <span className="text-2xl font-extrabold text-[#4B2476] dark:text-[#F5B027]">{pkg.price}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-purple-300/70">{pkg.priceNote.split('/')[1] || 'pax'}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedModalPackage(pkg)}
                        className="w-full py-3 px-3 bg-purple-50 dark:bg-[#251545] hover:bg-purple-100 dark:hover:bg-[#311C5B] text-[#4B2476] dark:text-purple-200 font-bold text-xs rounded-xl transition-colors border border-purple-200 dark:border-purple-700/60 text-center"
                      >
                        Detail & Itinerary
                      </button>

                      <button
                        onClick={() => onOpenBookingForm(pkg.title)}
                        className="w-full py-3 px-3 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 hover:bg-[#371A58] dark:hover:bg-amber-400 text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1"
                      >
                        <span>Booking WA</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F5B027] dark:text-gray-950" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Pagination Indicator */}
          {filteredPackages.length > 3 && (
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {[...Array(maxSlide + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentSlide
                      ? 'w-7 bg-[#4B2476] dark:bg-[#F5B027]'
                      : 'w-2.5 bg-gray-300 dark:bg-purple-900/60'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          )}

        </div>

        {/* Tombol Lihat Program Lainnya */}
        <div className="text-center pt-12">
          <Link
            href="/paket-umrah"
            className="inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-400 dark:text-gray-950 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all scale-100 hover:scale-102"
          >
            <span>Lihat Seluruh Katalog Program</span>
            <ArrowRight className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
          </Link>
        </div>

      </div>

      {/* Detail Package Modal for Itinerary */}
      <PackageModal
        packageData={selectedModalPackage}
        onClose={() => setSelectedModalPackage(null)}
      />
    </section>
  );
}
