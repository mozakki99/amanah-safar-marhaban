'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { packagesData, PackageItem } from '@/data/packagesData';
import PackageModal from './PackageModal';
import { Luggage, Star, Building, Plane, ArrowRight } from 'lucide-react';

interface ProgramSpotlightProps {
  onOpenBookingForm: (packageName: string) => void;
}

export default function ProgramSpotlight({ onOpenBookingForm }: ProgramSpotlightProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'reguler' | 'private' | 'haji'>('all');
  const [selectedModalPackage, setSelectedModalPackage] = useState<PackageItem | null>(null);

  const filteredPackages = activeTab === 'all'
    ? packagesData
    : packagesData.filter((p) => p.type === activeTab);

  return (
    <section id="programs" className="py-16 sm:py-28 bg-gray-50/70 dark:bg-slate-950/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950/80 text-[#4B2476] dark:text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Luggage className="w-4 h-4 text-[#F5B027]" />
            <span>Katalog Program Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight">
            Pilihan Program <span className="text-[#4B2476] dark:text-[#F5B027]">Umrah & Haji Khusus</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Pilih kategori program yang paling sesuai dengan rencana ibadah Anda.
          </p>
        </div>

        {/* Filter Tabs: Semua | Umrah Reguler | Umrah Private | Haji */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 px-2">
          {[
            { id: 'all', name: 'Semua Program' },
            { id: 'reguler', name: 'Umrah Reguler' },
            { id: 'private', name: 'Umrah Private' },
            { id: 'haji', name: 'Haji Furoda' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-900 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Program Cards Grid (Identik dengan Halaman Paket Umrah) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {pkg.badgeText && (
                <div className="absolute top-4 left-4 z-10 bg-[#F5B027] text-gray-900 font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                  {pkg.badgeText}
                </div>
              )}

              <div>
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={pkg.hotelMakkah.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                    <span className="text-xs bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
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

                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  {/* Facility Box */}
                  <div className="space-y-2 bg-[#FAFAFD] dark:bg-slate-800/60 p-3.5 rounded-xl border border-gray-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300">
                        <Building className="w-3.5 h-3.5 text-[#4B2476] dark:text-[#F5B027]" />
                        <span>Makkah:</span>
                      </span>
                      <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white">{pkg.hotelMakkah.name}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300">
                        <Building className="w-3.5 h-3.5 text-[#F5B027]" />
                        <span>Madinah:</span>
                      </span>
                      <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white">{pkg.hotelMadinah.name}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300">
                        <Plane className="w-3.5 h-3.5 text-blue-500" />
                        <span>Maskapai:</span>
                      </span>
                      <span className="font-bold truncate max-w-[170px] text-gray-900 dark:text-white">{pkg.airline.split(' ')[0]} Direct</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-gray-500 dark:text-gray-400">Jadwal: {pkg.departureDate}</span>
                    <span className="text-amber-800 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                      Sisa {pkg.seatLeft} Seat
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-gray-100 dark:border-slate-800 mt-2 space-y-3">
                <div className="flex items-baseline justify-between pt-3">
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Mulai Dari</span>
                    <span className="text-2xl font-extrabold text-[#4B2476] dark:text-[#F5B027]">{pkg.price}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{pkg.priceNote.split('/')[1] || 'pax'}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedModalPackage(pkg)}
                    className="w-full py-3 px-3 bg-purple-50 dark:bg-slate-800 hover:bg-purple-100 dark:hover:bg-slate-700 text-[#4B2476] dark:text-purple-300 font-bold text-xs rounded-xl transition-colors border border-purple-200 dark:border-slate-700 text-center"
                  >
                    Detail & Itinerary
                  </button>

                  <button
                    onClick={() => onOpenBookingForm(pkg.title)}
                    className="w-full py-3 px-3 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 hover:bg-[#371A58] text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1"
                  >
                    <span>Booking WA</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F5B027] dark:text-gray-900" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Tombol Lihat Program Lainnya */}
        <div className="text-center pt-12">
          <Link
            href="/paket-umrah"
            className="inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] dark:bg-[#F5B027] dark:hover:bg-amber-500 dark:text-gray-900 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg transition-all"
          >
            <span>Lihat Seluruh Katalog Program</span>
            <ArrowRight className="w-4 h-4 text-[#F5B027] dark:text-gray-900" />
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
