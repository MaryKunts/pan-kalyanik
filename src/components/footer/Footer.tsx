export default function Footer() {
  return (
    <div className="flex justify-center items-center flex-col py-5 border-t-1 border-t-border">
      <div className="pb-3 hidden sm:flex flex-wrap gap-x-5 items-center justify-center text-lg text-muted-foreground w-7/12 lg:w-9/12  xl:w-6/12 lg:justify-between border-b-1 border-b-border">
        <div>Кальянная</div>
        <div>Аренда на дом</div>
        <div>Кейтеринг</div>
        <div>Аутсорс</div>
      </div>
      <div className="flex min-w-7/12 lg:w-9/12 xl:justify-center xl:gap-20 justify-between mt-5 text-sm ">
        <div className="flex flex-col">
          <div>г.Брест, ул. Карбышева 28</div>
          <div>пн-чт: 14:00-2:00</div>
          <div>пт-вс: 14:00-4:00</div>
        </div>
        <div className="flex items-end md:items-start">
          <a href="tel:375336441144">375(33)644-11-44</a>
        </div>
      </div>
    </div>
  );
}
