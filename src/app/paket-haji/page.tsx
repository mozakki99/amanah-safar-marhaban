'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageModal from '@/components/PackageModal';
import BookingFormModal from '@/components/BookingFormModal';
import { packagesData, PackageItem } from '@/data/packagesData';
import { ShieldCheck, Star, Building, Plane, ArrowRight, Award } from 'lucide-react';

export default function PaketHajiPage() {
  const hajiPackage = packagesData.find((p) => p.type === 'haji') || packagesData[0];
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0514] text-gray-900 dark:text-white transition-colors duration-300 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Banner Header */}
        <section className="bg-gradient-to-r from-[#4B2476] via-[#371A58] to-[#25103E] dark:from-[#1E0C38] dark:via-[#130725] dark:to-[#0B0514] text-white py-14 sm:py-20 relative overflow-hidden border-b border-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#F5B027] border border-white/20">
              <Award className="w-4 h-4" />
              <span>Izin PIHK Kemenag RI: 23022300424760013</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight">
              Program <span className="text-[#F5B027]">Haji Khusus Furoda VIP</span>
            </h1>
            <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto">
              Ibadah Haji Khusus Tanpa Antre Menggunakan Visa Mujamalah Resmi Kerajaan Arab Saudi Berizin Resmi Kemenag RI.
            </p>
          </div>
        </section>

        {/* Main Details */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="bg-white dark:bg-[#160C26] rounded-3xl overflow-hidden border border-gray-200 dark:border-purple-800/60 shadow-xl p-6 sm:p-10 space-y-8">
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative h-64 sm:h-80 w-full md:w-1/2 rounded-2xl overflow-hidden">
                <img
                  src={hajiPackage.hotelMakkah.image}
                  alt={hajiPackage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#F5B027] text-gray-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full">
                  Visa Furoda Resmi
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
                  {hajiPackage.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-purple-200/90 leading-relaxed">
                  {hajiPackage.subtitle}
                </p>

                <div className="pt-2">
                  <span className="text-xs text-gray-400 block font-medium">Estimasi Biaya Program</span>
                  <span className="text-3xl font-extrabold text-[#4B2476] dark:text-[#F5B027]">{hajiPackage.price}</span>
                  <span className="text-xs text-gray-500 dark:text-purple-300/80 ml-2">/ Pax (All-In)</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setSelectedPackage(hajiPackage)}
                    className="py-3.5 px-6 bg-purple-50 dark:bg-[#251545] hover:bg-purple-100 dark:hover:bg-[#311C5B] text-[#4B2476] dark:text-purple-200 font-bold text-sm rounded-xl transition-colors border border-purple-200 dark:border-purple-700/60 text-center"
                  >
                    Rincian Itinerary Haji
                  </button>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="py-3.5 px-6 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 hover:bg-[#371A58] dark:hover:bg-amber-400 text-white font-bold text-sm rounded-xl transition-colors shadow-md text-center flex items-center justify-center gap-2"
                  >
                    <span>Daftar Seat Haji WA</span>
                    <ArrowRight className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
                  </button>
                </div>
              </div>
            </div>

            {/* Facilities Included */}
            <div className="border-t border-gray-100 dark:border-purple-900/50 pt-8 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F5B027]" />
                <span>Fasilitas Keutamaan Haji Furoda VIP</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 dark:text-purple-200">
                {hajiPackage.includedFacilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#FAFAFD] dark:bg-[#1E1136] p-3 rounded-xl border border-gray-100 dark:border-purple-800/50">
                    <span className="w-2 h-2 rounded-full bg-[#F5B027]"></span>
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />

      <PackageModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

      <BookingFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageName={hajiPackage.title}
      />
    </div>
  );
}
