"use client";

import Image from "next/image";
import { GALLERY as GALLERY_EN } from "@/constants";
import { GALLERY as GALLERY_ML } from "@/constants-ml";
import { useLang } from "@/components/lang-provider";

export default function Gallery() {
  const { lang } = useLang();

  const gallery = lang === "en" ? GALLERY_EN : GALLERY_ML;

  const copy =
    lang === "en"
      ? {
          eyebrow: "Our stock",
          heading: "Fresh Spices, Millets & Dry Fruits in Alappuzha",
          desc: "A glimpse of our 100% organic Kerala spices, grains and healthy essentials — stored fresh and shipped to every corner of India.",
          altSuffix: "at Spicy Keralam, Alappuzha",
        }
      : {
          eyebrow: "ഞങ്ങളുടെ സ്റ്റോക്ക്",
          heading: "ആലപ്പുഴയിലെ പുതിയ സുഗന്ധവ്യഞ്ജനങ്ങൾ, മില്ലറ്റുകൾ & ഡ്രൈ ഫ്രൂട്ട്സ്",
          desc: "ഞങ്ങളുടെ 100% ഓർഗാനിക് കേരള സുഗന്ധവ്യഞ്ജനങ്ങളും ധാന്യങ്ങളും ആരോഗ്യ ആവശ്യങ്ങളും — പുതുതായി സൂക്ഷിച്ച് ഇന്ത്യയുടെ എല്ലാ കോണിലേക്കും അയച്ചു.",
          altSuffix: "സ്പൈസി കേരളം, ആലപ്പുഴയിൽ",
        };

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-600">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-extrabold tracking-tight text-zinc-900 text-3xl sm:text-5xl">
            {copy.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {copy.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-1.5 sm:mt-14 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5 lg:gap-3">
          {gallery.map((item) => (
            <div
              key={item.name}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={`${item.name} ${copy.altSuffix}`}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/70 to-transparent p-2 text-left text-[11px] font-semibold text-white transition-opacity duration-300 sm:text-xs">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
