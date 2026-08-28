'use client';

import React, { useState } from 'react';
import { PackageItem } from '@/data/packagesData';
import { X, Star, Calendar, Building, Plane, CheckCircle2, ShieldCheck, PhoneCall, ChevronRight } from 'lucide-react';
import BookingFormModal from './BookingFormModal';

interface PackageModalProps {
  packageData: PackageItem | null;
  onClose: () => void;
}

export default function PackageModal({ packageData, onClose }: PackageModalProps) {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'facilities'>('itinerary');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!packageData) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
        <div className="relative bg-white dark:bg-[#160C26] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-purple-100 dark:border-purple-800/80 text-gray-900 dark:text-white my-8 max-h-[90vh] flex flex-col">
          
          {/* Header Banner Image */}
          <div className="relative h-48 sm:h-64 w-full bg-gray-100 dark:bg-purple-950/60 shrink-0">
            <img
              src={packageData.hotelMakkah.image}
              alt={packageData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none z-10 border border-white/20"
              aria-label="Tutup Detail"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Text */}
            <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                {packageData.badgeText && (
                  <span className="bg-[#F5B027] text-gray-950 font-extrabold text-[11px] px-3 py-0.5 rounded-full shadow-md">
                    {packageData.badgeText}
                  </span>
                )}
                <span className="bg-black/50 backdrop-blur-md text-amber-300 font-bold text-xs px-2.5 py-0.5 rounded-md border border-white/10">
                  {packageData.duration}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold font-sans text-white leading-tight">
                {packageData.title}
              </h2>
            </div>
          </div>

          {/* Quick Info Bar with Explicit Hotel Star Ratings */}
          <div className="bg-[#FAF7FC] dark:bg-[#1E1136] px-5 py-3 border-b border-purple-100 dark:border-purple-800/50 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-purple-100">
                <Building className="w-4 h-4 text-[#4B2476] dark:text-[#F5B027]" />
                <span>Makkah: <strong className="text-gray-900 dark:text-white">{packageData.hotelMakkah.name}</strong></span>
                <span className="inline-flex items-center text-amber-500 font-bold ml-1">
                  ({[...Array(packageData.hotelMakkah.stars)].map((_, i) => '★').join('')})
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-purple-100">
                <Building className="w-4 h-4 text-[#F5B027]" />
                <span>Madinah: <strong className="text-gray-900 dark:text-white">{packageData.hotelMadinah.name}</strong></span>
                <span className="inline-flex items-center text-amber-500 font-bold ml-1">
                  ({[...Array(packageData.hotelMadinah.stars)].map((_, i) => '★').join('')})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-bold text-[#4B2476] dark:text-[#F5B027]">
              <Plane className="w-4 h-4" />
              <span>{packageData.airline}</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-100 dark:border-purple-900/50 bg-white dark:bg-[#160C26] shrink-0">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`flex-1 py-3 px-4 font-bold text-xs sm:text-sm text-center border-b-2 transition-all ${
                activeTab === 'itinerary'
                  ? 'border-[#4B2476] dark:border-[#F5B027] text-[#4B2476] dark:text-[#F5B027]'
                  : 'border-transparent text-gray-500 dark:text-purple-300/70 hover:text-gray-900'
              }`}
            >
              📅 Rencana Itinerary Perjalanan
            </button>

            <button
              onClick={() => setActiveTab('facilities')}
              className={`flex-1 py-3 px-4 font-bold text-xs sm:text-sm text-center border-b-2 transition-all ${
                activeTab === 'facilities'
                  ? 'border-[#4B2476] dark:border-[#F5B027] text-[#4B2476] dark:text-[#F5B027]'
                  : 'border-transparent text-gray-500 dark:text-purple-300/70 hover:text-gray-900'
              }`}
            >
              ✨ Fasilitas & Galeri Akomodasi
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
            {activeTab === 'itinerary' ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-500 dark:text-purple-300/80 italic">
                  * Jadwal itinerary bersifat fleksibel menyesuaikan kondisi penerbangan dan situasi lokal Tanah Suci.
                </p>

                <div className="relative border-l-2 border-purple-200 dark:border-purple-800/80 ml-3 space-y-6">
                  {packageData.itinerary.map((item) => (
                    <div key={item.day} className="relative pl-6">
                      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#4B2476] dark:bg-[#F5B027] ring-4 ring-purple-100 dark:ring-purple-950"></span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-extrabold text-[#4B2476] dark:text-[#F5B027] bg-purple-100 dark:bg-[#251545] px-2.5 py-0.5 rounded-md border border-purple-200 dark:border-purple-700/60">
                            Hari {item.day}
                          </span>
                          {item.highlight && (
                            <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                              {item.highlight}
                            </span>
                          )}
                        </div>

                        <h4 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white">
                          {item.title}
                        </h4>

                        <ul className="space-y-1 pt-1 text-xs text-gray-600 dark:text-purple-200/80">
                          {item.activities.map((act, aIdx) => (
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
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Fasilitas Termasuk Paket All-In</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {packageData.includedFacilities.map((fac, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 bg-[#FAFAFD] dark:bg-[#1E1136] p-2.5 rounded-xl border border-gray-100 dark:border-purple-800/50 text-gray-800 dark:text-purple-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#F5B027] shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 dark:text-white mb-3">
                    📸 Galeri Foto Makkah & Madinah
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {packageData.facilityImages.map((img, iIdx) => (
                      <div key={iIdx} className="relative rounded-2xl overflow-hidden group h-36 bg-gray-100 dark:bg-purple-950/60 border border-gray-200 dark:border-purple-800/60">
                        <img src={img.image} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-2 left-3 right-3 text-white">
                          <h5 className="font-bold text-xs">{img.title}</h5>
                          <span className="text-[10px] text-gray-300 block">{img.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-5 bg-gray-50 dark:bg-[#120822] border-t border-gray-100 dark:border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div>
              <span className="text-xs text-gray-400 dark:text-purple-300/70 block font-medium">Harga Resmi Paket</span>
              <span className="text-2xl font-extrabold text-[#4B2476] dark:text-[#F5B027]">{packageData.price}</span>
              <span className="text-xs text-gray-500 dark:text-purple-300/70 ml-1">/ Pax</span>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-7 py-3 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-[#371A58] dark:hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
              <span>Daftar / Konsultasi via WA</span>
            </button>
          </div>

        </div>
      </div>

      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        packageName={packageData.title}
      />
    </>
  );
}
