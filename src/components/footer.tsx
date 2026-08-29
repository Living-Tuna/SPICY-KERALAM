"use client";

import Link from "next/link";
import { BRAND, CONTACT, STORE as STORE_EN } from "@/constants";
import { STORE as STORE_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

export default function Footer() {
  const { lang } = useLang();

  const STORE = lang === "en" ? STORE_EN : STORE_ML;

  const copy =
    lang === "en"
      ? {
          tagline:
            "Spicy Keralam in Alappuzha, Kerala is your source for 100% organic spices and millets — no chemicals, no artificials, no pesticides. Straight from the plants to your kitchen, delivered all over India.",
          visit: "Visit us",
          touch: "Get in touch",
          whatsapp: "WhatsApp",
          backHome: "Home",
          made: "Made with spices in Kerala",
          rights: "All rights reserved.",
        }
      : {
          tagline:
            "ആലപ്പുഴയിലെ സ്പൈസി കേരളം 100% ഓർഗാനിക് സുഗന്ധവ്യഞ്ജനങ്ങളുടെയും മില്ലറ്റുകളുടെയും ഉറവിടമാണ് — രാസവസ്തുക്കളില്ല, കൃത്രിമങ്ങളില്ല, കീടനാശിനികളില്ല. ചെടികളിൽ നിന്ന് നേരിട്ട് നിങ്ങളുടെ അടുക്കളയിലേക്ക്, ഇന്ത്യയിലെങ്ങും ഡെലിവറി.",
          visit: "സന്ദർശിക്കൂ",
          touch: "ബന്ധപ്പെടൂ",
          whatsapp: "വാട്സ്ആപ്പ്",
          backHome: "ഹോം",
          made: "കേരളത്തിലെ സുഗന്ധവ്യഞ്ജനങ്ങളാൽ നിർമ്മിച്ചത്",
          rights: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
        };

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-700 bg-clip-text font-[family-name:var(--font-brand)] text-xl font-extrabold tracking-tight text-transparent">
              {BRAND.heading}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              {copy.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              {copy.visit}
            </h4>
            <address className="mt-3 text-sm not-italic leading-relaxed">
              {STORE.address}
            </address>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              {copy.touch}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-emerald-400"
                >
                  {copy.whatsapp} · {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}`}
                  className="transition-colors hover:text-emerald-400"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-emerald-400"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND.heading}. {copy.rights}
          </p>
          <nav className="flex items-center gap-6 text-xs">
            <Link
              href="/"
              className="transition-colors hover:text-emerald-400"
            >
              {copy.backHome}
            </Link>
            <span className="font-mono uppercase tracking-[0.35em] text-zinc-600">
              {copy.made}
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}