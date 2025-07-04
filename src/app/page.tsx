import { AdvantagesSection } from "@/app/components/advantagesSection";
import { HeroImage } from "@/app/components/heroImage";
import { OffersSection } from "@/app/components/offersSection";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <HeroImage />
      <OffersSection />
      <AdvantagesSection />
    </main>
  );
}
