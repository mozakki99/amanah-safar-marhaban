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
    title: 'Umrah Reguler Direct Flight (9 Hari)',
    subtitle: 'Program ibadah populer dengan penerbangan direct flight tanpa transit & lokasi hotel strategis dekat pelataran utama.',
    badgeText: 'Paling Diminati',
    price: 'Rp 31.500.000',
    priceNote: 'All-In / Pax',
    duration: '9 Hari 8 Malam',
    departureDate: '15 Oktober 2026',
    seatLeft: 6,
    rating: 5.0,
    reviewCount: 48,
    airline: 'Saudia Airlines (Direct Flight Madinah)',
    hotelMakkah: {
      name: 'Ajyad Makkarim Hotel',
      stars: 4,
      distance: 'Pelataran Masjidil Haram',
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines Direct Flight',
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
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Masjid Nabawi Madinah',
        subtitle: 'Ziarah ke Makam Rasulullah SAW & Raudah Syarifah',
        image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Pelataran Makkah Clock Tower',
        subtitle: 'Akses jalan kaki mudah menuju pelataran ibadah',
        image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Kawasan Ziarah Jabal Uhud',
        subtitle: 'Kunjungan sejarah bukit Uhud & Kebun Kurma Madinah',
        image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta - Madinah',
        highlight: 'Terbang Direct Saudia',
        activities: [
          'Berkumpul di Bandara Soekarno-Hatta (Terminal 3)',
          'Proses pengarahan, pembagian paspor & dokumen',
          'Penerbangan Direct Flight menuju Bandara Prince Mohammad bin Abdulaziz Madinah',
          'Tiba di Madinah, proses imigrasi & check-in hotel',
        ],
      },
      {
        day: 2,
        title: 'Ziarah Internal Kota Madinah & Masjid Nabawi',
        highlight: 'Ziarah Raudah',
        activities: [
          'Shalat Subuh berjamaah di Masjid Nabawi',
          'Ziarah ke Makam Rasulullah SAW, Abu Bakar Ash-Shiddiq & Umar bin Khattab',
          'Ziarah ke Pemakaman Baqi',
          'Ziarah khusus ke Raudah Syarifah (Taman Surga) sesuai jadwal Tasreh',
        ],
      },
      {
        day: 3,
        title: 'Ziarah Luar Kota Madinah',
        highlight: 'Masjid Quba & Jabal Uhud',
        activities: [
          'Ziarah ke Masjid Quba (Masjid pertama yang dibangun Rasulullah SAW)',
          'Kunjungan ke Jabal Uhud & Makam Syuhada Uhud',
          'Kunjungan ke Kebun Kurma Madinah & Masjid Qiblatain',
        ],
      },
      {
        day: 4,
        title: 'Perjalanan ke Makkah & Pelaksanaan Umrah Pertama',
        highlight: 'Ibadah Umrah',
        activities: [
          'Mandi sunnah ihram & mengenakan pakaian ihram di hotel',
          'Mengambil Miqat di Bir Ali & berniat Umrah',
          'Perjalanan ke Makkah dengan Bus VIP / Kereta Cepat Haramain',
          'Check-in hotel Makkah & dilanjutkan Thawaf, Sa\'i dan Tahallul di Masjidil Haram',
        ],
      },
      {
        day: 5,
        title: 'Perbanyak Ibadah Mandiri di Masjidil Haram',
        highlight: 'Shalat Berjamaah',
        activities: [
          'Memperbanyak thawaf sunnah, ibadah shalat & dzikir di Masjidil Haram',
          'Kajian fiqih umrah & bimbingan keislaman malam hari',
        ],
      },
      {
        day: 6,
        title: 'Ziarah Kota Makkah & Umrah Kedua (Opsional)',
        highlight: 'Jabal Rahmah & Mina',
        activities: [
          'Kunjungan ke Jabal Tsur & Jabal Rahmah (Padang Arafah)',
          'Melewati Muzdalifah, Mina & lokasi Jamarat',
          'Mengambil miqat di Ji\'ranah bagi jamaah yang ingin Umrah kedua',
        ],
      },
      {
        day: 7,
        title: 'Memperbanyak Ibadah di Masjidil Haram',
        highlight: 'Ibadah Khusyuk',
        activities: [
          'Free program: memperbanyak ibadah mandiri & tadarus Al-Qur\'an',
          'Konsultasi bimbingan bersama Muthawwif',
        ],
      },
      {
        day: 8,
        title: 'Thawaf Wada\' & Keberangkatan ke Jeddah',
        highlight: 'Thawaf Wada\'',
        activities: [
          'Pelaksanaan Thawaf Wada\' (Thawaf perpisahan)',
          'Check-out hotel Makkah & perjalanan menuju Kota Jeddah',
          'City tour Jeddah (Laut Merah & Corniche)',
          'Menuju Bandara King Abdulaziz Jeddah untuk penerbangan pulang ke Indonesia',
        ],
      },
      {
        day: 9,
        title: 'Tiba di Jakarta Indonesia',
        highlight: 'Kepulangan',
        activities: [
          'InsyaAllah tiba di Bandara Soekarno-Hatta Jakarta dengan selamat',
          'Pembagian Air Zamzam & penutupan perjalanan ibadah Umrah',
        ],
      },
    ],
  },
  {
    id: 'umrah-vip-12d',
    type: 'reguler',
    title: 'Umrah VIP Direct Haram (12 Hari)',
    subtitle: 'Pengalaman ibadah dengan durasi lebih panjang dan hotel bintang 5 langsung di pelataran Masjidil Haram Makkah & Nabawi.',
    badgeText: 'Paket VIP',
    price: 'Rp 42.900.000',
    priceNote: 'All-In / Pax',
    duration: '12 Hari 11 Malam',
    departureDate: '28 Oktober 2026',
    seatLeft: 4,
    rating: 5.0,
    reviewCount: 32,
    airline: 'Saudia Airlines (Direct Flight Madinah)',
    hotelMakkah: {
      name: 'Pullman Zamzam Tower',
      stars: 5,
      distance: 'Pelataran Utama Masjidil Haram',
      image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Frontel Al Harithia Hotel',
      stars: 5,
      distance: 'Pelataran Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines Direct Flight',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 Direct Haram Makkah & Madinah',
      'Perjalanan Kereta Cepat Haramain Express (Madinah - Makkah)',
      'Full Board Buffet International & Indonesia 3x Sehari',
      'Ziarah Lengkap Makkah, Madinah, Raudah & Museum Wahyu',
      'Koper Hardcase VIP & Perlengkapan Ibadah Premium',
      'Handling Bagasi & Pendampingan 24 Jam',
    ],
    facilityImages: [
      {
        title: 'Makkah Clock Tower & Ka\'bah',
        subtitle: 'Pemandangan indah Masjidil Haram dari pelataran hotel',
        image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Masjid Nabawi Madinah',
        subtitle: 'Akses mudah ke pelataran Payung Nabawi',
        image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Masjidil Haram Suasana Malam',
        subtitle: 'Ketenangan ibadah di pelataran Ka\'bah malam hari',
        image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Pelataran Suci Madinah',
        subtitle: 'Suasana khusyuk ibadah di Masjid Nabawi',
        image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Terbang Direct Jakarta - Madinah',
        highlight: 'Saudia Airlines Direct',
        activities: [
          'Berkumpul di Bandara Soekarno Hatta Terminal 3 VIP',
          'Penerbangan langsung menuju Madinah Munawwarah',
          'Tiba & check-in Hotel Frontel Al Harithia Madinah',
        ],
      },
      {
        day: 2,
        title: 'Ziarah Raudah & Makam Rasulullah SAW',
        highlight: 'Ziarah Ibadah Khusyuk',
        activities: [
          'Shalat Berjamaah di Masjid Nabawi',
          'Masuk Raudah Syarifah sesuai Tasreh resmi',
          'Kajian keislaman malam hari di hotel',
        ],
      },
      {
        day: 3,
        title: 'Ziarah Kota Madinah',
        highlight: 'Masjid Quba & Uhud',
        activities: [
          'Kunjungan Masjid Quba, Kebun Kurma & Jabal Uhud',
          'Persiapan keberangkatan ke Makkah',
        ],
      },
      {
        day: 4,
        title: 'Naik Kereta Cepat ke Makkah & Umrah',
        highlight: 'Haramain High Speed Train',
        activities: [
          'Mengambil Miqat & berniat umrah',
          'Perjalanan Madinah - Makkah naik Kereta Cepat Haramain (2.5 jam)',
          'Check-in Pullman Zamzam Makkah & Pelaksanaan Umrah Pertama',
        ],
      },
      {
        day: 5,
        title: 'Ibadah Mandiri di Masjidil Haram',
        highlight: 'Koleksi Ibadah',
        activities: ['Memperbanyak Thawaf sunnah & tadarus Al-Qur\'an'],
      },
      {
        day: 6,
        title: 'Ziarah Kota Makkah',
        highlight: 'Arafah & Jabal Rahmah',
        activities: ['City tour Arafah, Mina, Jabal Rahmah & Miqat Ji\'ranah'],
      },
      {
        day: 7,
        title: 'Ibadah Khusyuk di Masjidil Haram',
        highlight: 'Solat Berjamaah',
        activities: ['Memperbanyak ibadah di pelataran Ka\'bah'],
      },
      {
        day: 8,
        title: 'Museum Al-Amoudi & Ziarah Tambahan',
        highlight: 'Sejarah Islam',
        activities: ['Kunjungan museum kebudayaan Islam & belanja perbekalan'],
      },
      {
        day: 9,
        title: 'Kajian Keislaman & Ibadah Mandiri',
        highlight: 'Bimbingan Ibadah',
        activities: ['Kajian bimbingan bersama ustadz pembimbing'],
      },
      {
        day: 10,
        title: 'Persiapan Kepulangan & Thawaf Wada\'',
        highlight: 'Thawaf Wada\'',
        activities: ['Pelaksanaan Thawaf Wada\' perpisahan Ka\'bah'],
      },
      {
        day: 11,
        title: 'Jeddah City Tour - Terbang ke Jakarta',
        highlight: 'Jeddah Red Sea',
        activities: ['City tour Jeddah & terbang kembali ke tanah air'],
      },
      {
        day: 12,
        title: 'Tiba di Indonesia',
        highlight: 'Kepulangan Selamat',
        activities: ['Tiba di Bandara Soekarno Hatta dengan selamat'],
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
    departureDate: 'Sesuai Request Anda',
    seatLeft: 8,
    rating: 5.0,
    reviewCount: 24,
    airline: 'Garuda Indonesia / Saudia Airlines',
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Tower',
      stars: 5,
      distance: 'Pelataran Ka\'bah Direct View',
      image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Dar Al Taqwa Madinah',
      stars: 5,
      distance: 'Depan Pintu Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Layanan Khusus Rombongan Keluarga (Tanpa Jamaah Lain)',
      'Tiket Business / Economy Class Saudia/Garuda Direct',
      'Mobil Private VIP (GMC / Hyundai Staria / Bus VIP Private)',
      'Hotel Bintang 5 View Ka\'bah Direct',
      'Muthawwif Private Dedicated 24 Jam',
      'Full Board Catering Menu Sesuai Permintaan',
      'Handling VIP Bandara & Fast Track',
    ],
    facilityImages: [
      {
        title: 'Kawasan Ka\'bah Makkah Al-Mukarramah',
        subtitle: 'Pemandangan Ka\'bah indah langsung dari jendela kamar hotel',
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Masjid Nabawi Madinah',
        subtitle: 'Lokasi hotel persis di pelataran utama Masjid Nabawi',
        image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Penjemputan Private VIP & Keberangkatan',
        highlight: 'Layanan Private',
        activities: ['Layanan penjemputan private & terbang menuju Madinah'],
      },
      {
        day: 2,
        title: 'Ziarah Raudah & Ibadah Khusyuk',
        highlight: 'Raudah Syarifah',
        activities: ['Masuk Raudah & ziarah didampingi Muthawwif private'],
      },
      {
        day: 3,
        title: 'Ziarah Khusus Madinah',
        highlight: 'City Tour Custom',
        activities: ['Kunjungan ziarah kota Madinah dengan armada private'],
      },
      {
        day: 4,
        title: 'Perjalanan ke Makkah & Umrah',
        highlight: 'Executice Train',
        activities: ['Naik Kereta Cepat Haramain & ibadah Umrah khusyuk'],
      },
      {
        day: 5,
        title: 'Ibadah di Masjidil Haram',
        highlight: 'View Ka\'bah',
        activities: ['Memperbanyak ibadah di pelataran Ka\'bah'],
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
    airline: 'Saudia Airlines / Garuda Indonesia Direct',
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Tower',
      stars: 5,
      distance: 'Pelataran Utama Ka\'bah',
      image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Oberoi Madinah Hotel',
      stars: 5,
      distance: 'Depan Pintu Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Visa Furoda / Mujamalah Resmi Kerajaan Arab Saudi',
      'Tenda Ber-AC VIP di Arafah & Mina Dekat Jamarat',
      'Akomodasi Hotel Bintang 5 Makkah & Madinah',
      'Bimbingan Ibadah Haji Oleh Pembimbing Khusyuk & Senior',
      'Full Board Catering Menu Indonesia di Hotel & Tenda',
      'Bus AC VIP Khusus Rombongan Haji Furoda',
      'Air Zamzam & Perlengkapan Haji Eksklusif',
    ],
    facilityImages: [
      {
        title: 'Ka\'bah Makkah Suasana Musim Haji',
        subtitle: 'Pelaksanaan Thawaf & Puncak Ibadah Haji di Masjidil Haram',
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Masjid Nabawi Madinah Munawwarah',
        subtitle: 'Ziarah awal di Kota Suci Madinah sebelum Puncak Wukuf',
        image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Rombongan Haji ke Madinah',
        highlight: 'Flight Direct Haji',
        activities: ['Terbang ke Madinah & check-in Hotel Oberoi Madinah'],
      },
      {
        day: 2,
        title: 'Ziarah Madinah & Persiapan Hajj',
        highlight: 'Manasik Haji',
        activities: ['Ziarah Raudah & pemantapan manasik haji'],
      },
      {
        day: 8,
        title: 'Puncak Wukuf di Padang Arafah',
        highlight: 'Wukuf Arafah',
        activities: ['Menuju Tenda VIP Arafah & pelaksanaan ibadah Wukuf'],
      },
      {
        day: 9,
        title: 'Muzdalifah & Lempar Jumrah Aqabah di Mina',
        highlight: 'Mina & Jamarat',
        activities: ['Mabit di Muzdalifah & melontar jumrah di Mina'],
      },
    ],
  },
];
