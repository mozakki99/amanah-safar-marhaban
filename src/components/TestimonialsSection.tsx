'use client';

import React, { useState } from 'react';
import { Star, Quote, Heart, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'H. Ahmad Subandi & Keluarga',
      city: 'Jakarta Selatan',
      package: 'Umrah Reguler VIP 12 Hari',
      text: 'Alhamdulillah perjalanan Umrah bersama Amanah Safar Marhaban sangat berkesan. Hotel di Makkah persis di depan pelataran Masjidil Haram sehingga orang tua kami yang sepuh tidak lelah sama sekali. Muthawwif masyaAllah sangat sabar membimbing sesuai sunnah.',
      rating: 5,
      date: 'Keberangkatan Ramadhan 1447 H',
    },
    {
      name: 'Hj. Siti Rahmah, M.Pd.',
      city: 'Bandung',
      package: 'Umrah Reguler Hemat 9 Hari',
      text: 'Penerbangan Saudia Airlines direct tanpa transit membuat perjalanan terasa begitu cepat dan nyaman. Makanan catering nusantara di hotel rasanya lezat mirip masakan rumah. Terima kasih Tim Marhaban yang amanah!',
      rating: 5,
      date: 'Keberangkatan Februari 2026',
    },
    {
      name: 'Dr. Ir. Hendra Wijaya',
      city: 'Surabaya',
      package: 'Umrah Private VIP Family',
      text: 'Saya membooking paket private untuk 8 anggota keluarga. Pelayanannya benar-benar kelas wahid. Mobil VIP, jadwal fleksibel, dan pendampingan 24 jam. Sangat recommended bagi yang menginginkan ketenangan ibadah.',
      rating: 5,
      date: 'Keberangkatan Januari 2026',
    },
    {
      name: 'H. Budi Santoso',
      city: 'Medan',
      package: 'Umrah Reguler 9 Hari',
      text: 'Pelayanan konsultan dari pendaftaran paspor sampai manasik sangat jelas. Di Tanah Suci rombongan tertata rapi dan bimbingan ibadahnya sangat menentramkan hati.',
      rating: 5,
      date: 'Keberangkatan Maret 2026',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-28 bg-gray-50/80 dark:bg-[#0B0514] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-950/80 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-700/60">
            <Heart className="w-4 h-4 text-[#F5B027]" />
            <span>Kisah Kebahagiaan Jamaah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight">
            Apa Kata Jamaah <span className="text-[#4B2476] dark:text-[#F5B027]">Amanah Safar Marhaban</span>?
          </h2>
          <p className="text-gray-600 dark:text-purple-200/90 text-sm sm:text-base">
            Ulasan jujur dari jamaah yang telah mempercayakan perjalanan ibadah sucinya bersama kami.
          </p>
        </div>

        {/* Testimonials Interactive Slider / Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Swipable Cards Container */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none sm:overflow-hidden">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`min-w-full sm:min-w-full snap-center bg-white dark:bg-[#160C26] rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-purple-800/60 shadow-xl transition-all duration-300 flex flex-col justify-between relative ${
                  idx === currentIndex ? 'block' : 'hidden sm:hidden'
                }`}
              >
                <Quote className="w-12 h-12 text-purple-100 dark:text-purple-900/40 absolute top-6 right-6 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-1 text-[#F5B027] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B027]" />
                    ))}
                    <span className="text-xs font-bold text-gray-500 dark:text-purple-300/70 ml-2">{item.date}</span>
                  </div>

                  <p className="text-gray-700 dark:text-purple-100 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-purple-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#4B2476] dark:bg-[#F5B027] text-[#F5B027] dark:text-gray-950 font-bold text-lg flex items-center justify-center shadow-md">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 dark:text-white text-base flex items-center gap-1">
                        <span>{item.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-purple-300/80 block">{item.city} • <strong className="text-[#4B2476] dark:text-[#F5B027]">{item.package}</strong></span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-[#251545] text-[#4B2476] dark:text-[#F5B027] shadow-md border border-gray-200 dark:border-purple-700/60 hover:bg-purple-50 dark:hover:bg-[#311C5B] transition-all focus:outline-none"
              aria-label="Testimoni Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === currentIndex ? 'bg-[#4B2476] dark:bg-[#F5B027] w-7' : 'bg-gray-300 dark:bg-purple-900/60 w-3'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-[#251545] text-[#4B2476] dark:text-[#F5B027] shadow-md border border-gray-200 dark:border-purple-700/60 hover:bg-purple-50 dark:hover:bg-[#311C5B] transition-all focus:outline-none"
              aria-label="Testimoni Selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
