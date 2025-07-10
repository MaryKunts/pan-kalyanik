import { ImageCarousel } from "@/components/imageCarousel";

export default function CateringImageesSection() {
  return (
    <section className="px-5 py-20 bg-background flex flex-col items-center gap-15">
      <h2 className="text-2xl md:text-3xl text-center font-[300] px-10">
        Наша команда заботится о каждой детали, чтобы вы и ваши гости могли
        наслаждаться процессом без лишних забот
      </h2>
      <ImageCarousel
        imageHeight={{
          lg: 500,
          sm: 400,
        }}
        images={[
          "/catering_1.jpg",
          "/catering_2.jpg",
          "/catering_3.jpg",
          "/catering_4.jpg",
          "/catering_5.jpg",
          "/catering_6.jpg",
          "/catering_7.jpg",
          "/catering_8.jpg",
        ]}
      />
    </section>
  );
}
