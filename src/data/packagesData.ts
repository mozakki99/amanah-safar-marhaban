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
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Masjid Nabawi Madinah',
        subtitle: 'Ziarah ke Makam Rasulullah SAW & Raudah Syarifah',
        image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Keberangkatan Jakarta - Madinah',
        highlight: 'Terbang Saudia Airlines',
        activities: [
          'Berkumpul di Bandara Soekarno-Hatta (Terminal 3)',
          'Proses pengarahan, pembagian paspor & dokumen',
          'Penerbangan menuju Bandara Prince Mohammad bin Abdulaziz Madinah',
          'Tiba di Madinah, proses imigrasi & check-in hotel',
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
      image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Frontel Al Harithia Hotel',
      stars: 5,
      distance: 'Pelataran Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 Pelataran Haram Makkah & Madinah',
      'Perjalanan Kereta Cepat Haramain Express (Madinah - Makkah)',
      'Full Board Buffet International & Indonesia 3x Sehari',
    ],
    facilityImages: [],
    itinerary: [],
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
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Surfaa Al Madinah Hotel',
      stars: 3,
      distance: '300m dari Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 3 Makkah & Madinah',
      'Full Board Catering Menu Indonesia',
      'Shuttle Bus Shuttle 24 Jam Makkah',
    ],
    facilityImages: [],
    itinerary: [],
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
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Garuda Indonesia',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 & 4 Dekat Masjid',
      'Full Board Catering Menu Nusantara 3x Sehari',
    ],
    facilityImages: [],
    itinerary: [],
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
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Akomodasi Hotel Bintang 4',
    ],
    facilityImages: [],
    itinerary: [],
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
      image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Grand Plaza Al Madinah',
      stars: 4,
      distance: 'Pelataran Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Akomodasi Longstay 22 Hari Bintang 4',
      'Full Board Catering Menu Indonesia 3x Sehari',
    ],
    facilityImages: [],
    itinerary: [],
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
      image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1200&q=80',
    },
    hotelMadinah: {
      name: 'Frontel Al Harithia Hotel',
      stars: 5,
      distance: 'Pelataran Utama Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    },
    includedFacilities: [
      'Tiket Pesawat PP Saudia Airlines',
      'Visa Umrah Resmi Kemenag RI',
      'Hotel Bintang 5 Pelataran Masjid',
    ],
    facilityImages: [],
    itinerary: [],
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
      'Tiket Business / Economy Class Saudia/Garuda',
      'Mobil Private VIP (GMC / Hyundai Staria / Bus VIP Private)',
      'Hotel Bintang 5 View Ka\'bah Direct',
      'Muthawwif Private Dedicated 24 Jam',
    ],
    facilityImages: [],
    itinerary: [],
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
    ],
    facilityImages: [],
    itinerary: [],
  },
];
