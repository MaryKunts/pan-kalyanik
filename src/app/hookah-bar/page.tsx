"use client";

import { BarMainSection } from "./components/barMainSection";
import { BarAboutSection } from "./components/barAboutSection";
import { ContactsSection } from "./components/contactsSection";
import { BookingSection } from "@/components/bookingSection";

export default function HookahBarPage() {
  return (
    <>
      <BarMainSection />
      <BarAboutSection />
      <ContactsSection />
      <BookingSection title="Хочешь забронировать стол?" />
    </>
  );
}
