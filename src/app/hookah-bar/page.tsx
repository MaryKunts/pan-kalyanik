import { Metadata } from "next";
import { MainSection } from "@/components/mainSection";
import { BarAboutSection } from "./components/barAboutSection";
import { ContactsSection } from "./components/contactsSection";
import { BookingSection } from "@/components/bookingSection";
import { ShowMenuButton } from "@/components/showMenuButton";

export const metadata: Metadata = {
  title: "Пан КальяНик | Кальянная в Бресте",
  description:
    "Кальнная, аренда кальяна на дом, кейтеринг и кальянный аутсорсинг в Бресте",
  keywords:
    "кальян, аренда кальяна, кальян на дом, кальянный кейтеринг, кальянная Брест, кальянный бар, выездной кальян, кальянный аутсорсинг",
};

export default function HookahBarPage() {
  return (
    <>
      <MainSection
        title="Пан Кальяник"
        subtitle="Кальянная"
        description="Уютное пространство, созданное для тех, кто ценит комфорт, атмосферу и качественный отдых">
        <ShowMenuButton />
      </MainSection>
      <BarAboutSection />
      <ContactsSection />
      <BookingSection title="Хочешь забронировать стол?" />
    </>
  );
}
