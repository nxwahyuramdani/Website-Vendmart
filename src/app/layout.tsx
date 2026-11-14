import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#ffb121",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vendmart.id"),
  title: "Vendmart - Smart Vending Solutions Indonesia",
  description:
    "VendMart menyediakan vending machine pintar: sewa, kerja sama bagi hasil, kepemilikan, servis, gudang, dan branding special project di seluruh Indonesia.",
  keywords: [
    "vending machine indonesia",
    "sewa vending machine",
    "smart vending machine",
    "kerja sama vending machine",
    "jual vending machine",
    "vending machine jakarta",
    "vendmart",
    "smart vending solutions indonesia",
  ],
  authors: [{ name: "VendMart Indonesia" }],
  alternates: {
    canonical: "https://vendmart.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vendmart - Smart Vending Solutions Indonesia",
    description:
      "Solusi vending machine modern: sewa, bagi hasil, kepemilikan, servis, dan special branding di seluruh Indonesia.",
    url: "https://vendmart.id",
    siteName: "VendMart Indonesia",
    images: [
      {
        url: "/assets/Mesin Vendmart.jpeg",
        width: 1200,
        height: 630,
        alt: "VendMart Smart Vending Machine",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendmart - Smart Vending Solutions Indonesia",
    description:
      "Solusi vending machine modern: sewa, bagi hasil, kepemilikan, servis, dan special branding di seluruh Indonesia.",
    images: ["/assets/Mesin Vendmart.jpeg"],
  },
  icons: {
    icon: [
      { url: "/assets/Iconvend.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/assets/Iconvend.png",
    apple: "/assets/Iconvend.png",
  },
  verification: {
    google: "DdPwjo4VFxqhYt-TmZxzoOWrToMePjmyyD8iRcdRGoQ",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vendmart.id/#organization",
      name: "VendMart Indonesia",
      url: "https://vendmart.id",
      logo: "https://vendmart.id/assets/Logo%20Vendmart%201.png",
      description: "Smart Vending Solutions Indonesia - Solusi vending machine modern terpercaya.",
      telephone: "+62-811-1907-2300",
      email: "ops@vendmart.id",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Komplek Perkantoran, Gading Bukit Indah, Jl. Raya Gading Kirana No.11 Blok TA 10, RT.18/RW.8, Kelapa Gading Barat",
        addressLocality: "Kelapa Gading, Jakarta Utara",
        postalCode: "14240",
        addressCountry: "ID",
      },
      sameAs: [
        "https://www.instagram.com/vendmart.id",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+62-811-1907-2300",
          contactType: "marketing & sales",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+62-21-29450966",
          contactType: "office",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://vendmart.id/#website",
      url: "https://vendmart.id",
      name: "Vendmart - Smart Vending Solutions Indonesia",
      description:
        "Solusi vending machine modern: sewa, bagi hasil, kepemilikan, servis, dan special branding di seluruh Indonesia.",
      publisher: {
        "@id": "https://vendmart.id/#organization",
      },
      inLanguage: ["id-ID", "en-US", "zh-CN"],
    },
    {
      "@type": "ItemList",
      name: "Sitelinks",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Home",
          description: "Vendmart Indonesia Smart Vending Solutions",
          url: "https://vendmart.id/#home",
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Services",
          description: "Sewa, bagi hasil, servis, dan manajemen vending machine",
          url: "https://vendmart.id/#services",
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Machines",
          description: "Katalog smart vending machine dengan pendingin dan layar interaktif",
          url: "https://vendmart.id/#machines",
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Contacts",
          description: "Hubungi tim Vendmart untuk konsultasi dan kerjasama vending machine",
          url: "https://vendmart.id/#contact",
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Vendmart Cloud",
          description: "Platform IoT smart monitoring inventaris dan transaksi vending machine real-time",
          url: "https://cloud.vendmart.id",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/Iconvend.png" type="image/x-icon" />
        <meta name="google-site-verification" content="DdPwjo4VFxqhYt-TmZxzoOWrToMePjmyyD8iRcdRGoQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vendmart-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');var l=localStorage.getItem('vendmart-lang');if(l)document.documentElement.lang=l;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
