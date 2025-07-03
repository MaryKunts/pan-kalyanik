"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import { BarMainSection } from "./components/barMainSection";
import { BarAboutSection } from "./components/barAboutSection";
import { ContactsSection } from "./components/contactsSection";
import { BookTableSection } from "./components/bookTableSection";

export default function HookahBarPage() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <BarMainSection />
      <BarAboutSection />
      <ContactsSection />
      <BookTableSection />
    </APIProvider>
  );
}
