"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { BRAND as BRAND_EN, REVIEWS as REVIEWS_EN, CONTACT } from "@/constants";
import { BRAND as BRAND_ML, REVIEWS as REVIEWS_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

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

export default function Hero() {
  const pinRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const idxRef = useRef(0);
  const dataRef = useRef(REVIEWS_EN);
  const { lang, setLang } = useLang();
  const [index, setIndex] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const markVideoReady = () => {
    setVideoReady(true);
    window.setTimeout(() => setLoaderGone(true), 600);
  };

  const kickVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    try {
      const p = video.play() as Promise<void> | undefined;
      if (p && typeof p.then === "function") {
        p.then(() => {
          try {
            video.pause();
          } catch {
            /* noop */
          }
        }).catch(() => {
          /* noop */
        });
      }
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    kickVideo();
    const kick = () => {
      kickVideo();
      window.removeEventListener("touchstart", kick);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("pointerdown", kick);
    };
    window.addEventListener("touchstart", kick);
    window.addEventListener("scroll", kick);
    window.addEventListener("pointerdown", kick);
    return () => {
      window.removeEventListener("touchstart", kick);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("pointerdown", kick);
    };
  }, [kickVideo]);

  useEffect(() => {
    const fallback = window.setTimeout(markVideoReady, 2000);
    return () => window.clearTimeout(fallback);
  }, []);

  const localeStore = lang === "en"
    ? { reviews: REVIEWS_EN, brand: BRAND_EN }
    : { reviews: REVIEWS_ML, brand: BRAND_ML };

  const switchLang = (next: "en" | "ml") => {
    if (next === lang) return;
    dataRef.current = next === "en" ? REVIEWS_EN : REVIEWS_ML;
    idxRef.current = 0;
    setLang(next);
    setIndex(0);
    setContactOpen(false);
    if (headingRef.current) {
      headingRef.current.style.transform = "";
      headingRef.current.style.opacity = "";
    }
    if (bodyRef.current) {
      bodyRef.current.style.transform = "";
      bodyRef.current.style.opacity = "";
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      scrub();
      rafId = requestAnimationFrame(raf);
    };

    const scrub = () => {
      const video = videoRef.current;
      const pin = pinRef.current;
      const bar = barRef.current;
      const heading = headingRef.current;
      const body = bodyRef.current;

      if (!video || !pin) return;

      const ready = video.readyState >= 1 && Number.isFinite(video.duration);
      const total = pin.offsetHeight - window.innerHeight;
      const rect = pin.getBoundingClientRect();
      const progress = total > 0 ? clamp(-rect.top / total, 0, 1) : 1;

      if (ready && Math.abs(video.currentTime - video.duration * progress) > 0.02) {
        video.currentTime = video.duration * progress;
      }

      const count = dataRef.current.length;
      const raw = progress * count;
      const idx = clamp(Math.floor(raw), 0, count - 1);
      const intra = clamp(raw - idx, 0, 1);

      if (idx !== idxRef.current) {
        idxRef.current = idx;
        setIndex(idx);
      }

      const ease = easeOutCubic(clamp(intra * 2.5, 0, 1));
      const t = raw < 0.4 ? 1 : ease;
      const fromLeft = idx % 2 === 0;
      const offset = (1 - t) * 42;

      if (heading) {
        heading.style.transform = `translateX(${fromLeft ? -offset : offset}vmin)`;
        heading.style.opacity = String(t);
      }

      if (body) {
        body.style.transform = `translateX(${fromLeft ? offset : -offset}vmin)`;
        body.style.opacity = String(t);
      }

      if (bar) {
        const segments = Array.from(bar.children);
        segments.forEach((segment, i) => {
          const fill = segment.firstElementChild as HTMLElement | null;
          const s = i < idx ? 1 : i === idx ? intra : 0;
          if (fill) {
            fill.style.transform = `scaleX(${s})`;
          }
          (segment as HTMLElement).style.opacity = i <= idx ? "1" : "0.35";
        });
      }
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const chapter = localeStore.reviews[index];
  const brand = localeStore.brand;

  const contactOptions = [
    {
      key: "whatsapp",
      label: lang === "en" ? "WhatsApp" : "വാട്സ്ആപ്പ്",
      href: `https://wa.me/${CONTACT.whatsapp}`,
      Icon: WhatsAppIcon,
      external: true,
    },
    {
      key: "mail",
      label: lang === "en" ? "Email" : "ഇമെയിൽ",
      href: `mailto:${CONTACT.email}`,
      Icon: MailIcon,
      external: false,
    },
    {
      key: "phone",
      label: lang === "en" ? "Call" : "കോൾ",
      href: `tel:${CONTACT.phone}`,
      Icon: PhoneIcon,
      external: false,
    },
  ];

  return (
    <section ref={pinRef} className="relative h-[600vh] bg-white">
      {!loaderGone && (
        <div
          className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-white transition-opacity duration-700 sm:gap-5 ${
            videoReady ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Spicy Keralam logo"
            width={1374}
            height={1145}
            priority
            className="h-auto w-24 sm:w-32"
          />
          <p className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-700 bg-clip-text font-[family-name:var(--font-brand)] text-xl font-extrabold tracking-tight text-transparent sm:text-2xl">
            Spicy Keralam
          </p>
          <div className="mt-2 h-1 w-44 overflow-hidden rounded-full bg-zinc-200 sm:w-56">
            <div className="loader-bar h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700" />
          </div>
        </div>
      )}
      <div
        className={`sticky top-0 flex h-screen w-full flex-col overflow-hidden bg-white transition-opacity duration-700 ${
          loaderGone ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="relative z-40 grid grid-cols-[1fr_auto_1fr] items-center px-4 pt-4 sm:px-6 sm:pt-5">
          <span />
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Spicy Keralam logo"
              width={1374}
              height={1145}
              priority
              className="h-auto w-20 sm:w-28"
            />
          </div>
          <div className="flex justify-end">
            <div className="flex items-center overflow-hidden rounded-full border border-zinc-300 bg-white/80 text-xs font-semibold sm:text-sm">
              <button
                type="button"
                onClick={() => switchLang("en")}
                className={`px-3 py-1.5 transition-colors sm:px-4 ${
                  lang === "en"
                    ? "bg-emerald-600 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLang("ml")}
                className={`px-3 py-1.5 transition-colors sm:px-4 ${
                  lang === "ml"
                    ? "bg-emerald-600 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                ML
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-30 pt-2 text-center sm:pt-3">
          <h1 className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-700 bg-clip-text font-[family-name:var(--font-brand)] text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            {brand.heading}
          </h1>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-500 sm:mt-2 sm:text-xs">
            {brand.subtitle}
          </p>
        </div>

        <div className="relative z-30 flex-1">
          <div className="pointer-events-none absolute inset-x-0 top-[9%] z-10 flex justify-center px-4 text-center sm:top-[11%]">
            <div key={`h-${lang}`} ref={headingRef} className="max-w-3xl">
              <h2
                className={`font-[family-name:var(--font-display)] font-extrabold leading-tight tracking-tight ${
                  lang === "ml"
                    ? "text-2xl leading-snug sm:text-4xl"
                    : "text-4xl sm:text-6xl"
                } ${
                  index % 2 === 0
                    ? "text-emerald-600"
                    : "text-orange-700"
                }`}
              >
                {chapter.heading}
              </h2>
              <p
                className={`mt-2 font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 sm:mt-3 ${
                  lang === "ml"
                    ? "text-[11px] sm:text-sm"
                    : "text-sm sm:text-base"
                }`}
              >
                {chapter.sub}
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
            <div className="relative aspect-[16/8.8] w-[min(92vw,880px)] overflow-hidden bg-white sm:w-[min(80vw,950px)]">
              <video
                ref={videoRef}
                onLoadedMetadata={markVideoReady}
                onLoadedData={markVideoReady}
                onCanPlay={markVideoReady}
                onPlaying={markVideoReady}
                className="absolute inset-0 h-full w-full object-cover object-top"
                src="/animation.mp4"
                muted
                playsInline
                preload="auto"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-6 text-center sm:pb-7">
            <div className="flex w-full max-w-2xl flex-col items-center justify-end gap-3 sm:gap-4">
              <div
                key={`b-${lang}`}
                ref={bodyRef}
                className="flex w-full flex-col items-center gap-3 sm:gap-4"
              >
                <p
                  className={`max-w-2xl font-bold leading-relaxed text-zinc-700 ${
                    lang === "ml"
                      ? "text-sm sm:text-base"
                      : "text-base sm:text-lg"
                  }`}
                >
                  {chapter.desc}
                </p>
                {chapter.hashtags && (
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {chapter.hashtags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-bold sm:text-sm ${
                          i % 2 === 0
                            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600"
                            : "border-orange-700/40 bg-orange-700/10 text-orange-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={() => setContactOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
                >
                  {localeStore.reviews[0].button?.label ?? "Enquire Now"}
                  <span
                    aria-hidden
                    className={`transition-transform ${contactOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>
                {contactOpen && (
                  <div className="flex items-center justify-center gap-5 sm:gap-7">
                    {contactOptions.map((opt, i) => (
                      <a
                        key={opt.key}
                        href={opt.href}
                        target={opt.external ? "_blank" : undefined}
                        rel={opt.external ? "noopener noreferrer" : undefined}
                        style={{ animationDelay: `${i * 90}ms` }}
                        className="contact-pop flex flex-col items-center gap-1.5 text-xs font-bold text-zinc-700 transition-colors hover:text-emerald-600 sm:text-sm"
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600">
                          <opt.Icon />
                        </span>
                        {opt.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={barRef}
          className="relative z-40 flex gap-1.5 px-4 pb-4 sm:px-6 sm:pb-5"
        >
          {localeStore.reviews.map((_, i) => (
            <div
              key={`${lang}-${i}`}
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-emerald-500/25"
            >
              <div className="h-full w-full origin-left scale-x-0 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}