import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ITEMS, GALLERY } from "@/constants";
import PageBanner from "@/components/page-banner";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { LangProvider } from "@/components/lang-provider";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore all products by Spicy Keralam — 100% organic Kerala spices, millets, dry fruits, honey and healthy essentials in Alappuzha, delivered all over India.",
  alternates: { canonical: "/items" },
};

export default function ItemsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <LangProvider>
        <PageBanner />
        <main className="bg-white pb-20 pt-10 text-zinc-900 sm:pt-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-600">
              From our store in Alappuzha
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-5xl">
              Our Products & Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Fresh, aromatic and 100% organic spices, millets, dry fruits, honey
              and more from Alappuzha (Alleppey), Kerala — no chemicals, no
              pesticides. Shipped fresh all over India.
            </p>

            <section className="mt-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                Spices & Products
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4">
                {ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/items/${item.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="flex w-full items-center justify-center rounded-2xl bg-zinc-50 p-4">
                      <Image
                        src={item.image}
                        alt={`${item.name} — ${item.highlight}, 100% organic from Spicy Keralam, Alappuzha, Kerala`}
                        width={item.width}
                        height={item.height}
                        className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1 p-3">
                      <h3 className="text-sm font-extrabold tracking-tight sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-[11px] font-medium text-zinc-500 sm:text-xs">
                        {item.nameML}
                      </p>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 sm:text-[11px]">
                        {item.highlight}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-16">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                Gallery
              </h2>
              <div className="mt-6 grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5">
                {GALLERY.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/gallery/${g.slug}`}
                    className="group relative block aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={g.image}
                      alt={`${g.name} at Spicy Keralam, Alappuzha`}
                      width={g.width}
                      height={g.height}
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/70 to-transparent p-2 text-left text-[11px] font-semibold text-white sm:text-xs">
                      {g.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
        <FloatingContact />
      </LangProvider>
    </div>
  );
}