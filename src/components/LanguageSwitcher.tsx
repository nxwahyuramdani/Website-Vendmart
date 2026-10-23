"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { type Language } from "@/lib/translations";

const languages: Array<{ code: Language; label: string; short: string }> = [
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文 (Chinese)", short: "中文" },
];

function GlobeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "mobile" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === lang) || languages[0];

  if (variant === "mobile") {
    return (
      <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-line bg-surface p-1.5">
        {languages.map((item) => {
          const active = item.code === lang;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLang(item.code)}
              className={`flex flex-1 items-center justify-center rounded-lg py-2 text-xs font-bold transition-all ${
                active
                  ? "bg-orange text-white shadow-sm"
                  : "text-ink-soft hover:text-ink hover:bg-main/50"
              }`}
            >
              <span>{item.short}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        title="Pilih Bahasa / Select Language / 选择语言"
        className="flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink transition hover:border-orange hover:text-orange"
      >
        <GlobeIcon className="h-4 w-4 text-orange" />
        <span className="font-bold tracking-wider">{current.short}</span>
        <svg
          className={`h-3 w-3 text-ink-soft transition-transform duration-200 ${open ? "rotate-180 text-orange" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-xl border border-line bg-main p-1.5 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div role="listbox" className="space-y-1">
            {languages.map((item) => {
              const active = item.code === lang;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(item.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium transition ${
                    active
                      ? "bg-orange/10 font-bold text-orange"
                      : "text-ink hover:bg-surface hover:text-orange"
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
