import { PanKalyanik } from "@/const/panKalyanik";
import { getTelLink } from "@/utils/getCleanedTel";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full px-4 py-5 sm:px-6 sm:py-6 border-t-1 border-t-border text-foreground/75">
      <div className="w-full max-w-6xl text-center">
        <div className="flex flex-col items-center gap-3 sm:gap-4 pb-2 sm:pb-4">
          <div className="space-y-1.5 text-[11px] sm:text-xs leading-relaxed text-foreground/70 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-foreground">
              ООО &quot;НИКОЛИГРУПП&quot;
            </p>
            <p>
              Адрес: БЕЛАРУСЬ, Г. БРЕСТ, УЛ. КАРБЫШЕВА, ДОМ 28, (ПОДВАЛЬНЫЙ
              ЭТАЖ), 224005
            </p>
            <p>УНП: 291783822</p>
            <p>
              Телефон:
              <Link
                rel="canonical"
                href={getTelLink(PanKalyanik.contacts.tel)}
                className="underline-offset-2 hover:underline text-foreground"
              >
                {PanKalyanik.contacts.tel}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
