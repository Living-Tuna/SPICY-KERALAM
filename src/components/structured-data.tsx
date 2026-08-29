import { ITEMS, TESTIMONIALS, STORE } from "@/constants";
import { siteConfig } from "@/lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function StructuredData() {
  const url = siteConfig.url;
  const logo = `${url}/logo.png`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: siteConfig.name,
    url,
    logo,
    email: siteConfig.email,
    telephone: siteConfig.phone,
  };

  const ratingCount = TESTIMONIALS.length;
  const average =
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / ratingCount;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${url}/#store`,
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: logo,
    logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.address,
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHours: siteConfig.openHours,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average.toFixed(1),
      reviewCount: ratingCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${siteConfig.name} Spices & Millets`,
      itemListElement: ITEMS.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Product",
          name: item.name,
          image: `${url}${item.image}`,
          description: `${item.name} ${item.highlight} — 100% pure, organic and chemical-free from ${siteConfig.name}, Alappuzha, Kerala.`,
          brand: { "@type": "Brand", name: siteConfig.name },
        },
      })),
    },
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kerala Spices, Millets & Dry Fruits",
    numberOfItems: ITEMS.length,
    itemListElement: ITEMS.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      image: `${url}${item.image}`,
      description: `${item.name} ${item.highlight} — fresh, pure and organic.`,
    })),
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={localBusiness} />
      <JsonLd data={itemList} />
    </>
  );
}
