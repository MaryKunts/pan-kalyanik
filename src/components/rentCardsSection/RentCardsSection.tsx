import { RentCard } from "@/components/rentCard";
import { getCards } from "./getCards";

export default function RentCardsSection() {
  const cards = getCards();

  return (
    <section className="my-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-11/12">
      {cards.map((card) => (
        <RentCard key={card.subtitle} {...card} />
      ))}
    </section>
  );
}
