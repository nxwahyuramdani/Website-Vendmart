"use client";

import Image from "next/image";
import Header, { Logo } from "@/components/Header";
import { Reveal, Counter } from "@/components/Reveal";
import MachineGrid from "@/components/MachineGrid";
import ContactForm from "@/components/ContactForm";
import BrandMarquee from "@/components/BrandMarquee";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntroScreen from "@/components/IntroScreen";
import { useLanguage } from "@/context/LanguageContext";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";
const btnP = "inline-block w-full sm:w-auto text-center rounded-xl bg-orange px-8 py-4 font-bold text-white transition-all shadow-[0_4px_14px_rgba(255,177,33,0.35)] hover:bg-orange-dark hover:shadow-[0_8px_20px_rgba(255,177,33,0.5)]";
const btnO = "inline-block w-full sm:w-auto text-center rounded-xl border border-line bg-surface px-8 py-4 font-bold transition hover:border-orange hover:text-orange text-ink";

function Label({ n, children, light = false }: { n: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] ${light ? "text-white" : "text-orange"}`}>
      <span>{n}</span>
      <span className={`h-px w-8 sm:w-12 ${light ? "bg-white/60" : "bg-orange"}`} />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <IntroScreen />
      <Header />
      <main>
        {/* HERO SECTION */}
        <section id="home" className="pt-[76px] sm:pt-20">
          <div className={`${wrap} grid min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-80px)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-12`}>
            <Reveal className="lg:col-span-6">
              <p className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                {t.hero.badge}
              </p>
              <h1 className="text-[clamp(2.2rem,5.5vw,5.6rem)] font-extrabold leading-[1.02] tracking-tight text-ink">
                {t.hero.title1} <span className="text-orange">{t.hero.title2}</span>
              </h1>
              <p className="mt-6 sm:mt-8 max-w-md text-base sm:text-lg leading-relaxed text-ink-soft">
                {t.hero.desc}
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <a id="heroCta1" href="#machines" className={btnP}>
                  {t.hero.ctaMachines}
                </a>
                <a id="heroCta2" href="#services" className={btnO}>
                  {t.hero.ctaServices}
                </a>
              </div>
            </Reveal>

            {/* HERO IMAGE: Border & orange box removed as requested */}
            <Reveal delay={120} className="lg:col-span-6">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-2xl shadow-2xl lg:ml-auto">
                <Image
                  src="/assets/Mesin Vendmart.jpeg"
                  alt={t.hero.imgAlt}
                  fill
                  priority
                  sizes="(min-width:1024px) 520px, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>

          {/* STATS BAR */}
          <div className="border-y border-line bg-surface/50">
            <div className={`${wrap} grid grid-cols-3 divide-x divide-line`}>
              <div className="px-2 py-6 text-center sm:text-left sm:px-6 md:px-10">
                <div className="text-2xl font-extrabold text-orange sm:text-4xl md:text-5xl">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="mt-1 text-xs sm:text-sm text-ink-soft">{t.stats.activeMachines}</div>
              </div>

              <div className="px-2 py-6 text-center sm:text-left sm:px-6 md:px-10">
                <div className="text-2xl font-extrabold text-orange sm:text-4xl md:text-5xl">
                  <Counter to={120} suffix="+" />
                </div>
                <div className="mt-1 text-xs sm:text-sm text-ink-soft">{t.stats.partnerLocations}</div>
              </div>

              <div className="px-2 py-6 text-center sm:text-left sm:px-6 md:px-10">
                <div className="text-2xl font-extrabold text-orange sm:text-4xl md:text-5xl">
                  <Counter to={24} suffix={t.stats.operatingSuffix} />
                </div>
                <div className="mt-1 text-xs sm:text-sm text-ink-soft">{t.stats.operatingHours}</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 sm:py-28 border-t border-line">
          <div className={wrap}>
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <Label n="01">{t.servicesSection.badge}</Label>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                  {t.servicesSection.title}
                </h2>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base text-ink-soft leading-relaxed">
                  {t.servicesSection.desc}
                </p>
              </Reveal>

              <div className="lg:col-span-8">
                {t.servicesSection.items.map((s, i) => (
                  <Reveal key={s.title}>
                    <article className="group grid gap-2 sm:gap-3 border-t border-line py-6 sm:py-8 transition-colors last:border-b hover:bg-surface md:grid-cols-[60px_1fr_1.2fr] md:px-4">
                      <span className="text-sm font-bold text-orange">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-ink">{s.title}</h3>
                      <p className="text-sm sm:text-base text-ink-soft leading-relaxed">{s.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MACHINES */}
        <section id="machines" className="bg-surface py-20 sm:py-28 border-t border-line">
          <div className={wrap}>
            <Reveal className="mb-10 sm:mb-14 max-w-2xl">
              <Label n="02">{t.machinesSection.badge}</Label>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.machinesSection.title}
              </h2>
            </Reveal>
            <Reveal>
              <MachineGrid />
            </Reveal>
          </div>
        </section>

        {/* ADVERTISING */}
        <section id="advertising" className="py-20 sm:py-28 border-t border-line">
          <div className={wrap}>
            <div className="grid items-end gap-8 sm:gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <Label n="03">{t.advertisingSection.badge}</Label>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                  {t.advertisingSection.title}
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={100}>
                <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                  {t.advertisingSection.desc}
                </p>
              </Reveal>
            </div>

            <Reveal className="relative mt-10 sm:mt-14 aspect-[16/9] w-full overflow-hidden rounded-2xl md:aspect-[21/9]">
              <Image
                src="/assets/advertising.jpg"
                alt={t.advertisingSection.imgAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 bg-orange text-white">
                <div className="px-3 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5">
                  <div className="text-base font-extrabold sm:text-2xl md:text-3xl">{t.advertisingSection.stat1}</div>
                  <div className="text-[10px] sm:text-xs text-white/90 md:text-sm">{t.advertisingSection.stat1Label}</div>
                </div>
                <div className="px-3 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5">
                  <div className="text-base font-extrabold sm:text-2xl md:text-3xl">{t.advertisingSection.stat2}</div>
                  <div className="text-[10px] sm:text-xs text-white/90 md:text-sm">{t.advertisingSection.stat2Label}</div>
                </div>
                <div className="px-3 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5">
                  <div className="text-base font-extrabold sm:text-2xl md:text-3xl">{t.advertisingSection.stat3}</div>
                  <div className="text-[10px] sm:text-xs text-white/90 md:text-sm">{t.advertisingSection.stat3Label}</div>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
              {t.advertisingSection.cards.map((o, i) => (
                <Reveal key={o.n} delay={i * 90}>
                  <article className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-8 transition-all hover:border-orange hover:shadow-lg">
                    <span className="text-4xl sm:text-5xl font-extrabold text-orange/30">{o.n}</span>
                    <h3 className="mt-4 text-xl sm:text-2xl font-bold text-ink">{o.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">{o.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 rounded-2xl bg-surface p-6 sm:p-8 md:p-14 lg:grid-cols-12 border border-line">
              <div className="lg:col-span-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-ink">
                  {t.advertisingSection.locationsTitle}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed">
                  {t.advertisingSection.locationsDesc}
                </p>
                <div className="mt-6 sm:mt-8">
                  <a href="#contact" className={btnP}>
                    {t.advertisingSection.locationsCta}
                  </a>
                </div>
                <p className="mt-4 text-xs text-ink-soft">
                  {t.advertisingSection.locationsDisclaimer}
                </p>
              </div>
              <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
                {t.advertisingSection.locationsList.map((l) => (
                  <li key={l} className="flex items-center gap-3 sm:gap-4 border-b border-line py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-ink">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-20 sm:py-28 border-t border-line">
          <div className={wrap}>
            <Reveal className="mb-12 sm:mb-16 max-w-2xl">
              <Label n="04">{t.howSection.badge}</Label>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.howSection.title}
              </h2>
            </Reveal>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.howSection.steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 90}>
                  <div className="border-t-2 border-orange pt-6">
                    <div className="text-5xl sm:text-6xl font-extrabold text-orange/30">{i + 1}</div>
                    <h3 className="mt-4 text-lg sm:text-xl font-bold text-ink">{s.t}</h3>
                    <p className="mt-2 text-sm sm:text-base text-ink-soft leading-relaxed">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OWNERSHIP */}
        <section id="ownership" className="border-t border-line">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[300px] sm:min-h-[420px]">
              <Image
                src="/assets/lobby.jpg"
                alt={t.ownershipSection.imgAlt}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <Reveal className="flex flex-col justify-center px-6 py-14 sm:py-20 lg:px-20 bg-surface">
              <Label n="05">{t.ownershipSection.badge}</Label>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.ownershipSection.title}
              </h2>
              <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base text-ink-soft leading-relaxed">
                {t.ownershipSection.desc}
              </p>
              <ul className="my-6 sm:my-8 max-w-md divide-y divide-line border-y border-line">
                {t.ownershipSection.points.map((pt) => (
                  <li key={pt} className="flex gap-3 sm:gap-4 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-ink">
                    <span className="text-orange font-bold">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a id="ownCta" href="#contact" className={btnP}>
                  {t.ownershipSection.cta}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SPECIAL PROJECT */}
        <section id="project" className="bg-orange py-20 sm:py-28 text-white">
          <Reveal className={`${wrap} grid items-end gap-8 sm:gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-8">
              <Label n="06" light>{t.projectSection.badge}</Label>
              <h2 className="text-[clamp(2rem,5vw,4.4rem)] font-extrabold leading-[1.05] tracking-tight">
                {t.projectSection.title}
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="mb-6 sm:mb-8 text-base sm:text-lg text-white/95 leading-relaxed">
                {t.projectSection.desc}
              </p>
              <a
                id="projCta"
                href="#contact"
                className="inline-block w-full sm:w-auto text-center rounded-xl bg-white px-8 py-4 font-bold text-orange shadow-lg transition hover:bg-orange-soft"
              >
                {t.projectSection.cta}
              </a>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 sm:py-28 border-t border-line">
          <div className={`${wrap} grid gap-10 sm:gap-12 lg:grid-cols-12`}>
            <Reveal className="lg:col-span-4">
              <Label n="07">{t.faqSection.badge}</Label>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.faqSection.title}
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-8">
              {t.faqSection.faqs.map((f) => (
                <details key={f.q} className="group border-t border-line py-5 sm:py-6 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base sm:text-lg font-bold text-ink">
                    <span>{f.q}</span>
                    <span className="ml-4 text-xl sm:text-2xl font-light text-orange transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-ink-soft leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-surface py-20 sm:py-28 border-t border-line">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <Reveal>
              <Label n="08">{t.contactSection.badge}</Label>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                {t.contactSection.title}
              </h2>
              <dl className="mt-8 sm:mt-10 divide-y divide-line border-y border-line text-sm sm:text-base">
                {[
                  [t.contactSection.marketing, "0852-1223-8881"],
                  [t.contactSection.office, "021-420-2556"],
                  [t.contactSection.email, "marketing@vendmart.id"],
                  [t.contactSection.address, t.contactSection.addressVal],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[100px_1fr] sm:grid-cols-[110px_1fr] py-3.5 sm:py-4">
                    <dt className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange">{k}</dt>
                    <dd className="text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 h-56 sm:h-64 overflow-hidden rounded-2xl border border-line">
                <iframe
                  title={t.contactSection.mapTitle}
                  loading="lazy"
                  className="h-full w-full grayscale dark:invert-[0.9]"
                  src="https://www.google.com/maps?q=Jl.+Garuda+No.32+Kemayoran+Jakarta&output=embed"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl border border-line bg-main p-6 sm:p-8 md:p-12 shadow-sm">
              <h3 className="mb-6 text-xl sm:text-2xl font-bold text-ink">
                {t.contactSection.formTitle}
              </h3>
              <ContactForm />
            </Reveal>
          </div>
        </section>
        {/* BRAND & MITRA SECTION: Follows Dark Mode & Light Mode */}
        <section id="partners" className="bg-surface py-14 sm:py-20 border-t border-line transition-colors duration-300">
          <div className={wrap}>
            <Reveal>
              <BrandMarquee />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="text-white">
        {/* FOOTER INFO */}
        <div className="bg-orange">
          <div className={`${wrap} py-14 sm:py-16`}>
            <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="sm:col-span-2">
                <Logo onOrange />
                <p className="mt-5 max-w-sm text-sm sm:text-base text-white/90 leading-relaxed">
                  {t.footer.tagline}
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/75">
                  {t.footer.servicesTitle}
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-white/90">
                  {t.footer.servicesList.map((srv) => (
                    <li key={srv}>{srv}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/75">
                  {t.footer.contactTitle}
                </h4>
                <p className="space-y-2 text-sm sm:text-base text-white/90">
                  0852-1223-8881<br />
                  marketing@vendmart.id<br />
                  Kemayoran, Jakarta
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-14 border-t border-white/25 pt-6 text-xs sm:text-sm text-white/85">
              © {new Date().getFullYear()} {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP OPERASIONAL FLOATING BUTTON (ICON ONLY DIRECT TO OPS) */}
      <WhatsAppButton />
    </>
  );
}
