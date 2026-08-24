'use client';

import React, { useState } from 'react';
import { packagesData, PackageItem } from '@/data/packagesData';
import PackageModal from '@/components/PackageModal';
import { ShieldCheck, Award, Calendar, CheckCircle2, PhoneCall, Building, ArrowRight, FileCheck } from 'lucide-react';

export default function PaketHajiPage() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  const hajiPackages = packagesData.filter((pkg) => pkg.type === 'haji');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F14] text-gray-900 dark:text-gray-100 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#371A58] via-[#4B2476] to-[#25103E] dark:from-[#1A0A2D] dark:to-[#0F051B] rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#F5B027] text-gray-900 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Award className="w-4 h-4 text-gray-900" />
              <span>Program Haji Khusus & Furoda 1448 H / 2027</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              Pendaftaran <span className="text-[#F5B027]">Haji Furoda VIP</span> (Langsung Berangkat)
            </h1>

            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Tunaikan rukun Islam kelima tanpa perlu menunggu antrean puluhan tahun. Menggunakan **Visa Mujamalah Resmi Kerajaan Arab Saudi** yang terdaftar secara sah di Kemenag RI (PIHK).
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#haji-catalog"
                className="inline-flex items-center gap-2 bg-[#F5B027] hover:bg-amber-500 text-gray-900 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm"
              >
                <span>Lihat Paket Haji Furoda</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/6281234567890?text=Assalamu%27alaikum%20Amanah%20Safar%20Marhaban,%20saya%20konsultasi%20pendaftaran%20Haji%20Furoda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/30 px-6 py-3.5 rounded-xl transition-all text-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027]" />
                <span>Konsultasi Haji VIP</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-gray-900 dark:text-white">Visa Furoda Resmi</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Visa Mujamalah langsung terbit dari Kementerian Hajj & Umrah Saudi Arabia.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center font-bold">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-gray-900 dark:text-white">Maktab & Tenda VIP</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Fasilitas tenda ber-AC full board catering di Arafah & Mina dekat jamarat.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-gray-900 dark:text-white">Pembimbing Senior</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Bimbingan manasik intensif oleh Ulama & Pembimbing Syari'ah terkemuka.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-[#4B2476] dark:text-[#F5B027] flex items-center justify-center font-bold">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-gray-900 dark:text-white">Tanpa Antrean</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Berangkat langsung di musim haji tahun berjalan tanpa perlu antre lama.
            </p>
          </div>
        </div>

        {/* Catalog */}
        <div id="haji-catalog" className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-sans">
                Katalog Program Haji VIP
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Pilihan paket perjalanan haji eksklusif dengan pelayanan kelas satu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hajiPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row justify-between group relative"
              >
                <div className="relative md:w-5/12 h-64 md:h-auto overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={pkg.hotelMakkah.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-[#F5B027] text-gray-900 font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                    {pkg.badgeText}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md block w-fit mb-1">
                      Durasi: {pkg.duration}
                    </span>
                    <span className="text-xs font-bold text-amber-300">★ {pkg.rating} ({pkg.reviewCount} ulasan)</span>
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-gray-900 dark:text-white group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    <ul className="space-y-1.5 pt-2 text-xs text-gray-700 dark:text-gray-300">
                      {pkg.includedFacilities.slice(0, 4).map((fac, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-slate-800 space-y-3">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Investasi Ibadah Haji</span>
                      <span className="text-2xl font-extrabold text-[#4B2476] dark:text-[#F5B027]">{pkg.price}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">{pkg.priceNote}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="py-3 px-3 bg-purple-50 dark:bg-slate-800 text-[#4B2476] dark:text-purple-300 font-bold text-xs rounded-xl transition-colors border border-purple-200 dark:border-slate-700 text-center"
                      >
                        Detail & Itinerary
                      </button>

                      <a
                        href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Assalamu'alaikum Amanah Safar Marhaban, saya berminat konsultasi pendaftaran "${pkg.title}"`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1"
                      >
                        <span>Konsultasi WA</span>
                        <ArrowRight className="w-3 h-3 text-[#F5B027] dark:text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#4B2476] dark:text-[#F5B027] bg-purple-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
              Formulir Konsultasi Pendaftaran Haji
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-sans">
              Dapatkan Informasi Kuota & Persyaratan Haji Furoda
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Tim Konsultan Haji Marhaban akan menghubungi Anda untuk memberikan penjelasan detail mengenai alur pendaftaran, skema porsi, dan pemvisaan.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as any;
              const name = target.fullName.value;
              const phone = target.phone.value;
              const city = target.city.value;
              const msg = encodeURIComponent(
                `Assalamu'alaikum Amanah Safar Marhaban, saya ${name} dari ${city} (No. HP: ${phone}) ingin berkonsultasi mengenai pendaftaran Haji Furoda VIP.`
              );
              window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
            }}
            className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Contoh: H. Ahmad Subandi"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Nomor WhatsApp</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="0812xxxxxxxx"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Kota Domisili</label>
              <input
                type="text"
                name="city"
                required
                placeholder="Contoh: Jakarta / Bandung"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476]"
              />
            </div>

            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 text-white font-extrabold text-sm rounded-xl shadow-lg hover:bg-[#371A58] dark:hover:bg-amber-500 transition-all text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027] dark:text-gray-900" />
                <span>Kirim Formulir via WhatsApp Konsultan</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      <PackageModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </div>
  );
}
