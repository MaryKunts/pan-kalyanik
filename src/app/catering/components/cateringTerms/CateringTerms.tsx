const terms = [
  "Место проведения мероприятия",
  "Количество необходимых кальянов",
  "Количество кальянных мастеров, требуемых для качественного обслуживания гостей",
  "Дополнительные пожелания по оформлению, времени работы и эксклюзивным табачным смесям",
];

export default function CateringTerms() {
  return (
    <section className="px-10 md:px-20 2xl:px-40  py-10 bg-card/30">
      <h2 className="text-2xl font-thin">
        <span className="font-semibold">
          Стоимость кейтеринга рассчитывается индивидуально
        </span>{" "}
        и зависит от следующих факторов:
      </h2>
      <ul className="font-thin text-xl list-disc text-muted-foreground pt-3 pl-10 marker:text-primary/90 marker:text-2xl">
        {terms.map((term) => (
          <li className="pt-3" key={term}>
            {term}
          </li>
        ))}
      </ul>
      <p className="text-2xl font-thin pt-5">
        Мы гарантируем высокий уровень сервиса, пунктуальность, чистоту и
        внимательное отношение к каждому гостю.
      </p>
    </section>
  );
}
