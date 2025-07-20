import { Metadata } from "next";
import { BookingSection } from "@/components/bookingSection";
import { CateringAdvantagesSection } from "./components/cateringAdvantagesSection";
import { CateringImagesSection } from "./components/cateringImagesSection";
import { CateringStepsSection } from "./components/cateringStepsSection";
import { CateringTerms } from "./components/cateringTerms";
import { MainSection } from "@/components/mainSection";

export const metadata: Metadata = {
  title: "Пан КальяНик | Кейтеринг в Бресте",
  description:
    "Кальнная, аренда кальяна на дом, кейтеринг и кальянный аутсорсинг в Бресте",
  keywords:
    "кальян, аренда кальяна, кальян на дом, кальянный кейтеринг, кальянная Брест, кальянный бар, выездной кальян, кальянный аутсорсинг",
};

export default function CateringPage() {
  return (
    <>
      <MainSection
        title="Кальянный кейтеринг"
        description="Создаем дымную атмосферу на вашем мероприятии, где бы оно ни проходило"
      />
      <CateringAdvantagesSection />
      <CateringTerms />
      <CateringStepsSection />
      <CateringImagesSection />
      <BookingSection
        title="Забронируй кальянный кейтеринг"
        subtitle="Оставь заявку и мы всё организуем"
      />
    </>
  );
}
