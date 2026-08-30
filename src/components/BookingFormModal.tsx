'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, User, MapPin, Calendar, Wallet, HelpCircle, UserCheck, Users, BedDouble, CheckCircle } from 'lucide-react';
import { packagesData } from '@/data/packagesData';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
  defaultTopic?: string;
}

export default function BookingFormModal({
  isOpen,
  onClose,
  packageName,
  defaultTopic = 'Konsultasi Umum Paket Umrah & Haji',
}: BookingFormModalProps) {
  // Shared fields
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  // Mode Specific Package fields
  const [paxCount, setPaxCount] = useState('1 Orang');
  const [roomType, setRoomType] = useState('Quad (4 Orang / Kamar)');

  // Mode Consultation fields
  const [choiceType, setChoiceType] = useState<'specific' | 'recommendation'>(packageName ? 'specific' : 'recommendation');
  const [selectedPackage, setSelectedPackage] = useState(packageName || packagesData[0].title);
  const [budgetRange, setBudgetRange] = useState('Rp 30 - 38 Juta / Pax');
  const [departurePlan, setDeparturePlan] = useState('Bulan Depan');
  
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (packageName) {
      setSelectedPackage(packageName);
      setChoiceType('specific');
    }
  }, [packageName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isSpecificBooking = Boolean(packageName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = '';

    if (isSpecificBooking) {
      message = `Assalamu'alaikum Amanah Safar Marhaban,

Saya ingin MENDAFTAR PAKET:
📌 *${packageName}*

Detail Calon Jamaah:
- Nama Lengkap: ${fullName}
- Usia: ${age ? `${age} Tahun` : '-'}
- No. WhatsApp: ${phone}
- Kota Domisili: ${city}
- Jumlah Jamaah: ${paxCount}
- Tipe Kamar: ${roomType}
${notes ? `- Catatan/Permintaan Khusus: ${notes}` : ''}

Mohon konfirmasi ketersediaan seat & rincian pembayaran. Terima kasih.`;
    } else {
      const packageText = choiceType === 'specific' 
        ? `Paket Pilihan: "${selectedPackage}"` 
        : `Status: *Butuh Rekomendasi Paket Konsultan*`;

      message = `Assalamu'alaikum Amanah Safar Marhaban,

Saya ingin berkonsultasi seputar Paket Umrah / Haji:
- Nama Lengkap: ${fullName}
- Usia: ${age ? `${age} Tahun` : '-'}
- No. WhatsApp: ${phone}
- Kota Domisili: ${city}
- ${packageText}
- Budget Perkiraan: ${budgetRange}
- Rencana Keberangkatan: ${departurePlan}
${notes ? `- Pertanyaan/Catatan: ${notes}` : ''}

Mohon bantuan konsultasi dan estimasi jadwal keberangkatan. Terima kasih.`;
    }

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/6282132323030?text=${encodedMsg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white dark:bg-[#160C26] rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-purple-100 dark:border-purple-800/80 text-gray-900 dark:text-white max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-gray-100 dark:bg-purple-900/60 hover:bg-gray-200 dark:hover:bg-purple-800 text-gray-700 dark:text-white flex items-center justify-center transition-colors focus:outline-none z-10"
          aria-label="Tutup Formulir"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8 mb-4 shrink-0">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 dark:bg-purple-950 text-[#4B2476] dark:text-[#F5B027] px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border border-purple-200 dark:border-purple-800/60">
            <ShieldCheck className="w-4 h-4 text-[#F5B027]" />
            <span>{isSpecificBooking ? 'Formulir Pendaftaran Resmi' : 'Konsultasi Ibadah Umrah & Haji'}</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-extrabold font-sans text-gray-900 dark:text-white leading-snug">
            {isSpecificBooking ? `Form Pendaftaran ${packageName}` : 'Konsultasi & Rekomendasi Paket'}
          </h3>

          {/* Banner khusus jika mendaftar paket spesifik */}
          {isSpecificBooking ? (
            <div className="mt-2.5 bg-purple-50 dark:bg-[#22133E] border border-purple-200 dark:border-purple-700/60 p-3 rounded-2xl flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="block text-[11px] font-semibold text-gray-500 dark:text-purple-300">Program Terpilih (Paten):</span>
                <span className="block text-xs sm:text-sm font-extrabold text-[#4B2476] dark:text-[#F5B027]">
                  {packageName}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-gray-500 dark:text-purple-300/80">
              Isi data di bawah untuk konsultasi langsung dengan tim resmi Amanah Safar Marhaban.
            </p>
          )}
        </div>

        {/* Form Body Scrollable */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm overflow-y-auto flex-1 pr-1">
          
          {/* Grid Nama & Usia */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8">
              <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                Nama Lengkap Jamaah <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Contoh: H. Ahmad Subandi"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                Usia (Tahun) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <UserCheck className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  required
                  min={1}
                  max={120}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Contoh: 42"
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                />
              </div>
            </div>
          </div>

          {/* Grid WhatsApp & Kota */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                Nomor WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Send className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0812xxxxxxxx"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                Kota Domisili <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Contoh: Yogyakarta / Jakarta"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                />
              </div>
            </div>
          </div>

          {/* SIKAP 1: JIKA PATEN DAFTAR PAKET TERTENTU */}
          {isSpecificBooking ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Jumlah Jamaah */}
                <div>
                  <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                    Jumlah Jamaah <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={paxCount}
                      onChange={(e) => setPaxCount(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                    >
                      <option value="1 Orang">1 Orang (Sendiri)</option>
                      <option value="2 Orang (Pasangan/Berdua)">2 Orang (Pasangan/Berdua)</option>
                      <option value="3 Orang">3 Orang (Keluarga/Bertiga)</option>
                      <option value="4 Orang (Rombongan Quad)">4 Orang (Rombongan Quad)</option>
                      <option value="Lebih dari 4 Orang">Lebih dari 4 Orang (Rombongan Besar)</option>
                    </select>
                  </div>
                </div>

                {/* Tipe Kamar */}
                <div>
                  <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                    Pilihan Tipe Kamar <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BedDouble className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                    >
                      <option value="Quad (4 Orang / Kamar)">Quad (4 Orang / Kamar)</option>
                      <option value="Triple (3 Orang / Kamar)">Triple (3 Orang / Kamar)</option>
                      <option value="Double (2 Orang / Kamar)">Double (2 Orang / Kamar)</option>
                      <option value="Single (1 Orang / Kamar Private)">Single (1 Orang / Kamar Private)</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* SIKAP 2: JIKA KONSULTASI UMUM */
            <>
              {/* Opsi Pilihan Paket / Butuh Rekomendasi */}
              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1.5">
                  Pilihan Paket Umrah <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setChoiceType('specific')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      choiceType === 'specific'
                        ? 'bg-[#4B2476] text-white border-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 dark:border-[#F5B027]'
                        : 'bg-gray-50 dark:bg-[#1F1138] text-gray-600 dark:text-purple-200 border-gray-200 dark:border-purple-800/60'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Pilih Paket Tertentu</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChoiceType('recommendation')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      choiceType === 'recommendation'
                        ? 'bg-[#4B2476] text-white border-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 dark:border-[#F5B027]'
                        : 'bg-gray-50 dark:bg-[#1F1138] text-gray-600 dark:text-purple-200 border-gray-200 dark:border-purple-800/60'
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Butuh Rekomendasi Konsultan</span>
                  </button>
                </div>

                {choiceType === 'specific' && (
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    {packagesData.map((pkg) => (
                      <option key={pkg.id} value={pkg.title}>
                        {pkg.title} ({pkg.price})
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Range Budget yang Dimiliki */}
              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Perkiraan Budget yang Dimiliki / Pax
                </label>
                <div className="relative">
                  <Wallet className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    <option value="Rp 25 - 30 Juta / Pax">Rp 25 - 30 Juta / Pax (Ekonomis Bintang 3)</option>
                    <option value="Rp 30 - 38 Juta / Pax">Rp 30 - 38 Juta / Pax (Reguler Bintang 4 Direct)</option>
                    <option value="Rp 38 - 50 Juta / Pax">Rp 38 - 50 Juta / Pax (VIP Bintang 5 Pelataran Haram)</option>
                    <option value="Diatas Rp 50 Juta / Pax">Diatas Rp 50 Juta / Pax (Private Executive / Haji Furoda)</option>
                    <option value="Menyesuaikan Rekomendasi">Menyesuaikan Rekomendasi Konsultan</option>
                  </select>
                </div>
              </div>

              {/* Rencana Keberangkatan */}
              <div>
                <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
                  Rencana Keberangkatan
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={departurePlan}
                    onChange={(e) => setDeparturePlan(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
                  >
                    <option value="Bulan Depan">Bulan Depan</option>
                    <option value="3-6 Bulan Lagi">3 - 6 Bulan Lagi</option>
                    <option value="Musim Ramadhan 1448 H">Musim Ramadhan 1448 H</option>
                    <option value="Haji Furoda 2027">Haji Furoda VIP 2027</option>
                    <option value="Masih Tanya-Tanya">Masih Tanya-Tanya Dulu</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Catatan / Pertanyaan opsional */}
          <div>
            <label className="block font-bold text-gray-700 dark:text-purple-200 mb-1">
              Catatan / Permintaan Khusus (Opsional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Mohon info keberangkatan dari Bandara YIA Yogyakarta..."
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2 shrink-0">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-[#371A58] dark:hover:bg-amber-400 transition-all text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#F5B027] dark:text-gray-950" />
              <span>{isSpecificBooking ? 'Kirim Pendaftaran ke WhatsApp' : 'Kirim Konsultasi ke WhatsApp'}</span>
            </button>
          </div>
        </form>

        <p className="text-[10px] text-gray-400 text-center mt-3 shrink-0">
          Data Anda terjamin aman &amp; terlindungi. PPIU Kemenhaj RI (PT Amanah Tangguh Mandiri).
        </p>

      </div>
    </div>
  );
}
