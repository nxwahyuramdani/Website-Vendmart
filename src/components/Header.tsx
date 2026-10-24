"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle"; 
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function Logo({ onOrange = false, className }: { onOrange?: boolean; className?: string }) {
  return (
    <a
      href="#home"
      aria-label="VendMart"
      className="inline-flex items-center transition-opacity hover:opacity-85"
    >
      <Image
        src="/assets/Vendmart Logo.png"
        alt="VendMart"
        width={260}
        height={65}
        priority
        className={className || "h-12 sm:h-14 md:h-[58px] w-auto object-contain"}
      />
    </a>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const f = () => setShadow(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const navItems = [
    { href: "#services", label: t.nav.services },
    { href: "#machines", label: t.nav.machines },
    { href: "#advertising", label: t.nav.advertising },
    { href: "#how", label: t.nav.how },
    { href: "#ownership", label: t.nav.ownership },
    { href: "#project", label: t.nav.project },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-main/90 backdrop-blur-md transition-all duration-300 ${
        shadow ? "border-b border-line shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-[76px] sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-8 text-[14px] font-semibold">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-ink-soft transition-colors hover:text-orange">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT ACTIONS: LANGUAGE SWITCHER, THEME TOGGLE & CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher />
          <ThemeToggle />

          <a
            id="navCta"
            href="#contact"
            className="hidden rounded-xl bg-orange px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_4px_14px_rgba(255,177,33,0.35)] transition-all hover:bg-orange-dark hover:shadow-[0_6px_20px_rgba(255,177,33,0.5)] lg:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            id="burger"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-line bg-surface text-ink lg:hidden"
          >
            <span className={`h-0.5 w-5 bg-ink transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {open && (
        <div className="border-t border-line bg-main px-6 pb-6 pt-3 shadow-2xl lg:hidden">
          <div className="mb-3 border-b border-line pb-3">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-soft">
              {t.nav.langSelect}
            </span>
            <LanguageSwitcher variant="mobile" />
          </div>

          <ul>
            {navItems.map((n) => (
              <li key={n.href} className="border-b border-line last:border-0">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold text-ink hover:text-orange"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-orange py-3 text-sm font-bold text-white shadow-md hover:bg-orange-dark"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
