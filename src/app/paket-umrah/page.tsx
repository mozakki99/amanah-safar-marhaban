'use client';

import React, { useState, useMemo } from 'react';
import PackageModal from '@/components/PackageModal';
import BookingFormModal from '@/components/BookingFormModal';
import { packagesData, PackageItem } from '@/data/packagesData';
import { Luggage, Star, Building, Plane, ArrowRight, Search, Calendar, Filter, RefreshCw } from 'lucide-react';

export default function PaketUmrahPage() {
  const umrahPackages = useMemo(() => packagesData.filter((p) => p.type !== 'haji'), []);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedStars, setSelectedStars] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  // Complete List of All 12 Months
  const allMonths = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  // Filtered packages logic
  const filteredPackages = useMemo(() => {
    return umrahPackages.filter((pkg) => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesMakkah = pkg.hotelMakkah.name.toLowerCase().includes(query);
        const matchesMadinah = pkg.hotelMadinah.name.toLowerCase().includes(query);
        const matchesAirline = pkg.airline.toLowerCase().includes(query);
        if (!matchesTitle && !matchesMakkah && !matchesMadinah && !matchesAirline) {
          return false;
        }
      }

      // 2. Month Filter (matches if departureDate contains month name or is custom private)
      if (selectedMonth) {
        const monthQuery = selectedMonth.toLowerCase();
        const departureLower = pkg.departureDate.toLowerCase();
        const isCustomPrivate = departureLower.includes('request') || departureLower.includes('setiap bulan');
        if (!departureLower.includes(monthQuery) && !isCustomPrivate) {
          return false;
        }
      }

      // 3. Hotel Stars Filter (matches if either Makkah or Madinah has target stars)
      if (selectedStars) {
        const targetStar = parseInt(selectedStars, 10);
        if (pkg.hotelMakkah.stars !== targetStar && pkg.hotelMadinah.stars !== targetStar) {
          return false;
        }
      }

      // 4. Duration Filter
      if (selectedDuration && !pkg.duration.toLowerCase().includes(selectedDuration.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [umrahPackages, searchQuery, selectedMonth, selectedStars, selectedDuration]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedMonth('');
    setSelectedStars('');
    setSelectedDuration('');
  };

  const handleOpenBookingForm = (packageName: string) => {
    setSelectedTopic(packageName);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0514] text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Page Banner Header */}
      <section className="bg-gradient-to-r from-[#4B2476] via-[#371A58] to-[#25103E] dark:from-[#1E0C38] dark:via-[#130725] dark:to-[#0B0514] text-white py-12 sm:py-16 relative overflow-hidden border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#F5B027] border border-white/20">
            <Luggage className="w-4 h-4" />
            <span>Program Resmi Umrah 1448 H / 2026 - 2027</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight">
            Katalog Paket <span className="text-[#F5B027]">Umrah Reguler & Private</span>
          </h1>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto">
            Penerbangan maskapai ternama, hotel bintang 4 & 5 dekat pelataran masjid, serta pendampingan pembimbing ibadah berpengalaman.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
        
        {/* Filter & Search Toolbar */}
        <div className="bg-[#FAFAFD] dark:bg-[#160C26] rounded-3xl p-5 sm:p-6 border border-gray-200 dark:border-purple-800/60 shadow-sm space-y-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200/80 dark:border-purple-900/40 pb-4">
            <div className="flex items-center gap-2 text-[#4B2476] dark:text-[#F5B027] font-extrabold text-sm sm:text-base">
              <Filter className="w-4 h-4 text-[#F5B027]" />
              <span>Filter & Pencarian Paket Umrah</span>
            </div>

            {(searchQuery || selectedMonth || selectedStars || selectedDuration) && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline focus:outline-none"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Semua Filter</span>
              </button>
            )}
          </div>

          {/* Filter Form Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            
            {/* 1. Text Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-purple-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama paket/hotel/maskapai..."
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#251545] border border-gray-200 dark:border-purple-700/60 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-purple-300/60 focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
              />
            </div>

            {/* 2. Month Select Dropdown (Complete 12 Months) */}
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-purple-300 pointer-events-none" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white dark:bg-[#251545] border border-gray-200 dark:border-purple-700/60 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027] appearance-none"
              >
                <option value="">Semua Bulan (Januari - Desember)</option>
                {allMonths.map((m, idx) => (
                  <option key={idx} value={m}>
                    Bulan {m}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Hotel Stars Dropdown */}
            <div className="relative">
              <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-purple-300 pointer-events-none" />
              <select
                value={selectedStars}
                onChange={(e) => setSelectedStars(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white dark:bg-[#251545] border border-gray-200 dark:border-purple-700/60 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027] appearance-none"
              >
                <option value="">Semua Bintang Hotel</option>
                <option value="5">Hotel Bintang 5</option>
                <option value="4">Hotel Bintang 4</option>
              </select>
            </div>

            {/* 4. Duration Dropdown */}
            <div className="relative">
              <Luggage className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-purple-300 pointer-events-none" />
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white dark:bg-[#251545] border border-gray-200 dark:border-purple-700/60 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027] appearance-none"
              >
                <option value="">Semua Durasi Hari</option>
                <option value="9 Hari">9 Hari</option>
                <option value="12 Hari">12 Hari</option>
                <option value="16 Hari">16 Hari</option>
              </select>
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-purple-300/80 pt-1">
            <span>Menampilkan <strong>{filteredPackages.length}</strong> dari <strong>{umrahPackages.length}</strong> program umrah</span>
          </div>

        </div>

        {/* Catalog Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
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
        ) : (
          /* Empty State when no match */
          <div className="text-center py-16 bg-[#FAFAFD] dark:bg-[#160C26] rounded-3xl border border-gray-200 dark:border-purple-800/60 p-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-950/80 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center mx-auto">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Tidak Ada Paket Yang Sesuai Filter</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-purple-200/70 max-w-md mx-auto">
              Maaf, tidak ditemukan program umrah untuk bulan <strong>{selectedMonth}</strong> atau kata kunci pilihan Anda. Anda dapat mengajukan tanggal khusus dengan memesan <strong>Umrah Private VIP</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md hover:bg-[#371A58] dark:hover:bg-amber-400 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reset Filter Pencarian</span>
              </button>

              <button
                onClick={() => handleOpenBookingForm('Request Tanggal Umrah Private Custom')}
                className="inline-flex items-center gap-2 bg-amber-100 dark:bg-purple-900/60 text-[#4B2476] dark:text-[#F5B027] font-bold px-6 py-2.5 rounded-xl text-xs border border-amber-300 dark:border-purple-700 hover:bg-amber-200 transition-all"
              >
                <span>Request Tanggal Private WA</span>
              </button>
            </div>
          </div>
        )}
      </main>

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
