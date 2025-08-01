import { MainSection } from "@/components/mainSection";
import { OutsourceOffers } from "./components/outsourceOffers";
import { OutsourceInfo } from "./components/outsourceInfo";
import { OutsourceAdvantages } from "./components/outsourceAdvantages";
import { BookingSection } from "@/components/bookingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пан КальяНик | Кальянный аутсорс в Бресте",
  description:
    "Пан Кальяник — профессиональный кальянный сервис в Бресте. Кальянная с атмосферой, аренда кальяна на дом, выездной кейтеринг, аутсорс для заведений и консультации по открытию кальянного бизнеса. Высокий уровень сервиса, сертифицированное оборудование и лучшие мастера.",
  keywords:
    "кальян Брест, кальянная Брест, кальян на дом Брест, аренда кальяна, аренда кальяна Брест, кальян в аренду, кальян в аренду Брест, кальянный кейтеринг, кейтеринг кальян Брест, кальян на праздник, выездной кальян Брест, заказать кальян Брест, кальянный аутсорс, кальян с обслуживанием, кальян на свадьбу, кальян на корпоратив, кальянная с играми, кальян и приставка, кальянная с коктейлями, кальянная атмосфера, открыть кальянную, кальянное оборудование, франшиза кальянной, кальянные услуги Брест, топ кальян Брест, вкусный кальян Брест, профессиональные кальянщики, кальян под ключ, кальянный бар Брест, кальян под ваш бренд, кальянная культура, Pan Kalyanik, Пан Кальяник, Пан Кальяник Брест, кальянный сервис Брест, кальян в заведение, кальян в ресторан, кальян на мероприятие, hookah Brest, shisha Brest",
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
