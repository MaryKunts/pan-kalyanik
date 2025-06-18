"use client";

import Image from "next/image";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";
import Link from "next/link";
import { ROUTES } from "@/const/routes";

type OnNavigateEventHandler = (event: { preventDefault: () => void }) => void;

export default function Header() {
  const handleNavigation: OnNavigateEventHandler = (e) => {
    if (window.location.pathname === ROUTES.ROOT) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }
  };

  return (
    <div className="flex z-20 justify-between items-center py-4 px-5 sticky top-0 bg-background border-b-1 border-b-border">
      <Link href={ROUTES.ROOT} onNavigate={handleNavigation}>
        <div className="flex items-center gap-2 text-gradient text-2xl font-heading font-bold">
          <Image
            src="/pan-kalyanik-logo.png"
            alt="Логотип"
            width={80}
            height={80}
            className=""
          />
          Пан КальяНик
        </div>
      </Link>
      <SocialMediaLinks />
    </div>
  );
}
