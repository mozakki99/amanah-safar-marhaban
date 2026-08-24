'use client';

import React, { useState } from 'react';
import { PackageItem } from '@/data/packagesData';
import { X, CheckCircle2, Plane, Building, Calendar, Star, Clock, MapPin, Bus, Utensils, Luggage, PhoneCall, ChevronRight } from 'lucide-react';

interface PackageModalProps {
  packageData: PackageItem | null;
  onClose: () => void;
}

export default function PackageModal({ packageData, onClose }: PackageModalProps) {
  const [activeTab, setActiveTab] = useState<'facilities' | 'itinerary'>('facilities');

  if (!packageData) return null;

  const waMessage = encodeURIComponent(
    `Assalamu'alaikum Amanah Safar Marhaban, saya tertarik dengan paket "${packageData.title}" (${packageData.price}). Mohon informasi pendaftaran & konsultasi.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-purple-100">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#4B2476] to-[#371A58] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-[#F5B027] text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {packageData.type.toUpperCase()}
            </span>
            {packageData.badgeText && (
              <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                {packageData.badgeText}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pr-8">
            {packageData.title}
          </h2>
          <p className="text-purple-200 text-sm mt-1">{packageData.subtitle}</p>

          <div className="mt-4 pt-4 border-t border-purple-300/30 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-purple-200 block">Harga Paket</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#F5B027]">
                {packageData.price}
              </span>
              <span className="text-xs text-purple-200 ml-1.5">{packageData.priceNote}</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl text-xs">
              <Clock className="w-4 h-4 text-[#F5B027]" />
              <span>Durasi: <strong>{packageData.duration}</strong></span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 pt-3">
          <button
            onClick={() => setActiveTab('facilities')}
            className={`py-3 px-5 font-bold text-sm border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'facilities'
                ? 'border-[#4B2476] text-[#4B2476] bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-[#F5B027]" />
            <span>Fasilitas & Layanan</span>
          </button>

          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 px-5 font-bold text-sm border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'itinerary'
                ? 'border-[#4B2476] text-[#4B2476] bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#F5B027]" />
            <span>Itinerary Rinci Per Hari ({packageData.itinerary.length} Hari)</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* TAB 1: FACILITIES */}
          {activeTab === 'facilities' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Hotel & Airline Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Hotel Makkah */}
                <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4B2476] text-white flex items-center justify-center shrink-0 font-bold">
                    <Building className="w-6 h-6 text-[#F5B027]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#4B2476] uppercase tracking-wider block">Hotel Makkah</span>
                    <h4 className="font-bold text-gray-900 text-base">{packageData.hotelMakkah.name}</h4>
                    <div className="flex items-center gap-1 text-amber-500 my-1">
                      {[...Array(packageData.hotelMakkah.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-semibold text-gray-600 ml-1">Bintang {packageData.hotelMakkah.stars}</span>
                    </div>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#4B2476]" />
                      <span>{packageData.hotelMakkah.distance}</span>
                    </p>
                  </div>
                </div>

                {/* Hotel Madinah */}
                <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5B027] text-[#4B2476] flex items-center justify-center shrink-0 font-bold">
                    <Building className="w-6 h-6 text-[#4B2476]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#4B2476] uppercase tracking-wider block">Hotel Madinah</span>
                    <h4 className="font-bold text-gray-900 text-base">{packageData.hotelMadinah.name}</h4>
                    <div className="flex items-center gap-1 text-amber-500 my-1">
                      {[...Array(packageData.hotelMadinah.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-semibold text-gray-600 ml-1">Bintang {packageData.hotelMadinah.stars}</span>
                    </div>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#4B2476]" />
                      <span>{packageData.hotelMadinah.distance}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Airline Badge */}
              <div className="bg-gray-100 p-4 rounded-2xl flex items-center gap-3">
                <Plane className="w-5 h-5 text-[#4B2476]" />
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase block">Maskapai Penerbangan</span>
                  <span className="text-sm font-bold text-gray-900">{packageData.airline}</span>
                </div>
              </div>

              {/* Facility Images Section (User requested facility photos preview!) */}
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[#4B2476]" />
                  <span>Galeri Fasilitas Layanan Paket</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {packageData.facilityImages.map((imgItem, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xs">
                      <img
                        src={imgItem.image}
                        alt={imgItem.title}
                        className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h5 className="font-bold text-sm leading-snug">{imgItem.title}</h5>
                        <p className="text-xs text-gray-200 mt-0.5 line-clamp-1">{imgItem.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bulleted Included Facilities */}
              <div>
                <h4 className="font-bold text-gray-900 text-base mb-4">Fasilitas Termasuk Dalam Paket:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packageData.includedFacilities.map((fac, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {/* TAB 2: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-xs sm:text-sm text-gray-600 bg-purple-50 p-4 rounded-xl border border-purple-100">
                <strong>Catatan:</strong> Jadwal perjalanan bersifat tentative dan disesuaikan dengan kondisi penerbangan serta arahan resmi dari Kementerian Hajj & Umrah Arab Saudi.
              </p>

              <div className="relative border-l-2 border-purple-200 ml-4 pl-6 space-y-8">
                {packageData.itinerary.map((dayItem) => (
                  <div key={dayItem.day} className="relative group">
                    {/* Day Marker */}
                    <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#4B2476] text-[#F5B027] font-bold text-xs flex items-center justify-center shadow-md">
                      H{dayItem.day}
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-bold text-gray-900 text-base">
                          Hari ke-{dayItem.day}: {dayItem.title}
                        </h4>
                        {dayItem.highlight && (
                          <span className="bg-amber-100 text-[#4B2476] text-xs font-bold px-2.5 py-1 rounded-md">
                            ★ {dayItem.highlight}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-1.5 text-sm text-gray-600 mt-3">
                        {dayItem.activities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-[#F5B027] shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-gray-50 border-t border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500 block">Ada pertanyaan terkait paket ini?</span>
            <span className="text-sm font-bold text-gray-800">Hubungi Konsultan Umrah Marhaban</span>
          </div>

          <a
            href={`https://wa.me/6281234567890?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4B2476] hover:bg-[#371A58] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#F5B027]" />
            <span>Booking & Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
