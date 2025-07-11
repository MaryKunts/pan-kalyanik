import { RentCard } from "@/app/rent/components/rentCard";
import { getCards } from "./getCards";

export default function RentCardsSection() {
  const cards = getCards();

  return (
    <section className="my-20 mx-auto">
      <div className="grid justify-self-center grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 text-center max-w-11/12">
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
