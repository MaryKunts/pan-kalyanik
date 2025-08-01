import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  children?: ReactNode;
}

export default function MainSection({
  title,
  subtitle = "Пан Кальяник",
  description,
  children,
}: Props) {
  return (
    <section className="relative min-h-[calc(100vh-113px)] flex flex-col items-center justify-around px-5 md:px-20 py-10 via-background to-muted from-background bg-gradient-to-br animate-fade-in">
      <div>
        <h2 className="text-center text-xl sm:text-4xl md:text-3xl lg:text-5xl font-heading text-gradient font-bold">
          {subtitle}
        </h2>
        <h2 className="text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-bold">
          {title}
        </h2>
      </div>
      <div className="font-thin text-xl md:text-2xl lg:text-3xl text-center text-muted-foreground mx-auto max-w-10/12 pb-25">
        {description}
      </div>
      {children}
    </section>
  );
}
