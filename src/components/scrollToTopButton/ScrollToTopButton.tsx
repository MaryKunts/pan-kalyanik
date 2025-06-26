"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY >= 800) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isShow ? (
    <div className="fixed w-fit right-3 md:right-10 lg:right-5 bottom-10">
      <button
        onClick={handleScroll}
        className="w-12 h-12 flex flex-col rounded-full bg-foreground/50 hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer items-center justify-center ">
        <FontAwesomeIcon icon={faChevronUp} size="2xl" />
      </button>
    </div>
  ) : null;
}
