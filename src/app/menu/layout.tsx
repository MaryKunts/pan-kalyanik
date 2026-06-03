import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пан КальяНик | Меню",
  description: "Меню кальянной Пан Кальяник: кальяны, бар, закуски.",
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
