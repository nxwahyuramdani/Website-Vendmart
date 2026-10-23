export type Language = "id" | "en" | "zh";

export interface Translations {
  nav: {
    services: string;
    machines: string;
    advertising: string;
    how: string;
    ownership: string;
    project: string;
    contact: string;
    cta: string;
    menuTitle: string;
    themeMode: string;
    langSelect: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    ctaMachines: string;
    ctaServices: string;
    imgAlt: string;
  };
  stats: {
    activeMachines: string;
    partnerLocations: string;
    operatingHours: string;
    operatingSuffix: string;
  };
  servicesSection: {
    badge: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  machinesSection: {
    badge: string;
    title: string;
    tabs: {
      all: string;
      standard: string;
      special: string;
    };
    suitableFor: string;
    modalCta: string;
    viewSpec: string;
    close: string;
    machines: Record<
      string,
      {
        name: string;
        tag: string;
        desc: string;
        best: string;
        specs: [string, string][];
      }
    >;
  };
  advertisingSection: {
    badge: string;
    title: string;
    desc: string;
    imgAlt: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
    cards: Array<{ n: string; title: string; desc: string }>;
    locationsTitle: string;
    locationsDesc: string;
    locationsCta: string;
    locationsDisclaimer: string;
    locationsList: string[];
  };
  howSection: {
    badge: string;
    title: string;
    steps: Array<{ t: string; d: string }>;
  };
  ownershipSection: {
    badge: string;
    title: string;
    desc: string;
    points: string[];
    cta: string;
    imgAlt: string;
  };
  projectSection: {
    badge: string;
    title: string;
    desc: string;
    cta: string;
  };
  faqSection: {
    badge: string;
    title: string;
    faqs: Array<{ q: string; a: string }>;
  };
  contactSection: {
    badge: string;
    title: string;
    marketing: string;
    office: string;
    email: string;
    address: string;
    addressVal: string;
    mapTitle: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    selectPlaceholder: string;
    selectOptions: string[];
    msgPlaceholder: string;
    submitBtn: string;
    toastMsg: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    servicesList: string[];
    contactTitle: string;
    rights: string;
  };
  waButton: {
    ariaLabel: string;
    defaultMessage: string;
  };
  brandSection: {
    badge: string;
    title: string;
    desc: string;
    activePartner: string;
    closeBadge: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      services: "Layanan",
      machines: "Mesin",
      advertising: "Iklan",
      how: "Cara Kerja",
      ownership: "Ownership",
      project: "Special Project",
      contact: "Kontak",
      cta: "Konsultasi Gratis",
      menuTitle: "Navigasi",
      themeMode: "Mode Tampilan",
      langSelect: "Pilih Bahasa",
    },
    hero: {
      badge: "Smart Vending Solutions",
      title1: "Everything is",
      title2: "Vendingable.",
      desc: "VendMart menghadirkan vending machine modern untuk bisnis, kampus, kantor, dan ruang publik. Mulai dari sewa, bagi hasil, hingga kepemilikan penuh.",
      ctaMachines: "Lihat Mesin →",
      ctaServices: "Pelajari Layanan",
      imgAlt: "Smart Vending Machine VendMart",
    },
    stats: {
      activeMachines: "Mesin aktif",
      partnerLocations: "Lokasi mitra",
      operatingHours: "Beroperasi",
      operatingSuffix: " jam",
    },
    servicesSection: {
      badge: "Layanan",
      title: "Satu atap untuk bisnis vending Anda.",
      desc: "Dari konsultasi sampai perawatan, semua ditangani tim VendMart.",
      items: [
        { title: "Rental & Kerja Sama Profit", desc: "Tempatkan mesin di lokasi Anda tanpa modal besar. Pilih sewa tetap atau skema bagi hasil yang menguntungkan." },
        { title: "Vending Service & Warehouse", desc: "Perawatan berkala, isi ulang stok, dan gudang penyimpanan produk agar mesin selalu penuh dan siap jual." },
        { title: "Ownership With/out Assistance", desc: "Beli mesin dan kelola sendiri, atau didampingi tim kami dari penempatan sampai operasional harian." },
        { title: "Branding & Special Project", desc: "Ubah mesin jadi media promosi: wrap custom, konten layar, sampling produk, dan aktivasi event." },
        { title: "Konsultasi Vending Machine", desc: "Analisis lokasi, pemilihan produk, dan estimasi balik modal berdasarkan data lapangan." },
        { title: "Dashboard Penjualan", desc: "Pantau stok, transaksi, dan performa tiap mesin secara real-time dari ponsel Anda." },
      ],
    },
    machinesSection: {
      badge: "Katalog Mesin",
      title: "Pilih mesin yang pas untuk ruang Anda.",
      tabs: {
        all: "Semua",
        standard: "Standard",
        special: "Specialized",
      },
      suitableFor: "Cocok untuk:",
      modalCta: "Tanya Harga & Penawaran",
      viewSpec: "Lihat spesifikasi",
      close: "Tutup",
      machines: {
        l10: {
          name: "Vending L10",
          tag: "Compact",
          desc: "Mesin ringkas serbaguna untuk snack dan minuman.",
          best: "Kantor kecil, ruang tunggu, klinik",
          specs: [["Dimensi (P×L×T)", "80 × 70 × 180 cm"], ["Kapasitas", "± 300 item"], ["Jumlah slot", "40 slot"], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet, koin"], ["Daya", "220V / 250W"]],
        },
        "l10-slim": {
          name: "Vending L10 Slim",
          tag: "Slim",
          desc: "Desain tipis untuk lorong dan lobi sempit.",
          best: "Lorong, lobi sempit, koridor kampus",
          specs: [["Dimensi (P×L×T)", "60 × 50 × 190 cm"], ["Kapasitas", "± 220 item"], ["Jumlah slot", "30 slot"], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet"], ["Daya", "220V / 200W"]],
        },
        l22: {
          name: "Vending L22",
          tag: "Medium",
          desc: "Kapasitas menengah dengan layar sentuh interaktif.",
          best: "Kantor, kampus, rumah sakit",
          specs: [["Dimensi (P×L×T)", "95 × 80 × 185 cm"], ["Kapasitas", "± 450 item"], ["Layar", "22\" touchscreen"], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet, kartu"], ["Daya", "220V / 350W"]],
        },
        lx49: {
          name: "Vending LX49",
          tag: "Large",
          desc: "Kapasitas besar untuk lokasi dengan trafik tinggi.",
          best: "Stasiun, terminal, pabrik, mal",
          specs: [["Dimensi (P×L×T)", "130 × 85 × 190 cm"], ["Kapasitas", "± 700 item"], ["Layar", "Touchscreen 21.5\""], ["Pendingin", "Ya, 4–10°C"], ["Pembayaran", "QRIS, e-wallet, kartu, tunai"], ["Daya", "220V / 450W"]],
        },
        lt49: {
          name: "Vending LT49",
          tag: "Touch",
          desc: "Layar besar untuk iklan dan pengalaman belanja premium.",
          best: "Mal, bandara, lobi hotel",
          specs: [["Dimensi (P×L×T)", "100 × 90 × 195 cm"], ["Kapasitas", "± 400 item"], ["Layar", "49\" multimedia display"], ["Konten iklan", "Video & gambar, update jarak jauh"], ["Pembayaran", "QRIS, e-wallet, kartu"], ["Daya", "220V / 500W"]],
        },
        lm55: {
          name: "Vending LM55",
          tag: "Max",
          desc: "Flagship dengan layar 55\" dan kapasitas terbesar.",
          best: "Flagship store, mal premium, bandara",
          specs: [["Dimensi (P×L×T)", "110 × 100 × 200 cm"], ["Kapasitas", "± 800 item"], ["Layar", "55\" multimedia display"], ["Fitur", "Monitoring real-time, CCTV"], ["Pembayaran", "QRIS, e-wallet, kartu, tunai"], ["Daya", "220V / 600W"]],
        },
        "l10-frozen": {
          name: "L10 Frozen",
          tag: "Specialized",
          desc: "Pendingin beku untuk es krim dan frozen food.",
          best: "Mal, bioskop, area wisata",
          specs: [["Dimensi (P×L×T)", "95 × 80 × 185 cm"], ["Kapasitas", "± 250 item"], ["Suhu", "-18°C s.d. -22°C"], ["Produk", "Es krim, frozen food"], ["Pembayaran", "QRIS, e-wallet, kartu"], ["Daya", "220V / 700W"]],
        },
        "l10-noodle": {
          name: "L10 Noodle",
          tag: "Specialized",
          desc: "Seduh mie instan panas otomatis dalam hitungan detik.",
          best: "Kampus, pabrik, asrama, kos",
          specs: [["Dimensi (P×L×T)", "90 × 75 × 180 cm"], ["Kapasitas", "± 80 cup"], ["Air panas", "Otomatis, 90°C"], ["Waktu seduh", "± 20 detik"], ["Pembayaran", "QRIS, e-wallet"], ["Daya", "220V / 1500W"]],
        },
        locker: {
          name: "Locker Extension",
          tag: "Specialized",
          desc: "Loker tambahan untuk produk besar dan pengambilan paket.",
          best: "Apartemen, kantor, kampus",
          specs: [["Dimensi (P×L×T)", "Modular, hingga 200 × 40 × 190 cm"], ["Kompartemen", "S / M / L, dapat dikonfigurasi"], ["Akses", "Kode QR & PIN"], ["Fungsi", "Pickup paket & produk besar"], ["Konektivitas", "Wi-Fi / 4G"], ["Daya", "220V / 150W"]],
        },
      },
    },
    advertisingSection: {
      badge: "Kerja Sama Iklan",
      title: "Pasang produk dan iklan Anda di tempat yang ramai.",
      desc: "Mesin VendMart berdiri di titik strategis dengan lalu lintas harian yang tinggi. Brand Anda terlihat, dan produk Anda langsung dibeli.",
      imgAlt: "Vending machine dengan body branding dan layar iklan di mal",
      stat1: "10rb+",
      stat1Label: "Pengunjung / hari*",
      stat2: "3",
      stat2Label: "Format iklan",
      stat3: "24/7",
      stat3Label: "Tayang non-stop",
      cards: [
        { n: "01", title: "Listing Produk", desc: "Tampilkan produk brand Anda di dalam mesin vending VendMart. Produk tersusun rapi di slot premium dan langsung terjual ke konsumen." },
        { n: "02", title: "Body Branding", desc: "Seluruh badan mesin menjadi media iklan dengan wrap custom: dilihat ribuan orang setiap hari di lokasi tetap." },
        { n: "03", title: "Multimedia Screen", desc: "Tayangkan video dan gambar promosi di layar 22\"–55\". Konten dapat diganti jarak jauh kapan saja." },
      ],
      locationsTitle: "Lokasi strategis yang kami tawarkan",
      locationsDesc: "Pilih titik sesuai target audiens brand Anda. Tim kami bantu survei dan rekomendasi.",
      locationsCta: "Ajukan Kerja Sama",
      locationsDisclaimer: "*Angka ilustrasi, sesuaikan dengan data lokasi.",
      locationsList: [
        "Mal & pusat perbelanjaan",
        "Kampus & universitas",
        "Perkantoran & lobi gedung",
        "Rumah sakit & klinik",
        "Stasiun, terminal & bandara",
        "Apartemen & kawasan hunian",
        "Pabrik & kawasan industri",
        "Area wisata & hiburan",
      ],
    },
    howSection: {
      badge: "Cara Kerja",
      title: "Mulai dalam empat langkah.",
      steps: [
        { t: "Konsultasi", d: "Ceritakan lokasi dan target bisnis Anda." },
        { t: "Survei & Penawaran", d: "Kami analisis lokasi dan siapkan skema terbaik." },
        { t: "Instalasi", d: "Mesin dipasang, diisi, dan siap menerima transaksi." },
        { t: "Monitoring", d: "Pantau penjualan dan kami urus perawatannya." },
      ],
    },
    ownershipSection: {
      badge: "Ownership",
      title: "Miliki bisnis vending Anda sendiri.",
      desc: "Mandiri penuh, atau didampingi tim VendMart sampai mesin menghasilkan.",
      points: [
        "Pelatihan operasional & pemilihan produk",
        "Garansi mesin dan layanan purna jual",
        "Akses dashboard & laporan penjualan",
        "Opsi gudang dan restock terjadwal",
      ],
      cta: "Jadi Pemilik Mesin",
      imgAlt: "Vending machine VendMart di lobi kantor",
    },
    projectSection: {
      badge: "Branding & Special Project",
      title: "Jadikan mesin vending panggung brand Anda.",
      desc: "Sampling, peluncuran produk, hingga aktivasi event dengan mesin custom dan konten layar dinamis.",
      cta: "Diskusikan Project",
    },
    faqSection: {
      badge: "FAQ",
      title: "Pertanyaan umum.",
      faqs: [
        { q: "Apakah saya perlu modal besar?", a: "Tidak. Dengan skema rental atau kerja sama bagi hasil, Anda bisa mulai tanpa membeli mesin." },
        { q: "Siapa yang mengisi ulang stok?", a: "Tergantung paket. Kami bisa menangani restock dan gudang, atau Anda kelola sendiri." },
        { q: "Metode pembayaran apa yang didukung?", a: "QRIS, e-wallet, kartu, dan uang tunai sesuai tipe mesin." },
        { q: "Apakah layanan tersedia di luar Jakarta?", a: "Ya, kami melayani banyak kota di Indonesia. Hubungi tim marketing untuk cek area." },
      ],
    },
    contactSection: {
      badge: "Hubungi Kami",
      title: "Ayo mulai bisnis vending Anda.",
      marketing: "Marketing",
      office: "Kantor",
      email: "Email",
      address: "Alamat",
      addressVal: "Jl. Garuda No.32 RT.1/RW.5, Kemayoran, Jakarta 10620",
      mapTitle: "Peta lokasi VendMart",
      formTitle: "Kirim pesan",
      namePlaceholder: "Nama lengkap",
      emailPlaceholder: "Email",
      selectPlaceholder: "Minat layanan",
      selectOptions: [
        "Rental & Kerja Sama",
        "Ownership",
        "Service & Warehouse",
        "Special Project",
        "Konsultasi",
      ],
      msgPlaceholder: "Ceritakan kebutuhan Anda",
      submitBtn: "Kirim via WhatsApp",
      toastMsg: "Membuka WhatsApp… ✓",
    },
    footer: {
      tagline: "Everything is Vendingable. Solusi vending machine modern untuk Indonesia.",
      servicesTitle: "Layanan",
      servicesList: ["Rental & Kerja Sama", "Service & Warehouse", "Ownership", "Special Project"],
      contactTitle: "Kontak",
      rights: "VendMart. Hak cipta dilindungi.",
    },
    waButton: {
      ariaLabel: "Hubungi WhatsApp Operasional VendMart",
      defaultMessage: "Halo VendMart, saya ingin konsultasi layanan vending machine.",
    },
    brandSection: {
      badge: "Kemitraan Terpercaya",
      title: "Dipercaya oleh Mitra & Brand Terkemuka",
      desc: "Arahkan kursor ke logo brand untuk menyalakan warna asli kemitraan VendMart.",
      activePartner: "Mitra Aktif VendMart",
      closeBadge: "Tutup",
    },
  },
  en: {
    nav: {
      services: "Services",
      machines: "Machines",
      advertising: "Advertising",
      how: "How it Works",
      ownership: "Ownership",
      project: "Special Project",
      contact: "Contact",
      cta: "Free Consultation",
      menuTitle: "Navigation",
      themeMode: "Appearance Mode",
      langSelect: "Select Language",
    },
    hero: {
      badge: "Smart Vending Solutions",
      title1: "Everything is",
      title2: "Vendingable.",
      desc: "VendMart delivers smart, modern vending machines for businesses, campuses, offices, and public spaces. From rental and profit sharing to full ownership.",
      ctaMachines: "View Machines →",
      ctaServices: "Explore Services",
      imgAlt: "Smart Vending Machine VendMart",
    },
    stats: {
      activeMachines: "Active machines",
      partnerLocations: "Partner locations",
      operatingHours: "Operating",
      operatingSuffix: " hrs (24/7)",
    },
    servicesSection: {
      badge: "Services",
      title: "One-stop platform for your vending business.",
      desc: "From initial consultation to daily maintenance, VendMart handles it all.",
      items: [
        { title: "Rental & Profit Sharing", desc: "Deploy machines at your premises with minimal capital. Choose fixed rental or profitable revenue-share." },
        { title: "Vending Service & Warehouse", desc: "Routine maintenance, stock replenishment, and warehousing so your machines are always ready to sell." },
        { title: "Ownership With/out Assistance", desc: "Purchase machines and manage them yourself, or let our dedicated team guide you from site selection to daily operations." },
        { title: "Branding & Special Project", desc: "Turn vending machines into interactive media: custom wraps, multimedia display, product sampling, and event activation." },
        { title: "Vending Machine Consulting", desc: "Location analysis, product selection, and ROI projections backed by real field data." },
        { title: "Sales Dashboard", desc: "Track inventory, transactions, and machine performance in real-time right from your mobile phone." },
      ],
    },
    machinesSection: {
      badge: "Machine Catalog",
      title: "Choose the perfect machine for your space.",
      tabs: {
        all: "All",
        standard: "Standard",
        special: "Specialized",
      },
      suitableFor: "Best suited for:",
      modalCta: "Request Pricing & Quote",
      viewSpec: "View specifications",
      close: "Close",
      machines: {
        l10: {
          name: "Vending L10",
          tag: "Compact",
          desc: "Compact all-round machine for snacks and beverages.",
          best: "Small offices, waiting lounges, clinics",
          specs: [["Dimensions (L×W×H)", "80 × 70 × 180 cm"], ["Capacity", "± 300 items"], ["Slot Count", "40 slots"], ["Cooling", "Yes, 4–10°C"], ["Payment", "QRIS, e-wallet, coin"], ["Power", "220V / 250W"]],
        },
        "l10-slim": {
          name: "Vending L10 Slim",
          tag: "Slim",
          desc: "Ultra-slim footprint designed for narrow hallways and lobbies.",
          best: "Hallways, compact lobbies, campus corridors",
          specs: [["Dimensions (L×W×H)", "60 × 50 × 190 cm"], ["Capacity", "± 220 items"], ["Slot Count", "30 slots"], ["Cooling", "Yes, 4–10°C"], ["Payment", "QRIS, e-wallet"], ["Power", "220V / 200W"]],
        },
        l22: {
          name: "Vending L22",
          tag: "Medium",
          desc: "Mid-sized capacity featuring an interactive touchscreen display.",
          best: "Offices, campuses, hospitals",
          specs: [["Dimensions (L×W×H)", "95 × 80 × 185 cm"], ["Capacity", "± 450 items"], ["Screen", "22\" touchscreen"], ["Cooling", "Yes, 4–10°C"], ["Payment", "QRIS, e-wallet, card"], ["Power", "220V / 350W"]],
        },
        lx49: {
          name: "Vending LX49",
          tag: "Large",
          desc: "High capacity designed for busy, high-foot-traffic locations.",
          best: "Transit hubs, terminals, factories, shopping malls",
          specs: [["Dimensions (L×W×H)", "130 × 85 × 190 cm"], ["Capacity", "± 700 items"], ["Screen", "21.5\" Touchscreen"], ["Cooling", "Yes, 4–10°C"], ["Payment", "QRIS, e-wallet, card, cash"], ["Power", "220V / 450W"]],
        },
        lt49: {
          name: "Vending LT49",
          tag: "Touch",
          desc: "Large multimedia display for impactful ads and premium consumer experience.",
          best: "Shopping malls, airports, hotel lobbies",
          specs: [["Dimensions (L×W×H)", "100 × 90 × 195 cm"], ["Capacity", "± 400 items"], ["Screen", "49\" multimedia display"], ["Ad Content", "Video & dynamic images, remote cloud update"], ["Payment", "QRIS, e-wallet, card"], ["Power", "220V / 500W"]],
        },
        lm55: {
          name: "Vending LM55",
          tag: "Max",
          desc: "Flagship model with impressive 55\" screen and maximum capacity.",
          best: "Flagship stores, premium malls, international airports",
          specs: [["Dimensions (L×W×H)", "110 × 100 × 200 cm"], ["Capacity", "± 800 items"], ["Screen", "55\" multimedia display"], ["Features", "Real-time remote monitoring, CCTV"], ["Payment", "QRIS, e-wallet, card, cash"], ["Power", "220V / 600W"]],
        },
        "l10-frozen": {
          name: "L10 Frozen",
          tag: "Specialized",
          desc: "Deep freezer unit tailored for ice cream and frozen foods.",
          best: "Malls, cinemas, tourist entertainment zones",
          specs: [["Dimensions (L×W×H)", "95 × 80 × 185 cm"], ["Capacity", "± 250 items"], ["Temperature", "-18°C to -22°C"], ["Products", "Ice cream, frozen snacks"], ["Payment", "QRIS, e-wallet, card"], ["Power", "220V / 700W"]],
        },
        "l10-noodle": {
          name: "L10 Noodle",
          tag: "Specialized",
          desc: "Automated instant noodle dispenser with built-in hot water brewing.",
          best: "Universities, factories, dormitories, student housing",
          specs: [["Dimensions (L×W×H)", "90 × 75 × 180 cm"], ["Capacity", "± 80 cups"], ["Hot Water", "Automatic, 90°C"], ["Brew Time", "± 20 seconds"], ["Payment", "QRIS, e-wallet"], ["Power", "220V / 1500W"]],
        },
        locker: {
          name: "Locker Extension",
          tag: "Specialized",
          desc: "Modular smart locker for oversized items and automated parcel pickup.",
          best: "Apartment complexes, corporate towers, university campuses",
          specs: [["Dimensions (L×W×H)", "Modular, up to 200 × 40 × 190 cm"], ["Compartments", "S / M / L configurable"], ["Access", "QR code & PIN"], ["Function", "Package pickup & bulky item dispensing"], ["Connectivity", "Wi-Fi / 4G LTE"], ["Power", "220V / 150W"]],
        },
      },
    },
    advertisingSection: {
      badge: "Advertising Partnership",
      title: "Showcase your brand and products in high-traffic hubs.",
      desc: "VendMart machines are positioned in strategic locations with massive daily foot traffic. Boost your brand visibility and drive direct consumer purchases.",
      imgAlt: "Vending machine with full body wrap and digital ad screen in mall",
      stat1: "10k+",
      stat1Label: "Daily visitors*",
      stat2: "3",
      stat2Label: "Ad formats",
      stat3: "24/7",
      stat3Label: "Non-stop display",
      cards: [
        { n: "01", title: "Product Listing", desc: "Showcase your brand products on premium shelves inside VendMart machines for immediate customer purchase." },
        { n: "02", title: "Body Branding", desc: "Transform the entire exterior of the machine into an eye-catching billboard seen by thousands daily." },
        { n: "03", title: "Multimedia Screen", desc: "Broadcast engaging dynamic video and banner campaigns on 22\"–55\" screens with instant cloud scheduling." },
      ],
      locationsTitle: "Strategic locations we offer",
      locationsDesc: "Choose prime spots tailored to your target audience. Our team assists with site survey and recommendations.",
      locationsCta: "Partner with Us",
      locationsDisclaimer: "*Illustrative figures; verify with location data.",
      locationsList: [
        "Shopping malls & retail centers",
        "Colleges & university campuses",
        "Corporate offices & commercial towers",
        "Hospitals & medical centers",
        "Transit stations, terminals & airports",
        "Apartments & residential estates",
        "Factories & industrial parks",
        "Tourism & entertainment destinations",
      ],
    },
    howSection: {
      badge: "How it Works",
      title: "Get started in four simple steps.",
      steps: [
        { t: "Consultation", d: "Share your target location and commercial goals with us." },
        { t: "Survey & Proposal", d: "We evaluate the site and propose the optimal partnership model." },
        { t: "Installation", d: "The machine is installed, stocked, and ready to accept sales." },
        { t: "Monitoring", d: "Track sales performance while we handle upkeep and technical support." },
      ],
    },
    ownershipSection: {
      badge: "Ownership",
      title: "Own your very own vending machine business.",
      desc: "Operate with full autonomy, or partner with VendMart for end-to-end operational assistance.",
      points: [
        "Comprehensive operational training & product curation",
        "Manufacturer warranty and dedicated after-sales support",
        "Real-time sales dashboard & performance reporting",
        "Optional warehousing and scheduled restock services",
      ],
      cta: "Become a Machine Owner",
      imgAlt: "VendMart vending machine stationed in office lobby",
    },
    projectSection: {
      badge: "Branding & Special Project",
      title: "Turn smart vending machines into your brand's stage.",
      desc: "Product sampling, launch events, and experiential activations with fully customized machines and interactive screens.",
      cta: "Discuss Project",
    },
    faqSection: {
      badge: "FAQ",
      title: "Frequently Asked Questions.",
      faqs: [
        { q: "Do I need large capital to start?", a: "No. With our rental or revenue-sharing models, you can launch without purchasing equipment upfront." },
        { q: "Who manages stock replenishment?", a: "Depends on your package. We can handle restocking and warehousing, or you can manage it independently." },
        { q: "Which payment methods are supported?", a: "QRIS, popular e-wallets, credit/debit cards, and cash depending on the machine model." },
        { q: "Are your services available outside Jakarta?", a: "Yes, we serve multiple major cities across Indonesia. Inquire with our sales team for availability." },
      ],
    },
    contactSection: {
      badge: "Contact Us",
      title: "Let's kickstart your vending business today.",
      marketing: "Marketing",
      office: "Office",
      email: "Email",
      address: "Address",
      addressVal: "Jl. Garuda No.32 RT.1/RW.5, Kemayoran, Jakarta 10620",
      mapTitle: "VendMart office location map",
      formTitle: "Send a Message",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      selectPlaceholder: "Interested Service",
      selectOptions: [
        "Rental & Revenue Share",
        "Machine Ownership",
        "Service & Warehousing",
        "Special Project",
        "Business Consultation",
      ],
      msgPlaceholder: "Tell us about your requirements",
      submitBtn: "Send via WhatsApp",
      toastMsg: "Opening WhatsApp… ✓",
    },
    footer: {
      tagline: "Everything is Vendingable. Modern smart vending machine solutions for Indonesia.",
      servicesTitle: "Services",
      servicesList: ["Rental & Revenue Share", "Service & Warehousing", "Ownership", "Special Project"],
      contactTitle: "Contact",
      rights: "VendMart. All rights reserved.",
    },
    waButton: {
      ariaLabel: "Chat with VendMart Operations on WhatsApp",
      defaultMessage: "Hello VendMart, I would like to inquire about vending machine solutions.",
    },
    brandSection: {
      badge: "Trusted Partnerships",
      title: "Trusted by Leading Brands & Partners",
      desc: "Hover over any brand logo to light up full colors and view collaboration details.",
      activePartner: "Active VendMart Partner",
      closeBadge: "Close",
    },
  },
  zh: {
    nav: {
      services: "服务项目",
      machines: "设备机型",
      advertising: "广告合作",
      how: "运作流程",
      ownership: "设备购置",
      project: "特别定制",
      contact: "联系我们",
      cta: "免费咨询",
      menuTitle: "网站导航",
      themeMode: "显示模式",
      langSelect: "选择语言",
    },
    hero: {
      badge: "智能售货机综合解决方案",
      title1: "万物皆可售",
      title2: "Everything is Vendingable.",
      desc: "VendMart 为企业、园区、高校、写字楼及各类公共场所提供现代化智能售货机。涵盖设备租赁、利润分成合作到完整设备购置。",
      ctaMachines: "查看机型 →",
      ctaServices: "了解服务",
      imgAlt: "VendMart 现代化智能自动售货机",
    },
    stats: {
      activeMachines: "运营中机型",
      partnerLocations: "合作点位",
      operatingHours: "全天候运营",
      operatingSuffix: " 小时 (24/7)",
    },
    servicesSection: {
      badge: "服务项目",
      title: "一站式智能售货机商业赋能平台。",
      desc: "从选址评估到日常维保，VendMart 专业团队全程保驾护航。",
      items: [
        { title: "租赁与收益分成合作", desc: "无需高额前期资金即可入驻优质点位。支持固定租金租赁或双方共赢的利润分成模式。" },
        { title: "设备维护与仓储配送", desc: "定期硬件巡检、货品补给与标准化仓储管理，确保售货机全天候稳定售卖。" },
        { title: "设备购置与运营陪跑", desc: "购置自有设备自主经营，或由我们专业团队提供从点位评估到日常运营的全程扶持。" },
        { title: "品牌包装与特别定制", desc: "将售货机打造为互动广告载体：定制机身彩绘涂装、高清多媒体互动大屏、新品派样与活动引流。" },
        { title: "售货机商业咨询", desc: "结合实地客流大数据，提供科学选址、热销品类规划及投资回报周期测算。" },
        { title: "数字化销售管理后台", desc: "随时随地通过手机查看各设备实时库存、交易流水与经营数据分析。" },
      ],
    },
    machinesSection: {
      badge: "设备机型目录",
      title: "挑选契合您场地场景的理想机型。",
      tabs: {
        all: "全部",
        standard: "标准型",
        special: "特种定制型",
      },
      suitableFor: "适用场景:",
      modalCta: "获取报价与方案",
      viewSpec: "查看详细规格",
      close: "关闭",
      machines: {
        l10: {
          name: "Vending L10",
          tag: "Compact",
          desc: "多功能紧凑型机型，适用于零食与饮品售卖。",
          best: "小型办公室、候诊室、诊所接待处",
          specs: [["外形尺寸 (长×宽×高)", "80 × 70 × 180 cm"], ["设备容量", "约 300 件"], ["货道数量", "40 货道"], ["冷藏功能", "支持, 4–10°C"], ["支付方式", "QRIS、电子钱包、硬币"], ["额定功率", "220V / 250W"]],
        },
        "l10-slim": {
          name: "Vending L10 Slim",
          tag: "Slim",
          desc: "超窄纤薄机身设计，专门针对走廊与狭窄前厅优化。",
          best: "狭窄走廊、紧凑大堂、校园过道",
          specs: [["外形尺寸 (长×宽×高)", "60 × 50 × 190 cm"], ["设备容量", "约 220 件"], ["货道数量", "30 货道"], ["冷藏功能", "支持, 4–10°C"], ["支付方式", "QRIS、主流电子钱包"], ["额定功率", "220V / 200W"]],
        },
        l22: {
          name: "Vending L22",
          tag: "Medium",
          desc: "中型容量配置，配备高清触摸互动屏幕，购物体验极佳。",
          best: "办公大楼、大学校园、综合医院",
          specs: [["外形尺寸 (长×宽×高)", "95 × 80 × 185 cm"], ["设备容量", "约 450 件"], ["显示屏幕", "22\" 触控大屏"], ["冷藏功能", "支持, 4–10°C"], ["支付方式", "QRIS、电子钱包、刷卡"], ["额定功率", "220V / 350W"]],
        },
        lx49: {
          name: "Vending LX49",
          tag: "Large",
          desc: "超大容量旗舰配置，满足密集高客流场所的连续高频消费需求。",
          best: "车站交通枢纽、客运站、工厂园区、大型商场",
          specs: [["外形尺寸 (长×宽×高)", "130 × 85 × 190 cm"], ["设备容量", "约 700 件"], ["显示屏幕", "21.5\" 触控屏"], ["冷藏功能", "支持, 4–10°C"], ["支付方式", "QRIS、电子钱包、刷卡、纸币现金"], ["额定功率", "220V / 450W"]],
        },
        lt49: {
          name: "Vending LT49",
          tag: "Touch",
          desc: "49寸超大多媒体交互屏，兼具强大广告展播与高阶零售功能。",
          best: "高端商场、机场航站楼、星级酒店大堂",
          specs: [["外形尺寸 (长×宽×高)", "100 × 90 × 195 cm"], ["设备容量", "约 400 件"], ["显示屏幕", "49\" 高清多媒体大屏"], ["广告展示", "高清视频与轮播图，支持远程云端更新"], ["支付方式", "QRIS、电子钱包、银行卡"], ["额定功率", "220V / 500W"]],
        },
        lm55: {
          name: "Vending LM55",
          tag: "Max",
          desc: "顶级旗舰机型，拥有55寸超大屏幕与海量商品容纳空间。",
          best: "品牌旗舰店、奢品购物中心、国际机场",
          specs: [["外形尺寸 (长×宽×高)", "110 × 100 × 200 cm"], ["设备容量", "约 800 件"], ["显示屏幕", "55\" 超大多媒体显示屏"], ["特色功能", "远程实时监控、安防摄像头"], ["支付方式", "QRIS、电子钱包、刷卡、现金"], ["额定功率", "220V / 600W"]],
        },
        "l10-frozen": {
          name: "L10 Frozen",
          tag: "Specialized",
          desc: "专业超低温深度冷冻机型，专门用于冰淇淋与冷冻速食售卖。",
          best: "大型商场、电影院、旅游景区文创区",
          specs: [["外形尺寸 (长×宽×高)", "95 × 80 × 185 cm"], ["设备容量", "约 250 件"], ["冷冻温度", "-18°C 至 -22°C"], ["适用品类", "冰淇淋、雪糕、冷冻速食"], ["支付方式", "QRIS、电子钱包、银行卡"], ["额定功率", "220V / 700W"]],
        },
        "l10-noodle": {
          name: "L10 Noodle",
          tag: "Specialized",
          desc: "全自动热泡面贩卖机，数秒内自动出水加热冲泡。",
          best: "高校宿舍、产业园区、青年公寓、网咖",
          specs: [["外形尺寸 (长×宽×高)", "90 × 75 × 180 cm"], ["设备容量", "约 80 桶"], ["热水系统", "自动即热式 90°C"], ["冲泡出餐", "约 20 秒"], ["支付方式", "QRIS、主流电子钱包"], ["额定功率", "220V / 1500W"]],
        },
        locker: {
          name: "Locker Extension",
          tag: "Specialized",
          desc: "模块化智能自提储物柜，支持大件商品零售与快递包裹自提。",
          best: "公寓社区、商务楼宇、大学校园",
          specs: [["外形尺寸 (长×宽×高)", "模块化组合，可达 200 × 40 × 190 cm"], ["储物格口", "大 / 中 / 小格口自由组合"], ["开门方式", "二维码扫码 & 动态取件码"], ["应用功能", "大件商品售卖、包裹自提"], ["联网方式", "Wi-Fi / 4G 蜂窝网络"], ["额定功率", "220V / 150W"]],
        },
      },
    },
    advertisingSection: {
      badge: "广告媒体合作",
      title: "在黄金高频人流点位展示您的品牌与商品。",
      desc: "VendMart 智能售货机布局于城市核心人流聚集地。让品牌触达海量客群，同时实现现场即时转化。",
      imgAlt: "商场内全机身品牌涂装与广告大屏售货机",
      stat1: "10,000+",
      stat1Label: "每日人流曝光*",
      stat2: "3",
      stat2Label: "主流广告形式",
      stat3: "24/7",
      stat3Label: "全天候无间断播发",
      cards: [
        { n: "01", title: "商品陈列入驻", desc: "将您的品牌商品置于售货机黄金展示货道，精准触达目标消费者并即刻成交。" },
        { n: "02", title: "全机身品牌涂装", desc: "整机化身大型户外立体展台，每日在固定点位吸引成千上万人流目光。" },
        { n: "03", title: "高清多媒体大屏", desc: "在 22\"–55\" 大屏上循环播发品牌视频与动态海报，支持云端随时更新。" },
      ],
      locationsTitle: "精选优质点位资源",
      locationsDesc: "根据品牌客群定制点位投放策略，专业团队提供现场勘测与选址建议。",
      locationsCta: "申请合作",
      locationsDisclaimer: "*数据为预估展示，以实际点位测算为准。",
      locationsList: [
        "大型购物中心与商业综合体",
        "大学院校与职教园区",
        "高端甲级写字楼与商务大堂",
        "综合医院与品牌专科诊所",
        "高铁站、客运枢纽与机场",
        "大型住宅小区与青年公寓",
        "现代化工厂与产业园区",
        "文旅景区与文化娱乐中心",
      ],
    },
    howSection: {
      badge: "运作流程",
      title: "只需四个步骤，轻松启动运营。",
      steps: [
        { t: "前期沟通", d: "告知您的目标点位与业务需求。" },
        { t: "勘测与方案", d: "分析点位人流与环境，制定最优合作方案。" },
        { t: "设备进场", d: "送装调试、货品上架，即刻开启营业。" },
        { t: "运营监控", d: "您随时查看经营收益，我们提供全方位售后维保。" },
      ],
    },
    ownershipSection: {
      badge: "设备购置",
      title: "拥有属于您的智能售货机事业。",
      desc: "完全自主经营，或由 VendMart 资深团队全程护航，助力快速盈利。",
      points: [
        "专业实操培训与选品热销方案",
        "原厂设备质保与完备售后服务",
        "数字化后台与经营数据报表",
        "可选仓储支持与定期补货配送",
      ],
      cta: "成为机主",
      imgAlt: "办公室大堂内的 VendMart 智能售货机",
    },
    projectSection: {
      badge: "特别定制项目",
      title: "让智能售货机成为品牌的耀眼秀场。",
      desc: "新品派样、品牌首发、快闪营销等定制机型与大屏多媒体互动方案。",
      cta: "洽谈项目",
    },
    faqSection: {
      badge: "常见问题",
      title: "常见疑问与解答。",
      faqs: [
        { q: "起步需要大笔资金吗？", a: "不需要。通过租赁或收益分成合作，您可以零设备购置成本快速启动点位运营。" },
        { q: "货品补货由谁负责？", a: "视合作方案而定。我们可承接全流程仓储配送补货，您也可以自行采购补货。" },
        { q: "支持哪些支付方式？", a: "支持印尼国家标准二维码 QRIS、主流电子钱包、银行卡刷卡及现金（依机型配置而定）。" },
        { q: "服务范围覆盖雅加达以外地区吗？", a: "覆盖。我们的服务网络遍及印尼多个主要城市，欢迎咨询销售团队了解所在区域点位。" },
      ],
    },
    contactSection: {
      badge: "联系我们",
      title: "开启您的智能售货机商业合作。",
      marketing: "市场合作",
      office: "办事处",
      email: "企业邮箱",
      address: "公司地址",
      addressVal: "Jl. Garuda No.32 RT.1/RW.5, Kemayoran, Jakarta 10620",
      mapTitle: "VendMart 办事处地图位置",
      formTitle: "发送留言",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "电子邮箱",
      selectPlaceholder: "意向合作服务",
      selectOptions: [
        "设备租赁与收益分成",
        "设备独立购置 (Ownership)",
        "维保售后与仓储托管",
        "特别定制与品牌项目",
        "商业选址咨询",
      ],
      msgPlaceholder: "请简要描述您的需求与点位情况",
      submitBtn: "通过WhatsApp发送",
      toastMsg: "正在打开 WhatsApp… ✓",
    },
    footer: {
      tagline: "Everything is Vendingable. 印尼现代化智能售货机综合解决方案。",
      servicesTitle: "服务项目",
      servicesList: ["租赁与合作分成", "维保与仓储托管", "设备购置", "特别定制项目"],
      contactTitle: "联系方式",
      rights: "VendMart. 版权所有。",
    },
    waButton: {
      ariaLabel: "联系 VendMart 运营客服 WhatsApp",
      defaultMessage: "您好 VendMart，我想咨询自动售货机相关服务与合作。",
    },
    brandSection: {
      badge: "值得信赖的合作伙伴",
      title: "深受知名品牌与战略伙伴的信赖",
      desc: "将光标悬停在品牌标志上即可点亮原色并查看合作信息。",
      activePartner: "VendMart 活跃合作伙伴",
      closeBadge: "关闭",
    },
  },
};
