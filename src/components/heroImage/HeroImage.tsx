import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function HeroImage() {
  return (
    <section className="min-h-[calc(100vh-113px)] bg-gradient-to-br to-muted via-background pt-24 md:pt-40 xl:pt-24 pb-16 animate-fade-in">
      <div className="relative z-10 px-5 sm:px-10 md:px-20">
        <div className="font-heading text-gradient text-5xl md:text-7xl text-center font-bold ">
          Пан КальяНик
        </div>
        <div className="font-heading text-foreground text-4xl md:text-6xl text-center font-bold">
          Кальянный сервис
        </div>
        <div className="text-muted-foreground text-2xl text-center mt-5 mx-auto max-w-3xl md:mt-10">
          Погрузитесь в атмосферу премиального отдыха и ароматного дыма.
          Профессиональный подход, качественный табак и безупречный сервис на
          любой площадке.
        </div>
        <div className="flex items-center justify-between text-center text-base/4 lg:w-7/12 mx-auto mt-5 text-muted-foreground">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            Премиум табаки
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            Опытные мастера
          </div>
          <div className="flex items-center gap-1">
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
