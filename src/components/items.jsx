"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ITEMS as ITEMS_EN, CONTACT } from "@/constants";
import { ITEMS as ITEMS_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

const BADGES_EN = ["100% Pure", "Premium", "No Chemicals"];
const BADGES_ML = ["100% ശുദ്ധം", "പ്രീമിയം", "രാസവസ്തുക്കളില്ല"];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden>
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function Items() {
  const { lang } = useLang();
  const [selected, setSelected] = useState(null);

  const items = lang === "en" ? ITEMS_EN : ITEMS_ML;
  const BADGES = lang === "en" ? BADGES_EN : BADGES_ML;

  const copy = lang === "en"
    ? {
        eyebrow: "From our store in Alappuzha",
        heading: "Our Spicy Box — Organic Spices & Millets",
        desc: "Fresh, aromatic and 100% organic spices, millets, dry fruits and more from Alappuzha (Alleppey), Kerala — no chemicals, no artificials, no pesticides. Shipped fresh all over India.",
        boxLabel: "Spicy Box",
        order: "Order now",
        whatsapp: "WhatsApp",
        email: "Email",
        call: "Call",
      }
    : {
        eyebrow: "ഞങ്ങളുടെ ആലപ്പുഴ സ്റ്റോറിൽ നിന്ന്",
        heading: "ഞങ്ങളുടെ സ്പൈസി ബോക്സ് — ഓർഗാനിക് സുഗന്ധവ്യഞ്ജനങ്ങളും മില്ലറ്റുകളും",
        desc: "ആലപ്പുഴയിൽ നിന്നുള്ള പുതിയതും സുഗന്ധമുള്ളതും 100% ഓർഗാനിക് സുഗന്ധവ്യഞ്ജനങ്ങളും മില്ലറ്റുകളും ഡ്രൈ ഫ്രൂട്ട്സും — രാസവസ്തുക്കളില്ല. ഇന്ത്യയിലെങ്ങും പുതുതായി എത്തിക്കുന്നു.",
        boxLabel: "സ്പൈസി ബോക്സ്",
        order: "ഓർഡർ ചെയ്യൂ",
        whatsapp: "വാട്സ്ആപ്പ്",
        email: "ഇമെയിൽ",
        call: "കോൾ",
      };

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  const contactOptions = [
    {
      key: "whatsapp",
      label: copy.whatsapp,
      href: `https://wa.me/${CONTACT.whatsapp}`,
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      key: "mail",
      label: copy.email,
      href: `mailto:${CONTACT.email}`,
      Icon: MailIcon,
      external: false,
    },
    {
      key: "phone",
      label: copy.call,
      href: `tel:${CONTACT.phone}`,
      Icon: PhoneIcon,
      external: false,
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-end">
          <div className="text-center lg:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-600">
              {copy.eyebrow}
            </p>
            <h2
              className={`mt-3 font-extrabold tracking-tight text-zinc-900 ${
                lang === "ml" ? "text-2xl sm:text-4xl" : "text-3xl sm:text-5xl"
              }`}
            >
              {copy.heading}
            </h2>
          </div>
          <p className="text-center text-base leading-relaxed text-zinc-600 sm:text-lg lg:text-left">
            {copy.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-12">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelected(item)}
              className="group flex cursor-pointer flex-col items-center text-center"
            >
              <div
                className="float-item relative w-full"
                style={{ animationDelay: `${(i % 3) * 0.25}s` }}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} — ${item.highlight}, ${lang === "en" ? "100% organic spice from Spicy Keralam, Alappuzha, Kerala" : "100% ഓർഗാനിക് സുഗന്ധദ്രവ്യം, സ്പൈസി കേരളം, ആലപ്പുഴ, കേരളം"}`}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-col gap-3 p-3 sm:p-4">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-extrabold tracking-tight text-zinc-900 sm:text-base">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium text-zinc-500 sm:text-xs">
                    {item.nameML}
                  </p>
                  <p className="mt-1 flex items-center justify-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 sm:text-[11px]">
                    <span className="inline-block h-1 w-1 rounded-full bg-emerald-500" aria-hidden />
                    {item.highlight}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {BADGES.map((badge, j) => (
                    <span
                      key={badge}
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-bold sm:text-[11px] ${
                        j % 2 === 0
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"
                          : "border-orange-700/30 bg-orange-700/10 text-orange-700"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8">
          <div
            className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md"
            onClick={close}
          />
          <div className="contact-pop relative z-10 flex w-full max-w-md flex-col items-center gap-4 overflow-visible rounded-3xl bg-white p-7 text-center shadow-2xl sm:p-9">
            <button
              type="button"
              aria-label={lang === "en" ? "Close" : "അടയ്ക്കുക"}
              onClick={close}
              className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg font-bold text-zinc-500 shadow-md transition-colors hover:bg-zinc-100 hover:text-zinc-800"
            >
              ×
            </button>

            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-600">
              {copy.boxLabel}
            </p>
            <Image
              src={selected.image}
              alt={selected.name}
              width={selected.width}
              height={selected.height}
              className="h-40 w-40 rounded-2xl object-cover shadow-lg sm:h-48 sm:w-48"
            />
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              {selected.name}
            </h3>
            <p className="-mt-1 text-sm font-medium text-zinc-500">
              {selected.nameML}
            </p>
            <p className="text-sm font-bold text-zinc-700">{selected.highlight}</p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {BADGES.map((badge, j) => (
                <span
                  key={badge}
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${
                    j % 2 === 0
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"
                      : "border-orange-700/30 bg-orange-700/10 text-orange-700"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="my-1 h-px w-full bg-zinc-100" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              {copy.order}
            </p>
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              {contactOptions.map((opt) => (
                <a
                  key={opt.key}
                  href={opt.href}
                  target={opt.external ? "_blank" : undefined}
                  rel={opt.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-1.5 text-xs font-bold text-zinc-700 transition-colors hover:text-emerald-600"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-transform group-hover:scale-110">
                    <opt.Icon />
                  </span>
                  {opt.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}