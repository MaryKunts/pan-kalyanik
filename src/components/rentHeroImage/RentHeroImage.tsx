export default function RentHeroImage() {
  return (
    <section className="relative min-h-[calc(100vh-113px)] flex flex-col items-center justify-around px-5 md:px-20 py-10 via-background to-muted from-background bg-gradient-to-br animate-fade-in">
      <div>
        <h2 className="text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-heading text-gradient font-bold">
          Аренда кальяна
        </h2>
        <h2 className="text-center text-lg sm:text-3xl md:text-2xl pt-5 lg:text-4xl font-heading font-bold">
          Комфортный отдых не выходя из дома
        </h2>
      </div>
      <div className="font-thin text-xl md:text-2xl lg:text-3xl text-center text-muted-foreground mx-auto max-w-10/12">
        Аренда кальяна на дом это идеальное решение для домашней вечеринки с
        друзьями, романтического свидания или отдыха после рабочего дня
      </div>
    </section>
  );
}
