'use client';

import React, { useState } from 'react';
import { PackageItem } from '@/data/packagesData';
import BookingFormModal from './BookingFormModal';
import { X, CheckCircle2, Plane, Building, Calendar, Star, Clock, MapPin, Luggage, PhoneCall, ChevronRight } from 'lucide-react';

interface PackageModalProps {
  packageData: PackageItem | null;
  onClose: () => void;
}

export default function PackageModal({ packageData, onClose }: PackageModalProps) {
  const [activeTab, setActiveTab] = useState<'facilities' | 'itinerary'>('facilities');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  if (!packageData) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
        
        {/* Modal Container */}
        <div className="relative bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl max-w-4xl w-full max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-purple-100 dark:border-slate-800">
          
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#4B2476] to-[#371A58] text-white p-5 sm:p-8 relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="bg-[#F5B027] text-gray-900 text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {packageData.type.toUpperCase()}
              </span>
              {packageData.badgeText && (
                <span className="bg-white/20 text-white text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full border border-white/30">
                  {packageData.badgeText}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold font-sans tracking-tight pr-8 leading-snug">
              {packageData.title}
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm mt-0.5 line-clamp-1">{packageData.subtitle}</p>

            <div className="mt-3 pt-3 border-t border-purple-300/30 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[10px] sm:text-xs text-purple-200 block">Harga Paket</span>
                <span className="text-xl sm:text-3xl font-extrabold text-[#F5B027]">
                  {packageData.price}
                </span>
                <span className="text-[10px] sm:text-xs text-purple-200 ml-1">{packageData.priceNote}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl text-xs">
                <Clock className="w-3.5 h-3.5 text-[#F5B027]" />
                <span>Durasi: <strong>{packageData.duration}</strong></span>
              </div>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-950 px-4 sm:px-6 pt-2 shrink-0">
            <button
              onClick={() => setActiveTab('facilities')}
              className={`py-2.5 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'facilities'
                  ? 'border-[#4B2476] dark:border-[#F5B027] text-[#4B2476] dark:text-[#F5B027] bg-white dark:bg-slate-900 rounded-t-xl shadow-2xs'
                  : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B027]" />
              <span>Fasilitas & Layanan</span>
            </button>

            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-2.5 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'itinerary'
                  ? 'border-[#4B2476] dark:border-[#F5B027] text-[#4B2476] dark:text-[#F5B027] bg-white dark:bg-slate-900 rounded-t-xl shadow-2xs'
                  : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#F5B027]" />
              <span>Itinerary Hari demi Hari</span>
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1 text-gray-900 dark:text-white">
            
            {/* TAB 1: FACILITIES */}
            {activeTab === 'facilities' && (
              <div className="space-y-6 animate-fadeIn">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {/* Hotel Makkah */}
                  <div className="bg-purple-50/70 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-purple-100 dark:border-slate-800 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4B2476] dark:bg-[#F5B027] text-white dark:text-gray-900 flex items-center justify-center shrink-0 font-bold">
                      <Building className="w-5 h-5 text-[#F5B027] dark:text-gray-900" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#4B2476] dark:text-[#F5B027] uppercase tracking-wider block">Hotel Makkah</span>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{packageData.hotelMakkah.name}</h4>
                      <div className="flex items-center gap-1 text-amber-500 my-0.5">
                        {[...Array(packageData.hotelMakkah.stars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 ml-1">Bintang {packageData.hotelMakkah.stars}</span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#4B2476] dark:text-[#F5B027] shrink-0" />
                        <span>{packageData.hotelMakkah.distance}</span>
                      </p>
                    </div>
                  </div>

                  {/* Hotel Madinah */}
                  <div className="bg-amber-50/70 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-amber-100 dark:border-slate-800 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5B027] text-[#4B2476] flex items-center justify-center shrink-0 font-bold">
                      <Building className="w-5 h-5 text-[#4B2476]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#4B2476] dark:text-[#F5B027] uppercase tracking-wider block">Hotel Madinah</span>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{packageData.hotelMadinah.name}</h4>
                      <div className="flex items-center gap-1 text-amber-500 my-0.5">
                        {[...Array(packageData.hotelMadinah.stars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 ml-1">Bintang {packageData.hotelMadinah.stars}</span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#4B2476] dark:text-[#F5B027] shrink-0" />
                        <span>{packageData.hotelMadinah.distance}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-slate-800/70 p-3.5 rounded-2xl flex items-center gap-3">
                  <Plane className="w-5 h-5 text-[#4B2476] dark:text-[#F5B027] shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase block">Maskapai Penerbangan</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{packageData.airline}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-3 flex items-center gap-2">
                    <Luggage className="w-4 h-4 text-[#4B2476] dark:text-[#F5B027]" />
                    <span>Galeri Fasilitas Layanan Paket</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {packageData.facilityImages.map((imgItem, idx) => (
                      <div key={idx} className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-2xs">
                        <img
                          src={imgItem.image}
                          alt={imgItem.title}
                          className="w-full h-36 sm:h-44 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                          <h5 className="font-bold text-xs sm:text-sm leading-snug">{imgItem.title}</h5>
                          <p className="text-[10px] text-gray-200 mt-0.5 line-clamp-1">{imgItem.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-3">Fasilitas Termasuk Dalam Paket:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {packageData.includedFacilities.map((fac, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* TAB 2: ITINERARY */}
            {activeTab === 'itinerary' && (
              <div className="space-y-5 animate-fadeIn">
                <p className="text-xs text-gray-600 dark:text-gray-300 bg-purple-50 dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                  <strong>Catatan:</strong> Jadwal perjalanan bersifat tentative dan disesuaikan dengan kondisi penerbangan serta arahan resmi dari Kementerian Hajj & Umrah Arab Saudi.
                </p>

                <div className="relative border-l-2 border-purple-200 dark:border-slate-800 ml-3.5 pl-4 sm:pl-6 space-y-6">
                  {packageData.itinerary.map((dayItem) => (
                    <div key={dayItem.day} className="relative group">
                      <div className="absolute -left-[27px] sm:-left-[35px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4B2476] dark:bg-[#F5B027] text-[#F5B027] dark:text-gray-900 font-bold text-[11px] sm:text-xs flex items-center justify-center shadow-md">
                        H{dayItem.day}
                      </div>

                      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-gray-200 dark:border-slate-800 shadow-2xs hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                            Hari {dayItem.day}: {dayItem.title}
                          </h4>
                          {dayItem.highlight && (
                            <span className="bg-amber-100 dark:bg-amber-950 text-[#4B2476] dark:text-[#F5B027] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md">
                              ★ {dayItem.highlight}
                            </span>
                          )}
                        </div>

                        <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2">
                          {dayItem.activities.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-1.5">
                              <ChevronRight className="w-3.5 h-3.5 text-[#F5B027] shrink-0 mt-0.5" />
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

          {/* Modal Footer CTA -> Triggers BookingFormModal */}
          <div className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="hidden sm:block">
              <span className="text-xs text-gray-500 dark:text-gray-400 block">Ingin booking / tanya rincian?</span>
              <span className="text-sm font-bold text-gray-800 dark:text-white">Isi Formulir Pendaftaran WA</span>
            </div>

            <button
              onClick={() => setIsBookingFormOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 hover:bg-[#371A58] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-xs sm:text-sm text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-gray-900" />
              <span>Isi Form Booking WhatsApp</span>
            </button>
          </div>

        </div>
      </div>

      {/* Booking Form Lead Modal */}
      <BookingFormModal
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
        packageName={packageData.title}
      />
    </>
  );
}
