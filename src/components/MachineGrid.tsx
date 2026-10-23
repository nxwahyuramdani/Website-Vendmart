"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { machines, type Machine } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function SpecModal({
  m,
  onClose,
  transData,
  suitableForText,
  modalCtaText,
  closeText,
}: {
  m: Machine;
  onClose: () => void;
  transData?: {
    name: string;
    tag: string;
    desc: string;
    best: string;
    specs: [string, string][];
  };
  suitableForText: string;
  modalCtaText: string;
  closeText: string;
}) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", key);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const name = transData?.name || m.name;
  const tag = transData?.tag || m.tag;
  const desc = transData?.desc || m.desc;
  const best = transData?.best || m.best;
  const specs = transData?.specs || m.specs;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Spesifikasi ${name}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-line bg-main shadow-2xl sm:rounded-3xl sm:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label={closeText}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-2xl text-ink shadow transition hover:bg-orange hover:text-white"
        >
          ×
        </button>

        <div className="relative aspect-[4/5] bg-surface sm:aspect-auto sm:min-h-[500px]">
          <Image
            src={m.image}
            alt={name}
            fill
            sizes="(min-width:640px) 450px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8 md:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">{tag}</span>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>

          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-2 py-3">
                <dt className="text-ink-soft">{k}</dt>
                <dd className="font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm text-ink">
            <span className="font-semibold text-orange">{suitableForText}</span> {best}
          </p>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-8 inline-block rounded-xl bg-orange px-8 py-3.5 text-center font-bold text-white shadow-md transition hover:bg-orange-dark"
          >
            {modalCtaText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MachineGrid() {
  const { t } = useLanguage();
  const [f, setF] = useState<string>("all");
  const [active, setActive] = useState<Machine | null>(null);

  const tabs = [
    { k: "all", l: t.machinesSection.tabs.all },
    { k: "standard", l: t.machinesSection.tabs.standard },
    { k: "special", l: t.machinesSection.tabs.special },
  ] as const;

  const list = machines.filter((m) => f === "all" || m.type === f);

  return (
    <div>
      {/* FILTER TABS */}
      <div className="mb-8 flex gap-6 overflow-x-auto border-b border-line pb-px scrollbar-none sm:gap-8 sm:mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.k}
            type="button"
            onClick={() => setF(tab.k)}
            className={`whitespace-nowrap border-b-2 pb-3 text-sm font-semibold transition sm:text-[15px] ${
              f === tab.k ? "border-orange text-orange" : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {tab.l}
          </button>
        ))}
      </div>

      {/* MACHINE CARDS GRID */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => {
          const trans = t.machinesSection.machines[m.slug];
          const name = trans?.name || m.name;
          const tag = trans?.tag || m.tag;
          const desc = trans?.desc || m.desc;

          return (
            <li key={m.slug}>
              <button
                type="button"
                onClick={() => setActive(m)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-main text-left transition-all hover:border-orange hover:shadow-[0_12px_30px_rgba(255,177,33,0.2)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={m.image}
                    alt={name}
                    fill
                    sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-main/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange shadow-sm backdrop-blur-sm">
                    {tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-ink sm:text-xl">{name}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-soft leading-relaxed">{desc}</p>
                  <span className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold text-ink group-hover:text-orange">
                    {t.machinesSection.viewSpec} <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* SPEC MODAL */}
      {active && (
        <SpecModal
          m={active}
          transData={t.machinesSection.machines[active.slug]}
          suitableForText={t.machinesSection.suitableFor}
          modalCtaText={t.machinesSection.modalCta}
          closeText={t.machinesSection.close}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
