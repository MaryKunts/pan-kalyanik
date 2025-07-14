import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PKN_BLOG } from "./const";

export default function BlogSection() {
  return (
    <section className="bg-card via-background py-20 px-10 sm:px-40 lg:px-20">
      <h3 className="font-heading text-3xl md:text-5xl text-center font-semibold">
        Интересуешься <span className="text-gradient">кальянной сферой</span>?
      </h3>
      <div className="flex justify-center flex-col lg:flex-row pt-10 gap-5 lg:gap-10">
        <Image
          src={"/pkn_blog.jpg"}
          alt=""
          width={400}
          height={300}
          className="self-center rounded-lg border-2 border-border brightness-90 transition-all duration-300 hover:border-accent"
        />
        <div className="flex flex-col gap-5 pt-3">
          <h3 className="font-[300] text-2xl text-center lg:text-left">
            Подпишись на блог Пана
          </h3>
          <div className="text-muted-foreground flex flex-col gap-3 font-thin text-lg">
            <p>
              Всё самое интересное в одном месте: тренды, новинки, обзоры
              табаков
            </p>
            <p>
              Следи за розыгрышами, участвуй в конкурсах и будь в курсе, чем
              живёт индустрия
            </p>
            <p>Здесь дым это не просто стиль, а целая культура</p>
            <Button className="w-[200px] 2xl:w-[400px] flex items-center justify-center p-5 font-semibold text-lg mt-5 mx-auto">
              <Link href={PKN_BLOG}>Подписаться</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
