'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Building2, Users, Send, Wallet, User, PhoneCall } from 'lucide-react';

interface CostCalculatorProps {
  onOpenBookingFormWithCalc?: (packageName: string) => void;
}

export default function CostCalculator({ onOpenBookingFormWithCalc }: CostCalculatorProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [paxCount, setPaxCount] = useState<number>(4);
  const [budgetRange, setBudgetRange] = useState('Rp 30 - 38 Juta / Pax');
  const [targetMonth, setTargetMonth] = useState('Oktober 2026');
  const [hotelClass, setHotelClass] = useState('Bintang 4 Dekat Pelataran');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Assalamu'alaikum Konsultan Marhaban,

Saya berminat dengan *Layanan Umrah Custom / Privat*:
- Nama: ${fullName}
- No. WA: ${phone}
- Rombongan: ${paxCount} Jamaah
- Perkiraan Budget: ${budgetRange}
- Rencana Bulan: ${targetMonth}
- Kelas Hotel: ${hotelClass}

Mohon informasi simulasi tanggal & perkiraan biayanya. Terima kasih.`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/6282132323030?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="umrah-planner" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0B0514] dark:via-[#0F071C] dark:to-[#0B0514] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek, Minimalist & Elegant Card */}
        <div className="bg-white dark:bg-[#160C26] rounded-3xl p-6 sm:p-10 shadow-xl border border-purple-100 dark:border-purple-800/60 space-y-6">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-purple-100 dark:bg-purple-950 text-[#4B2476] dark:text-[#F5B027] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-purple-200 dark:border-purple-800/60">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B027]" />
              <span>Umrah Custom & Privat</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight">
              Rancang Perjalanan Umrah Khusus Keluarga
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-purple-200/80 leading-relaxed">
              Ingin tanggal keberangkatan fleksibel, durasi khusus, atau hotel bintang 5 depan pelataran Ka'bah? Konsultasikan kebutuhan rombongan Anda secara cuma-cuma.
            </p>
          </div>

          {/* Form Grid */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm pt-2">
            
            {/* Grid 1: Nama & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: H. Ahmad"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <PhoneCall className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  />
                </div>
              </div>
            </div>

            {/* Grid 2: Pax & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Jumlah Jamaah
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={paxCount}
                    onChange={(e) => setPaxCount(parseInt(e.target.value))}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    <option value={2}>2 Jamaah (Pasangan)</option>
                    <option value={4}>4 Jamaah (Keluarga)</option>
                    <option value={6}>6 Jamaah (Rombongan)</option>
                    <option value={10}>10+ Jamaah (Grup Privat)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Perkiraan Budget / Pax
                </label>
                <div className="relative">
                  <Wallet className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    <option value="Rp 25 - 30 Juta / Pax">Rp 25 - 30 Juta / Pax</option>
                    <option value="Rp 30 - 38 Juta / Pax">Rp 30 - 38 Juta / Pax</option>
                    <option value="Rp 38 - 50 Juta / Pax">Rp 38 - 50 Juta / Pax (VIP)</option>
                    <option value="Diatas Rp 50 Juta / Pax">Diatas Rp 50 Juta / Pax (Executive)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid 3: Month & Hotel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Rencana Bulan Keberangkatan
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={targetMonth}
                    onChange={(e) => setTargetMonth(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    <option value="September 2026">September 2026</option>
                    <option value="Oktober 2026">Oktober 2026</option>
                    <option value="November 2026">November 2026</option>
                    <option value="Desember 2026">Desember 2026 (Akhir Tahun)</option>
                    <option value="Musim Ramadhan 1448 H">Musim Ramadhan 1448 H</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Pilihan Kelas Hotel
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={hotelClass}
                    onChange={(e) => setHotelClass(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    <option value="Bintang 3 Jarak Dekat">Bintang 3 (Dekat Pelataran)</option>
                    <option value="Bintang 4 Dekat Pelataran">Bintang 4 (Reguler Direct)</option>
                    <option value="Bintang 5 Direct Haram">Bintang 5 (Direct Pelataran Haram)</option>
                    <option value="Bintang 5 View Ka'bah">Bintang 5 (View Ka'bah)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-[#371A58] dark:hover:bg-amber-400 transition-all text-center flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
                <span>Konsultasikan Umrah Custom via WhatsApp</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
