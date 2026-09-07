"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/constants";
import { useLang } from "@/components/lang-provider";

type DetailItem = {
  slug: string;
  name: string;
  nameML: string;
  image: string;
  width: number;
  height: number;
  highlight: string;
  description?: string;
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function ItemDetail({ item, backHref, backLabel }: {
  item: DetailItem;
  backHref: string;
  backLabel: string;
}) {
  const { lang } = useLang();

  const copy = {
    back: backLabel,
    order: lang === "en" ? "Order now" : "ഓർഡർ ചെയ്യൂ",
    whatsapp: lang === "en" ? "WhatsApp" : "വാട്സ്ആപ്പ്",
    email: lang === "en" ? "Email" : "ഇമെയിൽ",
    call: lang === "en" ? "Call" : "കോൾ",
    allItems: lang === "en" ? "View all products" : "എല്ലാ ഉൽപ്പന്നങ്ങളും കാണൂ",
    storeNote:
      lang === "en"
        ? "100% organic, chemical-free and sourced directly from farms across Kerala."
        : "100% ഓർഗാനിക്, രാസവസ്തുക്കളില്ല, കേരളത്തിലെ ഫാമുകളിൽ നിന്ന് നേരിട്ട് ശേഖരിച്ചത്.",
  };

  const options = [
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
    <main className="bg-white pb-16 text-zinc-900">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-emerald-600"
        >
          <span aria-hidden>&larr;</span> {copy.back}
        </Link>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
          <div className="flex items-center justify-center rounded-3xl bg-zinc-50 p-6 sm:p-10">
            <Image
              src={item.image}
              alt={`${item.name} — ${item.highlight}, 100% organic from Spicy Keralam, Alappuzha, Kerala`}
              width={item.width}
              height={item.height}
              priority
              className="h-auto max-h-[420px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-600">
              {item.nameML}
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-5xl">
              {item.name}
            </h1>
            <p className="mt-3 text-base font-bold text-zinc-700 sm:text-lg">
              {item.highlight}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              {item.description ?? copy.storeNote}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["100% Pure", "Premium", "No Chemicals"].map((badge, j) => (
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

            <div className="my-6 h-px w-full bg-zinc-100" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              {copy.order}
            </p>
            <div className="mt-3 flex items-center gap-5 sm:gap-6">
              {options.map((opt) => (
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

            <Link
              href={backHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-500/20"
            >
              {copy.allItems}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}