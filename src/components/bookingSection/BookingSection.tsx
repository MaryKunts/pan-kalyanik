import { PanKalyanik } from "@/const/panKalyanik";
import { getTelLink } from "@/utils/getCleanedTel";
import Link from "next/link";
import { SOCIAL_MEDIA_LINKS } from "../socialMediaLinks/const";

interface Props {
  title: string;
  subtitle?: string;
}

export default function BookingSection({
  title,
  subtitle = "Свяжись с нами и обеспечь себе яркий вечер",
}: Props) {
  return (
    <section className="bg-gradient py-20 text-center px-5">
      <h3 className="font-heading font-bold text-3xl md:text-4xl ">{title}</h3>
      <div className="text-xl text-center mt-2">{subtitle}</div>
      <div className="flex justify-center flex-col md:flex-row gap-7 items-center my-10">
        <Link
          href={SOCIAL_MEDIA_LINKS.INSTAGRAM_DIRECT}
          target="_blank"
          rel="canonical">
          <button className="flex items-center justify-center py-6 px-8 h-11 cursor-pointer rounded-md bg-secondary ring-offset-background text-black font-medium text-lg transition-colors duration-300 hover:bg-secondary/80 hover:shadow-lg">
            Написать в Инстаграм
          </button>
        </Link>
        <Link href={getTelLink(PanKalyanik.contacts.tel)} rel="canonical">
          <button className="flex items-center justify-center py-6 px-8 h-11 cursor-pointer rounded-md border border-white ring-offset-background bg-background text-white font-medium text-lg transition-colors duration-300 hover:text-primary hover:bg-white">
            Позвонить нам
          </button>
        </Link>
      </div>
    </section>
  );
}
