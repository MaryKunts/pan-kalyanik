import { AdvantagesSection } from "@/components/advantagesSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroImage } from "@/components/heroImage";
import { OffersSection } from "@/components/offersSection";
import { ScrollToTopButton } from "@/components/scrollToTopButton";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Header />
      <HeroImage />
      <ScrollToTopButton />
      <OffersSection />
      <AdvantagesSection />
      <Footer />
    </main>
  );
}
