import { getPluralValue } from "@/lib";

enum Sizes {
  "S" = "S",
  "M" = "M",
  "L" = "L",
}

const prices: Record<Sizes, number> = {
  [Sizes.S]: 55,
  [Sizes.M]: 100,
  [Sizes.L]: 140,
};

const hookahAmount: Record<Sizes, number> = {
  [Sizes.S]: 1,
  [Sizes.M]: 2,
  [Sizes.L]: 3,
};

const bowlAmount: Record<Sizes, number> = {
  [Sizes.S]: 2,
  [Sizes.M]: 4,
  [Sizes.L]: 6,
};

const personAmount: Record<Sizes, string> = {
  [Sizes.S]: "2-3",
  [Sizes.M]: "4-6",
  [Sizes.L]: "6+",
};

export const getCards = () => {
  const sizes: Sizes[] = [Sizes.S, Sizes.M, Sizes.L];

  return sizes.map((size) => {
    const price = prices[size];
    const hookah = getPluralValue(hookahAmount[size], [
      "кальян",
      "кальяна",
      "кальянов",
    ]);

    const bowls = getPluralValue(bowlAmount[size], ["чаша", "чаши", "чаш"]);

    return {
      title: (
        <>
          Пакет <span className="text-gradient">{size}</span>
        </>
      ),
      subtitle: `${price} руб`,
      additionalInfo: [
        hookah,
        `${bowls} с кальнной смесью`,
        "Комплект угля и щипцы",
        "Плитка для углей",
      ],
      personAmount: personAmount[size],
      time: "24 ч",
    };
  });
};
