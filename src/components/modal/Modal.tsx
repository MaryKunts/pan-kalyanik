"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

interface Props {
  inProp: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export default function Modal({
  inProp,
  children,
  onClose,
  showCloseButton = true,
}: Props) {
  const modalRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (inProp) {
      document.body.classList.add("overflow-y-hidden");
    }
    return () => document.body.classList.remove("overflow-y-hidden");
  }, [inProp]);

  useEffect(() => {
    if (!inProp) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [inProp, onClose]);

  if (!isHydrated) return null;

  return createPortal(
    <CSSTransition
      in={inProp}
      nodeRef={modalRef}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "transition-modal enter",
        enterActive: "transition-modal enter-active",
        exit: "translate-y-0 transition-transform duration-300 ease",
        exitActive: "translate-y-full",
      }}
      exit
    >
      <div
        ref={modalRef}
        className="z-30 fixed inset-0 overflow-hidden bg-background/90 flex items-start sm:items-center justify-center p-2 sm:p-4 md:p-6"
        onClick={onClose}
      >
        {showCloseButton && (
          <Button
            variant={"outline"}
            className="absolute w-10 h-10 z-30 cursor-pointer top-4 right-4 sm:top-[5%] sm:right-5 md:right-[12%] 2xl:right-[22%] rounded-full"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </Button>
        )}
        <div
          className="flex h-full w-full max-w-[980px] items-start sm:items-center justify-center"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
}
