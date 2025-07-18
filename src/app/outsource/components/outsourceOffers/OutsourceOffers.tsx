import Image from "next/image";

const offers = [
  {
    title: "Постановка кальянного бара с нуля",
    description:
      "Мы полностью берём на себя организацию кальянной зоны в Вашем заведении. Включает профессиональное оборудование, сертифицированные табаки, расходные материалы, обученных мастеров и контроль качества. Это полностью автономное решение, которое повышает ценность вашего заведения и приносит дополнительную прибыль без операционных сложностей.",
  },
  {
    title: "Консультация и сопровождение по запуску кальянного бара",
    description:
      "Подходит для заведений, которые хотят открыть собственный кальянный бар. Мы поможем на всех этапах: от подбора оборудования и табака до найма и обучения персонала. Также предоставим регламенты, стандарты и схемы работы, проверенные на практике.",
  },
  {
    title: "Выездная кальянная зона для мероприятий",
    description:
      "Идеально для ивентов, корпоративов, свадеб и закрытых вечеринок. Мы привозим всё необходимое: от мебели и оборудования до мастеров и угля. Зона оформляется в соответствии с вашим форматом и создаёт атмосферу премиального отдыха.",
  },
];

export default function OutsourceOffers() {
  return (
    <section className="px-10 md:px-20 xl:px-40 py-20">
      <div className="font-thin text-2xl text-center pb-5">
        Мы предлагаем полный спектр кальянных услуг в формате аутсорса, идеально
        подходящий для ресторанов, баров, лаунж-зон, мероприятий и частных
        площадок. Вы можете выбрать тот формат сотрудничества, который
        максимально соответствует вашим целям и бюджету.
      </div>
      <h2 className="text-3xl lg:text-5xl font-heading font-semibold text-center py-5 text-gradient">
        Наши форматы сотрудничества:
      </h2>
      <ul className="py-5 grid grid-cols-1 gap-10">
        {offers.map(({ title, description }) => {
          return (
            <li
              key={title}
              className="p-5 relative border border-border rounded-lg bg-card-gradient transition-colors duration-300 hover:border-primary/50">
              <Image
                src={"./sparkles.svg"}
                alt="sparlke"
                width={50}
                height={50}
                className="absolute top-2"
              />
              <div className="absolute w-[1px] h-8/12 md:h-7/12 bg-muted-foreground top-10 left-16"></div>
              <div className="pl-4">
                <h3 className="text-xl md:text-2xl pb-5 pl-13 font-light">
                  {title}
                </h3>
                <p className="pl-10 text-lg md:text-xl font-thin text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
