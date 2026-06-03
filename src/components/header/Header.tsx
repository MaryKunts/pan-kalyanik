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
    <div className="flex z-20 justify-between items-center gap-2 py-3 px-3 sm:py-4 sm:px-5 sticky top-0 bg-background border-b-1 border-b-border">
      <Link rel="canonical" href={ROUTES.ROOT} onNavigate={handleNavigation}>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gradient text-base sm:text-xl md:text-2xl font-heading font-semibold min-w-0">
          <Image
            priority
            src="/logo.png"
            alt="Логотип"
            width={80}
            height={80}
            className="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0"
          />
          <span className="truncate">Пан КальяНик</span>
        </div>
      </Link>
      <SocialMediaLinks />
    </div>
  );
}
