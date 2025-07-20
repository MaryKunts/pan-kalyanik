import { RentCardsSection } from "@/app/rent/components/rentCardsSection";
import { RentInstructionSection } from "./components/rentInstructionSection";
import { BookingSection } from "@/components/bookingSection";
import { MainSection } from "@/components/mainSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пан КальяНик | Аренда кальяна в Бресте",
  description:
    "Кальнная, аренда кальяна на дом, кейтеринг и кальянный аутсорсинг в Бресте",
  keywords:
    "кальян, аренда кальяна, кальян на дом, кальянный кейтеринг, кальянная Брест, кальянный бар, выездной кальян, кальянный аутсорсинг",
};

export default function RentPage() {
  return (
    <>
      <MainSection
        title="Аренда кальяна"
        description="Комфортный отдых не выходя из дома"
      />
      <RentCardsSection />
      <RentInstructionSection />
      <BookingSection
        title="Закажи свой кальян прямо сейчас!"
        subtitle="Комфорт, вкус и атмосфера приедут к тебе"
      />
    </>
  );
}
