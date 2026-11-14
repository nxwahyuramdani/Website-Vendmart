export const services = [
  { icon: "🤝", title: "Rental & Kerja Sama Profit", desc: "Tempatkan mesin di lokasi Anda tanpa modal besar. Pilih sewa tetap atau skema bagi hasil yang menguntungkan." },
  { icon: "🛠️", title: "Vending Service & Warehouse", desc: "Perawatan berkala, isi ulang stok, dan gudang penyimpanan produk agar mesin selalu penuh dan siap jual." },
  { icon: "🏷️", title: "Ownership With/out Assistance", desc: "Beli mesin dan kelola sendiri, atau didampingi tim kami dari penempatan sampai operasional harian." },
  { icon: "🎨", title: "Branding & Special Project", desc: "Ubah mesin jadi media promosi: wrap custom, konten layar, sampling produk, dan aktivasi event." },
  { icon: "💡", title: "Konsultasi Vending Machine", desc: "Analisis lokasi, pemilihan produk, dan estimasi balik modal berdasarkan data lapangan." },
  { icon: "📊", title: "Dashboard Penjualan", desc: "Pantau stok, transaksi, dan performa tiap mesin secara real-time dari ponsel Anda." },
];

export type Machine = {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  type: "standard" | "special";
  image: string;
  specs: [string, string][];
  best: string;
};

/* NOTE: Daftar jenis mesin resmi VendMart */
export const machines: Machine[] = [
  {
    slug: "locker-series",
    name: "Locker Series",
    tag: "Locker System",
    type: "special",
    image: "/assets/machines/Locker Series.png",
    desc: "Sistem loker pintar modular untuk produk berukuran besar, paket, dan pengambilan mandiri 24 jam.",
    best: "Apartemen, perkantoran, kampus, pusat logistik & residential",
    specs: [
      ["Dimensi (P×L×T)", "Modular (Custom)"],
      ["Kompartemen", "S / M / L Konfigurasi Fleksibel"],
      ["Akses", "QR Code & PIN Otomatis"],
      ["Fungsi", "Pickup paket & produk berukuran besar"],
      ["Konektivitas", "Wi-Fi / 4G IoT"],
      ["Daya", "220V / 150W"],
    ],
  },
  {
    slug: "nano-series",
    name: "Nano Series",
    tag: "Compact",
    type: "standard",
    image: "/assets/machines/Nano Series.png",
    desc: "Vending machine ringkas dengan efisiensi ruang tinggi, ideal untuk aneka snack dan minuman botol/kaleng.",
    best: "Kantor, koridor, klinik, co-working space, area komersial sedang",
    specs: [
      ["Dimensi (P×L×T)", "± 80 × 75 × 185 cm"],
      ["Kapasitas", "± 250 - 300 item"],
      ["Jumlah Slot", "30 - 40 slot"],
      ["Pendingin", "Ya, 4–10°C"],
      ["Pembayaran", "QRIS, E-Wallet, Cashless"],
      ["Daya", "220V / 250W"],
    ],
  },
  {
    slug: "coffe-series",
    name: "Coffe Series",
    tag: "Fresh Brew",
    type: "special",
    image: "/assets/machines/Coffee Series.png",
    desc: "Mesin seduh kopi otomatis berstandar kafe profesional dengan pilihan biji kopi segar dan minuman hangat.",
    best: "Lobi kantor, rumah sakit, universitas, executive lounge",
    specs: [
      ["Dimensi (P×L×T)", "± 90 × 75 × 185 cm"],
      ["Menu Pilihan", "Espresso, Americano, Latte, Mocha, Chocolate"],
      ["Grinder", "Integrated Bean Grinder Presisi"],
      ["Cup Dispenser", "Otomatis (Hot & Ice Cup Ready)"],
      ["Pembayaran", "QRIS, E-Wallet, Cashless"],
      ["Daya", "220V / 1500W (Peak Heating)"],
    ],
  },
  {
    slug: "double-nano-series",
    name: "Double Nano Series",
    tag: "High Capacity",
    type: "standard",
    image: "/assets/machines/Double Nano Series.png",
    desc: "Kapasitas ekstra besar dengan dua kabinet ganda untuk variasi ratusan produk di lokasi bertrafik tinggi.",
    best: "Stasiun, universitas, pabrik, mal, gedung perkantoran besar",
    specs: [
      ["Dimensi (P×L×T)", "± 140 × 80 × 190 cm"],
      ["Kapasitas", "± 500 - 600 item"],
      ["Jumlah Slot", "60 - 80 slot dual zone"],
      ["Pendingin", "Ya, Dual Temperature Zone (4–10°C)"],
      ["Pembayaran", "QRIS, E-Wallet, Kartu"],
      ["Daya", "220V / 450W"],
    ],
  },
  {
    slug: "smart-series",
    name: "Smart Series",
    tag: "Touch Display",
    type: "standard",
    image: "/assets/machines/Smart Series.png",
    desc: "Vending machine mutakhir dengan layar sentuh interaktif untuk belanja modern dan tayangan media periklanan.",
    best: "Mal, bandara, hotel bintang lima, showroom, pusat perbelanjaan",
    specs: [
      ["Dimensi (P×L×T)", "± 100 × 90 × 195 cm"],
      ["Kapasitas", "± 400 - 500 item"],
      ["Layar", "Touchscreen Full HD Multimedia"],
      ["Fitur Iklan", "Remote Video & Banner Content Management"],
      ["Pembayaran", "QRIS, E-Wallet, Kartu Debit/Kredit"],
      ["Daya", "220V / 400W"],
    ],
  },
  {
    slug: "pico-series",
    name: "Pico Series",
    tag: "Ultra Slim",
    type: "standard",
    image: "/assets/machines/Pico Series.png",
    desc: "Desain ultra-ramping hemat tempat yang dirancang khusus untuk lorong sempit dan sudut ruangan terbatas.",
    best: "Lorong sempit, ruang tunggu privat, koridor asrama, lift lobby",
    specs: [
      ["Dimensi (P×L×T)", "± 60 × 60 × 185 cm"],
      ["Kapasitas", "± 180 - 220 item"],
      ["Jumlah Slot", "20 - 30 slot"],
      ["Pendingin", "Ya, 4–10°C"],
      ["Pembayaran", "QRIS, E-Wallet"],
      ["Daya", "220V / 180W"],
    ],
  },
];

export const adOffers = [
  { n: "01", title: "Listing Produk", desc: "Tampilkan produk brand Anda di dalam mesin vending VendMart. Produk tersusun rapi di slot premium dan langsung terjual ke konsumen." },
  { n: "02", title: "Body Branding", desc: "Seluruh badan mesin menjadi media iklan dengan wrap custom: dilihat ribuan orang setiap hari di lokasi tetap." },
  { n: "03", title: "Multimedia Screen", desc: "Tayangkan video dan gambar promosi di layar 22\"–55\". Konten dapat diganti jarak jauh kapan saja." },
];

export const locations = ["Mal & pusat perbelanjaan", "Kampus & universitas", "Perkantoran & lobi gedung", "Rumah sakit & klinik", "Stasiun, terminal & bandara", "Apartemen & kawasan hunian", "Pabrik & kawasan industri", "Area wisata & hiburan"];

export const steps = [
  { t: "Konsultasi", d: "Ceritakan lokasi dan target bisnis Anda." },
  { t: "Survei & Penawaran", d: "Kami analisis lokasi dan siapkan skema terbaik." },
  { t: "Instalasi", d: "Mesin dipasang, diisi, dan siap menerima transaksi." },
  { t: "Monitoring", d: "Pantau penjualan dan kami urus perawatannya." },
];

export const faqs = [
  { q: "Apakah saya perlu modal besar?", a: "Tidak. Dengan skema rental atau kerja sama bagi hasil, Anda bisa mulai tanpa membeli mesin." },
  { q: "Siapa yang mengisi ulang stok?", a: "Tergantung paket. Kami bisa menangani restock dan gudang, atau Anda kelola sendiri." },
  { q: "Metode pembayaran apa yang didukung?", a: "QRIS, e-wallet, kartu, dan uang tunai sesuai tipe mesin." },
  { q: "Apakah layanan tersedia di luar Jakarta?", a: "Ya, kami melayani banyak kota di Indonesia. Hubungi tim marketing untuk cek area." },
];

export const nav = [
  { href: "#services", label: "Layanan" },
  { href: "#machines", label: "Mesin" },
  { href: "#advertising", label: "Iklan" },
  { href: "#how", label: "Tahapan Kerjasama" },
  { href: "#ownership", label: "Ownership" },
  { href: "#project", label: "Special Project" },
  { href: "#contact", label: "Kontak" },
];

export const WA_NUMBER = "6281119072300";

/* Nomor WhatsApp Operasional (tombol WA melayang) */
export const WA_OPS_NUMBER = "6281119072300";
export const WA_OPS_DISPLAY = "+62 811-1907-2300";
export const OFFICE_PHONE = "021-29450966";
export const OFFICE_EMAIL = "ops@vendmart.id";
export const OFFICE_ADDRESS = "Komplek Perkantoran, Gading Bukit Indah, Jl. Raya Gading Kirana No.11 Blok TA 10, RT.18/RW.8, West Kelapa Gading, Kelapa Gading, North Jakarta City, Jakarta 14240";
