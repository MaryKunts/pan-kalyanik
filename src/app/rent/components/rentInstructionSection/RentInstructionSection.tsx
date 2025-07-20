import Image from "next/image";

const listItems = [
  {
    title: "Забери свой кальян из Пан Кальяник",
  },
  {
    title: "Проверь комплект аренды, у тебя должны быть:",
    items: [
      "Колба",
      "Шахта с блюдцем и уплотнителем",
      "Чаша с кальянной смесью",
      "Шланг с мундштуком",
      "Калауд",
      "Уголь и щипцы",
      "Плитка для розжига угля",
    ],
  },
  {
    title: "Налей воду в колбу",
    items: [
      "Заполни колбу водой примерно на 2–3 см выше конца погружной трубки (шахты)",
    ],
  },
  {
    title: "Собери кальян",
    items: [
      "Установи шахту в колбу через уплотнитель",
      "Убедись, что соединение плотное и герметичное",
      "Присоедини шланг к кальяну",
    ],
  },
  {
    title: "Установи чашу с кальянной смесью",
  },
  {
    title: "Положи калауд поверх чаши",
  },
  {
    title: "Разогрей угли",
    items: [
      "Разожги угли на плитке до полного покраснения (около 7–10 минут)",
      "Не используй сырые или плохо разожжённые угли — это испортит вкус",
    ],
  },
  {
    title: "Установи угли",
    items: [
      "Помести щипцами 3 разогретых угля в калауд",
      "Подожди 7-9 минут, чтобы чаша прогрелась",
    ],
  },
  {
    title: "Проверь тягу",
    items: [
      "После прогрева сделай несколько затяжек",
      "Если дым густой и насыщенный, а вкус приятный, то кальян готов к полноценному курению",
      "Если вы чувствуешь, что вкус табака не насыщенный, продолжи нагрев дальше",
    ],
  },
  {
    title: "Наслаждайся!",
    items: [
      "Регулируй количество углей при необходимости: много жара — убери один уголь, мало дыма — добавь уголь или продуй кальян",
    ],
  },
];

export default function RentInstructionSection() {
  return (
    <section className="py-20 mx-auto bg-card/30">
      <h2 className="text-center font-heading font-semibold text-4xl">
        Как забить кальян дома?
      </h2>
      <h3 className="text-center flex items-center justify-center font-heading font-semibold text-gradient text-3xl">
        <Image src={"/shine_colored.png"} alt="" width={40} height={40} />
        Советы от Пана
        <Image
          src={"/shine_colored.png"}
          alt=""
          width={40}
          height={40}
          className="rotate-180"
        />
      </h3>
      <ol className="relative flex flex-col gap-8 p-10">
        <Image
          src={"/cat.png"}
          alt=""
          width={300}
          height={600}
          className="absolute hidden lg:block bottom-30 right-10 2xl:right-30 -scale-x-100"
        />
        {listItems.map(({ title, items }, index) => {
          return (
            <div
              key={title}
              className="flex items-start md:pl-20 gap-6 md:gap-10 md:max-w-11/12">
              <div className="h-16 w-16 rounded-full bg-gradient flex items-center justify-center text-2xl font-semibold">
                {index + 1}
              </div>
              <li className="flex  flex-col font-semibold text-xl self-center max-w-8/12">
                {title}
                {items && (
                  <ul className="list-disc pl-6 pt-3">
                    {items.map((textItem) => {
                      return (
                        <li
                          key={textItem}
                          className="font-thin marker:text-accent text-muted-foreground">
                          {textItem}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            </div>
          );
        })}
      </ol>
    </section>
  );
}
