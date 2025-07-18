import { MainSection } from "@/components/mainSection";
import { OutsourceOffers } from "./components/outsourceOffers";
import { OutsourceInfo } from "./components/outsourceInfo";
import { OutsourceAdvantages } from "./components/outsourceAdvantages";
import { BookingSection } from "@/components/bookingSection";

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
