import { RentCard } from "@/app/rent/components/rentCard";
import { getCards } from "./getCards";

export default function RentCardsSection() {
  const cards = getCards();

  return (
    <section className="py-20 px-10 md:px-20">
      <h2 className="font-semibold font-heading text-gradient text-center text-4xl md:text-5xl">
        Аренда кальяна на дом
      </h2>
      <div className="font-thin pt-5 text-2xl md:text-3xl lg:w-9/12 text-center mx-auto">
        это идеальное решение для домашней вечеринки с друзьями, романтического
        свидания или отдыха после рабочего дня
      </div>
      <div className="grid justify-self-center grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 text-center max-w-11/12 pt-10">
        {cards.map((card) => (
          <RentCard key={card.subtitle} {...card} />
        ))}
      </div>
      <div className="pt-7 mx-auto max-w-10/12">
        *Дополнительная кальянная смесь + уголь –– от
        <span className="text-gradient text-2xl font-semibold font-heading">
          {" "}
          14 руб
        </span>
      </div>
    </section>
  );
}
