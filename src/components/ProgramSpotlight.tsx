'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Star, Building, Plane, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { packagesData, PackageItem } from '@/data/packagesData';
import PackageModal from './PackageModal';
import BookingFormModal from './BookingFormModal';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgramSpotlightProps {
  onOpenBookingForm?: (topic?: string) => void;
}

export default function ProgramSpotlight({ onOpenBookingForm }: ProgramSpotlightProps) {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenBookingForm = (packageName: string) => {
    if (onOpenBookingForm) {
      onOpenBookingForm(packageName);
    } else {
      setSelectedTopic(packageName);
      setIsFormOpen(true);
    }
  };

  // Mobile: 1 card per slide. Desktop: 3 cards per slide view.
  const cardsPerPage = 3;
  const totalSlides = Math.ceil(packagesData.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="program-spotlight" className="py-16 sm:py-28 bg-[#FAF7FC] dark:bg-[#0E061A] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#4B2476]/10 dark:bg-purple-950/80 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800/80">
              <Sparkles className="w-4 h-4 text-[#F5B027]" />
              <span>Pilihan Program Unggulan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight leading-tight">
              Program <span className="text-[#4B2476] dark:text-[#F5B027]">Umrah & Haji Marhaban</span>
            </h2>
            <p className="text-gray-600 dark:text-purple-200/90 text-sm sm:text-base">
              Pilihan jadwal terdekat dengan fasilitas terencana, hotel strategis bintang 4 & 5, dan penerbangan maskapai ternama.
            </p>
          </div>

          {/* Desktop Carousel Arrows Nav */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-[#251545] text-[#4B2476] dark:text-[#F5B027] shadow-md border border-gray-200 dark:border-purple-700/60 hover:bg-purple-50 dark:hover:bg-[#311C5B] transition-all focus:outline-none"
              aria-label="Slide Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-[#251545] text-[#4B2476] dark:text-[#F5B027] shadow-md border border-gray-200 dark:border-purple-700/60 hover:bg-purple-50 dark:hover:bg-[#311C5B] transition-all focus:outline-none"
              aria-label="Slide Selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {packagesData
                .slice(currentSlide * cardsPerPage, currentSlide * cardsPerPage + cardsPerPage)
                .map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white dark:bg-[#160C26] rounded-3xl overflow-hidden border border-gray-200 dark:border-purple-800/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                  >
                    {pkg.badgeText && (
                      <div className="absolute top-4 left-4 z-10 bg-[#F5B027] text-gray-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                        {pkg.badgeText}
                      </div>
                    )}

                    <div>
                      {/* Image Header */}
                      <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-purple-950/50">
                        <img
                          src={pkg.hotelMakkah.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                          <span className="text-xs bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-amber-300 font-bold border border-white/10">
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

                        <p className="text-xs text-gray-600 dark:text-purple-200/80 line-clamp-2">
                          {pkg.subtitle}
                        </p>

                        {/* Facility Box with Dedicated Unclipped Star Badges */}
                        <div className="space-y-2.5 bg-[#FAFAFD] dark:bg-[#1E1136] p-3.5 rounded-2xl border border-gray-100 dark:border-purple-800/50 text-xs">
                          {/* Makkah Hotel Row */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200 shrink-0">
                              <Building className="w-3.5 h-3.5 text-[#4B2476] dark:text-[#F5B027]" />
                              <span>Makkah:</span>
                            </span>
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="font-bold truncate text-gray-900 dark:text-white">{pkg.hotelMakkah.name}</span>
                              <span className="shrink-0 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-extrabold text-[10px] px-2 py-0.5 rounded-md border border-amber-300/40">
                                ★ {pkg.hotelMakkah.stars}
                              </span>
                            </div>
                          </div>

                          {/* Madinah Hotel Row */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200 shrink-0">
                              <Building className="w-3.5 h-3.5 text-[#F5B027]" />
                              <span>Madinah:</span>
                            </span>
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="font-bold truncate text-gray-900 dark:text-white">{pkg.hotelMadinah.name}</span>
                              <span className="shrink-0 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-extrabold text-[10px] px-2 py-0.5 rounded-md border border-amber-300/40">
                                ★ {pkg.hotelMadinah.stars}
                              </span>
                            </div>
                          </div>

                          {/* Airline Row */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200 shrink-0">
                              <Plane className="w-3.5 h-3.5 text-blue-500 dark:text-amber-400" />
                              <span>Maskapai:</span>
                            </span>
                            <span className="font-bold truncate text-gray-900 dark:text-white">{pkg.airline.split(' ')[0]}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="text-gray-500 dark:text-purple-300/80">Jadwal: {pkg.departureDate}</span>
                          <span className="text-amber-800 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-700/80">
                            Sisa {pkg.seatLeft} Seat
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
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
                          onClick={() => setSelectedPackage(pkg)}
                          className="w-full py-3 px-3 bg-purple-50 dark:bg-[#251545] hover:bg-purple-100 dark:hover:bg-[#311C5B] text-[#4B2476] dark:text-purple-200 font-bold text-xs rounded-xl transition-colors border border-purple-200 dark:border-purple-700/60 text-center"
                        >
                          Detail & Itinerary
                        </button>

                        <button
                          onClick={() => handleOpenBookingForm(pkg.title)}
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
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentSlide ? 'w-8 bg-[#4B2476] dark:bg-[#F5B027]' : 'w-2.5 bg-gray-300 dark:bg-purple-900/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Tombol Lihat Program Lainnya */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/paket-umrah"
            className="inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-400 text-white dark:text-gray-950 font-extrabold px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base group"
          >
            <span>Lihat Program Lainnya</span>
            <ArrowRight className="w-4 h-4 text-[#F5B027] dark:text-gray-950 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Modals */}
      <PackageModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

      <BookingFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageName={selectedTopic}
      />
    </section>
  );
}
