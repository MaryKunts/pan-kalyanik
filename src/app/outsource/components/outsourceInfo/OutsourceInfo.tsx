const terms = [
  "Формата сотрудничества (консультация, постоянное обслуживание, разовая зона)",
  "Локации и инфраструктуры",
  "Объёмов: количество кальянов, смен, мастеров, длительность",
  "Особых условий (брендинг, эксклюзивные смеси, оформление зоны и т.д.)",
];

export default function OutsourceInfo() {
  return (
    <section className="bg-card/30 px-10 md:px-20 2xl:px-40 py-20">
      <h2 className="text-2xl font-thin">
        <span className="font-semibold">
          Стоимость услуг рассчитывается индивидуально
        </span>{" "}
        и зависит от:
      </h2>
      <ul className="font-thin text-2xl list-disc text-muted-foreground pt-3 pl-10 marker:text-primary/90 marker:text-2xl">
        {terms.map((term) => (
          <li className="pt-3" key={term}>
            {term}
          </li>
        ))}
      </ul>
      <div className="text-2xl font-light pt-10 text-center">
        Доверьтесь профессионалам и мы сделаем так, чтобы кальян стал сильной
        стороной Вашего бизнеса
      </div>
    </section>
  );
}
