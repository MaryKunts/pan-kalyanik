export interface MenuPosition {
  id: string;
  title: string;
  price: string;
  amount?: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuPosition[];
}

export interface MainMenuCategory {
  id: string;
  title: string;
  items?: MenuPosition[];
  subcategories?: MenuCategory[];
}

export const allMenuCategories: MenuCategory[] = [
  {
    id: "hookahs",
    title: "Кальяны",
    items: [
      {
        id: "classic",
        title: "Классический кальян",
        price: "43",
        description: "Авторская смесь премиум-табака",
        tags: ["Средний", "Фирменный", "Топ"],
        image: "/hookah.png",
      },
      {
        id: "cigar-leaf",
        title: "Кальян сигарный лист",
        price: "53",
        description: "Плотный аромат и насыщенный вкус",
        tags: ["Крепкий", "Насыщенный"],
        image: "/hookah.png",
      },
      {
        id: "major",
        title: "Кальян для мажоров",
        price: "86",
        description: "Такой же кальян как за 43, только в 2 раза дороже",
        tags: ["Авторский", "Фирменный"],
        image: "/hookah.png",
      },
    ],
  },

  {
    id: "author-cocktails",
    title: "Авторские коктейли",
    items: [
      {
        id: "basilio",
        title: "Кот Базилио",
        price: "19",
        description: "Джин, черная смородина, лимон, игристое",
        tags: ["Ягодный", "Праздничный"],
        image: "/basilion.png",
      },
      {
        id: "givoglot",
        title: "Кот Живоглот",
        price: "19",
        description: "Бренди, вишня, лимон, апельсин",
        tags: ["Согревающий", "Терпкий", "Насыщенный"],
        image: "/givoglot.png",
      },
      {
        id: "bob",
        title: "Кот по кличке Боб",
        price: "19",
        description: "Ром, арбуз, лимон, содовая",
        tags: ["Освежаюший", "Летний"],
        image: "/bob.png",
      },
      {
        id: "garfield",
        title: "Кот Гарфилд",
        price: "19",
        description: "Текила, ананас, грейпфрут, чили, лимон",
        tags: ["Пикантный", "Тропический"],
        image: "/garfield.png",
      },
      {
        id: "begemot",
        title: "Кот Бегемот",
        price: "19",
        description: "Водка, банан, сливки",
        tags: ["Сливочный", "Десертный"],
        image: "/begemot.png",
      },
      {
        id: "leopold",
        title: "Кот Леопольд",
        price: "19",
        description: "Джин, бузина, белое вино, тоник",
        tags: ["Цветочный", "Легкий"],
        image: "/leopold.png",
      },
    ],
  },
  {
    id: "classic-cocktails",
    title: "Классические коктейли",
    items: [
      {
        id: "negroni",
        title: "Негрони",
        price: "23",
        description: "Джин, вермут, биттер",
        tags: ["Крепкий", "Травяной", "С горчинкой"],
        image: "/negroni.png",
      },
      {
        id: "aperol-spritz",
        title: "Апероль-спритц",
        price: "23",
        description: "Апероль, игристое, содовая",
        tags: ["Легкий", "Освежающий", "Цитрусовый"],
        image: "/aperol.png",
      },
      {
        id: "white-russian",
        title: "Белый русский",
        price: "23",
        description: "Водка, кофейный ликер, сливки",
        tags: ["Десертный", "Сливочный"],
        image: "/white-russian.png",
      },
      {
        id: "cuba-libre",
        title: "Куба либре",
        price: "23",
        description: "Ром, пепси, лайм",
        tags: ["Сладкий", "Пряный", "Топ"],
        image: "/cuba-libre.png",
      },
      {
        id: "gin-tonic",
        title: "Джин тоник",
        price: "23",
        description: "Джин, тоник, лимон",
        tags: ["Сухой", "Хвойный"],
        image: "/gin-tonic.png",
      },
      {
        id: "daiquiri",
        title: "Даикири",
        price: "23",
        description: "Ром, лайм, сахарный сироп",
        tags: ["Кисло-сладкий", "Цитрусовый"],
        image: "/daiquiri.png",
      },
    ],
  },
  {
    id: "shots",
    title: "Шоты",
    items: [
      {
        id: "egypt",
        title: "В Египет",
        price: "35",
        description: "Ром, манго, маракуйя, апельсин, лимон",
        tags: ["Кисло-сладкий", "Тропический"],
        image: "/shot_6.png",
      },
      {
        id: "kompot",
        title: "Как компотик",
        price: "35",
        description: "Джин, клюква, черная смородина, малина",
        tags: ["Цитрусовый", "Ягодный"],
        image: "/shot_5.png",
      },
      {
        id: "home",
        title: "Мы домой летим",
        price: "35",
        description: "Водка, лайм, мята",
        tags: ["Мятный", "Кислый"],
        image: "/shot_4.png",
      },
      {
        id: "soidet",
        title: "И так сойдет",
        price: "35",
        description: "Текила, чили, манго, лайм",
        tags: ["Пикантный", "Крепкий", "Пряный"],
        image: "/shot_3.png",
      },
      {
        id: "dich",
        title: "Какая-то дичь",
        price: "35",
        description: "Бренди, вишня, яблоко, чабрец",
        tags: ["Сладкий", "Пряный", "Согревающий"],
        image: "/shot_1.png",
      },
      {
        id: "river",
        title: "Идущий к реке",
        price: "35",
        description: "Виски, чай, яблоко, лимон",
        tags: ["Согревающий", "Пряный"],
        image: "/shot_2.png",
      },
      {
        id: "tinctures",
        title: "Настойка",
        price: "6",
        description:
          "Манго-маракуйя, Вишневая, Сливочная, Личи-грейпфрут, Кофейная, Клюковка",
        tags: ["Сладкий", "Фруктовый", "Сливочный", "Топ"],
        image: "/shots_2.png",
      },
    ],
  },
  {
    id: "beer",
    title: "Пиво",
    items: [
      {
        id: "beer",
        title: "Разливное пиво",
        price: "8,5",
        description: "Лидское Premium, Лидское Аксамитнае, Лидское Пшеничное",
        tags: ["На кране", "Топ"],
      },
      {
        id: "brugge",
        title: "Вечер в Брюгге",
        price: "8,5",
        description: "Темное с вишней",
        tags: ["Насыщенный"],
      },
      {
        id: "rubin",
        title: "Лидское Рубиновое",
        price: "11",
        description: "Светлое с малиной и брусникой",
        tags: ["Фруктовый", "Сладкий"],
      },
      {
        id: "jantar",
        title: "Лидское Янтарное",
        price: "11",
        description: "Светлое с карамельными нотами",
        tags: ["С горчинкой", "Фруктово-пряный"],
      },
      {
        id: "rocky-crocky",
        title: "Роки-кроки",
        price: "8,5",
        description: "Малина-гранат, Вишня, Энергетик",
        tags: ["Фруктовый", "Сладкий"],
      },
      {
        id: "non-alcoholic",
        title: "Безалкогольное пиво",
        price: "8,5",
        description: "Пшеничное нефильтрованное",
        tags: ["Без алкоголя"],
      },
    ],
  },
  {
    id: "whisky",
    title: "Виски",
    items: [
      {
        id: "bushmills",
        title: "Bushmills",
        price: "12",
        description: "Ирландский купажированный виски",
      },
      {
        id: "jim-beam",
        title: "Jim Beam",
        price: "12",
        description: "Американский бурбон",
      },

      {
        id: "red-label",
        title: "Red Label",
        price: "12",
        description: "Шотландский купажированный виски",
      },
      {
        id: "connemara",
        title: "Connemara",
        price: "24",
        description: "Ирландский односолодовый виски",
      },
      {
        id: "black-velvet",
        title: "Black Velvet",
        price: "12",
        description: "Канадский карамельный виски",
      },
      {
        id: "jack-daniels",
        title: "Jack Daniels",
        price: "18",
        description: "Американский бурбон",
      },
    ],
  },
  {
    id: "rum",
    title: "Ром",
    items: [
      {
        id: "captain-morgan",
        title: "Captain Morgan Black",
        price: "12",
        description: "Великобритания",
      },
      {
        id: "captain-morgan",
        title: "Captain Morgan White",
        price: "12",
        description: "Великобритания",
      },
      {
        id: "captain-morgan",
        title: "Captain Morgan Spiced Gold",
        price: "12",
        description: "Великобритания",
      },
      {
        id: "captain-morgan",
        title: "Captain Morgan Black Spiced",
        price: "14",
        description: "Великобритания",
      },
    ],
  },
  {
    id: "vodka",
    title: "Водка",
    items: [
      {
        id: "bulbash",
        title: "Бульбашъ нано",
        price: "6",
        description: "Беларусь",
      },
      {
        id: "danzka",
        title: "Danzka",
        price: "9",
        description: "Германия",
      },
    ],
  },
  {
    id: "gin",
    title: "Джин",
    items: [
      {
        id: "barrister-classic",
        title: "Barrister Classic",
        price: "12",
        description: "Россия",
      },
      {
        id: "barrister-berry",
        title: "Barrister Berry",
        price: "12",
        description: "Россия",
      },
      {
        id: "tanqueray",
        title: "Tanqueray",
        price: "21",
        description: "Великобритания",
      },
    ],
  },
  {
    id: "tequila",
    title: "Текила",
    items: [
      {
        id: "silver",
        title: "Sierra Silver",
        price: "12",
        description: "Мексика",
      },
      {
        id: "gold",
        title: "Sierra Gold",
        price: "12",
        description: "Мексика",
      },
    ],
  },
  {
    id: "brandy",
    title: "Бренди",
    items: [
      {
        id: "metaxa",
        title: "Metaxa",
        price: "14",
        description: "Греция, 5 лет",
      },
      {
        id: "araspel",
        title: "Араспел",
        price: "9",
        description: "Армения, 5 лет",
      },
      {
        id: "courvoisier",
        title: "Courvoisier VS",
        price: "9",
        description: "Франция",
      },
    ],
  },
  {
    id: "liqueur",
    title: "Ликеры",
    items: [
      {
        id: "aperol",
        title: "Aperol Aperitivo",
        price: "11",
      },
      {
        id: "campari",
        title: "Campari Bitter",
        price: "12",
      },
      {
        id: "jagermeister",
        title: "Jagermeister",
        price: "16",
      },
    ],
  },
  {
    id: "wine",
    title: "Вино",
    items: [
      {
        id: "wine",
        title: "Вино",
        price: "12",
        description: "Красное, белое, розовое, игристое",
      },
    ],
  },
  {
    id: "lemonades",
    title: "Лимонады",
    items: [
      {
        id: "mojito",
        title: "Мохито",
        price: "8/19",
        amount: "300 мл/1 л",
        image: "/lemonade.png",
      },
      {
        id: "mango",
        title: " Манго",
        price: "8/19",
        amount: "300 мл/1 л",
        image: "/lemonade.png",
      },
      {
        id: "raspberry",
        title: "Малина-мята",
        price: "8/19",
        amount: "300 мл/1 л",
        image: "/lemonade.png",
      },
      {
        id: "aperol",
        title: "Апероль-вишня",
        price: "8/19",
        amount: "300 мл/1 л",
        image: "/lemonade.png",
      },
      {
        id: "strawberry",
        title: "Клубника-банан",
        price: "8/19",
        amount: "300 мл/1 л",
        image: "/lemonade.png",
      },
      {
        id: "blackberry",
        title: "Ежевичный",
        price: "8/19",
        amount: "300 мл/1 л",
        image: "/lemonade.png",
      },
    ],
  },
  {
    id: "beverages",
    title: "Напитки",
    items: [
      {
        id: "soft-drinks",
        title: "Безалкогольные напитки",
        price: "5",
        description: "Пепси, 7 АП, Маунтин Дью, Швепс",
      },
      {
        id: "juices",
        title: "Соки",
        price: "5",
        description:
          "Яблоко, Ананас, Апельсин, Виноград, Вишня, Морс, Персик, Манго-апельсин, Томат",
      },
      {
        id: "kvas",
        title: "Квас",
        price: "5",

        tags: ["На кране", "Топ"],
      },
      {
        id: "energy-drinks",
        title: "Энергетик",
        price: "9",
      },
    ],
  },
  {
    id: "tea",
    title: "Чай",
    items: [
      {
        id: "kiwi-pear",
        title: "Киви-груша",
        price: "15",
        amount: "1 л",
        tags: ["Фруктовый"],
        image: "/fruit-tea.png",
      },
      {
        id: "cherry-icecream",
        title: "Вишневое мороженое",
        price: "15",
        amount: "1 л",
        tags: ["Фруктовый"],
        image: "/fruit-tea.png",
      },
      {
        id: "lichee-lemon",
        title: "Личи-лимон",
        price: "15",
        amount: "1 л",
        tags: ["Фруктовый"],
        image: "/fruit-tea.png",
      },
      {
        id: "fruit",
        title: "Фруктовый с можжевельником",
        price: "15",
        amount: "1 л",
        tags: ["Фруктовый"],
        image: "/fruit-tea.png",
      },
      {
        id: "pineapple",
        title: "Ананас-физалис",
        price: "15",
        amount: "1 л",
        tags: ["Фруктовый"],
        image: "/fruit-tea.png",
      },
      {
        id: "assam",
        title: "Ассам",
        price: "15",
        amount: "1 л",
        tags: ["Черный"],
        image: "/black-tea.png",
      },
      {
        id: "earl-grey",
        title: "Эрл Грей",
        price: "15",
        amount: "1 л",
        tags: ["Черный"],
        image: "/black-tea.png",
      },
      {
        id: "taeznyi",
        title: "Таежный сбор",
        price: "15",
        amount: "1 л",
        tags: ["Черный"],
        image: "/black-tea.png",
      },
      {
        id: "cherry-rum",
        title: "Вишня с ромом",
        price: "15",
        amount: "1 л",
        tags: ["Черный"],
        image: "/black-tea.png",
      },
      {
        id: "roibus-tea",
        title: "Ройбуш земляника",
        price: "15",
        amount: "1 л",
        tags: ["Травяной"],
        image: "/herbal-tea.png",
      },
      {
        id: "apricot",
        title: "Абрикос-вербена",
        price: "15",
        amount: "1 л",
        tags: ["Травяной"],
        image: "/herbal-tea.png",
      },
      {
        id: "buckwheat",
        title: "Гречишный липовый мед",
        price: "15",
        amount: "1 л",
        tags: ["Травяной"],
        image: "/herbal-tea.png",
      },
      {
        id: "sencha",
        title: "Сенча",
        price: "15",
        amount: "1 л",
        tags: ["Зеленый"],
        image: "/green-tea.png",
      },
      {
        id: "moli",
        title: "Моли хуа ча",
        price: "15",
        amount: "1 л",
        tags: ["Зеленый"],
        image: "/green-tea.png",
      },
      {
        id: "italian-pie",
        title: "Итальянсий пирог",
        price: "15",
        amount: "1 л",
        tags: ["Зеленый"],
        image: "/green-tea.png",
      },
      {
        id: "mint",
        title: "Чай с мятой",
        price: "15",
        amount: "1 л",
        tags: ["Зеленый"],
        image: "/green-tea.png",
      },
      {
        id: "golden-monkey",
        title: "Золотая обезьяна",
        price: "15",
        amount: "1 л",
        tags: ["Красный"],
        image: "/red-tea.png",
      },
      {
        id: "picky",
        title: "Ворсистые пики",
        price: "15",
        amount: "1 л",
        tags: ["Красный"],
        image: "/red-tea.png",
      },
      {
        id: "da-hun-pao",
        title: "Да Хун Пао Красный халат",
        price: "20",
        amount: "1 л",
        tags: ["Улун"],
        image: "/tea.png",
      },
      {
        id: "teguanian-tea",
        title: "Тегуанинь",
        price: "20",
        amount: "1 л",
        tags: ["Улун"],
        image: "/tea.png",
      },
      {
        id: "gaba",
        title: "Габа Алишань",
        price: "20",
        amount: "1 л",
        tags: ["Улун"],
        image: "/tea.png",
      },
      {
        id: "melon",
        title: "Дыня",
        price: "20",
        amount: "1 л",
        tags: ["Улун"],
        image: "/tea.png",
      },
      {
        id: "nai-san",
        title: "Няй Сян молочный",
        price: "20",
        amount: "1 л",
        tags: ["Улун"],
        image: "/tea.png",
      },
      {
        id: "shu-cherry",
        title: "Шу вишневый",
        price: "20",
        amount: "1 л",
        tags: ["Пуэр"],
        image: "/tea.png",
      },
      {
        id: "sheng-pu-er",
        title: "Шен Юэ Гуан Бай",
        price: "20",
        amount: "1 л",
        tags: ["Пуэр"],
        image: "/tea.png",
      },
    ],
  },
  {
    id: "cofee",
    title: "Кофе",
    items: [
      {
        id: "espresso",
        title: "Эспрессо",
        price: "4",
      },
      {
        id: "americano",
        title: "Американо",
        price: "4",
      },
      {
        id: "cappuccino",
        title: "Капучино",
        price: "5",
      },
      {
        id: "latte",
        title: "Латте",
        price: "5",
      },
      {
        id: "flat-white",
        title: "Флэт уайт",
        price: "7",
      },
      {
        id: "bumble",
        title: "Бамбл кофе",
        price: "7",
        description: "Апельсин, грейпфрут, персик",
        tags: ["Освежающий"],
      },
    ],
  },
  {
    id: "snacks",
    title: "Закуски",
    items: [
      {
        id: "crackers",
        title: "Сухарики",
        price: "5",
        amount: "100 г",
      },
      {
        id: "peanuts",
        title: "Арахис",
        price: "5",
        amount: "50 г",
      },
      {
        id: "crisps",
        title: "Чипсы",
        price: "7",
        amount: "75 г",
      },
      {
        id: "meat-chips",
        title: "Мясные чипсы",
        price: "6",
        amount: "30 г",
      },
      {
        id: "kabanos",
        title: "Кабаносы",
        price: "7",
        amount: "85 г",
      },
      {
        id: "cheese-chips",
        title: "Сырные подушечки",
        price: "7",
        amount: "75 г",
      },
    ],
  },
];

const HOOKAHS_CATEGORY_ID = "hookahs";
const SNACKS_CATEGORY_ID = "snacks";
const BAR_SUBCATEGORY_IDS = [
  "lemonades",
  "beverages",
  "cofee",
  "author-cocktails",
  "classic-cocktails",
  "shots",
  "beer",
  "whisky",
  "rum",
  "vodka",
  "gin",
  "tequila",
  "brandy",
  "liqueur",
  "wine",
  "tea",
  "cocktails",
];

const hookahsCategory = allMenuCategories.find(
  ({ id }) => id === HOOKAHS_CATEGORY_ID,
);
const snacksCategory = allMenuCategories.find(
  ({ id }) => id === SNACKS_CATEGORY_ID,
);
const barSubcategories = allMenuCategories.filter(({ id }) =>
  BAR_SUBCATEGORY_IDS.includes(id),
);

export const mainMenuCategories: MainMenuCategory[] = [
  {
    id: "hookahs",
    title: "Кальяны",
    items: hookahsCategory?.items ?? [],
  },
  {
    id: "bar",
    title: "Бар",
    subcategories: barSubcategories,
  },
  {
    id: "snacks",
    title: "Закуски",
    items: snacksCategory?.items ?? [],
  },
];
