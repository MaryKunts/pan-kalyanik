"use client";

import { Modal } from "@/components/modal";
import { useModal } from "@/hooks/useModal";
import { Button } from "@/components/ui/button";
import { MenuSection } from "../menuSection";

export default function BarMainSection() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
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
      <Button size={"lg"} className="text-lg" onClick={openModal}>
        Посмотреть меню
      </Button>
      <Modal inProp={isOpen} onClose={closeModal}>
        <MenuSection />
      </Modal>
    </section>
  );
}
