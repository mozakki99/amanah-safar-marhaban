'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { articlesData } from '@/data/articlesData';
import { Calendar, Clock, BookOpen, ChevronRight, Search, Tag, Sparkles } from 'lucide-react';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Panduan Ibadah', 'Tips Travel', 'Keutamaan Ibadah', 'Biaya & Paket', 'Haji Khusus'];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-[#FAF7FC] via-white to-gray-50 dark:from-[#130724] dark:via-[#0B0514] dark:to-[#08030F] min-h-screen py-10 sm:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-950 text-[#4B2476] dark:text-[#F5B027] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-purple-200 dark:border-purple-800/60 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#F5B027]" />
            <span>Blog & Edukasi Tanah Suci</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-sans text-gray-900 dark:text-white tracking-tight leading-tight">
            Wawasan & Panduan Ibadah Umrah & Haji
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-purple-200/90 leading-relaxed">
            Artikel rujukan tepercaya seputar tips perjalanan, manasik ibadah sesuai Sunnah, legalitas Kemenag RI, serta kabar terbaru Tanah Suci Makkah & Madinah.
          </p>
        </div>

        {/* Filter Toolbar & Search Bar */}
        <div className="bg-white dark:bg-[#160C26] p-4 sm:p-5 rounded-3xl shadow-xl border border-purple-100 dark:border-purple-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#4B2476] text-white dark:bg-[#F5B027] dark:text-gray-950 shadow-md'
                    : 'bg-gray-100 dark:bg-purple-950/60 text-gray-600 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel umrah..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#1F1138] border border-gray-200 dark:border-purple-800/60 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#4B2476] dark:focus:border-[#F5B027]"
            />
          </div>

        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white dark:bg-[#160C26] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-purple-100 dark:border-purple-800/60 flex flex-col group transition-all duration-300"
              >
                {/* Cover Image Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-purple-950/40">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <span className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-[#F5B027] text-[11px] font-extrabold px-3 py-1 rounded-xl border border-white/20 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#F5B027]" />
                    <span>{article.category}</span>
                  </span>
                </div>

                {/* Article Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-gray-500 dark:text-purple-300/80 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F5B027]" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#F5B027]" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white leading-snug group-hover:text-[#4B2476] dark:group-hover:text-[#F5B027] transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-xs text-gray-600 dark:text-purple-200/80 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Link Button */}
                  <div className="pt-2 border-t border-gray-100 dark:border-purple-900/50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400 dark:text-purple-300/70">
                      {article.author}
                    </span>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-[#4B2476] dark:text-[#F5B027] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Baca Artikel</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#160C26] rounded-3xl border border-purple-100 dark:border-purple-800/60 p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Tidak ada artikel ditemukan</h3>
            <p className="text-xs text-gray-500 dark:text-purple-300">Coba ubah kata kunci pencarian atau kategori artikel Anda.</p>
          </div>
        )}

      </div>
    </div>
  );
}
