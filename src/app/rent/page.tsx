import { RentCardsSection } from "@/app/rent/components/rentCardsSection";
import { RentInstructionSection } from "./components/rentInstructionSection";
import { BookingSection } from "@/components/bookingSection";
import { MainSection } from "@/components/mainSection";

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
