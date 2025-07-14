import Image from "next/image";

const advantages = [
  {
    title: "Обученные мастера под ваш проект",
    subtitle:
      "Мы подбираем и обучаем персонал под стандарты вашего заведения — сервис на уровне премиум-ресторанов",
    img: "/person-check.svg",
  },
  {
    title: "Полное оснащение с нуля",
    subtitle:
      "Сами ставим кальянный бар: от оборудования и табака до логистики и стандартов работы",
    img: "/tool.svg",
  },
  {
    title: "Масштабируемость под формат",
    subtitle:
      "Открываете уютное кафе или большую лаунж-зону? Мы адаптируем решение под любые масштабы и задачи",
    img: "/graphic.svg",
  },
  {
    title: " Безопасность и стандарты",
    subtitle:
      "Всё оборудование сертифицировано, процессы соответствуют требованиям безопасности и гигиены",
    img: "/approve.svg",
  },
];

export default function AutsourceAdvantages() {
  return (
    <section className="px-10 md:px-20 2xl:px-40 py-20">
      <h2 className="font-semibold font-heading text-center text-gradient text-3xl lg:text-5xl">
        Почему выбирают нас?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-10">
        {advantages.map(({ title, subtitle, img }) => {
          return (
            <div
              key={title}
              className="flex flex-col gap-5 items-center p-6 rounded-lg border border-border bg-card-gradient shadow-sm text-card-foreground text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="flex justify-center items-center bg-gradient rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                <Image src={img} alt="" width={30} height={30} />
              </div>
              <h4 className="font-semibold text-xl font-heading">{title}</h4>
              <p className="text-muted-foreground font-thin">{subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
