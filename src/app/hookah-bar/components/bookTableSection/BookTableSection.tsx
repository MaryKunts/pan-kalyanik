import { PanKalyanik } from "@/const/panKalyanik";
import { getTelLink } from "@/utils/getCleanedTel";
import Link from "next/link";

export default function BookTableSection() {
  return (
    <section className="bg-gradient py-20 text-center">
      <h3 className="font-heading font-bold text-3xl md:text-4xl ">
        Хочешь забронировать стол?
      </h3>
      <div className="text-xl text-center mt-2">
        Свяжись с нами и обеспечь себе яркий вечер
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-7 items-center my-10">
        <Link href={"https://www.instagram.com/direct/t/17843483586046428"}>
          <button className="flex items-center justify-center py-6 px-8 h-11 cursor-pointer rounded-md bg-secondary ring-offset-background text-black font-medium text-lg transition-colors duration-300 hover:bg-secondary/80 hover:shadow-lg">
            Написать в Инстаграм
          </button>
        </Link>
        <a href={getTelLink(PanKalyanik.contacts.tel)}>
          <button className="flex items-center justify-center py-6 px-8 h-11 cursor-pointer rounded-md border border-white ring-offset-background bg-background text-white font-medium text-lg transition-colors duration-300 hover:text-primary hover:bg-white">
            {`Позвонить ${PanKalyanik.contacts.tel}`}
          </button>
        </a>
      </div>
    </section>
  );
}
