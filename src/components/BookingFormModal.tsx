'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, PhoneCall, ShieldCheck, User, MapPin, Calendar } from 'lucide-react';

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
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [departurePlan, setDeparturePlan] = useState('Bulan Depan');
  const [notes, setNotes] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const topicText = packageName ? `Paket: "${packageName}"` : `Topik: "${defaultTopic}"`;
    const message = `Assalamu'alaikum Amanah Safar Marhaban,

Saya ingin berkonsultasi / mendaftar:
👤 *Nama*: ${fullName}
📱 *No. WA*: ${phone}
📍 *Kota*: ${city}
🎯 *${topicText}*
📅 *Rencana Keberangkatan*: ${departurePlan}
${notes ? `📝 *Catatan/Pertanyaan*: ${notes}` : ''}

Mohon informasi rincian pendaftaran & kuota seat. Terima kasih.`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/6282132323030?text=${encodedMsg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-purple-100 dark:border-slate-800 text-gray-900 dark:text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Tutup Formulir"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 dark:bg-slate-800 text-[#4B2476] dark:text-[#F5B027] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Form Pendaftaran & Konsultasi</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold font-sans text-gray-900 dark:text-white leading-snug">
            {packageName ? `Pendaftaran ${packageName}` : 'Konsultasi Ibadah Umrah & Haji'}
          </h3>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Isi formulir singkat di bawah ini. Tim Konsultan Marhaban akan langsung membantu Anda via WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Nama Lengkap */}
          <div>
            <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Contoh: H. Ahmad Subandi"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
              />
            </div>
          </div>

          {/* Nomor WhatsApp */}
          <div>
            <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
              Nomor WhatsApp Active <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <PhoneCall className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812xxxxxxxx"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
              />
            </div>
          </div>

          {/* Kota Domisili */}
          <div>
            <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
              Kota Domisili <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Contoh: Yogyakarta / Jakarta / Surabaya"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
              />
            </div>
          </div>

          {/* Perkiraan Rencana Keberangkatan */}
          <div>
            <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
              Rencana Keberangkatan
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={departurePlan}
                onChange={(e) => setDeparturePlan(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
              >
                <option value="Bulan Depan">Bulan Depan</option>
                <option value="3-6 Bulan Lagi">3 - 6 Bulan Lagi</option>
                <option value="Musim Ramadhan 1448 H">Musim Ramadhan 1448 H</option>
                <option value="Haji Furoda 2027">Haji Furoda VIP 2027</option>
                <option value="Masih Tanya-Tanya">Masih Tanya-Tanya Dulu</option>
              </select>
            </div>
          </div>

          {/* Catatan / Pertanyaan opsional */}
          <div>
            <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
              Catatan / Pertanyaan Khusus (Opsional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Jumlah jamaah 4 orang, ingin kamar Quad"
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-900 text-white font-extrabold text-sm rounded-xl shadow-lg hover:bg-[#371A58] dark:hover:bg-amber-500 transition-all text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#F5B027] dark:text-gray-900" />
              <span>Lanjutkan ke WhatsApp Konsultan</span>
            </button>
          </div>
        </form>

        <p className="text-[10px] text-gray-400 text-center mt-4">
          🔒 Data Anda aman & terlindungi. Resmi terdaftar Kemenag RI (PT Amanah Tangguh Mandiri).
        </p>

      </div>
    </div>
  );
}
