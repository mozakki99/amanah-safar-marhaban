'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageModal from '@/components/PackageModal';
import BookingFormModal from '@/components/BookingFormModal';
import { packagesData, PackageItem } from '@/data/packagesData';
import { Luggage, Star, Building, Plane, ArrowRight } from 'lucide-react';

export default function PaketUmrahPage() {
  const umrahPackages = packagesData.filter((p) => p.type !== 'haji');
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const handleOpenBookingForm = (packageName: string) => {
    setSelectedTopic(packageName);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0514] text-gray-900 dark:text-white transition-colors duration-300 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Banner Header */}
        <section className="bg-gradient-to-r from-[#4B2476] via-[#371A58] to-[#25103E] dark:from-[#1E0C38] dark:via-[#130725] dark:to-[#0B0514] text-white py-14 sm:py-20 relative overflow-hidden border-b border-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#F5B027] border border-white/20">
              <Luggage className="w-4 h-4" />
              <span>Program Resmi Umrah 1448 H / 2026</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight">
              Katalog Paket <span className="text-[#F5B027]">Umrah Reguler & Private</span>
            </h1>
            <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto">
              Penerbangan Direct Flight, hotel bintang 4 & 5 dekat pelataran masjid, serta pendampingan pembimbing ibadah berpengalaman.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrahPackages.map((pkg) => (
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
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-purple-950/50">
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

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-gray-600 dark:text-purple-200/80 line-clamp-2">
                      {pkg.subtitle}
                    </p>

                    {/* Facility Box with Explicit Star Ratings */}
                    <div className="space-y-2 bg-[#FAFAFD] dark:bg-[#1E1136] p-3.5 rounded-xl border border-gray-100 dark:border-purple-800/50 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200">
                          <Building className="w-3.5 h-3.5 text-[#4B2476] dark:text-[#F5B027]" />
                          <span>Makkah:</span>
                        </span>
                        <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white flex items-center gap-1">
                          {pkg.hotelMakkah.name}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-purple-200">
                          <Building className="w-3.5 h-3.5 text-[#F5B027]" />
                          <span>Madinah:</span>
                        </span>
                        <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white flex items-center gap-1">
                          {pkg.hotelMadinah.name}
                        </span>
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
                      <span className="text-amber-800 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-700/80">
                        Sisa {pkg.seatLeft} Seat
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
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
          </div>
        </main>
      </div>

      <Footer />

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
    </div>
  );
}
