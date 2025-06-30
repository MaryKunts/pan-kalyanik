import { AdvantagesSection } from "@/components/advantagesSection";
import { HeroImage } from "@/components/heroImage";
import { OffersSection } from "@/components/offersSection";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <HeroImage />
      <OffersSection />
      <AdvantagesSection />
    </main>
  );
}
