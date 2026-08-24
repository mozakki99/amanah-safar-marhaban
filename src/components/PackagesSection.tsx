'use client';

import React, { useState } from 'react';
import { packagesData, PackageItem } from '@/data/packagesData';
import PackageModal from './PackageModal';
import { Plane, Building, Calendar, Star, Users, ArrowRight, CheckCircle2, Luggage, Sparkles } from 'lucide-react';

export default function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'reguler' | 'private' | 'haji'>('all');
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  const filteredPackages = activeCategory === 'all'
    ? packagesData
    : packagesData.filter((pkg) => pkg.type === activeCategory);

  return (
    <section id="packages" className="py-20 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-[#4B2476] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Luggage className="w-4 h-4 text-[#F5B027]" />
            <span>Pilihan Paket Terbaik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif">
            Paket <span className="text-[#4B2476]">Umrah & Haji</span> Amanah Safar Marhaban
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Temukan pilihan paket ibadah yang sesuai dengan kebutuhan Anda dan keluarga. Seluruh paket dilengkapi bimbingan Muthawwif & penerbangan direct.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'all', label: 'Semua Paket' },
            { id: 'reguler', label: 'Umrah Reguler' },
            { id: 'private', label: 'Umrah Private VIP' },
            { id: 'haji', label: 'Haji Khusus & Furoda' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all shadow-2xs ${
                activeCategory === tab.id
                  ? 'bg-[#4B2476] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Popular / Badge Tag */}
              {pkg.badgeText && (
                <div className="absolute top-4 left-4 z-10 bg-[#F5B027] text-gray-900 font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                  {pkg.badgeText}
                </div>
              )}

              <div>
                {/* Hotel Makkah Cover Photo */}
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
                      <span>{pkg.rating} ({pkg.reviewCount} ulasan)</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-extrabold text-xl text-gray-900 group-hover:text-[#4B2476] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  {/* Highlights Summary Grid */}
                  <div className="space-y-2 bg-[#FAFAFD] p-3.5 rounded-xl border border-gray-100 text-xs">
                    <div className="flex items-center justify-between text-gray-700">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Building className="w-3.5 h-3.5 text-[#4B2476]" />
                        <span>Makkah:</span>
                      </span>
                      <span className="font-bold truncate max-w-[170px] text-gray-900">{pkg.hotelMakkah.name}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Building className="w-3.5 h-3.5 text-[#F5B027]" />
                        <span>Madinah:</span>
                      </span>
                      <span className="font-bold truncate max-w-[170px] text-gray-900">{pkg.hotelMadinah.name}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Plane className="w-3.5 h-3.5 text-blue-600" />
                        <span>Maskapai:</span>
                      </span>
                      <span className="font-bold truncate max-w-[170px] text-gray-900">{pkg.airline.split(' ')[0]} Direct</span>
                    </div>
                  </div>

                  {/* Seat availability warning */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-gray-500">Jadwal: {pkg.departureDate}</span>
                    <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Sisa {pkg.seatLeft} Seat
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & Action Button */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-2 space-y-3">
                <div className="flex items-baseline justify-between pt-3">
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Mulai Dari</span>
                    <span className="text-2xl font-extrabold text-[#4B2476]">{pkg.price}</span>
                  </div>
                  <span className="text-xs text-gray-500">{pkg.priceNote.split('/')[1] || 'pax'}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full py-3 px-3 bg-purple-50 hover:bg-purple-100 text-[#4B2476] font-bold text-xs rounded-xl transition-colors border border-purple-200 text-center"
                  >
                    Detail & Itinerary
                  </button>

                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Assalamu'alaikum Amanah Safar Marhaban, saya mau booking paket "${pkg.title}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 bg-[#4B2476] hover:bg-[#371A58] text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1"
                  >
                    <span>Booking WA</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F5B027]" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Package Detail Modal */}
      <PackageModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </section>
  );
}
