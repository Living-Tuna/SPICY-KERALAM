"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND as BRAND_EN } from "@/constants";
import { BRAND as BRAND_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

export default function PageBanner() {
  const { lang } = useLang();
  const brand = lang === "en" ? BRAND_EN : BRAND_ML;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={brand.heading}
            width={1374}
            height={1145}
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden flex-col sm:flex">
            <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-700 bg-clip-text font-[family-name:var(--font-brand)] text-base font-extrabold tracking-tight text-transparent">
              {brand.heading}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
              {brand.subtitle}
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold text-zinc-600">
          <Link href="/" className="transition-colors hover:text-emerald-600">
            {lang === "en" ? "Home" : "ഹോം"}
          </Link>
          <Link href="/items" className="transition-colors hover:text-emerald-600">
            {lang === "en" ? "Products" : "ഉൽപ്പന്നങ്ങൾ"}
          </Link>
        </nav>
      </div>
    </header>
  );
}