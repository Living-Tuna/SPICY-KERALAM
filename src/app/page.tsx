import Hero from "@/components/hero";
import Items from "@/components/items";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import StructuredData from "@/components/structured-data";
import { LangProvider } from "@/components/lang-provider";
import LazySection from "@/components/lazy-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <StructuredData />
      <LangProvider>
        <Hero />
        <LazySection>
          <Items />
        </LazySection>
        <LazySection>
          <Gallery />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <Footer />
        </LazySection>
      </LangProvider>
      <FloatingContact />
    </div>
  );
}