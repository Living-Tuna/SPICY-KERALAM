"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/constants";

export default function Gallery() {
  const [selected, setSelected] = useState<null | (typeof GALLERY)[number]>(
    null,
  );

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-600">
            Our stock
          </p>
          <h2 className="mt-3 font-extrabold tracking-tight text-zinc-900 text-3xl sm:text-5xl">
            Fresh Spices, Millets & Dry Fruits in Alappuzha
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            A glimpse of our 100% organic Kerala spices, grains and healthy
            essentials — stored fresh and shipped to every corner of India.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-1.5 sm:mt-14 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5 lg:gap-3">
          {GALLERY.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelected(item)}
              aria-label={item.name}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={`${item.name} at Spicy Keralam, Alappuzha`}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/70 to-transparent p-2 text-left text-[11px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-xs">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xl font-bold text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            ×
          </button>
          <Image
            src={selected.image}
            alt={selected.name}
            width={selected.width}
            height={selected.height}
            className="max-h-[88vh] w-auto max-w-full rounded-lg object-contain"
            priority
          />
        </div>
      )}
    </section>
  );
}