"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export type Brand = {
  id: string;
  name: string;
  category: string;
  role: string;
  file: string;
  color: string;
  bgBadge: string;
};

export const partnerBrands: Brand[] = [
  {
    id: "lrt-jabodebek",
    name: "LRT Jabodebek",
    category: "Transportasi Publik",
    role: "Penempatan Mesin di 18 Stasiun Utama Jabodebek",
    file: "LRT Jabodebek.png",
    color: "#e11d48",
    bgBadge: "bg-rose-500/15 text-rose-600 dark:text-rose-300 border-rose-500/30",
  },
  {
    id: "lrt-jakarta",
    name: "LRT Jakarta",
    category: "Transportasi Publik",
    role: "Kemitraan Koridor Stasiun Velodrome – Kelapa Gading",
    file: "LRT Jakarta.png",
    color: "#0284c7",
    bgBadge: "bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-500/30",
  },
  {
    id: "bni",
    name: "Bank BNI",
    category: "Perbankan & Finansial",
    role: "Penempatan Mesin di Kantor Layanan & Ekosistem Pembayaran",
    file: "BNI.png",
    color: "#ea580c",
    bgBadge: "bg-orange-500/15 text-orange-600 dark:text-orange-300 border-orange-500/30",
  },
  {
    id: "btn",
    name: "Bank BTN",
    category: "Perbankan & Finansial",
    role: "Kemitraan Fasilitas Vending di Gedung Menara BTN",
    file: "BTN.png",
    color: "#1e3a8a",
    bgBadge: "bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/30",
  },
  {
    id: "cimb-niaga",
    name: "CIMB Niaga",
    category: "Perbankan & Finansial",
    role: "Penempatan Mesin di Digital Lounge & Kantor Cabang",
    file: "CIMB Niaga.png",
    color: "#dc2626",
    bgBadge: "bg-red-500/15 text-red-600 dark:text-red-300 border-red-500/30",
  },
  {
    id: "aeon-mall",
    name: "AEON Mall",
    category: "Pusat Perbelanjaan",
    role: "Penempatan Mesin di Koridor Ramai & Area Publik Mall",
    file: "Aeon Mall.png",
    color: "#9333ea",
    bgBadge: "bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "Brand Produk (FMCG)",
    role: "Official Beverage Listing di Jaringan Mesin VendMart",
    file: "Coca Cola.png",
    color: "#e11d48",
    bgBadge: "bg-rose-500/15 text-rose-600 dark:text-rose-300 border-rose-500/30",
  },
  {
    id: "nestle",
    name: "Nestlé",
    category: "Principal & FMCG",
    role: "Kemitraan Distribusi Portofolio Minuman & Makanan Ringan",
    file: "Nestle.png",
    color: "#0284c7",
    bgBadge: "bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-500/30",
  },
  {
    id: "bear-brand",
    name: "Bear Brand",
    category: "Brand Produk (FMCG)",
    role: "Penyediaan Produk Susu Steril Siap Konsumsi",
    file: "Bear Brand.png",
    color: "#2563eb",
    bgBadge: "bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/30",
  },
  {
    id: "milo",
    name: "MILO",
    category: "Brand Produk (FMCG)",
    role: "Official Chocolate Malt Beverage Listing",
    file: "Milo.png",
    color: "#16a34a",
    bgBadge: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
  },
  {
    id: "nescafe",
    name: "Nescafé",
    category: "Brand Produk (FMCG)",
    role: "Produk Kopi Kaleng Favorit di Seluruh Titik Mesin",
    file: "Nescafe.png",
    color: "#ea580c",
    bgBadge: "bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30",
  },
  {
    id: "danone",
    name: "Danone",
    category: "Brand Produk (FMCG)",
    role: "Penyediaan Produk Air Minum & Minuman Bernutrisi",
    file: "Danone.png",
    color: "#0284c7",
    bgBadge: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-500/30",
  },
  {
    id: "hydro-coco",
    name: "Hydro Coco",
    category: "Brand Produk (FMCG)",
    role: "Minuman Air Kelapa Asli Penunjang Hidrasi Harian",
    file: "Hydro Coco.png",
    color: "#15803d",
    bgBadge: "bg-green-500/15 text-green-600 dark:text-green-300 border-green-500/30",
  },
  {
    id: "good-day",
    name: "Kopi Good Day",
    category: "Brand Produk (FMCG)",
    role: "Varian Kopi Siap Minum Populer di Lokasi Kampus & Perkantoran",
    file: "Good Day.png",
    color: "#f59e0b",
    bgBadge: "bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30",
  },
  {
    id: "kapal-api",
    name: "Kapal Api",
    category: "Brand Produk (FMCG)",
    role: "Kemitraan Kopi Legendaris Indonesia Siap Minum",
    file: "Kapal Api.png",
    color: "#b45309",
    bgBadge: "bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30",
  },
  {
    id: "kalbe",
    name: "Kalbe Farma",
    category: "Kesehatan & Nutrisi",
    role: "Penyediaan Minuman Isotonik & Produk Suplemen Harian",
    file: "Kalbe.png",
    color: "#16a34a",
    bgBadge: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
  },
  {
    id: "saumata",
    name: "Saumata Apartment",
    category: "Kawasan Hunian & Apartemen",
    role: "Penempatan Mesin Vending di Lobi Hunian Premium",
    file: "Saumata.png",
    color: "#ca8a04",
    bgBadge: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-300 border-yellow-500/30",
  },
];

export default function BrandMarquee() {
  const { t } = useLanguage();
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);

  const activeBrand = partnerBrands.find((b) => b.id === activeBrandId) || null;

  const handleBrandClick = (brandId: string) => {
    setActiveBrandId((prev) => (prev === brandId ? null : brandId));
  };

  const doubledBrands = [...partnerBrands, ...partnerBrands];

  return (
    <div className="w-full">
      {/* HEADER SECTION: Follows Light & Dark mode */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
            {t.brandSection.badge}
          </span>
          <h3 className="mt-1 text-2xl font-extrabold text-ink md:text-3xl">
            {t.brandSection.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-ink-soft">
            {t.brandSection.desc}
          </p>
        </div>
      </div>

      {/* MARQUEE CAROUSEL CONTAINER: Continuous running, adapts to dark & light mode */}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/50 py-6">
        {/* Gradient edge masks: dynamic to surface background in both light & dark mode */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-surface via-surface/80 to-transparent" />

        {/* RUNNING TRACK: Continues running smoothly */}
        <div
          className="flex w-max gap-4 sm:gap-6 animate-marquee"
          style={{
            animationDuration: "42s",
          }}
        >
          {doubledBrands.map((brand, index) => {
            const isSelected = activeBrandId === brand.id;
            return (
              <button
                key={`${brand.id}-${index}`}
                type="button"
                onClick={() => handleBrandClick(brand.id)}
                title={brand.name}
                className={`group relative flex h-20 min-w-[200px] sm:min-w-[220px] items-center justify-center rounded-2xl px-6 border transition-all duration-300 ${
                  isSelected
                    ? "scale-105 bg-white shadow-[0_0_30px_rgba(255,177,33,0.35)] ring-2 ring-orange border-transparent"
                    : "border-line bg-white shadow-xs hover:border-orange hover:shadow-[0_8px_25px_rgba(255,177,33,0.3)] hover:scale-105"
                }`}
              >
                {/* LOGO: Abu-abu saat idle (grayscale), Warnanya nyala saat cursor diarahkan (group-hover:grayscale-0) */}
                <div className="relative flex h-12 w-36 items-center justify-center transition-all duration-300">
                  <Image
                    src={encodeURI(`/assets/brand/${brand.file}`)}
                    alt={brand.name}
                    fill
                    sizes="180px"
                    className={`object-contain transition-all duration-300 ${
                      isSelected
                        ? "filter-none opacity-100 scale-105"
                        : "grayscale opacity-55 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    }`}
                  />
                </div>

                {/* Indicator dot if active */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE BRAND DETAIL BADGE: Fully follows Light & Dark theme */}
      {activeBrand && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-main p-5 text-ink shadow-xl transition-all duration-300 animate-in fade-in">
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-28 items-center justify-center rounded-xl bg-surface border border-line p-2 shadow-xs">
              <Image
                src={encodeURI(`/assets/brand/${activeBrand.file}`)}
                alt={activeBrand.name}
                fill
                sizes="120px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-extrabold text-ink text-base md:text-lg">{activeBrand.name}</h4>
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${activeBrand.bgBadge}`}>
                  {activeBrand.category}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-soft md:text-sm">
                {activeBrand.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.brandSection.activePartner}
            </span>
            <button
              type="button"
              onClick={() => setActiveBrandId(null)}
              className="ml-2 rounded-lg border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink-soft transition hover:bg-main hover:text-ink"
            >
              ✕ {t.brandSection.closeBadge}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
