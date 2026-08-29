"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BRAND as BRAND_EN, CONTACT } from "@/constants";
import { BRAND as BRAND_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

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
  const fillRef = useRef<HTMLDivElement | null>(null);
  const startTimerRef = useRef<number | null>(null);
  const rafIdRef = useRef(0);
  const phaseRef = useRef<"forward" | "reverse">("forward");
  const lastTimeRef = useRef(0);
  const playedRef = useRef(false);

  const { lang, setLang } = useLang();
  const [contactOpen, setContactOpen] = useState(false);
  const [played, setPlayed] = useState(false);

  const content = CONTENT[lang as "en" | "ml"];
  const brand = lang === "en" ? BRAND_EN : BRAND_ML;

  const durationOf = () => {
    const v = videoRef.current;
    return v && Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 6;
  };

  const setFill = useCallback((progress: number) => {
    if (fillRef.current)
      fillRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  }, []);

  const frameRef = useRef<(now: number) => void>(() => {});

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    cancelAnimationFrame(rafIdRef.current);
    try {
      video.currentTime = 0;
    } catch {
      /* noop */
    }
    setFill(0);
    phaseRef.current = "forward";
    lastTimeRef.current = performance.now();
    const pr = video.play() as Promise<void> | undefined;
    if (pr && typeof pr.then === "function") {
      pr.catch(() => {
        /* noop */
      });
    }
    cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = requestAnimationFrame(frameRef.current);
  }, [setFill]);

  useEffect(() => {
    frameRef.current = (now: number) => {
      const video = videoRef.current;
      const dur = durationOf();
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (!video) {
        rafIdRef.current = requestAnimationFrame(frameRef.current);
        return;
      }

      if (phaseRef.current === "forward") {
        setFill(video.currentTime / dur);
        if (video.currentTime >= dur - 0.05 || video.ended) {
          if (!playedRef.current) {
            playedRef.current = true;
            setPlayed(true);
          }
          phaseRef.current = "reverse";
          try {
            video.pause();
          } catch {
            /* noop */
          }
        }
      } else {
        const next = video.currentTime - dt;
        if (next <= 0) {
          try {
            video.currentTime = 0;
          } catch {
            /* noop */
          }
          setFill(0);
          phaseRef.current = "forward";
          const pr = video.play() as Promise<void> | undefined;
          if (pr && typeof pr.then === "function") pr.catch(() => {});
        } else {
          try {
            video.currentTime = next;
          } catch {
            /* noop */
          }
          setFill(next / dur);
        }
      }

      rafIdRef.current = requestAnimationFrame(frameRef.current);
    };
  }, [setFill]);

  useEffect(() => {
    startTimerRef.current = window.setTimeout(startPlayback, 1000);
    return () => {
      if (startTimerRef.current) window.clearTimeout(startTimerRef.current);
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [startPlayback]);

  const handleEnded = () => {
    playedRef.current = true;
    if (!played) setPlayed(true);
    setFill(1);
  };

  const switchLang = (next: "en" | "ml") => {
    if (next === lang) return;
    setLang(next);
    setContactOpen(false);
    const video = videoRef.current;
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch {
        /* noop */
      }
    }
    setPlayed(false);
    playedRef.current = false;
    setFill(0);
    phaseRef.current = "forward";
    if (startTimerRef.current) window.clearTimeout(startTimerRef.current);
    startTimerRef.current = window.setTimeout(startPlayback, 400);
  };

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
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-white">
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
          <div className="max-w-3xl transition-opacity duration-700">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold leading-tight tracking-tight text-emerald-600 text-3xl sm:text-5xl lg:text-6xl">
              {played ? content.end.heading : content.start.heading}
            </h2>
            <p className="mt-2 font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 sm:mt-3 text-xs sm:text-base">
              {played ? content.end.sub : content.start.sub}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <div className="relative aspect-[16/8.8] w-[min(92vw,880px)] overflow-hidden bg-white sm:w-[min(80vw,950px)]">
            <video
              ref={videoRef}
              onEnded={handleEnded}
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
            <div className="max-w-2xl transition-opacity duration-700">
              <p className="font-bold leading-relaxed text-zinc-700 text-sm sm:text-lg">
                {played ? content.end.desc : content.start.desc}
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

      <div className="relative z-40 px-4 pb-4 sm:px-6 sm:pb-5">
        <div className="mx-auto h-1.5 w-full max-w-2xl overflow-hidden rounded-full bg-emerald-500/25">
          <div
            ref={fillRef}
            className="h-full w-full origin-left scale-x-0 rounded-full bg-emerald-500"
          />
        </div>
      </div>
    </section>
  );
}
