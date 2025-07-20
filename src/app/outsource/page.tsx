import { MainSection } from "@/components/mainSection";
import { OutsourceOffers } from "./components/outsourceOffers";
import { OutsourceInfo } from "./components/outsourceInfo";
import { OutsourceAdvantages } from "./components/outsourceAdvantages";
import { BookingSection } from "@/components/bookingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пан КальяНик | Кальянный аутсорс в Бресте",
  description:
    "Кальнная, аренда кальяна на дом, кейтеринг и кальянный аутсорсинг в Бресте",
  keywords:
    "кальян, аренда кальяна, кальян на дом, кальянный кейтеринг, кальянная Брест, кальянный бар, выездной кальян, кальянный аутсорсинг",
};

export default function AutsourcePage() {
  return (
    <>
      <MainSection
        title="Кальянный аутсорс"
        description="Профессиональное решение для Вашего бизнеса"
      />
      <OutsourceOffers />
      <OutsourceInfo />
      <OutsourceAdvantages />
      <BookingSection
        title="Закажи консультацию сейчас"
        subtitle="И подними свой бизнес на новый уровень"
      />
    </>
  );
}
