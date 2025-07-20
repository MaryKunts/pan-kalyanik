import { Metadata } from "next";
import { AdvantagesSection } from "@/app/components/advantagesSection";
import { HeroImage } from "@/app/components/heroImage";
import { OffersSection } from "@/app/components/offersSection";
import { BlogSection } from "./components/blogSection";

export const metadata: Metadata = {
  title: "Пан КальяНик | Кальянная, аренда и кейтеринг в Бресте",
  description:
    "Кальнная, аренда кальяна на дом, кейтеринг и кальянный аутсорсинг в Бресте",
  keywords:
    "кальян, аренда кальяна, кальян на дом, кальянный кейтеринг, кальянная Брест, кальянный бар, выездной кальян, кальянный аутсорсинг",
};

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <HeroImage />
      <OffersSection />
      <AdvantagesSection />
      <BlogSection />
    </main>
  );
}
