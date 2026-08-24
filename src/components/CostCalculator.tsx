'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Building2, Plane, Users, Send, Check } from 'lucide-react';

interface CostCalculatorProps {
  onOpenBookingFormWithCalc: (packageName: string) => void;
}

export default function CostCalculator({ onOpenBookingFormWithCalc }: CostCalculatorProps) {
  const [duration, setDuration] = useState('9 Hari');
  const [hotelChoice, setHotelChoice] = useState('Bintang 4 Dekat Pelataran');
  const [airlineChoice, setAirlineChoice] = useState('Saudia Airlines (Direct)');
  const [paxCount, setPaxCount] = useState<number>(2);

  const durationOptions = ['9 Hari', '12 Hari', '16 Hari', 'Custom'];
  const hotelOptions = ['Bintang 4 Dekat Pelataran', 'Bintang 5 Direct Haram', 'Bintang 5 View Ka\'bah'];
  const airlineOptions = ['Saudia Airlines (Direct)', 'Garuda Indonesia (Direct)', 'Emirates (Transit VIP)'];

  const handleCustomSubmit = () => {
    const customSummary = `Custom Umrah Plan: Durasi ${duration}, Hotel ${hotelChoice}, Maskapai ${airlineChoice}, Rombongan ${paxCount} Orang`;
    onOpenBookingFormWithCalc(customSummary);
  };

  return (
    <section className="py-16 sm:py-28 bg-white dark:bg-[#0F0F14] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#4B2476] via-[#371A58] to-[#25103E] dark:from-[#1E0C36] dark:to-[#120624] rounded-3xl p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-purple-800">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#F5B027]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#F5B027] border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span>Custom Umrah Planner</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight leading-tight">
              Atau Rencanakan Umrah Sesukamu
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm">
              Pilih durasi perjalanan, kelas hotel, maskapai impian, dan jumlah anggota keluarga Anda.
            </p>
          </div>

          <div className="space-y-6 relative z-10 max-w-4xl mx-auto">
            
            {/* 1. Pilih Durasi Hari */}
            <div className="bg-white/10 dark:bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <label className="text-xs font-bold text-[#F5B027] flex items-center gap-2 uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>1. Durasi Perjalanan</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {durationOptions.map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setDuration(dur)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 border ${
                      duration === dur
                        ? 'bg-[#F5B027] text-gray-900 border-[#F5B027] shadow-md font-extrabold'
                        : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                    }`}
                  >
                    {duration === dur && <Check className="w-3.5 h-3.5 text-gray-900" />}
                    <span>{dur}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pilih Kelas Hotel */}
            <div className="bg-white/10 dark:bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <label className="text-xs font-bold text-[#F5B027] flex items-center gap-2 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>2. Kelas Hotel Akomodasi</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {hotelOptions.map((htl) => (
                  <button
                    key={htl}
                    type="button"
                    onClick={() => setHotelChoice(htl)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between border ${
                      hotelChoice === htl
                        ? 'bg-[#F5B027] text-gray-900 border-[#F5B027] shadow-md font-extrabold'
                        : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                    }`}
                  >
                    <span className="truncate">{htl}</span>
                    {hotelChoice === htl && <Check className="w-3.5 h-3.5 text-gray-900 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Pilih Maskapai Penerbangan */}
            <div className="bg-white/10 dark:bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <label className="text-xs font-bold text-[#F5B027] flex items-center gap-2 uppercase tracking-wider">
                <Plane className="w-4 h-4" />
                <span>3. Maskapai Penerbangan</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {airlineOptions.map((air) => (
                  <button
                    key={air}
                    type="button"
                    onClick={() => setAirlineChoice(air)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between border ${
                      airlineChoice === air
                        ? 'bg-[#F5B027] text-gray-900 border-[#F5B027] shadow-md font-extrabold'
                        : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                    }`}
                  >
                    <span className="truncate">{air}</span>
                    {airlineChoice === air && <Check className="w-3.5 h-3.5 text-gray-900 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Pilih Jumlah Jamaah */}
            <div className="bg-white/10 dark:bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#F5B027] flex items-center gap-2 uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>4. Jumlah Rombongan</span>
                </label>
                <span className="text-sm font-extrabold text-white bg-white/20 px-3 py-1 rounded-full">
                  {paxCount} Orang Jamaah
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPaxCount(Math.max(1, paxCount - 1))}
                  className="w-11 h-11 rounded-xl bg-white/20 hover:bg-white/30 font-bold text-xl text-white flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={paxCount}
                  onChange={(e) => setPaxCount(parseInt(e.target.value))}
                  className="w-full accent-[#F5B027] cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => setPaxCount(Math.min(20, paxCount + 1))}
                  className="w-11 h-11 rounded-xl bg-white/20 hover:bg-white/30 font-bold text-xl text-white flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Submit Button */}
            <div className="pt-4 text-center">
              <button
                onClick={handleCustomSubmit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5B027] hover:bg-amber-500 text-gray-900 font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all"
              >
                <Send className="w-5 h-5 text-gray-900" />
                <span>Minta Penawaran Custom via WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
