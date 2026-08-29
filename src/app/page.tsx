import Hero from "@/components/hero";
import Items from "@/components/items";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { LangProvider } from "@/components/lang-provider";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <LangProvider>
        <Hero />
        <Items />
        <Gallery />
        <Testimonials />
        <Footer />
      </LangProvider>
      <FloatingContact />
    </div>
  );
}