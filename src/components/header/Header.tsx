import Image from "next/image";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";

export default function Header() {
  return (
    <div className="flex z-20 justify-between items-center py-4 px-5 sticky top-0 bg-background border-b-1 border-b-border">
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
      <SocialMediaLinks />
    </div>
  );
}
