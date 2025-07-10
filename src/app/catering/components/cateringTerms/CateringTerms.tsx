export default function CateringTerms() {
  return (
    <section className="px-10 sm:px-40 lg:px-20  py-10 bg-card/30">
      <h2 className="text-2xl font-thin">
        <span className="font-semibold">
          Стоимость кейтеринга рассчитывается индивидуально
        </span>{" "}
        и зависит от следующих факторов:
      </h2>
      <ul className="font-thin text-xl list-disc text-muted-foreground pt-3 pl-10 marker:text-accent">
        <li className="pt-3">Место проведения мероприятия</li>
        <li className="pt-3">Количество необходимых кальянов</li>
        <li className="pt-3">
          Количество кальянных мастеров, требуемых для качественного
          обслуживания гостей
        </li>
        <li className="pt-3">
          Дополнительные пожелания по оформлению, времени работы и эксклюзивным
          табачным смесям
        </li>
      </ul>
      <p className="text-2xl font-thin pt-5">
        Мы гарантируем высокий уровень сервиса, пунктуальность, чистоту и
        внимательное отношение к каждому гостю.
      </p>
    </section>
  );
}
