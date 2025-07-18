import { RentCardsSection } from "@/app/rent/components/rentCardsSection";
import { RentMainSection } from "@/app/rent/components/rentMainSection";
import { RentInstructionSection } from "./components/rentInstructionSection";
import { BookingSection } from "@/components/bookingSection";

export default function RentPage() {
  return (
    <>
      <RentMainSection />
      <RentCardsSection />
      <RentInstructionSection />
      <BookingSection
        title="Закажи свой кальян прямо сейчас!"
        subtitle="Комфорт, вкус и атмосфера приедут к тебе"
      />
    </>
  );
}
