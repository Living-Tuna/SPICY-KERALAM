"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { BRAND as BRAND_EN, CONTACT } from "@/constants";
import { BRAND as BRAND_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

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

const CONTENT = {
  en: {
    start: {
      heading: "Organic Premium Spices to your Doorstep",
      sub: "Fresh · 100% organic · delivered all over India",
      desc: "No artificials, no pesticides — just pure, fresh Kerala spices and millets posted straight to your home, anywhere in India.",
    },
    end: {
      heading: "We Ship More Than Spices",
      sub: "Millets · dry fruits · honey · healthy essentials",
      desc: "Beyond spices, we deliver our full range — organic millets, dry fruits, honey and more — fresh across every corner of India.",
    },
  },
  ml: {
    start: {
      heading: "ഓർഗാനിക് പ്രീമിയം സുഗന്ധവ്യഞ്ജനങ്ങൾ, നിങ്ങളുടെ വാതിൽപ്പടിയിൽ",
      sub: "പുതിയത് · 100% ഓർഗാനിക് · ഇന്ത്യയിലെങ്ങും ഡെലിവറി",
      desc: "കൃത്രിമമില്ല, കീടനാശിനിയില്ല — കേരളത്തിലെ ശുദ്ധവും പുതിയതുമായ സുഗന്ധവ്യഞ്ജനങ്ങളും മില്ലറ്റുകളും ഇന്ത്യയിലെവിടെയും നേരിട്ട് വീട്ടിലേക്ക്.",
    },
    end: {
      heading: "സുഗന്ധവ്യഞ്ജനങ്ങൾ മാത്രമല്ല ഞങ്ങൾ എത്തിക്കുന്നത്",
      sub: "മില്ലറ്റ് · ഡ്രൈ ഫ്രൂട്ട്സ് · തേൻ · ആരോഗ്യ ആവശ്യങ്ങൾ",
      desc: "സുഗന്ധവ്യഞ്ജനങ്ങൾക്കപ്പുറം, ഞങ്ങളുടെ മുഴുവൻ ശ്രേണിയും — ഓർഗാനിക് മില്ലറ്റ്, ഡ്രൈ ഫ്രൂട്ട്സ്, തേൻ എന്നിവയും ഇന്ത്യയിലെ എല്ലാ കോണുകളിലേക്കും പുതുതായി എത്തിക്കുന്നു.",
    },
  },
} as const;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const headingARef = useRef<HTMLDivElement | null>(null);
  const headingBRef = useRef<HTMLDivElement | null>(null);
  const descARef = useRef<HTMLDivElement | null>(null);
  const descBRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  const playRef = useRef({
    started: false,
    finished: false,
    progress: 0,
    lastTime: 0,
  });
  const directionRef = useRef<1 | -1>(1);
  const rafIdRef = useRef(0);
  const touchYRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const autoPlayRef = useRef<() => void>(() => {});

  const { lang, setLang } = useLang();
  const [contactOpen, setContactOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const markVideoReady = () => {
    setVideoReady(true);
  };

  useEffect(() => {
    const fallback = window.setTimeout(markVideoReady, 2000);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!loaderGone && videoReady) {
      const t = window.setTimeout(() => setLoaderGone(true), 600);
      return () => window.clearTimeout(t);
    }
  }, [videoReady, loaderGone]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play() as Promise<void> | undefined;
    if (p && typeof p.then === "function") {
      p.then(() => {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {
          /* noop */
        }
      }).catch(() => {
        /* noop */
      });
    } else {
      try {
        v.currentTime = 0;
      } catch {
        /* noop */
      }
    }
  }, []);

  const applyProgress = useCallback((next: number) => {
    const video = videoRef.current;
    const headingA = headingARef.current;
    const headingB = headingBRef.current;
    const descA = descARef.current;
    const descB = descBRef.current;
    const hint = hintRef.current;
    const fill = fillRef.current;

    if (video && Number.isFinite(video.duration)) {
      video.currentTime = video.duration * next;
    }

    const t = clamp((next - 0.45) / 0.1, 0, 1);

    if (headingA) {
      headingA.style.opacity = String(1 - t);
      headingA.style.transform = `translateY(${-30 * t}vmin)`;
    }
    if (headingB) {
      headingB.style.opacity = String(t);
      headingB.style.transform = `translateY(${30 * (1 - t)}vmin)`;
    }
    if (descA) {
      descA.style.opacity = String(1 - t);
      descA.style.transform = `translateX(${34 * t}vmin)`;
    }
    if (descB) {
      descB.style.opacity = String(t);
      descB.style.transform = `translateX(${-34 * (1 - t)}vmin)`;
    }

    if (hint) {
      hint.style.opacity = String(clamp(1 - next * 3, 0, 1));
    }
    if (fill) {
      fill.style.transform = `scaleX(${next})`;
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    lenis.stop();

    const durationOf = () => {
      const v = videoRef.current;
      return v && Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 6;
    };

    const runRaf = () => {
      const p = playRef.current;
      const video = videoRef.current;
      const duration = durationOf();
      let progress = video ? video.currentTime / duration : p.progress;
      if (p.finished) {
        progress = 1;
      }
      progress = clamp(progress, 0, 1);
      p.progress = progress;
      applyProgress(progress);

      if (video && !p.finished) {
        if (video.paused && video.currentTime >= duration - 0.05) {
          p.finished = true;
          p.started = false;
          video.pause();
          video.currentTime = duration;
          lenis.start();
          cancelAnimationFrame(rafIdRef.current);
          return;
        }
      }
      rafIdRef.current = requestAnimationFrame(runRaf);
    };

    const playNow = () => {
      const video = videoRef.current;
      if (!video) return;
      try {
        const pr = video.play() as Promise<void> | undefined;
        if (pr && typeof pr.then === "function") {
          pr.catch(() => {
            /* noop */
          });
        }
      } catch {
        /* noop */
      }
    };

    const beginPlay = () => {
      const p = playRef.current;
      const video = videoRef.current;
      if (p.finished) {
        p.finished = false;
        p.started = false;
        if (video) {
          try {
            video.currentTime = 0;
          } catch {
            /* noop */
          }
        }
        applyProgress(0);
      }
      if (p.started) {
        playNow();
        return;
      }
      if (video) {
        try {
          video.currentTime = p.progress * durationOf();
        } catch {
          /* noop */
        }
      }
      p.started = true;
      p.lastTime = performance.now();
      playNow();
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(runRaf);
    };

    const handleWheel = (e: WheelEvent) => {
      const p = playRef.current;
      if (!p.finished) {
        e.preventDefault();
        const dir = e.deltaY >= 0 ? 1 : -1;
        directionRef.current = dir;
        if (dir === 1) {
          beginPlay();
        } else {
          const video = videoRef.current;
          if (video) {
            try {
              video.currentTime = Math.max(0, video.currentTime - 0.25);
            } catch {
              /* noop */
            }
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchYRef.current = e.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const p = playRef.current;
      if (p.finished) return;
      const y = e.touches[0]?.clientY;
      if (y == null || touchYRef.current == null) return;
      const delta = touchYRef.current - y;
      touchYRef.current = y;
      if (delta === 0) return;
      e.preventDefault();
      const dir = delta >= 0 ? 1 : -1;
      directionRef.current = dir;
      if (dir === 1) {
        beginPlay();
      } else {
        const video = videoRef.current;
        if (video) {
          try {
            video.currentTime = Math.max(0, video.currentTime - 0.25);
          } catch {
            /* noop */
          }
        }
      }
    };

    const startAutoplay = () => {
      beginPlay();
    };

    autoPlayRef.current = startAutoplay;

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    const startTimer = window.setTimeout(startAutoplay, 1200);

    return () => {
      window.clearTimeout(startTimer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, [applyProgress]);

  const content = CONTENT[lang as "en" | "ml"];
  const brand = lang === "en" ? BRAND_EN : BRAND_ML;

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

  const switchLang = (next: "en" | "ml") => {
    if (next === lang) return;
    const p = playRef.current;
    cancelAnimationFrame(rafIdRef.current);
    p.started = false;
    p.finished = false;
    p.progress = 0;
    directionRef.current = 1;
    lenisRef.current?.stop();
    if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    applyProgress(0);
    setLang(next);
    setContactOpen(false);
    window.setTimeout(() => autoPlayRef.current(), 400);
  };

  return (
    <>
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

      <section
        className={`relative flex h-screen w-full flex-col overflow-hidden bg-white transition-opacity duration-700 ${
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

        <div className="relative z-30 pt-1 text-center sm:pt-2">
          <h1 className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-700 bg-clip-text font-[family-name:var(--font-brand)] text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            {brand.heading}
          </h1>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-500 sm:mt-2 sm:text-xs">
            {brand.subtitle}
          </p>
        </div>

        <div className="relative z-30 flex-1">
          <div className="pointer-events-none absolute inset-x-0 top-[7%] z-10 flex justify-center px-4 text-center sm:top-[9%]">
            <div ref={headingARef} className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-display)] font-extrabold leading-tight tracking-tight text-emerald-600 text-3xl sm:text-5xl lg:text-6xl">
                {content.start.heading}
              </h2>
              <p className="mt-2 font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 sm:mt-3 text-xs sm:text-base">
                {content.start.sub}
              </p>
            </div>
            <div
              ref={headingBRef}
              className="max-w-3xl opacity-0"
              style={{ transform: "translateY(30vmin)" }}
            >
              <h2 className="font-[family-name:var(--font-display)] font-extrabold leading-tight tracking-tight text-orange-700 text-3xl sm:text-5xl lg:text-6xl">
                {content.end.heading}
              </h2>
              <p className="mt-2 font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 sm:mt-3 text-xs sm:text-base">
                {content.end.sub}
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

          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-5 text-center sm:pb-6">
            <div className="flex w-full max-w-2xl flex-col items-center justify-end gap-3 sm:gap-4">
              <div ref={descARef} className="max-w-2xl">
                <p className="font-bold leading-relaxed text-zinc-700 text-sm sm:text-lg">
                  {content.start.desc}
                </p>
              </div>
              <div
                ref={descBRef}
                className="max-w-2xl opacity-0"
                style={{ transform: "translateX(-34vmin)" }}
              >
                <p className="font-bold leading-relaxed text-zinc-700 text-sm sm:text-lg">
                  {content.end.desc}
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={() => setContactOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
                >
                  {lang === "en" ? "Enquire Now" : "അന്വേഷിക്കുക"}
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

        <div ref={hintRef} className="pointer-events-none absolute right-4 top-3 z-50 flex flex-col items-center gap-1 sm:right-6 sm:top-4" aria-hidden>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-400 sm:text-[10px]">
            Scroll to play
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 animate-scroll-hint text-zinc-500 sm:h-5 sm:w-5"
          >
            <path d="M12 4v12" />
            <path d="M6 12l6 6 6-6" />
          </svg>
        </div>

        <div className="relative z-40 px-4 pb-4 sm:px-6 sm:pb-5">
          <div className="mx-auto h-1.5 w-full max-w-2xl overflow-hidden rounded-full bg-emerald-500/25">
            <div
              ref={fillRef}
              className="h-full w-full origin-left scale-x-0 rounded-full bg-emerald-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}
