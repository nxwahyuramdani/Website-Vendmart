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

/* NOTE: spesifikasi di bawah adalah data contoh — sesuaikan dengan spesifikasi resmi VendMart. */
export const machines: Machine[] = [
  {
    slug: "l10", name: "Vending L10", tag: "Compact", type: "standard", image: "/assets/machines/l10.jpg",
    desc: "Mesin ringkas serbaguna untuk snack dan minuman.",
    best: "Kantor kecil, ruang tunggu, klinik",
    specs: [["Dimensi (P×L×T)", "80 × 70 × 180 cm"], ["Kapasitas", "± 300 item"], ["Jumlah slot", "40 slot"], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet, koin"], ["Daya", "220V / 250W"]],
  },
  {
    slug: "l10-slim", name: "Vending L10 Slim", tag: "Slim", type: "standard", image: "/assets/machines/slim.jpg",
    desc: "Desain tipis untuk lorong dan lobi sempit.",
    best: "Lorong, lobi sempit, koridor kampus",
    specs: [["Dimensi (P×L×T)", "60 × 50 × 190 cm"], ["Kapasitas", "± 220 item"], ["Jumlah slot", "30 slot"], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet"], ["Daya", "220V / 200W"]],
  },
  {
    slug: "l22", name: "Vending L22", tag: "Medium", type: "standard", image: "/assets/machines/l22.jpg",
    desc: "Kapasitas menengah dengan layar sentuh interaktif.",
    best: "Kantor, kampus, rumah sakit",
    specs: [["Dimensi (P×L×T)", "95 × 80 × 185 cm"], ["Kapasitas", "± 450 item"], ["Layar", "22\" touchscreen"], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet, kartu"], ["Daya", "220V / 350W"]],
  },
  {
    slug: "lx49", name: "Vending LX49", tag: "Large", type: "standard", image: "/assets/machines/lx49.jpg",
    desc: "Kapasitas besar untuk lokasi dengan trafik tinggi.",
    best: "Stasiun, terminal, pabrik, mal",
    specs: [["Dimensi (P×L×T)", "130 × 85 × 190 cm"], ["Kapasitas", "± 700 item"], ["Layar", "Touchscreen 21.5\""], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet, kartu, tunai"], ["Daya", "220V / 450W"]],
  },
  {
    slug: "lt49", name: "Vending LT49", tag: "Touch", type: "standard", image: "/assets/machines/lt49.jpg",
    desc: "Layar besar untuk iklan dan pengalaman belanja premium.",
    best: "Mal, bandara, lobi hotel",
    specs: [["Dimensi (P×L×T)", "100 × 90 × 195 cm"], ["Kapasitas", "± 400 item"], ["Layar", "49\" multimedia display"], ["Konten iklan", "Video & gambar, update jarak jauh"], ["Pembayaran", "QRIS, e-wallet, kartu"], ["Daya", "220V / 500W"]],
  },
  {
    slug: "lm55", name: "Vending LM55", tag: "Max", type: "standard", image: "/assets/machines/lm55.jpg",
    desc: 'Flagship dengan layar 55" dan kapasitas terbesar.',
    best: "Flagship store, mal premium, bandara",
    specs: [["Dimensi (P×L×T)", "110 × 100 × 200 cm"], ["Kapasitas", "± 800 item"], ["Layar", "55\" multimedia display"], ["Fitur", "Monitoring real-time, CCTV"], ["Pembayaran", "QRIS, e-wallet, kartu, tunai"], ["Daya", "220V / 600W"]],
  },
  {
    slug: "l10-frozen", name: "L10 Frozen", tag: "Specialized", type: "special", image: "/assets/machines/frozen.jpg",
    desc: "Pendingin beku untuk es krim dan frozen food.",
    best: "Mal, bioskop, area wisata",
    specs: [["Dimensi (P×L×T)", "95 × 80 × 185 cm"], ["Kapasitas", "± 250 item"], ["Suhu", "-18°C s.d. -22°C"], ["Produk", "Es krim, frozen food"], ["Pembayaran", "QRIS, e-wallet, kartu"], ["Daya", "220V / 700W"]],
  },
  {
    slug: "l10-noodle", name: "L10 Noodle", tag: "Specialized", type: "special", image: "/assets/machines/noodle.jpg",
    desc: "Seduh mie instan panas otomatis dalam hitungan detik.",
    best: "Kampus, pabrik, asrama, kos",
    specs: [["Dimensi (P×L×T)", "90 × 75 × 180 cm"], ["Kapasitas", "± 80 cup"], ["Air panas", "Otomatis, 90°C"], ["Waktu seduh", "± 20 detik"], ["Pembayaran", "QRIS, e-wallet"], ["Daya", "220V / 1500W"]],
  },
  {
    slug: "locker", name: "Locker Extension", tag: "Specialized", type: "special", image: "/assets/machines/locker.jpg",
    desc: "Loker tambahan untuk produk besar dan pengambilan paket.",
    best: "Apartemen, kantor, kampus",
    specs: [["Dimensi (P×L×T)", "Modular, hingga 200 × 40 × 190 cm"], ["Kompartemen", "S / M / L, dapat dikonfigurasi"], ["Akses", "Kode QR & PIN"], ["Fungsi", "Pickup paket & produk besar"], ["Konektivitas", "Wi-Fi / 4G"], ["Daya", "220V / 150W"]],
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
  { href: "#how", label: "Cara Kerja" },
  { href: "#ownership", label: "Ownership" },
  { href: "#project", label: "Special Project" },
  { href: "#contact", label: "Kontak" },
];

export const WA_NUMBER = "6285212238881";

/* Nomor WhatsApp Operasional (tombol WA melayang) */
export const WA_OPS_NUMBER = "6281119072300";
export const WA_OPS_DISPLAY = "+62 811-1907-2300";
