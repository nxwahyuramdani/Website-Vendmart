"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type Language, type Translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  t: translations.id,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("vendmart-lang") as Language | null;
    if (saved && (saved === "id" || saved === "en" || saved === "zh")) {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "id";
    }
    setMounted(true);
  }, []);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    localStorage.setItem("vendmart-lang", nextLang);
    document.documentElement.lang = nextLang;
  };

  const t = translations[lang] || translations.id;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
