"use client";
import { ROUTES } from "@/const/routes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function OffersSection() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const ref = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio > 0.2) {
        setIsShow(true);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    const target = ref;

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="min-h-[600px]">
      {isShow ? (
        <section className=" bg-backgroud via-background py-20 px-20 sm:px-40 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(4,300px)] lg:grid-rows-[repeat(2,350px)] gap-10 lg:gap-20 w-full animate-fade-in-long">
            <Link
              href={ROUTES.HOOKAH_BAR_PAGE}
              className="flex items-end justify-center border-1 border-border rounded-lg bg-hookahplace shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl transition-all duration-300">
              <h3 className="w-full h-full rounded-lg transition-all duration-300 hover:font-medium hover:backdrop-brightness-50 flex flex-col-reverse text-center font-light text-shadow-lg text-2xl pb-5">
                Кальянная
              </h3>
            </Link>
            <div className="flex items-end justify-center border-1 border-border rounded-lg bg-hookah shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl transition-all duration-300">
              <h3 className="w-full h-full rounded-lg transition-all duration-300 hover:font-medium hover:backdrop-brightness-50 flex flex-col-reverse text-center font-light text-shadow-lg text-2xl pb-5">
                Аренда кальяна
              </h3>
            </div>
            <div className="flex items-end justify-center border-1 border-border rounded-lg bg-catering shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl transition-all duration-300">
              <h3 className="w-full h-full rounded-lg transition-all duration-300 hover:font-medium hover:backdrop-brightness-50 flex flex-col-reverse text-center font-light text-shadow-lg text-2xl pb-5">
                Кейтеринг
              </h3>
            </div>
            <div className="flex items-end justify-center border-1 border-border rounded-lg bg-autsource shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl transition-all duration-300">
              <h3 className="w-full h-full rounded-lg transition-all duration-300 hover:font-medium hover:backdrop-brightness-50 flex flex-col-reverse text-center font-light text-shadow-lg text-2xl pb-5">
                Аутсорс и сотрудничество
              </h3>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
