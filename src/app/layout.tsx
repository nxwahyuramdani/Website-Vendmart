import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: "VendMart – Everything is Vendingable | Vending Machine Indonesia",
  description:
    "VendMart menyediakan vending machine pintar: sewa, kerja sama bagi hasil, kepemilikan, servis, gudang, dan branding special project di seluruh Indonesia.",
  icons: {
    icon: [
      { url: "/assets/Iconvend.png", type: "image/x-icon" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/assets/Iconvend.png",
    apple: "/assets/Iconvend.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/Iconvend.png" type="image/x-icon" />
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
