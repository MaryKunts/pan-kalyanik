import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const mulishSans = Mulish({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Пан КальяНик",
  description: "Аренда кальянов в Бресте",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={mulishSans.className}>
      <body>{children}</body>
    </html>
  );
}
