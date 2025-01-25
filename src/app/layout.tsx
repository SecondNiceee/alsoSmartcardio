import { Metadata } from "next";
import React from "react";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google";
import ReduxProvider from "../shared/providers/ReduxProvider";
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";
import "../styles/_index.scss"

const inter = Inter({ variable: "--font4", subsets: ["cyrillic"] });
const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smartcardio",
  description: "беспроводной кардиограф, ЭКГ и сатурация без геля и проводов, результат сразу в телефоне, прибор разработан и производится в России",
  keywords: ["беспроводной кардиограф", "ЭКГ", "сатурация", "медицинский прибор", "разработка в России"],
  openGraph: {
    title: "Smartcardio",
    description: "Беспроводной кардиограф, ЭКГ и сатурация без геля и проводов, результат сразу в телефоне, прибор разработан и производится в России",
    type: "website",
    url: "https://smartcardio.ru/",
    
    images: [
      {
        url: "/images/smartcardioS1.png",
        width: 800,
        height: 600,
        alt: "Smartcardio Device",
      },
      {
        url: "/images/smartcardioS2.png",
        width: 800,
        height: 600,
        alt: "Smartcardio Device",
      },
      {
        url: "/images/smartcardioS3.png",
        width: 800,
        height: 600,
        alt: "Smartcardio Device",
      },
    ],
    siteName: "Smartcardio",
    locale: "ru_RU",
  },
  


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable}
            ${inter.variable}
            `}
      >

        <ReduxProvider>

          {children}
          <LayoutCart />
          <LayoutBuyingPopup />
        </ReduxProvider>

      </body>
    </html>
  );
}
