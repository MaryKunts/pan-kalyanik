"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { groupItems } from "@/lib";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {
  images: string[];
  imageHeight: {
    lg: number;
    sm?: number;
  };
}

export default function ImageCarousel({ images, imageHeight }: Props) {
  const groupedItems = groupItems(images, 3);

  const [hydrated, setHydrated] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Carousel className="w-[calc(100%-128px)]">
      <CarouselContent>
        {!isMobile &&
          groupedItems.map((urls) => (
            <CarouselItem key={`item-${urls[0]}`}>
              <div className="flex justify-center gap-4">
                {urls.map((url) => (
                  <div
                    key={`image-${url}`}
                    className="w-1/3 relative"
                    style={{ height: imageHeight.lg }}>
                    <Image src={url} alt="" fill objectFit="cover" />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        {isMobile &&
          images.map((url) => (
            <CarouselItem key={`item-${url}`}>
              <div
                key={`image-${url}`}
                className="w-full relative"
                style={{ height: imageHeight.sm ?? imageHeight.lg }}>
                <Image src={url} alt="" fill objectFit="cover" />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
