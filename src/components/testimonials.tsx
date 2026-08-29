"use client";

import { TESTIMONIALS as TESTIMONIALS_EN, STORE as STORE_EN, CONTACT } from "@/constants";
import { TESTIMONIALS as TESTIMONIALS_ML, STORE as STORE_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M12 2l2.94 6.26 6.88.79-5.09 4.67 1.33 6.79L12 17.33 5.94 20.51l1.33-6.79L2.18 9.05l6.88-.79L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm-8 0C.553 16.227 0 15 0 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const NavigationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const stars = (n: number) =>
  Array.from({ length: n }, (_, i) => <StarIcon key={i} />);

export default function Testimonials() {
  const { lang } = useLang();
  const reviews = lang === "en" ? TESTIMONIALS_EN : TESTIMONIALS_ML;
  const STORE = lang === "en" ? STORE_EN : STORE_ML;

  const copy =
    lang === "en"
      ? {
          eyebrow: "Reviews",
          heading: "What customers say",
          intro:
            "Real reviews from real shoppers in Alappuzha (Alleppey), Kerala — fresh, 100% organic spices, honest prices, and a store run with heart.",
          google: "Alappuzha · Google review",
          find: "Find us",
          directions: "Get Directions",
          call: "Call Now",
          note: "Visit us in Alappuzha for the freshest spices, millets and dry fruits — or order online for home delivery all over India.",
        }
      : {
          eyebrow: "അഭിപ്രായങ്ങൾ",
          heading: "ഉപഭോക്താക്കൾ പറയുന്നത്",
          intro:
            "ആലപ്പുഴയിലെ യഥാർത്ഥ വാങ്ങലുകാരുടെ യഥാർത്ഥ അഭിപ്രായങ്ങൾ — പുതിയതും 100% ഓർഗാനിക് സുഗന്ധവ്യഞ്ജനങ്ങൾ, നീതിയായ വില, ഹൃദയത്തോടെ നടത്തുന്ന സ്റ്റോർ.",
          google: "ആലപ്പുഴ · ഗൂഗിൾ അവലോകനം",
          find: "ഞങ്ങളെ കണ്ടെത്തൂ",
          directions: "ദിശ കാണുക",
          call: "ഇപ്പോൾ വിളിക്കൂ",
          note: "നഗരത്തിലെ ഏറ്റവും പുതിയ സുഗന്ധവ്യഞ്ജനങ്ങൾ, മില്ലറ്റ്, ഡ്രൈ ഫ്രൂട്ട്സ് — അല്ലെങ്കിൽ ഓൺലൈനായി ഇന്ത്യയിലെങ്ങും ഡെലിവറി ചെയ്യുന്നു.",
        };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-500">
            {copy.eyebrow}
          </p>
          <h2
            className={`mt-3 font-extrabold tracking-tight text-white ${
              lang === "ml" ? "text-2xl sm:text-4xl" : "text-3xl sm:text-5xl"
            }`}
          >
            {copy.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {copy.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-emerald-500/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {stars(t.rating)}
                </div>
                <QuoteIcon />
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                “{t.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600/20 text-sm font-bold text-emerald-400">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-zinc-500">{copy.google}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[380px]">
            <iframe
              src={STORE.mapEmbed}
              title={STORE.name}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-500">
                {copy.find}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {STORE.name}
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-zinc-400 sm:text-base">
                <span className="mt-0.5 text-emerald-500">
                  <MapPinIcon />
                </span>
                {STORE.address}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={STORE.directionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
              >
                <NavigationIcon />
                {copy.directions}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300"
              >
                <PhoneIcon />
                {copy.call}
              </a>
            </div>

            <p className="text-xs leading-relaxed text-zinc-500">
              {copy.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}