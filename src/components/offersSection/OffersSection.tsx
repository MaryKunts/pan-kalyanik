"use client";
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
        <section className=" bg-backgroud via-background py-20 px-10 sm:px-40 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[repeat(3,500px)] lg:grid-rows-[500px] gap-10 w-full animate-fade-in-long">
            <div className="flex items-end justify-center border-1 border-border rounded-lg bg-hookahplace shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl">
              <h3 className="text-center font-semibold font-heading text-2xl mb-2  ">
                Кальянная
              </h3>
            </div>
            <div className="flex items-end justify-center border-1 border-border rounded-lg bg-hookah shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl">
              <h3 className="text-center font-semibold font-heading text-2xl mb-2">
                Аренда кальяна
              </h3>
            </div>
            <div className="flex items-end justify-center border-1 border-border rounded-lg bg-catering shadow-lg shadow-border cursor-pointer hover:shadow-primary hover:shadow-xl">
              <h3 className="text-center font-semibold font-heading text-2xl mb-2 ">
                Кейтеринг
              </h3>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
