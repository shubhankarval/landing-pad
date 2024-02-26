import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./styles.css";


const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"],
    variable:'--font-playfair'
});
  

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FashionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${lato.className} ${playfair.variable}`}>{children}</div>
  );
}