import Image from "next/image";

const advantages = [
  "Профессиональная установка и обслуживание кальянов в течение всего мероприятия",
  "Только сертифицированные табаки и проверенное оборудование",
  "Элегантная подача и оформление зоны кальяна в соответствии с форматом вашего события",
  "Вежливый, ненавязчивый персонал с опытом выездного обслуживания",
];

export default function CateringAdvantagesSection() {
  return (
    <section className="px-10 sm:px-40 lg:px-20 py-20 bg-backgroud via-background">
      <h2 className="font-semibold font-heading text-gradient text-center text-4xl md:text-5xl">
        Мы берём на себя всё
      </h2>
      <div className="font-thin pt-5 text-2xl md:text-3xl lg:w-9/12 text-center mx-auto">
        от доставки оборудования до работы профессиональных кальянных мастеров
        на площадке
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 pt-10">
        {advantages.map((advantage) => {
          return (
            <div
              key={advantage}
              className="flex flex-col gap-5 items-center p-6 rounded-lg border border-border bg-card-gradient shadow-sm text-card-foreground text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="flex justify-center items-center bg-gradient rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/shine_transparent.png"
                  alt="shine"
                  width={48}
                  height={48}
                />
              </div>
              <div className="font-thin text-xl text-muted-foreground my-4">
                {advantage}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
