"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

interface AdvertisingDetail {
  id: "listing" | "branding" | "screen";
  n: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  desc: string;
  featuresTitle: string;
  features: string[];
  benefitsTitle: string;
  benefits: string[];
  ctaText: string;
}

const advertisingData: Record<string, AdvertisingDetail[]> = {
  id: [
    {
      id: "listing",
      n: "01",
      title: "Listing Produk",
      subtitle: "Pajang & Jual Produk Brand Langsung ke Konsumen 24/7",
      image: "/assets/marketing/listing_produk.jpeg",
      imageAlt: "Slot rak display produk di dalam vending machine VendMart",
      desc: "Layanan penempatan SKU produk mitra (makanan, minuman, personal care, gadget, merchandise, dll.) di dalam rak vending machine pintar VendMart. Konsumen dapat membeli produk Anda secara instan dan mandiri di berbagai lokasi strategis tanpa perlu membuka toko fisik.",
      featuresTitle: "Fitur & Spesifikasi Layanan:",
      features: [
        "Slot display tertata rapi dengan pencahayaan LED terang dan kaca anti-embun",
        "Suhu pendingin terkontrol (chiller 4–10°C) menjaga kesegaran produk",
        "Sistem pembayaran otomatis non-tunai (QRIS, e-Wallet, kartu debit/kredit)",
        "Sistem IoT Cloud untuk memantau sisa stok dan transaksi penjualan secara real-time",
      ],
      benefitsTitle: "Keuntungan untuk Brand Anda:",
      benefits: [
        "Membuka cabang titik penjualan baru tanpa beban biaya sewa ruko atau gaji karyawan toko",
        "Beroperasi penuh 24 jam sehari, 7 hari seminggu di lokasi padat pengunjung",
        "Penetrasi pasar instan di lobi perkantoran, universitas, stasiun LRT/MRT, dan apartemen",
        "Laporan penjualan harian terinci dan transparan langsung ke ponsel Anda",
      ],
      ctaText: "Konsultasikan Listing Produk",
    },
    {
      id: "branding",
      n: "02",
      title: "Body Branding",
      subtitle: "Ubah Seluruh Bodi Mesin Menjadi Billboard Eksklusif Brand Anda",
      image: "/assets/marketing/body_branding.jpeg",
      imageAlt: "Vending machine dengan full body branding wrap custom di mal",
      desc: "Seluruh badan luar fisik mesin vending dilapisi stiker vinil laminasi khusus dengan desain visual eksklusif brand Anda. Mesin bertransformasi menjadi media iklan luar ruang (Out-of-Home) yang sangat mencolok dan berdiri tetap di titik pusat keramaian harian.",
      featuresTitle: "Fitur & Spesifikasi Layanan:",
      features: [
        "Full wrapping mencakup sisi depan, samping kanan, samping kiri, hingga kanopi atas mesin",
        "Stiker vinil laminasi tahan gores, tahan cuaca, dan warna cerah anti-pudar",
        "Penempatan mesin di titik lalu lintas pejalan kaki tinggi (high foot-traffic)",
        "Perawatan kebersihan fisik stiker bodi dirawat dan dibersihkan secara berkala oleh tim operasional VendMart",
      ],
      benefitsTitle: "Keuntungan untuk Brand Anda:",
      benefits: [
        "100% Share of Voice: Seluruh tampilan mesin hanya memuat identitas brand Anda tanpa gangguan kompetitor",
        "Dilihat oleh ribuan orang setiap hari dengan durasi tayang permanen (non-stop)",
        "Meningkatkan brand recall dan awareness secara signifikan di lokasi-lokasi prestisius",
        "Biaya per impresi (CPM) jauh lebih efisien dibandingkan sewa billboard konvensional",
      ],
      ctaText: "Konsultasikan Body Branding",
    },
    {
      id: "screen",
      n: "03",
      title: "Multimedia Screen",
      subtitle: "Tayangkan Video & Iklan Interaktif di Layar Digital 22\"–55\"",
      image: "/assets/marketing/Multi_Media.jpeg",
      imageAlt: "Layar multimedia digital 49 inch pada vending machine VendMart",
      desc: "Siarkan materi video promosi (TVC), motion graphic, poster dinamis, dan promo interaktif pada layar LCD multimedia berukuran besar (22 inch hingga 55 inch). Materi iklan terhubung ke server cloud terpusat sehingga dapat diubah dan dijadwalkan dari jarak jauh kapan saja.",
      featuresTitle: "Fitur & Spesifikasi Layanan:",
      features: [
        "Layar LCD Full HD / 4K dengan tingkat kecerahan tinggi yang jelas dilihat dari kejauhan",
        "Mendukung format video dinamis (MP4), animasi gerak, poster slide, dan audio jernih",
        "Sistem CMS Cloud: ganti dan jadwalkan materi kampanye dari jarak jauh tanpa perlu datang ke lokasi",
        "Dapat diintegrasikan dengan QR code promo, voucher diskon, atau kampanye sampling produk",
      ],
      benefitsTitle: "Keuntungan untuk Brand Anda:",
      benefits: [
        "Daya pikat visual bergerak (video/animasi) terbukti menarik perhatian 5x lebih kuat daripada poster statis",
        "Fleksibilitas tinggi mengganti materi kampanye sewaktu-waktu mengikuti momentum promo atau flash sale",
        "Terletak tepat di level pandangan mata (eye-level) konsumen saat berinteraksi di depan mesin",
        "Menyajikan citra brand modern, premium, dan berteknologi tinggi di mata pengunjung",
      ],
      ctaText: "Konsultasikan Iklan Layar",
    },
  ],
  en: [
    {
      id: "listing",
      n: "01",
      title: "Product Listing",
      subtitle: "Display & Sell Your Brand Products Directly to Consumers 24/7",
      image: "/assets/marketing/listing_produk.jpeg",
      imageAlt: "Product shelf slots inside VendMart smart vending machine",
      desc: "Place and sell your brand's SKUs (beverages, snacks, personal care, gadgets, merchandise, etc.) inside VendMart's smart vending machines. Consumers can purchase your products automatically 24/7 across high-traffic locations without the overhead of opening a retail store.",
      featuresTitle: "Service Features & Specifications:",
      features: [
        "Neatly arranged display shelves with bright LED lighting and anti-fog glass",
        "Temperature-controlled chiller (4–10°C) keeping products fresh",
        "Fast cashless automated checkout (QRIS, e-Wallets, debit/credit cards)",
        "IoT Cloud monitoring for real-time stock levels and daily transaction reports",
      ],
      benefitsTitle: "Benefits for Your Brand:",
      benefits: [
        "Open instant retail touchpoints without paying store rent or sales staff salaries",
        "Operates 24/7 non-stop in high-density foot-traffic spots",
        "Instant market reach in office lobbies, universities, transit hubs, and apartments",
        "Transparent, real-time daily sales analytics delivered to your dashboard",
      ],
      ctaText: "Inquire Product Listing",
    },
    {
      id: "branding",
      n: "02",
      title: "Body Branding",
      subtitle: "Transform the Machine Exterior into an Exclusive Brand Billboard",
      image: "/assets/marketing/body_branding.jpeg",
      imageAlt: "Vending machine with full body wrap branding in shopping mall",
      desc: "Transform the entire exterior of the vending machine into an eye-catching billboard with custom high-grade vinyl wrap graphics. The machine stands out as a permanent, high-impact Out-of-Home advertising media in premium daily gathering spots.",
      featuresTitle: "Service Features & Specifications:",
      features: [
        "Full wrap coverage across front, right, left, and upper canopy panels",
        "High-grade scratch-resistant, weather-proof laminated vinyl with vibrant colors",
        "Positioned in prime high-foot-traffic indoor and outdoor locations",
        "Routine cleaning and maintenance handled proactively by VendMart operational crew",
      ],
      benefitsTitle: "Benefits for Your Brand:",
      benefits: [
        "100% Share of Voice: Complete machine exclusivity without any competing ads",
        "Seen by thousands of passersby every single day around the clock",
        "Substantially boosts brand recognition and recall in premium environments",
        "Cost per thousand impressions (CPM) is far more economical than standard billboards",
      ],
      ctaText: "Inquire Body Branding",
    },
    {
      id: "screen",
      n: "03",
      title: "Multimedia Screen",
      subtitle: "Broadcast Dynamic Video & Interactive Campaigns on 22\"–55\" Screens",
      image: "/assets/marketing/Multi_Media.jpeg",
      imageAlt: "49-inch multimedia digital screen on VendMart vending machine",
      desc: "Broadcast engaging dynamic video ads (TVCs), animations, and interactive campaigns on high-definition 22-inch to 55-inch multimedia displays. Centrally managed through cloud CMS so promotional materials can be updated and scheduled remotely at any time.",
      featuresTitle: "Service Features & Specifications:",
      features: [
        "Full HD / 4K high-brightness LCD panels with wide viewing angles",
        "Supports dynamic MP4 video, animated slides, promotional banners, and clear audio",
        "Centralized Cloud CMS: change and schedule ad playlists remotely in real time",
        "Can be integrated with interactive QR promos, discount codes, or live product sampling",
      ],
      benefitsTitle: "Benefits for Your Brand:",
      benefits: [
        "Moving visual content attracts 5x more attention than static printed posters",
        "Instant agility to update creative materials for product launches or seasonal flash sales",
        "Positioned directly at eye level as consumers approach and make transactions",
        "Elevates modern, tech-forward brand perception among consumers",
      ],
      ctaText: "Inquire Multimedia Ads",
    },
  ],
  zh: [
    {
      id: "listing",
      n: "01",
      title: "Listing Produk (商品上架售卖)",
      subtitle: "将品牌产品直接陈列并销售给广大消费者 (24/7无人零售)",
      image: "/assets/marketing/listing_produk.jpeg",
      imageAlt: "VendMart 智能售货机内部商品陈列展示",
      desc: "将您的品牌商品（饮品、零食、日用品、美妆、数码小配件、周边文创等）直接上架至 VendMart 智能售货机内。消费者可在高人流位置随时自主购买，无需开设实体店铺及雇佣店员。",
      featuresTitle: "服务功能与特点：",
      features: [
        "商品货道整齐有序，配有高亮LED照明与防雾玻璃门",
        "智能温控冷藏系统（4–10°C），确保食品与饮料品质新鲜",
        "全自动无现金扫码支付系统（QRIS、电子钱包、银行卡）",
        "云端物联网系统，实时监控库存余量与每日销售数据",
      ],
      benefitsTitle: "对您品牌的优势：",
      benefits: [
        "零门面租金与人工成本，迅速铺设线下零售网点",
        "全天候24小时营业，覆盖写字楼、高校、地铁站及高档公寓",
        "直接触达每日数千名高净值年轻消费群体",
        "手机端可随时查看透明详细的实时销售报表",
      ],
      ctaText: "咨询商品上架合作",
    },
    {
      id: "branding",
      n: "02",
      title: "Body Branding (全机身定制广告)",
      subtitle: "将整台售货机打造为独家专属的高辨识度户外广告牌",
      image: "/assets/marketing/body_branding.jpeg",
      imageAlt: "商场内全机身贴膜定制广告的 VendMart 售货机",
      desc: "利用高品质覆膜车贴材质，将售货机的正面、两侧及顶部全面包裹定制品牌专属视觉设计。售货机瞬间化身为固定设立在人潮汹涌核心区域的3D立体广告牌。",
      featuresTitle: "服务功能与特点：",
      features: [
        "全机身覆膜覆盖正面、左右双侧及机顶全视角",
        "防刮、防水、抗紫外线高清覆膜贴纸，色彩鲜艳夺目",
        "位于商场中庭、地铁走廊、办公楼大堂等人流必经之地",
        "VendMart 运营团队定期巡检与清洁维护机身外观",
      ],
      benefitsTitle: "对您品牌的优势：",
      benefits: [
        "100% 独家独占：整台设备仅展示您的品牌，无任何竞品干扰",
        "常年365天全天候展示，每日触达数以万计的人流",
        "极大提高品牌在目标受众心中的认知度与记忆深度",
        "千人展示成本 (CPM) 远低于传统大型户外广告牌",
      ],
      ctaText: "咨询机身广告合作",
    },
    {
      id: "screen",
      n: "03",
      title: "Multimedia Screen (多媒体广告大屏)",
      subtitle: "在22–55英寸高清数字大屏上播放动态视频与动态促销海报",
      image: "/assets/marketing/Multi_Media.jpeg",
      imageAlt: "VendMart 智能售货机 49 英寸多媒体高清数字大屏",
      desc: "在售货机搭载的22至55英寸超大高清液晶屏上播放品牌TVC广告片、动态海报与交互促销信息。支持云端远程中央联播控制，随时在线更换广告物料排期。",
      featuresTitle: "服务功能与特点：",
      features: [
        "全高清/4K工业级高亮液晶屏，强光环境下依然清晰可见",
        "全面支持MP4视频、动态动画、循环海报及清脆音频输出",
        "云端远程内容管理系统 (CMS)，足不出户随时更新播放列表",
        "可结合动态二维码领券、扫码互动或新品现场派发体验",
      ],
      benefitsTitle: "对您品牌的优势：",
      benefits: [
        "动态声画内容比传统静态海报高出5倍以上的视觉吸引力",
        "极具灵活性，可随时根据营销节点或促销活动更新播放内容",
        "屏幕高度精准位于消费者平视视线（Eye-Level）黄金位置",
        "打造科技感、现代感极强的品牌高端形象",
      ],
      ctaText: "咨询屏幕广告投放",
    },
  ],
};

function AdvertisingModal({
  item,
  onClose,
  closeLabel = "Tutup",
}: {
  item: AdvertisingDetail;
  onClose: () => void;
  closeLabel?: string;
}) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [triedExtensions, setTriedExtensions] = useState<string[]>([]);

  useEffect(() => {
    setImgSrc(item.image);
    setTriedExtensions([item.image]);
  }, [item.image]);

  const handleImageError = () => {
    const base = item.image.replace(/\.(jpeg|jpg|png|webp)$/i, "");
    const candidates = [
      `${base}.jpeg`,
      `${base}.jpg`,
      `${base}.png`,
      `${base}.webp`,
      base.toLowerCase().includes("multi_media") ? "/assets/marketing/multi_media.jpeg" : "",
      base.toLowerCase().includes("multi_media") ? "/assets/marketing/multi_media.jpg" : "",
      base.toLowerCase().includes("multi_media") ? "/assets/marketing/Multi_Media.jpeg" : "",
      base.toLowerCase().includes("multi_media") ? "/assets/marketing/Multi_Media.jpg" : "",
    ].filter(Boolean);

    const next = candidates.find((c) => !triedExtensions.includes(c));
    if (next) {
      setTriedExtensions((prev) => [...prev, next]);
      setImgSrc(next);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-4 md:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${item.id}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-t-3xl border border-line bg-main shadow-2xl sm:rounded-3xl lg:grid-cols-12"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-2xl font-light text-ink shadow-md backdrop-blur-sm transition-all hover:bg-orange hover:text-white cursor-pointer"
        >
          ×
        </button>

        {/* LARGE IMAGE SHOWCASE: High-clarity 50% modal width on desktop */}
        <div className="relative flex min-h-[320px] sm:min-h-[440px] lg:min-h-[580px] w-full items-center justify-center bg-surface/90 border-b lg:border-b-0 lg:border-r border-line p-5 sm:p-7 lg:col-span-6">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-main/90 border border-line px-3 py-1 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            <span className="text-[11px] font-bold text-ink">Foto Asli Unit</span>
          </div>

          <div className="relative h-[290px] sm:h-[390px] lg:h-[490px] w-full">
            <Image
              src={`${imgSrc}?v=${item.n}`}
              alt={item.imageAlt}
              fill
              unoptimized
              sizes="(min-width:1024px) 520px, 100vw"
              className="object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              priority
              onError={handleImageError}
            />
          </div>
        </div>

        {/* NEAT & PROPORTIONATE CONTENT COLUMN */}
        <div className="flex flex-col justify-between overflow-y-auto p-6 sm:p-8 lg:p-9 lg:col-span-6 max-h-[92vh]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange">
                Format {item.n}
              </span>
            </div>

            <h3
              id={`modal-title-${item.id}`}
              className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink"
            >
              {item.title}
            </h3>

            <p className="mt-1 text-xs sm:text-sm font-semibold text-orange leading-snug">
              {item.subtitle}
            </p>

            <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-ink-soft border-b border-line pb-4">
              {item.desc}
            </p>

            {/* FEATURES */}
            <div className="mt-4">
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-ink mb-2">
                {item.featuresTitle}
              </h4>
              <div className="grid gap-1.5">
                {item.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-surface/60 px-3 py-2 text-xs text-ink leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-orange/20 text-[10px] font-bold text-orange">
                      ✓
                    </span>
                    <span className="text-ink">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mt-4">
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-ink mb-2">
                {item.benefitsTitle}
              </h4>
              <div className="grid gap-1.5">
                {item.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-surface/60 px-3 py-2 text-xs text-ink leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">
                      ★
                    </span>
                    <span className="text-ink">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="mt-6 pt-4 border-t border-line flex flex-col sm:flex-row gap-2.5">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 rounded-xl bg-orange px-5 py-3 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-orange-dark hover:shadow-lg"
            >
              {item.ctaText} →
            </a>
            <button
              onClick={onClose}
              className="rounded-xl border border-line bg-surface px-5 py-3 text-center text-sm font-semibold text-ink transition hover:border-orange hover:text-orange cursor-pointer"
            >
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdvertisingCards() {
  const { lang } = useLanguage();
  const [activeItem, setActiveItem] = useState<AdvertisingDetail | null>(null);

  const currentList = advertisingData[lang] || advertisingData.id;
  const closeText = lang === "en" ? "Close" : lang === "zh" ? "关闭" : "Tutup";
  const moreText =
    lang === "en"
      ? "Learn more"
      : lang === "zh"
      ? "查看详情"
      : "Selengkapnya";

  return (
    <>
      <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
        {currentList.map((item, i) => (
          <Reveal key={item.n} delay={i * 90}>
            <article
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveItem(item);
                }
              }}
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-xl cursor-pointer"
              aria-label={`${item.title} - ${moreText}`}
            >
              {/* TOP HEADER */}
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-orange/30 transition-colors group-hover:text-orange">
                  {item.n}
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-ink transition-colors group-hover:text-orange">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* BOTTOM SELENGKAPNYA BUTTON */}
              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-sm font-bold text-orange transition-all group-hover:translate-x-1">
                <span>{moreText}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange/15 text-orange transition group-hover:bg-orange group-hover:text-white">
                  →
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* POPUP MODAL */}
      {activeItem && (
        <AdvertisingModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          closeLabel={closeText}
        />
      )}
    </>
  );
}
