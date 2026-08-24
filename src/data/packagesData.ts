export interface HotelInfo {
  name: string;
  stars: number;
  distance: string;
  image: string;
}

export interface FacilityImage {
  title: string;
  subtitle: string;
  image: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  highlight?: string;
}

export interface PackageItem {
  id: string;
  type: 'reguler' | 'private' | 'haji';
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  duration: string;
  departureDate: string;
  seatLeft: number;
  airline: string;
  hotelMakkah: HotelInfo;
  hotelMadinah: HotelInfo;
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  badgeText?: string;
  description: string;
  includedFacilities: string[];
  facilityImages: FacilityImage[];
  itinerary: ItineraryDay[];
}

export const packagesData: PackageItem[] = [
  // --- REGULER PACKAGES ---
  {
    id: 'umrah-reguler-hemat-9d',
    type: 'reguler',
    title: 'Umrah Reguler Hemat Bintang 4 (9 Hari)',
    subtitle: 'Solusi Umrah Ekonomis & Khusyuk dengan Fasilitas Nyaman',
    price: 'Rp 31.500.000',
    priceNote: 'per pax / Quad Room',
    duration: '9 Hari 8 Malam',
    departureDate: '15 Oktober 2026',
    seatLeft: 6,
    airline: 'Saudia Airlines (Direct Flight Jakarta - Madinah)',
    rating: 4.9,
    reviewCount: 142,
    isPopular: true,
    badgeText: 'Paling Diminati',
    hotelMakkah: {
      name: 'Grand Al-Masa Makkah',
      stars: 4,
      distance: '± 350m ke Masjidil Haram (Walking Distance)',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    hotelMadinah: {
      name: 'Grand Plaza Madinah',
      stars: 4,
      distance: '± 150m ke Pelataran Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    },
    description: 'Paket Umrah Reguler 9 Hari yang sangat cocok bagi jamaah yang menginginkan perjalanan ibadah yang tenang, aman, serta efisien tanpa transit. Pembimbingan penuh oleh Muthawwif berpengalaman sesuai Al-Qur\'an & As-Sunnah.',
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines (Direct Flight Jakarta - Madinah / Jeddah - Jakarta)',
      'Visa Umrah Resmi & Asuransi Kesehatan Saudi Arabia',
      'Hotel Bintang 4 Makkah & Madinah (Walking Distance ke Masjid)',
      'Makan 3x Sehari Prasmanan Full Board Menu Indonesia',
      'Transportasi Bus AC Executive VIP Terbaru (Mercedes-Benz Travego)',
      'Bimbingan Ibadah (Muthawwif & Tour Leader Sesuai Sunnah)',
      'Ziarah Kota Madinah & Makkah Lengkap + Miqat Umrah',
      'Air Zamzam 5 Liter (Sesuai Regulasi Kemenag & Saudia Airlines)',
      'Perlengkapan Umrah Exclusive (Koper Hardcase 24", Kain Ihram/Mukena, Tas Paspor, Seragam Batik, Buku Doa)',
    ],
    facilityImages: [
      {
        title: 'Kamar Hotel Nyaman & Bersih',
        subtitle: 'Fasilitas kamar bintang 4 dekat pelataran masjid utama',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Bus VIP Executive AC',
        subtitle: 'Armada bus terbaru dengan tempat duduk lega & WiFi',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Prasmanan Kuliner Nusantara',
        subtitle: 'Sajian chef Indonesia 3x sehari bergizi & higienis',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Perlengkapan Umrah Premium',
        subtitle: 'Koper hardcase tahan banting, kain ihram / mukena, tas paspor & batik',
        image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jakarta - Madinah (Kedatangan & Check-in Hotel)',
        activities: [
          'Kumpul di Bandara Soekarno-Hatta Terminal 3 (Briefing & Penyerahan Dokumen).',
          'Penerbangan Direct Flight menuju Madinah dengan Saudia Airlines.',
          'Tiba di Bandara Prince Mohammad bin Abdulaziz Madinah, proses imigrasi & bagasi.',
          'Penjemputan dengan Bus VIP menuju Hotel Madinah, Check-in dan Istirahat.',
        ],
        highlight: 'Kedatangan di Kota Suci Madinah Al-Munawwarah',
      },
      {
        day: 2,
        title: 'Ibadah di Masjid Nabawi & Ziarah Raudah',
        activities: [
          'Salat Subuh & Berjamaah di Masjid Nabawi.',
          'Ziarah Makam Rasulullah SAW, Abu Bakar Ash-Shiddiq, dan Umar bin Khattab RA.',
          'Masuk ke Raudah (Taman Surga) didampingi Muthawwif (Sesuai Tasrih Resmi).',
          'Tausiyah & Pembekalan Persiapan Umrah malam hari.',
        ],
        highlight: 'Ziarah Raudah Al-Syarifah dengan Izin Tasrih Kemenag',
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah (Masjid Quba, Uhud & Kebun Kurma)',
        activities: [
          'Ziarah ke Masjid Quba (Masjid pertama yang dibangun Rasulullah SAW, salat 2 rakaat disunnahkan).',
          'Mengunjungi Jabal Uhud (Makam Syuhada Uhud).',
          'Mengunjungi Kebun Kurma Madinah & Masjid Qiblatain.',
          'Kembali ke hotel untuk memperbanyak ibadah di Masjid Nabawi.',
        ],
        highlight: 'Melihat Pemandangan Jabal Uhud & Belanja Kurma Asli Madinah',
      },
      {
        day: 4,
        title: 'Madinah - Makkah (Miqat Bir Ali & Pelaksanaan Umrah Pertama)',
        activities: [
          'Persiapan Ihram dari Hotel Madinah (Mandi sunnah & mengenakan pakaian ihram).',
          'Check-out hotel Madinah menuju Miqat Bir Ali (Masjid Dhul Hulaifah) untuk Niat Umrah.',
          'Perjalanan menuju Makkah dengan Bus VIP AC.',
          'Check-in Hotel Makkah, kemudian bersama-sama melaksanakan Umrah Pertama (Tawaf, Sa\'i, dan Tahallul) dibimbing Muthawwif.',
        ],
        highlight: 'Pelaksanaan Umrah Pertama di Masjidil Haram',
      },
      {
        day: 5,
        title: 'Memperbanyak Ibadah Mandiri di Masjidil Haram',
        activities: [
          'Memperbanyak Salat Berjamaah, Tawaf Sunnah, dan Tadarus Al-Qur\'an di Masjidil Haram.',
          'Konsultasi ibadah bersama Ustadz Pembimbing.',
        ],
        highlight: 'Ibadah Khusyuk di Depan Ka\'bah Al-Musyarrafah',
      },
      {
        day: 6,
        title: 'Ziarah Kota Makkah & Miqat Umrah Kedua (Ji\'ranah)',
        activities: [
          'Mengunjungi Jabal Thawr, Padang Arafah (Jabal Rahmah), Muzdalifah, dan Mina.',
          'Singgah di Ji\'ranah untuk mengambil Miqat Umrah Kedua bagi jamaah yang ingin berumrah kembali.',
          'Pelaksanaan Umrah Kedua di Masjidil Haram.',
        ],
        highlight: 'Nostalgia Perjalanan Haji & Umrah Kedua di Miqat Ji\'ranah',
      },
      {
        day: 7,
        title: 'Free Program & Ibadah Khusyuk Makkah',
        activities: [
          'Ibadah mandiri di Masjidil Haram.',
          'Belanja oleh-oleh khas Makkah di sekitar hotel / Pasar Al-Jafariya.',
        ],
      },
      {
        day: 8,
        title: 'Tawaf Wada\' & Kepulangan ke Jakarta via Jeddah',
        activities: [
          'Pelaksanaan Tawaf Wada\' (Tawaf Perpisahan) di Masjidil Haram.',
          'Check-out Hotel Makkah, perjalanan bus menuju Bandara King Abdulaziz Jeddah.',
          'Penerbangan Saudia Airlines menuju Jakarta.',
        ],
        highlight: 'Tawaf Wada\' Perpisahan Kota Suci Makkah',
      },
      {
        day: 9,
        title: 'Tiba di Jakarta (Soekarno-Hatta)',
        activities: [
          'Tiba di Bandara Soekarno-Hatta Jakarta.',
          'Penyerahan Air Zamzam dan perpisahan rombongan.',
          'Semoga menjadi Umrah Maqbullah & Mabrurah.',
        ],
        highlight: 'Selamat Tiba Kembali di Tanah Air',
      },
    ],
  },

  {
    id: 'umrah-reguler-vip-12d',
    type: 'reguler',
    title: 'Umrah Reguler VIP Bintang 5 Direct Haram (12 Hari)',
    subtitle: 'Pengalaman Ibadah Mewah & Lebih Lama di Makkah & Madinah',
    price: 'Rp 42.900.000',
    priceNote: 'per pax / Quad Room',
    duration: '12 Hari 11 Malam',
    departureDate: '28 Oktober 2026',
    seatLeft: 4,
    airline: 'Garuda Indonesia (Direct Flight)',
    rating: 5.0,
    reviewCount: 98,
    isPopular: false,
    badgeText: 'Fasilitas VIP',
    hotelMakkah: {
      name: 'Pullman Zamzam / Swissotel Makkah',
      stars: 5,
      distance: 'Pelataran Pelataran Kompleks Abraj Al-Bait (0m ke Haram)',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    },
    hotelMadinah: {
      name: 'Frontel Al Harithia Madinah',
      stars: 5,
      distance: '± 50m ke Pintu Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    description: 'Program Umrah 12 Hari VIP dirancang untuk jamaah yang menginginkan kenyamanan ekstra tanpa lelah. Menginap di hotel bintang 5 persis di pelataran Masjidil Haram dan Masjid Nabawi, dilengkapi Kereta Cepat Haramain (High Speed Railway) Madinah - Makkah.',
    includedFacilities: [
      'Tiket Pesawat PP Garuda Indonesia Executive Direct Flight',
      'Kereta Cepat Haramain High Speed Train (Madinah - Makkah)',
      'Hotel Bintang 5 Makkah (Abraj Al-Bait) & Madinah (Frontel)',
      'Makan 3x Sehari Catering International & Indonesian Food Bintang 5',
      'Manasik Umrah Private & Perlengkapan Luxury Luggage',
      'Visa Umrah + Asuransi Kesehatan VIP Saudi Arabia',
      'Ziarah Kota Madinah & Makkah Ekstra + Taif Tour',
      'Air Zamzam 5 Liter & Layanan Porter Bagasi',
    ],
    facilityImages: [
      {
        title: 'Kamar Hotel Bintang 5 View Haram',
        subtitle: 'Kamar langsung menghadap pelataran Menara Jam Makkah',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Kereta Cepat Haramain Express',
        subtitle: 'Perjalanan Madinah - Makkah hanya 2 jam dengan nyaman',
        image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Restoran & Buffet Hotel Bintang 5',
        subtitle: 'Hidangan internasional dan khas Indonesia yang melimpah',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Ziarah Ekstra Kota Sejuk Taif',
        subtitle: 'Wisata sejarah & kebun mawar di Pegunungan Taif',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jakarta - Jeddah - Madinah VIP Arrival',
        activities: [
          'Kumpul di Lounge VIP Bandara Soekarno-Hatta Terminal 3.',
          'Penerbangan Direct Flight Garuda Indonesia menuju Jeddah.',
          'Penjemputan Fast-Track Imigrasi & Transfer Bus VIP ke Madinah.',
        ],
        highlight: 'Layanan VIP Fast Track & Executive Lounge',
      },
      {
        day: 2,
        title: 'Ibadah Madinah & Ziarah Raudah VIP',
        activities: ['Salat Berjamaah & Ziarah Raudah dengan jadwal prioritas tasrih.'],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah & Kebun Kurma',
        activities: ['Kunjungan Masjid Quba, Jabal Uhud, & belanja kurma premium.'],
      },
      {
        day: 4,
        title: 'Perjalanan Kereta Cepat Haramain ke Makkah & Umrah I',
        activities: [
          'Naik Kereta Cepat Haramain (Madinah ke Makkah hanya 2 jam).',
          'Pelaksanaan Umrah Pertama di Masjidil Haram.',
        ],
        highlight: 'Pengalaman Mewah Kereta Cepat Haramain Express',
      },
      {
        day: 5,
        title: 'Ibadah Khusyuk Makkah',
        activities: ['Memperbanyak ibadah di Masjidil Haram.'],
      },
      {
        day: 6,
        title: 'Ziarah Kota Makkah & Miqat Umrah II',
        activities: ['Tour Arafah, Mina, Muzdalifah & Miqat Ji\'ranah.'],
      },
      {
        day: 7,
        title: 'Tour Kota Sejuk Taif (Teleferik & Kebun Mawar)',
        activities: [
          'Perjalanan ke Kota Taif menikmati Kereta Gantung (Teleferik), Pabrik Mawar, dan Masjid Abdullah bin Abbas.',
        ],
        highlight: 'Wisata Sejarah & Keindahan Kota Taif',
      },
      {
        day: 8,
        title: 'Ibadah Mandiri & Tawaf Sunnah Makkah',
        activities: ['Hari tenang ibadah mandiri & tadarus.'],
      },
      {
        day: 9,
        title: 'Ibadah & Tausiyah Ibadah Haji/Umrah',
        activities: ['Bimbingan ilmu syar\'i bersama Ustadz pembimbing.'],
      },
      {
        day: 10,
        title: 'Ibadah Mandiri & Belanja Souvenir VIP',
        activities: ['Acara bebas jamaah.'],
      },
      {
        day: 11,
        title: 'Tawaf Wada\' & Kepulangan via Jeddah',
        activities: ['Tawaf Wada\' dan transfer ke Bandara Jeddah.'],
      },
      {
        day: 12,
        title: 'Tiba di Jakarta Soekarno-Hatta',
        activities: ['Pendaratan di Jakarta, pembagian Zamzam & penyambutan.'],
      },
    ],
  },

  {
    id: 'umrah-reguler-ramadhan-9d',
    type: 'reguler',
    title: 'Umrah Reguler Ramadhan & Lailatul Qadr (9 Hari)',
    subtitle: 'Mengejar Keberkahan Bulan Ramadhan di Dua Kota Suci',
    price: 'Rp 38.000.000',
    priceNote: 'per pax / Quad Room',
    duration: '9 Hari 8 Malam',
    departureDate: '10 Maret 2027',
    seatLeft: 3,
    airline: 'Saudia Airlines (Direct Flight)',
    rating: 4.9,
    reviewCount: 76,
    isPopular: false,
    badgeText: 'Musim Ramadhan',
    hotelMakkah: {
      name: 'Ajyad Makkarim Makkah',
      stars: 4,
      distance: '± 250m ke Masjidil Haram',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    hotelMadinah: {
      name: 'Rove Madinah Hotel',
      stars: 4,
      distance: '± 200m ke Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    },
    description: 'Rasakan nikmatnya berpuasa Ramadhan dan Shalat Tarawih berjamaah di Masjidil Haram & Masjid Nabawi. Pahala Umrah di bulan Ramadhan menyamai pahala berhaji bersama Rasulullah SAW.',
    includedFacilities: [
      'Tiket PP Saudia Airlines Direct Flight',
      'Menu Buka Puasa (Iftar) & Sahur Khas Indonesia',
      'Hotel Bintang 4 Dekat Masjid',
      'Muthawwif Khusus Pendamping Ibadah Ramadhan',
      'Perlengkapan Umrah Exclusive & Air Zamzam',
    ],
    facilityImages: [
      {
        title: 'Suasana Tarawih di Haram',
        subtitle: 'Kenikmatan Shalat Tarawih & Witir di pelataran Masjidil Haram',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Menu Buka Puasa & Sahur',
        subtitle: 'Sajian Iftar & Sahur lengkap menu Indonesia',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      { day: 1, title: 'Jakarta - Madinah Arrival', activities: ['Penerbangan ke Madinah & Check-in.'] },
      { day: 2, title: 'Ibadah Ramadhan Madinah & Raudah', activities: ['Salat & Buka puasa bersama di Nabawi.'] },
      { day: 3, title: 'Ziarah Madinah', activities: ['Masjid Quba & Uhud.'] },
      { day: 4, title: 'Madinah ke Makkah & Umrah I', activities: ['Niat Miqat & Umrah di Makkah.'] },
      { day: 5, title: 'Tarawih & Ibadah Makkah', activities: ['Tarawih khusyuk di Masjidil Haram.'] },
      { day: 6, title: 'Ziarah Makkah & Miqat Ji\'ranah', activities: ['Ziarah sejarah Makkah.'] },
      { day: 7, title: 'Qiyamul Lail & Ibadah Mandiri', activities: ['Perbanyak doa malam.'] },
      { day: 8, title: 'Tawaf Wada\' & Transfer Airport', activities: ['Kembali ke tanah air.'] },
      { day: 9, title: 'Tiba di Jakarta', activities: ['Pendaratan Soekarno-Hatta.'] },
    ],
  },

  // --- PRIVATE PACKAGES ---
  {
    id: 'umrah-private-family',
    type: 'private',
    title: 'Umrah Private Family & Custom Schedule',
    subtitle: 'Rombongan Khusus Keluarga / Perusahaan (Bebas Tentukan Tanggal)',
    price: 'Rp 48.500.000',
    priceNote: 'mulai dari / pax (Min. 5 Pax)',
    duration: 'Custom (9 / 12 / 14 Hari)',
    departureDate: 'Sesuai Request Anda',
    seatLeft: 10,
    airline: 'Saudia / Garuda / Emirates (Sesuai Permintaan)',
    rating: 5.0,
    reviewCount: 64,
    badgeText: 'Custom Private',
    hotelMakkah: {
      name: 'Raffles Makkah Palace / Fairmont Tower',
      stars: 5,
      distance: 'Pelataran Masjidil Haram (View Ka\'bah Direct)',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    },
    hotelMadinah: {
      name: 'Dar Al Taqwa Madinah / Oberoi',
      stars: 5,
      distance: 'Depan Pintu Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    description: 'Nikmati privasi dan fleksibilitas penuh bagi keluarga tercinta atau instansi perusahaan Anda. Jadwal berangkat, pemilihan maskapai, pilihan hotel bintang 5 view Ka\'bah, serta bus VIP khusus hanya untuk grup keluarga Anda.',
    includedFacilities: [
      'Grup Khusus Private (Tanpa Digabung dengan Jamaah Lain)',
      'Bebas Pilih Tanggal Keberangkatan & Durasi Hari',
      'Muthawwif Private Pendamping Khusus Keluarga 24 Jam',
      'Mobil GMC / Hyundai Staria / Bus Private VIP',
      'Hotel Bintang 5 View Ka\'bah Direct',
      'Sertifikat Umrah Resmi Custom Frame',
    ],
    facilityImages: [
      {
        title: 'Kamar Hotel Suite View Ka\'bah',
        subtitle: 'Pemandangan Ka\'bah langsung dari balik jendela kamar suite',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Kendaraan Private Luxury VIP',
        subtitle: 'GMC Yukon / Hyundai Staria khusus untuk privasi keluarga Anda',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      { day: 1, title: 'Penjemputan Private VIP & Keberangkatan', activities: ['Lounge VIP Bandara & Direct Flight.'] },
      { day: 2, title: 'Ibadah Madinah Private', activities: ['Ziarah Raudah Pendampingan Private.'] },
      { day: 3, title: 'City Tour Madinah Custom', activities: ['Mengunjungi destinasi sesuai keinginan keluarga.'] },
      { day: 4, title: 'Kereta Cepat Haramain First Class ke Makkah', activities: ['Umrah Pertama bersama Muthawwif Pribadi.'] },
      { day: 5, title: 'Ibadah Makkah & Tausiyah Private', activities: ['Program ibadah santai & khusyuk.'] },
      { day: 6, title: 'Ziarah Makkah & Taif Tour VIP', activities: ['Wisata Taif & Miqat Umrah Kedua.'] },
      { day: 7, title: 'Free Program & Shopping Luxury', activities: ['Belanja oleh-oleh & ibadah.'] },
      { day: 8, title: 'Tawaf Wada\' & Kepulangan Private', activities: ['Diantar armada private ke airport.'] },
      { day: 9, title: 'Tiba Kembali di Jakarta', activities: ['Kembali dengan kenangan indah bersama keluarga.'] },
    ],
  },

  // --- HAJI PACKAGES ---
  {
    id: 'haji-furoda-vip',
    type: 'haji',
    title: 'Haji Furoda / Mujamalah VIP (Langsung Berangkat)',
    subtitle: 'Visa Haji Resmi Kerajaan Arab Saudi (Tanpa Antre Tahun)',
    price: 'USD 19.500',
    priceNote: 'per pax / Quad Room (Resmi Visa Furoda)',
    duration: '23 Hari',
    departureDate: 'Musim Haji 2027',
    seatLeft: 2,
    airline: 'Saudia Airlines Direct Flight Haji',
    rating: 5.0,
    reviewCount: 52,
    isPopular: true,
    badgeText: 'Tanpa Antre',
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Royal Tower',
      stars: 5,
      distance: 'Pelataran Utama Masjidil Haram',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    },
    hotelMadinah: {
      name: 'Dar Al Eiman Royal Madinah',
      stars: 5,
      distance: 'Pelataran Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    description: 'Program Haji Furoda menggunakan Visa Mujamalah resmi Kerajaan Arab Saudi yang terdaftar di Kemenag RI. Keberangkatan langsung pada musim haji berjalan tanpa antrean puluhan tahun dengan maktab VIP di Arafah & Mina.',
    includedFacilities: [
      'Visa Haji Furoda / Mujamalah Resmi Terdaftar Kemenag',
      'Tenda VIP Arafah & Mina AC Full Board Catering',
      'Hotel Bintang 5 Makkah & Madinah',
      'Apartemen Transit Shisha / Aziziyah dekat Mina',
      'Bimbingan Ibadah Haji oleh Ulama & Pembimbing Senior Sesuai Sunnah',
      'Dam Haji Tamattu\' Termasuk',
      'Dokter Pendamping Kesehatan 24 Jam',
    ],
    facilityImages: [
      {
        title: 'Tenda VIP Arafah AC Full Board',
        subtitle: 'Tenda ber-AC dengan karpet tebal, sofa bed, & konsumsi melimpah',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Hotel Fairmont Clock Tower Makkah',
        subtitle: 'Menginap di menara jam terkemuka Makkah persis di pelataran',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      { day: 1, title: 'Keberangkatan Jakarta ke Jeddah Haji', activities: ['Kumpul lounge VIP & penerbangan haji.'] },
      { day: 2, title: 'Madinah First Visit & Ziarah Raudah', activities: ['Pelaksanaan Salat Arbain & Raudah.'] },
      { day: 3, title: 'Madinah Ziarah Kota & Manasik Haji', activities: ['Pemantapan manasik haji.'] },
      { day: 4, title: 'Perjalanan ke Makkah & Umrah Qiran/Tamattu\'', activities: ['Tiba di Makkah Al-Mukarramah.'] },
      { day: 8, title: 'Persiapan Tarwiyah & Wukuf di Arafah (8 Dzulhijjah)', activities: ['Menuju Tenda Arafah VIP.'] },
      { day: 9, title: 'Puncak Wukuf Arafah & Mabit Muzdalifah (9 Dzulhijjah)', activities: ['Berdoa khusyuk di Arafah & Ambil kerikil di Muzdalifah.'] },
      { day: 10, title: 'Melontar Jumrah Aqabah & Tahallul (10 Dzulhijjah)', activities: ['Menuju Mina & Melontar Jumrah Aqabah.'] },
      { day: 11, title: 'Mabit Mina & Melontar Ula, Wustha, Aqabah (11-12 Dzulhijjah)', activities: ['Melontar Jumrah Hari Tasyrik.'] },
      { day: 14, title: 'Tawaf Ifadhah & Sa\'i Haji', activities: ['Penyelesaian rukun haji di Masjidil Haram.'] },
      { day: 23, title: 'Kepulangan ke Indonesia', activities: ['Tiba kembali sebagai Haji Mabrur Insya Allah.'] },
    ],
  },
];
