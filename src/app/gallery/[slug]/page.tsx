import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GALLERY } from "@/constants";
import { siteConfig } from "@/lib/site";
import PageBanner from "@/components/page-banner";
import ItemDetail from "@/components/item-detail";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { LangProvider } from "@/components/lang-provider";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GALLERY.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = GALLERY.find((i) => i.slug === slug);
  if (!g) return {};

  const title = `${g.name} — ${siteConfig.name}`;
  const description = `${g.name} at ${siteConfig.name}, Alappuzha, Kerala — ${g.description}`;

  return {
    title,
    description,
    alternates: { canonical: `/gallery/${g.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/gallery/${g.slug}`,
      images: [{ url: g.image, width: g.width, height: g.height, alt: g.name }],
    },
  };
}

export default async function GalleryDetailPage({ params }: Props) {
  const { slug } = await params;
  const g = GALLERY.find((i) => i.slug === slug);
  if (!g) notFound();

  const detail = {
    ...g,
    nameML: "",
    highlight: "100% Organic",
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <LangProvider>
        <PageBanner />
        <ItemDetail
          item={{ ...detail, description: g.description }}
          backHref="/items#gallery"
          backLabel="Back to gallery"
        />
        <Footer />
        <FloatingContact />
      </LangProvider>
    </div>
  );
}