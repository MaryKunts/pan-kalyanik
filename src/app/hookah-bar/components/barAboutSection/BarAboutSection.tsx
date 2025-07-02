import { ImageCarousel } from "@/components/imageCarousel";

export default function BarAboutSection() {
  return (
    <section className="my-20 mx-auto font-thin lg:text-xl flex flex-col items-center justify-center text-center max-w-10/12 gap-9">
      <div>
        У нас более <span className="text-gradient">30 настольных игр</span>,
        чтобы весело провести время в компании друзей. Авторское меню коктейлей
        дополнит вечер, а разнообразие табаков и профессиональная подача кальяна
        превратят ваш визит в настоящее удовольствие.
      </div>

      <div>
        Для компаний и ценителей уединённого отдыха мы предлагаем
        <span className="text-gradient"> две просторные VIP-зоны</span>. Одна —
        с мягкими пуфиками и игровой приставкой, идеальна для расслабленного
        вечера или геймерской сессии. Вторая — с большим столом и телевизором,
        отлично подходит для дружеских встреч, игр и просмотра трансляций.
      </div>

      <div>
        Мы регулярно показываем
        <span className="text-gradient"> спортивные и киберспортивные </span>
        матчи, создавая атмосферу настоящей фан-зоны. А музыкальные квизы и
        тематические вечера добавляют ярких эмоций и живого общения.
      </div>
      <ImageCarousel
        imageHeight={{
          lg: 500,
          sm: 400,
        }}
        images={[
          "/pan_kalyanik_19.png",
          "/pan_kalyanik_9.png",
          "/pan_kalyanik_8.png",
          "/pan_kalyanik_4.png",
          "/pan_kalyanik_6.png",
          "/pan_kalyanik_16.png",
          "/pan_kalyanik_3.png",
          "/pan_kalyanik_5.png",
          "/pan_kalyanik_1.png",
          "/pan_kalyanik_10.png",
          "/pan_kalyanik_13.png",
          "/pan_kalyanik_17.png",
          "/pan_kalyanik_2.png",
          "/pan_kalyanik_18.png",
          "/pan_kalyanik_12.png",
        ]}
      />
    </section>
  );
}
