import Image from "next/image";

export default function AdvantagesSection() {
  return (
    <section className="bg-backgroud via-background pt-10 pb-20 px-10 sm:px-40 lg:px-20">
      <h2 className="font-heading text-3xl md:text-5xl text-center font-bold">
        Почему <span className="text-gradient">Пан КальяНик</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 pt-15">
        <div className="flex flex-col justify-center items-center p-6 rounded-lg border border-border bg-card-gradient shadow-sm text-card-foreground text-center hover:border-primary/50 transition-all duration-300 group">
          <div className="flex justify-center items-center bg-gradient rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/shine_transparent.png"
              alt="shine"
              width={48}
              height={48}
            />
          </div>
          <h4 className="font-heading font-semibold text-xl my-4">
            Premium оборудование
          </h4>
          <div className="text-muted-foreground font-thin">
            Кальяны от лучших производителей и premium табаки для насыщенного и
            приятного вкуса
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 rounded-lg border border-border bg-card-gradient shadow-sm text-card-foreground text-center hover:border-primary/50 transition-all duration-300 group">
          <div className="flex justify-center items-center bg-gradient rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
            <Image src="/handshake.png" alt="shine" width={48} height={48} />
          </div>
          <h4 className="font-heading font-semibold text-xl my-4">
            Безупречный сервис
          </h4>
          <div className="text-muted-foreground font-thin">
            Наши мастера всегда готовы помочь с выбором и обеспечить лучшие
            эмоции от отдыха
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 rounded-lg border border-border bg-card-gradient shadow-sm text-card-foreground text-center hover:border-primary/50 transition-all duration-300 group">
          <div className="flex justify-center items-center bg-gradient rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
            <Image src="/notebook.png" alt="shine" width={48} height={48} />
          </div>
          <h4 className="font-heading font-semibold text-xl my-4">
            Индивидуальный подход
          </h4>
          <div className="text-muted-foreground font-thin">
            Мы учитываем все ваши пожелания, чтобы сделать отдых максимально
            комфортным и приятным
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 rounded-lg border border-border bg-card-gradient shadow-sm text-card-foreground text-center hover:border-primary/50 transition-all duration-300 group">
          <div className="flex justify-center items-center bg-gradient rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
            <Image src="/strawberry.png" alt="shine" width={48} height={48} />
          </div>
          <h4 className="font-heading font-semibold text-xl my-4">
            Широкий выбор вкусов и миксов
          </h4>
          <div className="text-muted-foreground font-thin">
            Найди свой идеальный аромат или попробуй что-то новое из нашей
            авторской коллекции
          </div>
        </div>
      </div>
    </section>
  );
}
