"use client";

import { ImageCarousel } from "@/components/imageCarousel";
import { Button } from "@/components/ui/button";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { Modal } from "@/components/modal";
import { useState } from "react";
import { MenuSection } from "@/components/menuSection";

export default function HookahplacePage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <section className="relative min-h-[calc(100vh-113px)] flex flex-col items-center justify-around px-5 md:px-20 py-10 via-background to-muted from-background bg-gradient-to-br animate-fade-in">
        <div>
          <h2 className="text-center text-xl sm:text-4xl md:text-3xl lg:text-5xl font-heading font-bold">
            Кальянная
          </h2>
          <h2 className="text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-heading text-gradient font-bold">
            Пан Кальяник
          </h2>
        </div>
        <div className="font-thin text-xl md:text-2xl lg:text-3xl text-center text-muted-foreground mx-auto max-w-10/12">
          Добро пожаловать в кальянную, где каждый найдет свой формат отдыха.
          Уютное пространство, созданное для тех, кто ценит комфорт, атмосферу и
          качественный отдых.
        </div>
        <Button size={"lg"} className="text-lg" onClick={handleShowModal}>
          Посмотреть меню
        </Button>
        <Modal inProp={showModal} onClose={closeModal}>
          <MenuSection />
        </Modal>
      </section>

      <section className="my-20 mx-auto font-thin md:text-lg lg:text-2xl flex flex-col items-center justify-center text-center max-w-10/12 gap-9">
        <div>
          У нас более <span className="text-gradient">30 настольных игр</span>,
          чтобы весело провести время в компании друзей. Авторское меню
          коктейлей дополнит вечер, а разнообразие табаков и профессиональная
          подача кальяна превратят ваш визит в настоящее удовольствие.
        </div>

        <div>
          Для компаний и ценителей уединённого отдыха мы предлагаем
          <span className="text-gradient"> две просторные VIP-зоны</span>. Одна
          — с мягкими пуфиками и игровой приставкой, идеальна для расслабленного
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
      <section className="flex flex-col items-center justify-center w-10/12 mx-auto pb-5 gap-10">
        <div className="text-2xl md:text-3xl text-center font-heading font-semibold">
          Мы находимся <span className="text-gradient">тут</span>:
        </div>
        <div className="grid grid-cols-1 grid-rows-[350px,250px] md:grid-cols-2 md:grid-rows-[repeat(1,350px)] w-full gap-5">
          <Map
            mapId="pan_kalyanik"
            style={{ width: "100%", height: "350px" }}
            defaultCenter={{ lat: 52.09771280425674, lng: 23.693210963300512 }}
            defaultZoom={17}>
            <AdvancedMarker
              position={{ lat: 52.098195920594534, lng: 23.69334510628866 }}>
              <Pin />
            </AdvancedMarker>
          </Map>
          <div className="w-full flex flex-col text-center justify-center items-center">
            <div>г. Брест, ул. Карбышева, 28</div>
            <div className="font-thin pb-3.5">
              Вход со стороны внутреннего дворика
            </div>
            <div>пн-чт: 14:00-2:00</div>
            <div>пт-вс: 14:00-4:00</div>
          </div>
        </div>
      </section>
    </APIProvider>
  );
}
