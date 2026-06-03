"use client";

import { useRouter } from "next/navigation";
import { Modal } from "@/components/modal";
import { MenuSection } from "@/components/showMenuButton/menuSection";
import { ROUTES } from "@/const/routes";

export default function MenuPage() {
  const router = useRouter();

  const handleClose = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(`/${ROUTES.HOOKAH_BAR_PAGE}`);
  };

  return (
    <Modal inProp onClose={handleClose} showCloseButton={false}>
      <MenuSection onClose={handleClose} />
    </Modal>
  );
}
