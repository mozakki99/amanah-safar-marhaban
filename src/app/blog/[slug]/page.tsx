'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { articlesData } from '@/data/articlesData';
import { packagesData, PackageItem } from '@/data/packagesData';
import { Calendar, Clock, User, ArrowLeft, Tag, Sparkles, Building, Plane, Star, PhoneCall, ChevronRight } from 'lucide-react';
import BookingFormModal from '@/components/BookingFormModal';
import PackageModal from '@/components/PackageModal';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackageModal, setSelectedPackageModal] = useState<PackageItem | null>(null);

  const article = articlesData.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const recommendedPackage = packagesData.find((p) => p.id === article.recommendedPackageId) || packagesData[0];

  return (
    <div className="bg-gradient-to-b from-[#FAF7FC] via-white to-gray-50 dark:from-[#130724] dark:via-[#0B0514] dark:to-[#08030F] min-h-screen py-8 sm:py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-purple-300/80">
          <Link href="/" className="hover:text-[#4B2476] dark:hover:text-[#F5B027]">Beranda</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-[#4B2476] dark:hover:text-[#F5B027]">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#4B2476] dark:text-[#F5B027] bg-purple-50 dark:bg-purple-950/60 px-4 py-2 rounded-xl border border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Blog</span>
        </Link>

        {/* Article Main Card */}
        <article className="bg-white dark:bg-[#160C26] rounded-3xl overflow-hidden shadow-2xl border border-purple-100 dark:border-purple-800/60 p-6 sm:p-10 space-y-8">
          
          {/* Header Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-950 text-xs font-extrabold px-3 py-1 rounded-xl shadow-xs flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>{article.category}</span>
              </span>
              <span className="text-xs text-gray-500 dark:text-purple-300/80 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F5B027]" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-sans text-gray-900 dark:text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-purple-300/80 pt-2 border-t border-gray-100 dark:border-purple-900/50">
              <span className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-purple-100">
                <User className="w-4 h-4 text-[#F5B027]" />
                <span>{article.author}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#F5B027]" />
                <span>{article.date}</span>
              </span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-purple-950/40 shadow-inner">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rich Text Content */}
          <div
            className="prose prose-purple max-w-none dark:prose-invert text-gray-800 dark:text-purple-100/90 text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Recommended Program Card Section */}
          <div className="mt-10 p-5 sm:p-7 bg-gradient-to-br from-purple-50 via-amber-50/40 to-white dark:from-[#20103A] dark:via-[#190D2E] dark:to-[#120722] rounded-3xl border-2 border-[#F5B027] shadow-xl space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F5B027]" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#4B2476] dark:text-[#F5B027]">
                Program Umrah Direkomendasikan dalam Artikel Ini
              </h3>
            </div>

            <div className="bg-white dark:bg-[#160C26] p-4 sm:p-5 rounded-2xl border border-purple-100 dark:border-purple-800/60 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#F5B027] text-gray-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full">
                    {recommendedPackage.badgeText}
                  </span>
                  <span className="text-xs font-bold text-gray-500 dark:text-purple-300">
                    {recommendedPackage.duration}
                  </span>
                </div>

                <h4 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white">
                  {recommendedPackage.title}
                </h4>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-purple-200">
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-[#F5B027]" />
                    <span>Makkah: {recommendedPackage.hotelMakkah.name} ({recommendedPackage.hotelMakkah.stars}★)</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Plane className="w-3.5 h-3.5 text-[#F5B027]" />
                    <span>{recommendedPackage.airline}</span>
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-xs text-gray-400 block">Harga All-In Paket:</span>
                  <span className="text-xl font-extrabold text-[#4B2476] dark:text-[#F5B027]">
                    {recommendedPackage.price}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                <button
                  onClick={() => setSelectedPackageModal(recommendedPackage)}
                  className="px-5 py-2.5 bg-purple-100 dark:bg-purple-900/60 hover:bg-purple-200 dark:hover:bg-purple-800 text-[#4B2476] dark:text-purple-100 font-extrabold text-xs rounded-xl transition-colors text-center"
                >
                  Detail Itinerary
                </button>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-2.5 bg-[#4B2476] dark:bg-[#F5B027] dark:text-gray-950 text-white font-extrabold text-xs rounded-xl shadow-md hover:bg-[#371A58] dark:hover:bg-amber-400 transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#F5B027] dark:text-gray-950" />
                  <span>Konsultasi Paket Ini</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Banner Consultation */}
          <div className="p-6 bg-[#4B2476] dark:bg-[#200D38] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-extrabold text-lg">Punya Pertanyaan Seputar Ibadah Umrah?</h4>
              <p className="text-xs text-purple-200 mt-1">Konsultasikan kebutuhan tanggal, hotel, dan budget keberangkatan keluarga Anda gratis bersama Tim Marhaban.</p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-3 bg-[#F5B027] text-gray-950 font-extrabold text-xs rounded-xl shadow-lg hover:bg-amber-400 transition-all shrink-0 flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-gray-950" />
              <span>Konsultasi Gratis Sekarang</span>
            </button>
          </div>

        </article>
      </div>

      {/* Booking Form Modal */}
      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        packageName={recommendedPackage.title}
      />

      {/* Package Detail Modal */}
      <PackageModal
        packageData={selectedPackageModal}
        onClose={() => setSelectedPackageModal(null)}
      />
    </div>
  );
}
