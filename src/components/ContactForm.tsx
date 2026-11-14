"use client";

import { useState, type FormEvent } from "react";
import { WA_NUMBER } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const field = "w-full border-0 border-b border-line bg-transparent px-0 py-3 outline-none transition placeholder:text-ink-soft/70 focus:border-orange text-ink";

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const [toast, setToast] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nama = d.get("nama") as string;
    const email = d.get("email") as string;
    const minat = d.get("minat") as string;
    const pesan = d.get("pesan") as string;

    let text = "";
    if (lang === "en") {
      text = `Hello VendMart, I am ${nama} (${email}).\nInterested in: ${minat}\nDetails: ${pesan}`;
    } else if (lang === "zh") {
      text = `您好 VendMart，我是 ${nama} (${email})。\n意向合作: ${minat}\n需求详情: ${pesan}`;
    } else {
      text = `Halo VendMart, saya ${nama} (${email}).\nMinat: ${minat}\n${pesan}`;
    }

    setToast(true);
    setTimeout(() => setToast(false), 2500);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <form id="contactForm" onSubmit={submit} className="space-y-4">
        <input
          name="nama"
          aria-label={t.contactSection.namePlaceholder}
          placeholder={t.contactSection.namePlaceholder}
          required
          className={field}
        />
        <input
          name="email"
          type="email"
          aria-label={t.contactSection.emailPlaceholder}
          placeholder={t.contactSection.emailPlaceholder}
          required
          className={field}
        />
        <select
          name="minat"
          aria-label={t.contactSection.selectPlaceholder}
          required
          defaultValue=""
          className={`${field} bg-transparent text-ink dark:bg-[#080d17]`}
        >
          <option value="" disabled className="text-ink-soft bg-main dark:bg-[#080d17]">
            {t.contactSection.selectPlaceholder}
          </option>
          {t.contactSection.selectOptions.map((opt) => (
            <option key={opt} value={opt} className="text-ink bg-main dark:bg-[#0e1726]">
              {opt}
            </option>
          ))}
        </select>
        <textarea
          name="pesan"
          rows={4}
          aria-label={t.contactSection.msgPlaceholder}
          placeholder={t.contactSection.msgPlaceholder}
          required
          className={field}
        />
        <button
          id="submitBtn"
          type="submit"
          className="mt-4 w-full rounded-xl bg-orange px-8 py-3.5 font-bold text-white shadow-md transition hover:bg-orange-dark sm:w-auto cursor-pointer"
        >
          {t.contactSection.submitBtn}
        </button>
      </form>
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink shadow-2xl transition-all duration-300 ${
          toast ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        {t.contactSection.toastMsg}
      </div>
    </>
  );
}
