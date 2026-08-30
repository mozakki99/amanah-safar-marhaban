export interface FacilityImage {
  title: string;
  subtitle: string;
  image: string;
}

export interface ItineraryItem {
  day: number;
  title: string;
  highlight?: string;
  activities: string[];
}

export interface HotelInfo {
  name: string;
  stars: number;
  distance: string;
  image: string;
}

export interface PackageItem {
  id: string;
  type: 'reguler' | 'private' | 'haji';
  title: string;
  subtitle: string;
  badgeText?: string;
  price: string;
  priceNote: string;
  duration: string;
  departureDate: string;
  seatLeft: number;
  rating: number;
  reviewCount: number;
  airline: string;
  hotelMakkah: HotelInfo;
  hotelMadinah: HotelInfo;
  includedFacilities: string[];
  facilityImages: FacilityImage[];
  itinerary: ItineraryItem[];
}

export const packagesData: PackageItem[] = [
  {
    id: 'umrah-reguler-9d',
    type: 'reguler',
    title: 'Umrah Reguler Maskapai Ternama (9 Hari)',
    subtitle: 'Program ibadah populer dengan penerbangan maskapai ternama tanpa transit & lokasi hotel strategis dekat pelataran utama.',
    badgeText: 'Paling Diminati',
    price: 'Rp 31.500.000',
    priceNote: 'All-In / Pax',
    duration: '9 Hari 8 Malam',
    departureDate: '15 September 2026',
    seatLeft: 6,
    rating: 5.0,
    reviewCount: 48,
    airline: 'Saudia Airlines',
    hotelMakkah: {
      name: 'Ajyad Makkarim Hotel',
      stars: 4,
      distance: 'Pelataran Masjidil Haram',
      image: '/images/pixabay-kabah-4372290.jpg',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: '/images/pixabay-madinah-3782640.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Akomodasi Hotel Makkah & Madinah Bintang 4',
      'Full Board Catering Menu Nusantara 3x Sehari',
      'Pembimbing Ibadah (Muthawwif) & Tour Leader Berpengalaman',
      'Ziarah Kota Makkah, Madinah & Raudah Syarifah',
      'Koper Hardcase & Perlengkapan Ibadah Lengkap',
      'Air Zamzam 5 Liter (Jika Diizinkan)',
    ],
    facilityImages: [
      {
        title: 'Masjidil Haram Makkah',
        subtitle: 'Ibadah Thawaf & Sa\'i di pelataran utama Ka\'bah suci',
        image: '/images/pixabay-kabah-4372290.jpg',
      },
      {
        title: 'Masjid Nabawi Madinah',
        subtitle: 'Ziarah ke Makam Rasulullah SAW & Raudah Syarifah',
        image: '/images/pixabay-madinah-3782640.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta - Madinah',
        highlight: 'Flight Saudia Airlines Direct',
        activities: [
          'Berkumpul di Bandara Soekarno-Hatta (Terminal 3)',
          'Proses pengarahan, pembagian paspor & dokumen penerbangan',
          'Penerbangan langsung menuju Bandara Prince Mohammad bin Abdulaziz Madinah',
          'Tiba di Madinah, proses imigrasi & check-in hotel',
        ],
      },
      {
        day: 2,
        title: 'Ziarah Raudah & Makam Rasulullah SAW',
        highlight: 'Masuk Raudah Syarifah',
        activities: [
          'Shalat Subuh berjamaah di Masjid Nabawi',
          'Ziarah Raudah Syarifah & Makam Rasulullah SAW serta Para Sahabat (Abu Bakar & Umar RA)',
          'Tausiyah & Bimbingan Ibadah bersama Muthawwif',
          'Perbanyak ibadah mandiri di Masjid Nabawi',
        ],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah Al-Munawwarah',
        highlight: 'Ziarah Histori Islam',
        activities: [
          'Ziarah Masjid Quba (Shalat Sunnah 2 Rakaat pahala setara Umrah)',
          'Mengunjungi Jabal Uhud & Ziarah Makam Syuhada Uhud',
          'Kunjungan ke Kebun Kurma Madinah & Masjid Qiblatain',
          'Kembali ke hotel, perbanyak ibadah di Masjid Nabawi',
        ],
      },
      {
        day: 4,
        title: 'Madinah ke Makkah - Prosesi Umrah Wajib Pertama',
        highlight: 'Niat Miqat Bir Ali',
        activities: [
          'Mandi sunnah ihram & mengenakan pakaian ihram dari hotel',
          'Check-out hotel & menuju Masjid Bir Ali (Zulhulaifah) untuk Niat Umrah',
          'Perjalanan dengan Bus AC VIP menuju Kota Suci Makkah Al-Mukarramah',
          'Check-in Hotel Makkah & Pelaksanaan Umrah Wajib (Thawaf, Sa\'i & Tahallul)',
        ],
      },
      {
        day: 5,
        title: 'Perbanyak Ibadah di Masjidil Haram',
        highlight: 'Khusyuk di Pelataran Ka\'bah',
        activities: [
          'Shalat berjamaah 5 waktu di pelataran utama Masjidil Haram',
          'Dzikir, tadarus Al-Qur\'an, & Thawaf Sunnah mandiri',
          'Kajian malam hikmah umrah bersama pembimbing ibadah',
        ],
      },
      {
        day: 6,
        title: 'Ziarah Kota Makkah & Umrah Kedua',
        highlight: 'Miqat Ji\'ranah',
        activities: [
          'Ziarah ke Jabal Tsur, Padang Arafah (Jabal Rahmah), Muzdalifah, & Mina',
          'Mengambil Miqat di Ji\'ranah bagi jamaah yang ingin Umrah Kedua',
          'Pelaksanaan Thawaf & Sa\'i Umrah Kedua di Masjidil Haram',
        ],
      },
      {
        day: 7,
        title: 'Free Program & Thawaf Sunnah',
        highlight: 'Ibadah Mandiri',
        activities: [
          'Perbanyak ibadah sunnah & doa di depan Ka\'bah Suci',
          'Wisata belanja souvenir di sekitar komplek Masjidil Haram',
        ],
      },
      {
        day: 8,
        title: 'Thawaf Wada\' & Kepulangan ke Jakarta',
        highlight: 'Thawaf Wada\' (Perpisahan)',
        activities: [
          'Pelaksanaan Thawaf Wada\' (Thawaf Perpisahan) di Masjidil Haram',
          'Check-out hotel Makkah & transfer menuju Bandara King Abdulaziz Jeddah',
          'Proses check-in tiket & boarding penerbangan ke Jakarta',
        ],
      },
      {
        day: 9,
        title: 'Tiba di Jakarta Indonesia',
        highlight: 'Kembali dengan Selamat',
        activities: [
          'Tiba di Bandara Soekarno-Hatta Jakarta (Terminal 3)',
          'Proses klaim bagasi & pembagian Air Zamzam 5 Liter',
          'Penutupan program umrah & kembali ke kediaman masing-masing',
        ],
      },
    ],
  },
  {
    id: 'umrah-vip-12d',
    type: 'reguler',
    title: 'Umrah VIP Pelataran Haram (12 Hari)',
    subtitle: 'Pengalaman ibadah dengan durasi lebih panjang dan hotel bintang 5 langsung di pelataran Masjidil Haram Makkah & Nabawi.',
    badgeText: 'Paket VIP',
    price: 'Rp 42.900.000',
    priceNote: 'All-In / Pax',
    duration: '12 Hari 11 Malam',
    departureDate: '28 Oktober 2026',
    seatLeft: 4,
    rating: 5.0,
    reviewCount: 32,
    airline: 'Saudia Airlines',
    hotelMakkah: {
      name: 'Pullman Zamzam Tower',
      stars: 5,
      distance: 'Pelataran Utama Masjidil Haram',
      image: '/images/pixabay-kabah-7552281.jpg',
    },
    hotelMadinah: {
      name: 'Frontel Al Harithia Hotel',
      stars: 5,
      distance: 'Pelataran Utama Masjid Nabawi',
      image: '/images/pixabay-nabawi-3347602.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines Direct',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 Pelataran Haram Makkah & Madinah',
      'Perjalanan Kereta Cepat Haramain Express (Madinah - Makkah)',
      'Full Board Buffet International & Indonesia 3x Sehari',
      'Ziarah Raudah Syarifah Tasreh Resmi',
      'Perlengkapan Ibadah Exclusive Hardcase Premium',
    ],
    facilityImages: [
      {
        title: 'Pullman Zamzam Tower Makkah',
        subtitle: 'Akses langsung pelataran Masjidil Haram Makkah',
        image: '/images/pixabay-kabah-7552281.jpg',
      },
      {
        title: 'Frontel Al Harithia Madinah',
        subtitle: 'Berada di pelataran utama pintu Masjid Nabawi',
        image: '/images/pixabay-nabawi-3347602.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jakarta ke Madinah (Direct Flight)',
        highlight: 'Flight Saudia VIP',
        activities: [
          'Berkumpul di Terminal 3 Bandara Soekarno-Hatta',
          'Penerbangan langsung Saudia Airlines menuju Madinah',
          'Check-in Hotel Bintang 5 Frontel Al Harithia',
        ],
      },
      {
        day: 2,
        title: 'Ziarah Raudah Syarifah & Salam Rasulullah',
        highlight: 'Tasreh Resmi Raudah',
        activities: [
          'Ziarah Raudah Syarifah dengan bimbingan mualim',
          'Perbanyak ibadah sunnah di Masjid Nabawi',
        ],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah Histori',
        highlight: 'Masjid Quba & Uhud',
        activities: [
          'Mengunjungi Masjid Quba, Jabal Uhud, & Kebun Kurma Madinah',
        ],
      },
      {
        day: 4,
        title: 'Persiapan Ke Makkah Kereta Cepat Haramain',
        highlight: 'Kereta Cepat Haramain',
        activities: [
          'Niat Ihram di Miqat Bir Ali',
          'Perjalanan Kereta Cepat Haramain Express (Madinah - Makkah 2 Jam)',
          'Check-in Pullman Zamzam Tower & Umrah Wajib Pertama',
        ],
      },
      {
        day: 5,
        title: 'Ibadah Khusyuk di Masjidil Haram',
        highlight: 'Pelataran Utama Ka\'bah',
        activities: ['Perbanyak Thawaf Sunnah & Shalat 5 Waktu di Masjidil Haram'],
      },
      {
        day: 6,
        title: 'Ziarah Makkah & Miqat Ji\'ranah',
        highlight: 'Umrah Kedua',
        activities: ['Ziarah Arafah, Mina, Muzdalifah & Niat Umrah di Ji\'ranah'],
      },
      {
        day: 7,
        title: 'Kajian Hikmah & Pendampingan Syariat',
        highlight: 'Kajian Eksklusif',
        activities: ['Diskusi interaktif & bimbingan ibadah bersama Pembimbing Senior'],
      },
      {
        day: 8,
        title: 'Ziarah Museum As-Shofa & Jabal Nur',
        highlight: 'Wisata Edukasi Islam',
        activities: ['Edukasi sejarah peradaban Islam Makkah'],
      },
      {
        day: 9,
        title: 'Ibadah Mandiri & Doa Khusyuk',
        highlight: 'Iktikaf Haram',
        activities: ['Perbanyak tilawah Al-Qur\'an di pelataran Ka\'bah'],
      },
      {
        day: 10,
        title: 'Ziarah Hudaibiyah & Umrah Ketiga',
        highlight: 'Miqat Hudaibiyah',
        activities: ['Kunjungan Hudaibiyah & Umrah tambahan'],
      },
      {
        day: 11,
        title: 'Thawaf Wada\' & Kepulangan Jeddah - Jakarta',
        highlight: 'Thawaf Wada\'',
        activities: ['Thawaf Wada\' & transfer ke Bandara Jeddah'],
      },
      {
        day: 12,
        title: 'Tiba di Jakarta',
        highlight: 'Selesai Ibadah',
        activities: ['Landing di Jakarta & pembagian Air Zamzam'],
      },
    ],
  },
  {
    id: 'umrah-hemat-b3',
    type: 'reguler',
    title: 'Umrah Hemat Ekonomis (9 Hari)',
    subtitle: 'Solusi ibadah terjangkau dengan akomodasi hotel bintang 3 yang nyaman dan pelayanan teratur.',
    badgeText: 'Hemat Berkah',
    price: 'Rp 27.900.000',
    priceNote: 'All-In / Pax',
    duration: '9 Hari 8 Malam',
    departureDate: '10 November 2026',
    seatLeft: 12,
    rating: 4.9,
    reviewCount: 38,
    airline: 'Lion Air / Saudia',
    hotelMakkah: {
      name: 'Le Meridien Towers Makkah',
      stars: 3,
      distance: 'Shuttle Bus 24 Jam ke Haram',
      image: '/images/pixabay-kabah-4372290.jpg',
    },
    hotelMadinah: {
      name: 'Surfaa Al Madinah Hotel',
      stars: 3,
      distance: '300m dari Masjid Nabawi',
      image: '/images/pixabay-madinah-3782640.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 3 Makkah & Madinah',
      'Full Board Catering Menu Indonesia 3x Sehari',
      'Shuttle Bus 24 Jam Makkah',
      'Pembimbing Ibadah (Muthawwif) Berpengalaman',
    ],
    facilityImages: [
      {
        title: 'Akomodasi Hotel Bintang 3',
        subtitle: 'Fasilitas bersih & nyaman dekat fasilitas ibadah',
        image: '/images/pixabay-kabah-4372290.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta ke Madinah',
        highlight: 'Flight Umrah',
        activities: ['Berkumpul di Bandara Soekarno-Hatta & flight ke Madinah'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah Syarifah & Nabawi',
        highlight: 'Masjid Nabawi',
        activities: ['Ibadah khusyuk di Masjid Nabawi & Ziarah Raudah'],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah',
        highlight: 'Ziarah Madinah',
        activities: ['Masjid Quba, Jabal Uhud, & Kebun Kurma'],
      },
      {
        day: 4,
        title: 'Madinah ke Makkah & Umrah Wajib',
        highlight: 'Miqat Bir Ali',
        activities: ['Niat di Bir Ali & Umrah pertama di Masjidil Haram'],
      },
      {
        day: 5,
        title: 'Shalat 5 Waktu di Masjidil Haram',
        highlight: 'Ibadah Haram',
        activities: ['Shalat 5 waktu & Thawaf sunnah di Ka\'bah'],
      },
      {
        day: 6,
        title: 'Ziarah Makkah & Miqat Ji\'ranah',
        highlight: 'Ziarah Makkah',
        activities: ['Arafah, Mina, Muzdalifah & Umrah kedua'],
      },
      {
        day: 7,
        title: 'Ibadah Mandiri di Makkah',
        highlight: 'Tilawah & Dzikir',
        activities: ['Perbanyak doa & zikir di depan Ka\'bah'],
      },
      {
        day: 8,
        title: 'Thawaf Wada\' & Flight Jakarta',
        highlight: 'Thawaf Wada\'',
        activities: ['Thawaf Wada\' & transfer ke Bandara Jeddah'],
      },
      {
        day: 9,
        title: 'Tiba di Indonesia',
        highlight: 'Landing Jakarta',
        activities: ['Tiba di Soekarno-Hatta & pembagian Zamzam'],
      },
    ],
  },
  {
    id: 'umrah-akhir-tahun',
    type: 'reguler',
    title: 'Umrah Akhir Tahun Liburan (9 Hari)',
    subtitle: 'Momen berharga menutup akhir tahun bersama keluarga di Tanah Suci dengan akomodasi hotel pilihan.',
    badgeText: 'Musim Liburan',
    price: 'Rp 34.800.000',
    priceNote: 'All-In / Pax',
    duration: '9 Hari 8 Malam',
    departureDate: '20 Desember 2026',
    seatLeft: 8,
    rating: 5.0,
    reviewCount: 22,
    airline: 'Garuda Indonesia',
    hotelMakkah: {
      name: 'Anjum Hotel Makkah',
      stars: 5,
      distance: 'Depan Pelataran Masjidil Haram',
      image: '/images/pixabay-kabah-7552281.jpg',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: '/images/pixabay-nabawi-3347602.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP Garuda Indonesia',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 & 4 Dekat Masjid',
      'Full Board Catering Menu Nusantara 3x Sehari',
      'Perlengkapan Umrah Eksklusif',
    ],
    facilityImages: [
      {
        title: 'Anjum Hotel Makkah',
        subtitle: 'Akses mudah langsung ke pelataran Masjidil Haram',
        image: '/images/pixabay-kabah-7552281.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta ke Madinah',
        highlight: 'Garuda Indonesia Flight',
        activities: ['Flight Garuda Indonesia ke Madinah & Check-in hotel'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah & Makam Nabi',
        highlight: 'Raudah Syarifah',
        activities: ['Ziarah Raudah & Makam Rasulullah SAW'],
      },
      {
        day: 3,
        title: 'Ziarah Histori Kota Madinah',
        highlight: 'Kota Madinah',
        activities: ['Kunjungan Masjid Quba & Uhud'],
      },
      {
        day: 4,
        title: 'Madinah ke Makkah & Umrah Pertama',
        highlight: 'Miqat Bir Ali',
        activities: ['Miqat Bir Ali & Umrah di Makkah'],
      },
      {
        day: 5,
        title: 'Ibadah Khusyuk Akhir Tahun',
        highlight: 'Masjidil Haram',
        activities: ['Shalat 5 waktu & Thawaf sunnah'],
      },
      {
        day: 6,
        title: 'Ziarah Makkah & Miqat Ji\'ranah',
        highlight: 'Ziarah Makkah',
        activities: ['Ziarah tempat bersejarah Makkah'],
      },
      {
        day: 7,
        title: 'Doa Khusyuk Keluarga',
        highlight: 'Doa Bersama',
        activities: ['Doa khusyuk akhir tahun di depan Ka\'bah'],
      },
      {
        day: 8,
        title: 'Thawaf Wada\' & Flight Jakarta',
        highlight: 'Thawaf Wada\'',
        activities: ['Thawaf Wada\' & penerbangan pulang'],
      },
      {
        day: 9,
        title: 'Tiba di Indonesia',
        highlight: 'Tiba Jakarta',
        activities: ['Landing di Jakarta dengan selamat'],
      },
    ],
  },
  {
    id: 'umrah-awal-tahun',
    type: 'reguler',
    title: 'Umrah Awal Tahun Berkah (9 Hari)',
    subtitle: 'Mengawali tahun baru dengan niat suci beribadah khusyuk di pelataran Masjidil Haram & Nabawi.',
    badgeText: 'Pendaftaran Buka',
    price: 'Rp 32.000.000',
    priceNote: 'All-In / Pax',
    duration: '9 Hari 8 Malam',
    departureDate: '18 Januari 2027',
    seatLeft: 10,
    rating: 5.0,
    reviewCount: 15,
    airline: 'Saudia Airlines',
    hotelMakkah: {
      name: 'Ajyad Makkarim Hotel',
      stars: 4,
      distance: 'Pelataran Masjidil Haram',
      image: '/images/pixabay-kabah-4372290.jpg',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: '/images/pixabay-madinah-3782640.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Akomodasi Hotel Bintang 4',
      'Full Board Catering Menu Indonesia',
    ],
    facilityImages: [],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta ke Madinah',
        highlight: 'Flight Saudia',
        activities: ['Terbang ke Madinah & Check-in hotel'],
      },
      {
        day: 2,
        title: 'Ibadah di Masjid Nabawi & Raudah',
        highlight: 'Raudah',
        activities: ['Ziarah Raudah & Makam Rasulullah SAW'],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah',
        highlight: 'Ziarah Madinah',
        activities: ['Masjid Quba & Kebun Kurma'],
      },
      {
        day: 4,
        title: 'Ke Makkah & Umrah Pertama',
        highlight: 'Miqat Bir Ali',
        activities: ['Niat di Bir Ali & Umrah di Makkah'],
      },
      {
        day: 5,
        title: 'Ibadah di Masjidil Haram',
        highlight: 'Masjidil Haram',
        activities: ['Shalat 5 waktu di Haram'],
      },
      {
        day: 6,
        title: 'Ziarah Makkah',
        highlight: 'Ziarah Makkah',
        activities: ['Arafah, Mina, & Miqat Ji\'ranah'],
      },
      {
        day: 7,
        title: 'Ibadah Mandiri',
        highlight: 'Thawaf Sunnah',
        activities: ['Perbanyak zikir di pelataran Ka\'bah'],
      },
      {
        day: 8,
        title: 'Thawaf Wada\' & Return Flight',
        highlight: 'Thawaf Wada\'',
        activities: ['Thawaf Wada\' & flight ke Jakarta'],
      },
      {
        day: 9,
        title: 'Tiba di Indonesia',
        highlight: 'Landing',
        activities: ['Landing di Jakarta'],
      },
    ],
  },
  {
    id: 'umrah-longstay-22d',
    type: 'reguler',
    title: 'Umrah Longstay Khusyuk (22 Hari)',
    subtitle: 'Program iktikaf & ibadah mendalam durasi panjang 22 hari untuk ketenangan ibadah di Makkah & Madinah.',
    badgeText: 'Program Longstay',
    price: 'Rp 49.900.000',
    priceNote: 'All-In / Pax',
    duration: '22 Hari 21 Malam (Longstay)',
    departureDate: '12 Februari 2027',
    seatLeft: 5,
    rating: 5.0,
    reviewCount: 18,
    airline: 'Saudia Airlines',
    hotelMakkah: {
      name: 'Ajyad Makkarim Hotel',
      stars: 4,
      distance: 'Pelataran Masjidil Haram',
      image: '/images/pixabay-kabah-7552281.jpg',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: '/images/pixabay-nabawi-3347602.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Akomodasi Longstay 22 Hari Bintang 4',
      'Full Board Catering Menu Indonesia 3x Sehari',
      'Pembimbing Ibadah Khusus Program Longstay',
    ],
    facilityImages: [],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta ke Madinah',
        highlight: 'Flight Longstay',
        activities: ['Terbang ke Madinah & Check-in hotel'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah Syarifah',
        highlight: 'Raudah',
        activities: ['Ibadah khusyuk di Masjid Nabawi & Raudah'],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah',
        highlight: 'Histori Madinah',
        activities: ['Masjid Quba, Jabal Uhud, & Kebun Kurma'],
      },
      {
        day: 4,
        title: 'Ibadah Iktikaf Madinah',
        highlight: 'Iktikaf Nabawi',
        activities: ['Perbanyak zikir & tadarus di Masjid Nabawi'],
      },
      {
        day: 5,
        title: 'Perjalanan ke Makkah & Umrah Wajib',
        highlight: 'Miqat Bir Ali',
        activities: ['Niat di Bir Ali & Umrah pertama di Makkah'],
      },
      {
        day: 6,
        title: 'Program Iktikaf Panjang Makkah (Hari 6 - 20)',
        highlight: 'Ketenangan Ibadah Longstay',
        activities: [
          'Shalat berjamaah 5 waktu di pelataran utama Masjidil Haram',
          'Thawaf sunnah rutin harian & khataman Al-Qur\'an',
          'Ziarah berkala tempat bersejarah Makkah & Taif',
        ],
      },
      {
        day: 21,
        title: 'Thawaf Wada\'',
        highlight: 'Thawaf Wada\'',
        activities: ['Pelaksanaan Thawaf Wada\' & transfer ke Jeddah'],
      },
      {
        day: 22,
        title: 'Tiba di Indonesia',
        highlight: 'Selesai Longstay',
        activities: ['Landing di Jakarta & pembagian Zamzam'],
      },
    ],
  },
  {
    id: 'umrah-syaban-ramadhan',
    type: 'reguler',
    title: 'Umrah Sya\'ban & Awal Ramadhan (12 Hari)',
    subtitle: 'Merasakan syahdunya suasana menyambut bulan suci Ramadhan langsung di Kota Suci Makkah.',
    badgeText: 'Spesial Ramadhan',
    price: 'Rp 39.500.000',
    priceNote: 'All-In / Pax',
    duration: '12 Hari 11 Malam',
    departureDate: '10 Maret 2027',
    seatLeft: 5,
    rating: 5.0,
    reviewCount: 29,
    airline: 'Saudia Airlines',
    hotelMakkah: {
      name: 'Pullman Zamzam Tower',
      stars: 5,
      distance: 'Pelataran Utama Masjidil Haram',
      image: '/images/pixabay-kabah-4372290.jpg',
    },
    hotelMadinah: {
      name: 'Frontel Al Harithia Hotel',
      stars: 5,
      distance: 'Pelataran Utama Masjid Nabawi',
      image: '/images/pixabay-madinah-3782640.jpg',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 Pelataran Masjid',
      'Menu Iftar & Sahur Spesial Ramadhan',
    ],
    facilityImages: [],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta ke Madinah',
        highlight: 'Flight Ramadhan',
        activities: ['Flight Saudia & Check-in hotel Bintang 5'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah & Nabawi',
        highlight: 'Raudah',
        activities: ['Ziarah Raudah Syarifah & Makam Rasulullah SAW'],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah',
        highlight: 'Ziarah Madinah',
        activities: ['Ziarah tempat bersejarah Kota Madinah'],
      },
      {
        day: 4,
        title: 'Ke Makkah & Umrah Ramadhan',
        highlight: 'Miqat Bir Ali',
        activities: ['Miqat di Bir Ali & Umrah di Masjidil Haram'],
      },
      {
        day: 5,
        title: 'Suasana Iftar & Tarawih Haram',
        highlight: 'Tarawih Masjidil Haram',
        activities: ['Buka puasa bersama & Shalat Tarawih di Masjidil Haram'],
      },
      {
        day: 11,
        title: 'Thawaf Wada\' & Return Flight',
        highlight: 'Thawaf Wada\'',
        activities: ['Thawaf Wada\' & transfer ke Bandara Jeddah'],
      },
      {
        day: 12,
        title: 'Tiba di Indonesia',
        highlight: 'Landing',
        activities: ['Landing di Jakarta'],
      },
    ],
  },
  {
    id: 'umrah-private-vip',
    type: 'private',
    title: 'Umrah Private VIP Family (Custom Schedule)',
    subtitle: 'Kenyamanan penuh khusus untuk grup keluarga tercinta dengan kebebasan menentukan tanggal keberangkatan & layanan eksklusif.',
    badgeText: 'Umrah Private',
    price: 'Rp 48.500.000',
    priceNote: 'Mulai / Pax',
    duration: '10 Hari 9 Malam',
    departureDate: 'Setiap Bulan (Januari - Desember)',
    seatLeft: 8,
    rating: 5.0,
    reviewCount: 24,
    airline: 'Garuda Indonesia / Saudia Airlines',
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Tower',
      stars: 5,
      distance: 'Pelataran Ka\'bah Direct View',
      image: '/images/pixabay-kabah-7552281.jpg',
    },
    hotelMadinah: {
      name: 'Dar Al Taqwa Madinah',
      stars: 5,
      distance: 'Depan Pintu Utama Masjid Nabawi',
      image: '/images/pixabay-nabawi-3347602.jpg',
    },
    includedFacilities: [
      'Layanan Khusus Rombongan Keluarga (Tanpa Jamaah Lain)',
      'Tiket Business / Economy Class Saudia/Garuda',
      'Mobil Private VIP (GMC / Hyundai Staria / Bus VIP Private)',
      'Hotel Bintang 5 View Ka\'bah Direct',
      'Muthawwif Private Dedicated 24 Jam',
    ],
    facilityImages: [
      {
        title: 'Fairmont Clock Tower View Ka\'bah',
        subtitle: 'Pemandangan langsung Ka\'bah suci dari kamar hotel',
        image: '/images/pixabay-kabah-7552281.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan VIP Family',
        highlight: 'Mobil Private GMC',
        activities: ['Penjemputan private & flight Saudia Business/Economy'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah Private',
        highlight: 'Raudah VIP',
        activities: ['Ziarah Raudah dengan pendampingan khusus'],
      },
      {
        day: 3,
        title: 'Ziarah Madinah Mobil Private',
        highlight: 'Ziarah Custom',
        activities: ['Tour Ziarah Madinah dengan jadwal fleksibel keluarga'],
      },
      {
        day: 4,
        title: 'Kereta Cepat Haramain & Umrah Private',
        highlight: 'Kereta Cepat',
        activities: ['Haramain Express ke Makkah & Umrah Private'],
      },
      {
        day: 5,
        title: 'Ibadah Khusyuk View Ka\'bah',
        highlight: 'Fairmont View',
        activities: ['Shalat 5 waktu di Haram & kamar hotel view Ka\'bah'],
      },
      {
        day: 10,
        title: 'Thawaf Wada\' & Flight Pulang',
        highlight: 'Thawaf Wada\'',
        activities: ['Thawaf Wada\' & kepulangan private ke Jakarta'],
      },
    ],
  },
  {
    id: 'haji-furoda-vip',
    type: 'haji',
    title: 'Program Haji Furoda / Mujamalah VIP',
    subtitle: 'Ibadah Haji Khusus menggunakan Visa Mujamalah Resmi Kerajaan Arab Saudi yang terdaftar di Kemenag RI tanpa antrean.',
    badgeText: 'Haji Furoda',
    price: 'USD 19.500',
    priceNote: 'Visa Resmi Furoda',
    duration: '25 Hari 24 Malam',
    departureDate: 'Musim Haji 1448 H / 2027',
    seatLeft: 5,
    rating: 5.0,
    reviewCount: 19,
    airline: 'Saudia Airlines / Garuda Indonesia',
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Tower',
      stars: 5,
      distance: 'Pelataran Utama Ka\'bah',
      image: '/images/pixabay-kabah-4372290.jpg',
    },
    hotelMadinah: {
      name: 'Oberoi Madinah Hotel',
      stars: 5,
      distance: 'Depan Pintu Utama Masjid Nabawi',
      image: '/images/pixabay-madinah-3782640.jpg',
    },
    includedFacilities: [
      'Visa Furoda / Mujamalah Resmi Kerajaan Arab Saudi',
      'Tenda Ber-AC VIP di Arafah & Mina Dekat Jamarat',
      'Akomodasi Hotel Bintang 5 Makkah & Madinah',
      'Pembimbing Haji Senior Berpengalaman & Dokter Pembimbing',
    ],
    facilityImages: [
      {
        title: 'Tenda VIP Arafah & Mina',
        subtitle: 'Fasilitas AC & catering penuh selama Wukuf & Mabit',
        image: '/images/pixabay-kabah-4372290.jpg',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jamaah Haji Furoda VIP',
        highlight: 'Haji Furoda Resmi',
        activities: ['Berkumpul di Terminal 3 & flight Saudia ke Madinah'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah & Persiapan Haji',
        highlight: 'Raudah Syarifah',
        activities: ['Ziarah Raudah & bimbingan manasik haji intensif'],
      },
      {
        day: 8,
        title: 'Tarwiyah & Wukuf Padang Arafah',
        highlight: 'Puncak Haji Arafah',
        activities: ['Wukuf khusyuk di Padang Arafah dalam tenda VIP'],
      },
      {
        day: 9,
        title: 'Mabit Muzdalifah & Mina (Lempar Jamarat)',
        highlight: 'Jamarat & Tahallul',
        activities: ['Mabit Muzdalifah, melontar Jamarat Aqabah & Tahallul Awal'],
      },
      {
        day: 10,
        title: 'Thawaf Ifadhah & Sa\'i Haji',
        highlight: 'Rukun Haji Utama',
        activities: ['Pelaksanaan Thawaf Ifadhah & Sa\'i Haji di Masjidil Haram'],
      },
      {
        day: 25,
        title: 'Thawaf Wada\' & Kepulangan Indonesia',
        highlight: 'Haji Mabrur',
        activities: ['Thawaf Wada\' & kepulangan ke Tanah Air'],
      },
    ],
  },
];
