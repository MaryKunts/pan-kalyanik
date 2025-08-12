import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { SOCIAL_MEDIA_LINKS } from "@/components/socialMediaLinks/const";

export default function HeroImage() {
  return (
    <section className="min-h-[calc(100vh-113px)] flex justify-center bg-gradient-to-br to-muted via-background md:pb-16 lg:pt-24  animate-fade-in">
      <div className="relative z-10 flex flex-col items-center justify-around px-5 md:px-20">
        <div>
          <div className="font-heading text-gradient text-4xl sm:text-5xl md:text-7xl text-center font-bold">
            Пан КальяНик
          </div>
          <div className="font-heading text-foreground text-3xl sm:text-4xl md:text-6xl text-center font-bold">
            Кальянный сервис
          </div>

          <div className="text-muted-foreground font-thin text-xl md:text-2xl lg:text-3xl text-center mt-10 md:mt-20 mb-5 mx-auto max-w-3xl">
            Погрузитесь в атмосферу премиального отдыха и ароматного дыма.
            Профессиональный подход, качественный табак и безупречный сервис на
            любой площадке
          </div>
          <a
            href={SOCIAL_MEDIA_LINKS.TELEGRAM}
            className="w-75 mt-10 mx-auto flex justify-center items-center bg-gradient text-primary-foreground rounded-md h-11 text-lg px-8 py-6  whitespace-nowrap font-medium ring-offset-background focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden">
            Оформить заказ
          </a>
        </div>

        <div className="flex items-start justify-between flex-col gap-3 sm:gap-6 md:flex-row lg:gap-10 text-center font-thin text-lg md:text-xl mx-auto py-10 text-muted-foreground">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            Премиум табаки
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            Опытные мастера
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            Изысканные миксы
          </div>
        </div>
      </div>

      <div className="absolute left-10 top-40 h-72 w-72 animate-float rounded-full bg-primary blur-3xl bg-gradient-to-br to-50% to-muted"></div>
      <div className="absolute right-5 bottom-5 h-72 w-72 animate-float rounded-full bg-primary blur-3xl bg-gradient-to-bl to-50% to-muted"></div>
    </section>
  );
}
