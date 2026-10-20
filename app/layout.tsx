import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, IBM_Plex_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Medeiros | Instrutor de Kickboxing, Boxe e Krav Maga",
  description:
    "Aulas de Kickboxing, Boxe e Krav Maga em Manaus com o instrutor Matheus Medeiros. Aulas na academia FGT e aulas particulares.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${barlow.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body antialiased bg-navy text-white">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
