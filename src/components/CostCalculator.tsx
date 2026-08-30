'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Building2, Plane, Users, Send, CheckCircle2, ShieldCheck, Wallet, User, PhoneCall, HeartHandshake } from 'lucide-react';

interface CostCalculatorProps {
  onOpenBookingFormWithCalc?: (packageName: string) => void;
}

export default function CostCalculator({ onOpenBookingFormWithCalc }: CostCalculatorProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [paxCount, setPaxCount] = useState<number>(4);
  const [budgetRange, setBudgetRange] = useState('Rp 30 - 38 Juta / Pax');
  const [targetMonth, setTargetMonth] = useState('Oktober 2026');
  const [duration, setDuration] = useState('9 Hari');
  const [hotelClass, setHotelClass] = useState('Bintang 4 Dekat Pelataran');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Assalamu'alaikum Tim Konsultan Marhaban,

Saya ingin merancang *Paket Umrah Mandiri / Privat*:
- Nama Lengkap: ${fullName}
- No. WhatsApp: ${phone}
- Jumlah Rombongan: ${paxCount} Jamaah
- Perkiraan Budget: ${budgetRange}
- Bulan Keberangkatan: ${targetMonth} (${duration})
- Kebutuhan Hotel: ${hotelClass}
${notes ? `- Catatan Khusus: ${notes}` : ''}

Mohon bantuan penyusunan estimasi biaya & pilihan rutenya. Terima kasih.`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/6282132323030?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="umrah-planner" className="py-12 sm:py-24 bg-gray-50 dark:bg-[#0B0514] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Deep Purple Block */}
        <div className="bg-gradient-to-br from-[#4B2476] via-[#391A5D] to-[#25103E] dark:from-[#1E0C36] dark:via-[#16092A] dark:to-[#0F041D] rounded-3xl p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-purple-800/80">
          
          {/* Ambient Decorative Blur */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Side: Copywriting "Rancang Umrah Mandiri" */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-[#F5B027] border border-white/20 shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#F5B027]" />
                  <span>LAYANAN EXCLUSIVE MARHABAN</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-white tracking-tight leading-tight">
                  Rancang Umrah Mandiri & Privat Sesuai Keinginan Anda
                </h2>

                <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed max-w-xl">
                  Ingin berangkat ibadah umrah di tanggal khusus, durasi perjalanan fleksibel, atau hotel bintang 5 langsung di depan pelataran Ka'bah? Tim Konsultan Marhaban siap merancang paket umrah privat khusus rombongan keluarga Anda.
                </p>
              </div>

              {/* Benefit Bullet Points */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#F5B027] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Bebas Tentukan Tanggal & Bulan Keberangkatan</h4>
                    <p className="text-xs text-purple-200/80">Menyesuaikan jadwal cuti kerja, liburan sekolah anak, atau momen milad keluarga.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <Building2 className="w-5 h-5 text-[#F5B027] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Bebas Pilih Bintang Hotel & Maskapai</h4>
                    <p className="text-xs text-purple-200/80">Pilihan hotel bintang 3, 4, 5 view Ka'bah serta penerbangan Direct Saudia / Garuda.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <HeartHandshake className="w-5 h-5 text-[#F5B027] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Pembimbing Muthawwif Syariah Dedicated</h4>
                    <p className="text-xs text-purple-200/80">Didampingi muthawwif lulusan Universitas Islam Madinah khusus rombongan Anda.</p>
                  </div>
                </div>
              </div>

              {/* PPIU Guarantee Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-950/80 px-4 py-2 rounded-xl text-xs font-bold text-amber-300 border border-purple-700/60">
                <ShieldCheck className="w-4 h-4 text-[#F5B027]" />
                <span>PPIU Resmi Kemenag RI: <strong>23022300424760012</strong></span>
              </div>

            </div>

            {/* Right Side: Embedded Form "Formulir Umrah Mandiri" */}
            <div className="lg:col-span-6">
              <div className="bg-white dark:bg-[#160C26] text-gray-900 dark:text-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-purple-100 dark:border-purple-800/80 space-y-4">
                
                <div className="space-y-1 border-b border-gray-100 dark:border-purple-800/60 pb-3">
                  <span className="text-[11px] font-extrabold text-[#4B2476] dark:text-[#F5B027] uppercase tracking-wider block">
                    Formulir Simulasi Umrah Mandiri
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">
                    Dapatkan Penawaran Custom Istimewa
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
                  
                  {/* Grid Nama & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                          placeholder="Nama Anda"
                          className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
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
                          className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Jumlah Jamaah & Perkiraan Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                        Jumlah Rombongan <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={paxCount}
                          onChange={(e) => setPaxCount(parseInt(e.target.value))}
                          className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                        >
                          <option value={2}>2 Jamaah (Pasangan)</option>
                          <option value={4}>4 Jamaah (Keluarga)</option>
                          <option value={6}>6 Jamaah (Rombongan Kecil)</option>
                          <option value={10}>10 Jamaah (Grup Privat)</option>
                          <option value={20}>20+ Jamaah (Rombongan Besar)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                        Perkiraan Budget / Jamaah
                      </label>
                      <div className="relative">
                        <Wallet className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={budgetRange}
                          onChange={(e) => setBudgetRange(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                        >
                          <option value="Rp 25 - 30 Juta / Pax">Rp 25 - 30 Juta / Pax</option>
                          <option value="Rp 30 - 38 Juta / Pax">Rp 30 - 38 Juta / Pax</option>
                          <option value="Rp 38 - 50 Juta / Pax">Rp 38 - 50 Juta / Pax</option>
                          <option value="Diatas Rp 50 Juta / Pax">Diatas Rp 50 Juta / Pax</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Grid Bulan & Hotel Class */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                        Bulan & Durasi Rencana
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={targetMonth}
                          onChange={(e) => setTargetMonth(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                        >
                          <option value="September 2026 (9 Hari)">September 2026 (9 Hari)</option>
                          <option value="Oktober 2026 (9 Hari)">Oktober 2026 (9 Hari)</option>
                          <option value="November 2026 (12 Hari)">November 2026 (12 Hari)</option>
                          <option value="Desember 2026 (Liburan Akhir Tahun)">Desember 2026 (Akhir Tahun)</option>
                          <option value="Musim Ramadhan 1448 H">Musim Ramadhan 1448 H</option>
                          <option value="Custom Hari">Custom Jumlah Hari</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                        Kebutuhan Bintang Hotel
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={hotelClass}
                          onChange={(e) => setHotelClass(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                        >
                          <option value="Bintang 3 / Hemat Jarak Dekat">Bintang 3 (Hemat Dekat)</option>
                          <option value="Bintang 4 Dekat Pelataran">Bintang 4 (Reguler Dekat)</option>
                          <option value="Bintang 5 Direct Haram">Bintang 5 (Direct Pelataran Haram)</option>
                          <option value="Bintang 5 View Ka'bah">Bintang 5 (View Ka'bah)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Catatan Khusus */}
                  <div>
                    <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                      Catatan / Permintaan Khusus (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Contoh: Mengajak jamaah lansia roda tiga, kamar Family Quad..."
                      className="w-full px-3.5 py-2 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl hover:bg-[#371A58] dark:hover:bg-amber-400 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
                    <span>Rancang Umrah Mandiri Saya via WhatsApp</span>
                  </button>

                </form>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
