import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ITEMS } from "@/constants";
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
  return ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = ITEMS.find((i) => i.slug === slug);
  if (!item) return {};

  const title = `${item.name} — ${siteConfig.name}`;
  const description = `${item.name} ${item.highlight} — 100% pure, organic and chemical-free ${item.name.toLowerCase()} from ${siteConfig.name}, Alappuzha, Kerala. Delivered all over India.`;

  return {
    title,
    description,
    alternates: { canonical: `/items/${item.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/items/${item.slug}`,
      images: [{ url: item.image, width: item.width, height: item.height, alt: item.name }],
    },
  };
}

export default async function ItemDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <LangProvider>
        <PageBanner />
        <ItemDetail
          item={{ ...item, description: `${item.name} — ${item.highlight}. Fresh, 100% organic and sourced directly from farms across Kerala. Order now from ${siteConfig.name}, Alappuzha.` }}
          backHref="/items"
          backLabel="All products"
        />
        <Footer />
        <FloatingContact />
      </LangProvider>
    </div>
  );
}