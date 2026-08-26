'use client';

import React, { useState } from 'react';
import { packagesData, PackageItem } from '@/data/packagesData';
import PackageModal from '@/components/PackageModal';
import { Search, Luggage, Star, Building, Plane, ArrowRight } from 'lucide-react';

export default function PaketUmrahPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'reguler' | 'private'>('all');
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  let umrahPackages = packagesData.filter((pkg) => pkg.type === 'reguler' || pkg.type === 'private');

  if (filterType !== 'all') {
    umrahPackages = umrahPackages.filter((pkg) => pkg.type === filterType);
  }

  if (searchTerm) {
    umrahPackages = umrahPackages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.hotelMakkah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.airline.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F14] text-gray-900 dark:text-gray-100 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#4B2476] to-[#371A58] dark:from-[#25103E] dark:to-[#1A0A2D] rounded-3xl p-6 sm:p-12 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F5B027] border border-white/20">
              <Luggage className="w-4 h-4" />
              <span>Katalog Resmi Paket Umrah 1448 H / 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              Pilihan Paket <span className="text-[#F5B027]">Umrah Reguler & Private VIP</span>
            </h1>

            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Jelajahi seluruh program paket Umrah terpercaya bersama <strong>Amanah Safar Marhaban</strong>. Dilengkapi penerbangan direct, hotel dekat Masjidil Haram, serta bimbingan ibadah sesuai Sunnah.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-slate-800 shadow-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari hotel, maskapai, atau paket..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027] text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'all'
                  ? 'bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50'
              }`}
            >
              Semua Umrah
            </button>
            <button
              onClick={() => setFilterType('reguler')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'reguler'
                  ? 'bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50'
              }`}
            >
              Umrah Reguler
            </button>
            <button
              onClick={() => setFilterType('private')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === 'private'
                  ? 'bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50'
              }`}
            >
              Umrah Private VIP
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        {umrahPackages.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800">
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-lg">
              Tidak ada paket umrah yang sesuai dengan pencarian Anda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrahPackages.map((pkg) => (
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

                  <div className="p-6 space-y-4">
                    <h3 className="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {pkg.subtitle}
                    </p>

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
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full py-3 px-3 bg-purple-50 dark:bg-slate-800 hover:bg-purple-100 dark:hover:bg-slate-700 text-[#4B2476] dark:text-purple-300 font-bold text-xs rounded-xl transition-colors border border-purple-200 dark:border-slate-700 text-center"
                    >
                      Detail & Itinerary
                    </button>

                    <a
                      href={`https://wa.me/6282132323030?text=${encodeURIComponent(`Assalamu'alaikum Amanah Safar Marhaban, saya mau booking paket Umrah "${pkg.title}"`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-3 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 hover:bg-[#371A58] text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1"
                    >
                      <span>Booking WA</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F5B027] dark:text-gray-900" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <PackageModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </div>
  );
}
