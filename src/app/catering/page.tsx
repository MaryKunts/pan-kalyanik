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
    "Пан Кальяник — профессиональный кальянный сервис в Бресте. Кальянная с атмосферой, аренда кальяна на дом, выездной кейтеринг, аутсорс для заведений и консультации по открытию кальянного бизнеса. Высокий уровень сервиса, сертифицированное оборудование и лучшие мастера.",
  keywords:
    "кальян Брест, кальянная Брест, кальян на дом Брест, аренда кальяна, аренда кальяна Брест, кальян в аренду, кальян в аренду Брест, кальянный кейтеринг, кейтеринг кальян Брест, кальян на праздник, выездной кальян Брест, заказать кальян Брест, кальянный аутсорс, кальян с обслуживанием, кальян на свадьбу, кальян на корпоратив, кальянная с играми, кальян и приставка, кальянная с коктейлями, кальянная атмосфера, открыть кальянную, кальянное оборудование, франшиза кальянной, кальянные услуги Брест, топ кальян Брест, вкусный кальян Брест, профессиональные кальянщики, кальян под ключ, кальянный бар Брест, кальян под ваш бренд, кальянная культура, Pan Kalyanik, Пан Кальяник, Пан Кальяник Брест, кальянный сервис Брест, кальян в заведение, кальян в ресторан, кальян на мероприятие, hookah Brest, shisha Brest",
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
