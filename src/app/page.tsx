import AdvantagesSection from "@/components/advantagesSection/AdvantagesSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroImage from "@/components/heroImage/HeroImage";
import OffersSection from "@/components/offersSection/OffersSection";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Header />
      <HeroImage />
      <OffersSection />
      <AdvantagesSection />
      <Footer />
    </main>
  );
}
