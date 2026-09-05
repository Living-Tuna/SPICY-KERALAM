"use client";

import { REVIEWS as REVIEWS_EN } from "@/constants";
import { REVIEWS as REVIEWS_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.83z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

export default function Reviews() {
  const { lang } = useLang();

  const reviews = lang === "en" ? REVIEWS_EN : REVIEWS_ML;

  const copy =
    lang === "en"
      ? {
          eyebrow: "Beyond the spice rack",
          heading: "We're more than just spices",
          intro:
            "Step inside our Alappuzha store and you'll find a whole world of natural goodness — millets, honey, seeds, gift boxes and more, all sourced fresh from Kerala farms.",
          button: "Explore the gallery",
        }
      : {
          eyebrow: "സുഗന്ധവ്യഞ്ജനങ്ങൾക്കപ്പുറം",
          heading: "ഞങ്ങൾ സുഗന്ധവ്യഞ്ജനങ്ങൾ മാത്രമല്ല",
          intro:
            "ആലപ്പുഴയിലെ ഞങ്ങളുടെ കടയിൽ കാലെടുത്തുവെച്ചാൽ പ്രകൃതിദത്തമായ ഒരു ലോകം കാണാം — മില്ലറ്റുകൾ, തേൻ, വിത്തുകൾ, ഗിഫ്റ്റ് ബോക്സുകൾ എന്നിവയും അതിലേറെയും, കേരള ഫാമുകളിൽ നിന്ന് പുതുതായി.",
          button: "ഗാലറി കാണുക",
        };

  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-20 sm:py-28">
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.heading}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-emerald-500/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-500">
                {r.sub}
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
                {r.heading}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
                {r.desc}
              </p>
              {r.hashtags && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {r.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400"
                    >
                      <TagIcon />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {r.button && (
                <a
                  href={r.button.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
                >
                  {r.button.label}
                  <ArrowIcon />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
