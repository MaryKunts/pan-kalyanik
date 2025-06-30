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
}

export default function Modal({ inProp, children, onClose }: Props) {
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
      exit>
      <div
        ref={modalRef}
        className="z-30 fixed left-0 top-0 w-screen h-screen bg-background/90 flex justify-center">
        <Button
          variant={"outline"}
          className="absolute w-10 h-10 z-30 cursor-pointer top-[5%] right-5 md:right-[20%] 2xl:right-[30%] rounded-full"
          onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} size="2xl" />
        </Button>
        {children}
      </div>
    </CSSTransition>,
    document.body
  );
}
