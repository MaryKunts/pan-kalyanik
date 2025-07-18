import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

const menuUrls = [
  "/menu_1.png",
  "/menu_2.png",
  "/menu_3.png",
  "/menu_4.png",
  "/menu_5.png",
  "/menu_6.png",
  "/menu_7.png",
  "/menu_8.png",
  "/menu_9.png",
  "/menu_10.png",
];

export default function MenuSection() {
  return (
    <Carousel className="w-[calc(100vw-128px)] flex items-center">
      <CarouselContent>
        {menuUrls.map((url) => (
          <CarouselItem key={url}>
            <div className="relative flex items-center justify-center">
              <Image
                src={url}
                alt=""
                width={240}
                height={400}
                objectFit="cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:left-[20%] 2xl:left-[30%]" />
      <CarouselNext className="md:right-[20%] 2xl:right-[30%]" />
    </Carousel>
  );
}
