'use client';

import React from 'react';
import { Calendar, Users, Plane, CheckCircle2, PhoneCall } from 'lucide-react';

export default function ScheduleSection() {
  const schedules = [
    {
      date: '15 Oktober 2026',
      program: 'Umrah Reguler Hemat 9 Hari',
      airline: 'Saudia Airlines (Direct)',
      hotel: 'Bintang 4 Makkah & Madinah',
      seatsTotal: 45,
      seatsLeft: 6,
      status: 'Terbilang Cepat Terisi',
    },
    {
      date: '28 Oktober 2026',
      program: 'Umrah VIP Bintang 5 Direct Haram (12 Hari)',
      airline: 'Garuda Indonesia (Direct)',
      hotel: 'Pullman Zamzam / Frontel',
      seatsTotal: 30,
      seatsLeft: 4,
      status: 'Sisa Sedikit',
    },
    {
      date: '12 November 2026',
      program: 'Umrah Reguler Awal Musim (9 Hari)',
      airline: 'Saudia Airlines (Direct)',
      hotel: 'Bintang 4 Walking Distance',
      seatsTotal: 45,
      seatsLeft: 12,
      status: 'Tersedia',
    },
    {
      date: '10 Maret 2027',
      program: 'Umrah Ramadhan & Lailatul Qadr (9 Hari)',
      airline: 'Saudia Airlines (Direct)',
      hotel: 'Ajyad Makkarim / Rove',
      seatsTotal: 40,
      seatsLeft: 3,
      status: 'Hampir Penuh',
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-[#4B2476] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-[#F5B027]" />
            <span>Jadwal Keberangkatan Terdekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-serif">
            Jadwal Keberangkatan <span className="text-[#4B2476]">Umrah 1448 H / 2026-2027</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Pilihlah tanggal keberangkatan yang sesuai dengan waktu Anda. Tempat terbatas demi menjaga kenyamanan jamaah.
          </p>
        </div>

        {/* Schedule Cards / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedules.map((sch, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFD] rounded-2xl p-6 border border-gray-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center gap-2 text-[#4B2476] font-bold text-lg">
                    <Calendar className="w-5 h-5 text-[#F5B027]" />
                    <span>{sch.date}</span>
                  </div>
                  <span className="text-xs font-bold bg-purple-100 text-[#4B2476] px-3 py-1 rounded-full">
                    {sch.status}
                  </span>
                </div>

                <h3 className="font-extrabold text-gray-900 text-lg mb-3">{sch.program}</h3>

                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-600" />
                    <span>{sch.airline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Fasilitas: {sch.hotel}</span>
                  </div>
                </div>

                {/* Progress Bar Seat */}
                <div className="space-y-1 mb-6">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-500">Kuota Terisi</span>
                    <span className="text-[#4B2476] font-bold">
                      Sisa {sch.seatsLeft} dari {sch.seatsTotal} Seat
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4B2476] to-[#F5B027] rounded-full"
                      style={{ width: `${((sch.seatsTotal - sch.seatsLeft) / sch.seatsTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Assalamu'alaikum Amanah Safar Marhaban, saya mau amankan seat untuk keberangkatan tanggal ${sch.date} (${sch.program})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#4B2476] hover:bg-[#371A58] text-white font-bold text-xs rounded-xl shadow-sm transition-colors text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F5B027]" />
                <span>Amankan Seat Anda Sekarang</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
