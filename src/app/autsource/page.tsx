import { MainSection } from "@/components/mainSection";
import { AutsourceOffers } from "./components/autsourceOffers";
import { AutsourceInfo } from "./components/autsourceInfo";
import { AutsourceAdvantages } from "./components/autsourceAdvantages";
import { BookingSection } from "@/components/bookingSection";

export default function AutsourcePage() {
  return (
    <>
      <MainSection
        title="Кальянный аутсорс"
        description="Профессиональное решение для Вашего бизнеса"
      />
      <AutsourceOffers />
      <AutsourceInfo />
      <AutsourceAdvantages />
      <BookingSection
        title="Закажи консультацию сейчас"
        subtitle="И подними свой бизнес на новый уровень"
      />
    </>
  );
}
