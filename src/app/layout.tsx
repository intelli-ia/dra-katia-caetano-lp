import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Alegreya_Sans } from "next/font/google";

const alegreyaSansHeading = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-heading",
});

const alegreyaSansBody = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dra. Katia Caetano | Psicologia — Terapia Cognitivo-Comportamental",
  description:
    "Atendimento psicológico com abordagem em Terapia Cognitivo-Comportamental (TCC). Acolhimento e método baseado em evidências para a sua saúde emocional.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${alegreyaSansHeading.variable} ${alegreyaSansBody.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
