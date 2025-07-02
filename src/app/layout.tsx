import { Metadata } from "next";
import React from "react";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google"
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";
import "../styles/_index.scss"
import Head from "next/head";
import StartApp from "@/features/Home/StartApp";

import TelegramProvider from "@/shared/providers/TelegramProvider/TelegramProvider";
import TelegramPopup from "@/features/Telegram/TelegramPopup";
import ReduxProvider from "@/shared/providers/ReduxProvider/ReduxProvider";
import { AlertProvider } from "@/shared/providers/AlertProvider/AlertProvider";
 

const inter = Inter({ variable: "--font4", subsets: ["cyrillic"] });


const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smartcardio.ru/'),
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
        url: "/images/smartcardioS1.webp",
        width: 800,
        height: 600,
        alt: "Smartcardio Device",
      },
      {
        url: "/images/smartcardioS2.webp",
        width: 800,
        height: 600,
        alt: "Smartcardio Device",
      },
      {
        url: "/images/smartcardioS3.webp",
        width: 800,
        height: 600,
        alt: "Smartcardio Device",
      },
    ],
    siteName: "Smartcardio",
    locale: "ru_RU",
  },
  applicationName : "Smartcardio",
  creator : "Nick",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
        <meta name="title" content="Smartcardio" />
        <link rel="hortcut icon" href="/images/favicon.ico"/>
        <meta name="description" content={"Беспроводной кардиограф, ЭКГ и сатурация без геля и проводов, результат сразу в телефоне, прибор разработан и производится в России"} />
        <meta name="keywords" content={"беспроводной кардиограф, ЭКГ, сатурация, медицинский прибор, медицина, прибор, разработка в России, сердце, инновация, Smartcardio, Смарткардио, Смарткадио, Smatcardio"} />
        <meta property="og:title" content={"Smartcardio - Беспроводной кардиограф, ЭКГ и сатурация без геля и проводов."} />
        <meta property="og:description" content={"Беспроводной кардиограф, ЭКГ и сатурация без геля и проводов, результат сразу в телефоне, прибор разработан и производится в России"} />
        <meta property="og:type" content={"website"} />
        <meta property="og:url" content={"https://smartcardio.ru/"} />
        <meta property="og:image" content={"/images/smartcardioS1.webp"} />
        <meta property="og:site_name" content={"Smartcardio"} />
        <meta property="og:locale" content={"ru_RU"} />
        <meta name="robots" content={"index, follow"} />
        <meta name="viewport" content={"width=device-width, initial-scale=1"} />
        
      </Head>
      <body
        className={`${raleway.variable}
            ${inter.variable}
            `}
      >
        <ReduxProvider>
        <AlertProvider>
            <TelegramProvider>
              <StartApp  />
              {children}
              <LayoutCart />
              <TelegramPopup />
              <LayoutBuyingPopup />
            </TelegramProvider>
          </AlertProvider>
        </ReduxProvider>

      </body>
    </html>
  );
}
