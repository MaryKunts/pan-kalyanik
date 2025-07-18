"use client";

import { Button } from "../ui/button";
import { Modal } from "../modal";
import { MenuSection } from "./menuSection";
import { useModal } from "@/hooks/useModal";

export default function ShowMenuButton() {
  const { openModal, isOpen, closeModal } = useModal();

  return (
    <>
      <Button size={"lg"} className="text-lg" onClick={openModal}>
        Посмотреть меню
      </Button>
      <Modal inProp={isOpen} onClose={closeModal}>
        <MenuSection />
      </Modal>
    </>
  );
}
