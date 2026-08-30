export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  coverImage: string;
  contentHtml: string;
  recommendedPackageId: string;
}

export const articlesData: ArticleItem[] = [
  {
    slug: 'panduan-lengkap-persiapan-umrah-pertama-kali',
    title: 'Panduan Lengkap Persiapan Umrah Pertama Kali untuk Jamaah Indonesia (1448 H / 2026)',
    category: 'Panduan Ibadah',
    date: '28 Agustus 2026',
    readTime: '7 menit baca',
    author: 'Tim Bimbingan Ibadah Marhaban',
    excerpt: 'Menjalankan ibadah umrah untuk pertama kali adalah momen berharga yang dinantikan. Ketahui persiapan fisik, dokumen, tata cara ihram, hingga tips menjaga kesehatan di Tanah Suci.',
    coverImage: '/images/pixabay-kabah-4372290.jpg',
    recommendedPackageId: 'umrah-reguler-9d',
    contentHtml: `
      <h2>1. Persiapan Dokumen Lengkap & Legalitas</h2>
      <p>Langkah pertama sebelum berangkat adalah memastikan dokumen perjalanan Anda sudah lengkap dan aktif. Pemerintah Arab Saudi kini menerapkan syarat ketat terkait paspor dan visa umrah elektronik.</p>
      <ul>
        <li><strong>Paspor RI:</strong> Masa berlaku minimal 6 bulan sebelum tanggal keberangkatan dengan nama minimal 2 suku kata.</li>
        <li><strong>Sertifikat Vaksin:</strong> Memenuhi standar regulasi kesehatan internasional Kemenkes RI & Kemenhaj.</li>
        <li><strong>Pasfoto Resmi:</strong> Foto latar putih fokus 80% wajah untuk proses penerbitan Visa Umrah.</li>
      </ul>

      <div class="my-6 p-4 bg-purple-50 dark:bg-purple-950/60 border-l-4 border-[#4B2476] dark:border-[#F5B027] rounded-r-2xl">
        <h4 class="font-extrabold text-[#4B2476] dark:text-[#F5B027] text-sm">💡 Tips Penting Jamaah Marhaban</h4>
        <p class="text-xs text-gray-700 dark:text-purple-200 mt-1">Seluruh pengurusan Visa Umrah & Asuransi Perjalanan Arab Saudi diurus 100% oleh tim pendaftaran Amanah Safar Marhaban tanpa biaya tambahan tersembunyi.</p>
      </div>

      <h2>2. Memahami Manasik & Tata Cara Rukun Umrah</h2>
      <p>Ibadah umrah terdiri dari 4 rukun utama yang wajib dipahami agar ibadah sah sesuai petunjuk Sunnah Rasulullah SAW:</p>
      <ol>
        <li><strong>Niat Ihram:</strong> Dilakukan di Miqat (seperti Bir Ali untuk rute Madinah atau Yalamlam untuk rute Jeddah).</li>
        <li><strong>Thawaf:</strong> Mengelilingi Ka'bah sebanyak 7 putaran dimulai dari Hajar Aswad.</li>
        <li><strong>Sa'i:</strong> Berjalan dan berlari-lari kecil 7 kali antara bukit Shafa dan Marwah.</li>
        <li><strong>Tahallul:</strong> Memotong atau memendekkan rambut sebagai tanda selesainya ibadah umrah.</li>
      </ol>

      <h2>3. Persiapan Fisik & Obat-obatan Pribadi</h2>
      <p>Ibadah umrah membutuhkan ketahanan fisik ekstra karena aktivitas jalan kaki yang intens di pelataran Masjidil Haram. Disarankan untuk mulai latihan jalan santai 15-30 menit setiap pagi minimal 2 minggu sebelum keberangkatan.</p>
    `,
  },
  {
    slug: 'tips-memilih-travel-umrah-resmi-kemenag',
    title: 'Tips Memilih Travel Umrah Resmi Kemenhaj Agar Terhindar dari Penipuan',
    category: 'Tips Travel',
    date: '25 Agustus 2026',
    readTime: '6 menit baca',
    author: 'Tim Regulasi & Keamanan Marhaban',
    excerpt: 'Jangan tergiur harga murah tanpa kepastian. Pelajari 5 Pasti Umrah Kemenhaj RI dan cara memverifikasi izin resmi PPIU travel umrah pilihan keluarga Anda.',
    coverImage: '/images/pixabay-madinah-3782640.jpg',
    recommendedPackageId: 'umrah-hemat-b3',
    contentHtml: `
      <h2>Memahami Prinsip 5 Pasti Umrah Kemenhaj RI</h2>
      <p>Kementerian Agama Republik Indonesia mengimbau seluruh calon jamaah untuk selalu memverifikasi travel umrah berdasarkan standar <strong>5 Pasti Umrah</strong>:</p>

      <ul>
        <li><strong>Pasti Travelnya Berizin PPIU:</strong> Cek nomor izin resmi PPIU di aplikasi Umrah Cerdas Kemenhaj. PT Amanah Tangguh Mandiri (Marhaban) terdaftar resmi dengan PPIU <code>23022300424760012</code>.</li>
        <li><strong>Pasti Jadwal Penerbangannya:</strong> Tiket pesawat maskapai direct (Saudia / Garuda) sudah terbit penerbitannya.</li>
        <li><strong>Pasti Harga dan Paket Pelayanannya:</strong> Harga All-In tanpa biaya tersembunyi saat di Tanah Suci.</li>
        <li><strong>Pasti Hotel dan Akomodasinya:</strong> Kontrak hotel bintang 3/4/5 di Makkah & Madinah jelas dan dapat dikonfirmasi.</li>
        <li><strong>Pasti Visanya:</strong> Visa umrah resmi diterbitkan sebelum jamaah berangkat ke bandara.</li>
      </ul>

      <h2>Hati-Hati dengan Penawaran Umrah Murah yang Tidak Masuk Akal</h2>
      <p>Biaya referensi minimal umrah resmi Kemenhaj adalah Rp 26 - 28 Juta. Jika menemukan penawaran di bawah harga standar dengan jaminan berangkat berbulan-bulan tanpa kepastian tiket, jamaah patut waspada.</p>
    `,
  },
  {
    slug: 'keutamaan-umrah-bulan-ramadhan',
    title: 'Keutamaan Umrah Bulan Ramadhan: Pahala Setara Senilai Ibadah Haji',
    category: 'Keutamaan Ibadah',
    date: '20 Agustus 2026',
    readTime: '5 menit baca',
    author: 'Ustadz Bimbingan Sunnah',
    excerpt: 'Rasulullah SAW bersabda bahwa umrah di bulan Ramadhan memiliki keutamaan luar biasa senilai ibadah haji bersama beliau. Simak persiapan fisik dan batinnya.',
    coverImage: '/images/pixabay-kabah-7552281.jpg',
    recommendedPackageId: 'umrah-syaban-ramadhan',
    contentHtml: `
      <h2>Keutamaan Dahsyat Umrah di Bulan Suci Ramadhan</h2>
      <p>Bulan Ramadhan adalah momen paling mulia di mana setiap amal kebaikan dilipatgandakan. Rasulullah SAW bersabda dalam hadits riwayat Bukhari & Muslim:</p>

      <blockquote class="my-5 p-4 italic bg-amber-50 dark:bg-amber-950/40 border-l-4 border-[#F5B027] text-gray-800 dark:text-amber-200">
        "Sesungguhnya umrah di bulan Ramadhan menyamai pahala ibadah haji (atau haji bersamaku)." (HR. Bukhari no. 1782 dan Muslim no. 1256)
      </blockquote>

      <h2>Suasana Khusyuk Iktikaf di Masjidil Haram & Nabawi</h2>
      <p>Merasakan indahnya shalat Tarawih, membaca Al-Qur'an, dan beritikaf di 10 malam terakhir Ramadhan langsung di hadapan Ka'bah merupakan pengalaman spiritual yang tak terlupakan bagi setiap muslim.</p>
    `,
  },
  {
    slug: 'perbedaan-umrah-reguler-vip-dan-private',
    title: 'Perbedaan Umrah Reguler, Umrah VIP, dan Umrah Private: Pilih Yang Mana?',
    category: 'Biaya & Paket',
    date: '15 Agustus 2026',
    readTime: '6 menit baca',
    author: 'Konsultan Konsultasi Marhaban',
    excerpt: 'Bingung menentukan tipe paket umrah? Ketahui perbedaan mendasar antara paket Reguler, VIP Pelataran Haram, dan Private Executive untuk kenyamanan keluarga Anda.',
    coverImage: '/images/pixabay-nabawi-3347602.jpg',
    recommendedPackageId: 'umrah-private-vip',
    contentHtml: `
      <h2>1. Paket Umrah Reguler (Pilihan Favorit Keluarga)</h2>
      <p>Paket reguler dirancang untuk jamaah yang menginginkan perjalanan ibadah yang nyaman, aman, dengan harga yang sangat rasional. Akomodasi hotel bintang 4 berjarak sekitar 200 - 350 meter dari pelataran masjid.</p>

      <h2>2. Paket Umrah VIP Pelataran Haram</h2>
      <p>Paket ini diprioritaskan bagi jamaah lansia atau keluarga yang mengutamakan jarak dekat tanpa repot naik kendaraan. Hotel bintang 5 berada langsung di pelataran Masjidil Haram Makkah (seperti Pullman Zamzam Tower) dan Frontel Al Harithia Madinah.</p>

      <h2>3. Paket Umrah Private Executive</h2>
      <p>Memberikan kebebasan penuh mengatur jadwal keberangkatan, penerbangan bus private VIP khusus rombongan keluarga Anda sendiri, serta pembimbing manasik khusus.</p>
    `,
  },
  {
    slug: 'syarat-dan-tata-cara-pendaftaran-haji-furoda-vip',
    title: 'Syarat & Tata Cara Pendaftaran Haji Furoda VIP Langsung Berangkat Tanpa Antre',
    category: 'Haji Khusus',
    date: '10 Agustus 2026',
    readTime: '8 menit baca',
    author: 'Tim Khusus Haji Furoda Marhaban',
    excerpt: 'Ingin berhaji tanpa harus menunggu antrean puluhan tahun? Pelajari mekanisme Visa Haji Mujamalah (Furoda) resmi Pemerintah Arab Saudi bersama PIHK Marhaban.',
    coverImage: '/images/pixabay-kabah-4372290.jpg',
    recommendedPackageId: 'haji-furoda-vip',
    contentHtml: `
      <h2>Apa itu Haji Furoda (Visa Mujamalah Resmi)?</h2>
      <p>Haji Furoda adalah program ibadah haji yang menggunakan <strong>Visa Undangan Resmi (Mujamalah)</strong> dari Kerajaan Arab Saudi. Keunggulan utamanya adalah jamaah dapat langsung berangkat pada musim haji tahun berjalan tanpa masa tunggu puluhan tahun.</p>

      <h2>Fasilitas VIP Haji Furoda Marhaban</h2>
      <ul>
        <li>Tercatat di Syarikah Haji Resmi Kerajaan Arab Saudi.</li>
        <li>Tenda Maktab VIP Arafah & Mina dengan AC berpendingin tinggi dan tempat tidur kasur empuk.</li>
        <li>Hotel Bintang 5 Ring 1 Makkah & Madinah.</li>
        <li>Penerbangan Maskapai Direct Saudia Airlines.</li>
        <li>Pembimbing Ibadah Syariah Sunnah berpengalaman.</li>
      </ul>
    `,
  },
  {
    slug: 'rincian-biaya-umrah-all-in-2026-2027',
    title: 'Rincian Biaya Umrah All-In 2026-2027: Apa Saja Komponen yang Termasuk?',
    category: 'Biaya & Paket',
    date: '05 Agustus 2026',
    readTime: '5 menit baca',
    author: 'Tim Keuangan Marhaban',
    excerpt: 'Pahami transparansi rincian biaya umrah All-In Marhaban. Mulai dari tiket pesawat direct, visa umrah, hotel bintang, makan 3x sehari, hingga handling bandara.',
    coverImage: '/images/pixabay-kabah-7552281.jpg',
    recommendedPackageId: 'umrah-longstay-22d',
    contentHtml: `
      <h2>Transparansi Harga Paket Umrah All-In</h2>
      <p>Saat mendaftar paket umrah di Amanah Safar Marhaban, biaya yang Anda bayarkan sudah mencakup seluruh kebutuhan perjalanan tanpa tagihan tersembunyi saat tiba di Tanah Suci.</p>

      <h2>Komponen yang Sudah Termasuk (Included):</h2>
      <ul>
        <li>Tiket Pesawat Pulang Pergi direct Indonesia - Arab Saudi.</li>
        <li>Visa Umrah & Asuransi Perjalanan Arab Saudi.</li>
        <li>Akomodasi Hotel Makkah & Madinah sesuai kelas bintang pilihan.</li>
        <li>Makan 3x Sehari Masakan Indonesia (Fullboard).</li>
        <li>Bus Pariwisata VIP Ber-AC untuk Ziarah Makkah & Madinah.</li>
        <li>Muthawwif / Pembimbing Ibadah Berpengalaman.</li>
        <li>Air Zamzam 5 Liter (sesuai regulasi penerbangan).</li>
      </ul>
    `,
  },
];
