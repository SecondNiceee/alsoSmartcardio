import { Metadata } from "next";
import React from "react";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google"
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";
import "../styles/_index.scss"
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
  title: "СмартКардио® — устройство, регистрирующее ЭКГ | Smartcardio",
  description: "СмартКардио® — инновационное устройство для регистрации ЭКГ. Беспроводной кардиограф нового поколения: быстрое и точное измерение ЭКГ, результаты сразу в телефоне. Разработано и производится в России. Подходит для домашнего и профессионального использования.",
  keywords: [
    "СмартКардио", "СмартКардио®", "устройство для регистрации ЭКГ", "прибор для измерения ЭКГ", "регистрация ЭКГ", "беспроводной кардиограф", "электрокардиограф", "портативный ЭКГ", "домашний кардиограф", "Smartcardio", "инновация", "медицинский прибор", "ЭКГ", "сатурация", "здоровье сердца", 
    "кардиограф портативный", "запись ЭКГ дома", "прибор для измерения пульса и давления", "купить кардио монитор", "ЭКГ своими руками" 
  ],
  openGraph: {
    title: "СмартКардио® — устройство, регистрирующее ЭКГ | Smartcardio",
    description: "СмартКардио® — инновационное устройство для регистрации ЭКГ. Беспроводной кардиограф нового поколения: быстрое и точное измерение ЭКГ, результаты сразу в телефоне.",
    url: "https://smartcardio.ru/",
    images: [
      {
        url: "/images/smartcardioS1.webp",
        width: 800,
        height: 600,
        alt: "СмартКардио® — устройство для регистрации ЭКГ",
      },
    ],
    siteName: "Smartcardio",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://smartcardio.ru/",
  },
  twitter: {
    card: "summary_large_image",
    title: "СмартКардио® — устройство, регистрирующее ЭКГ | Smartcardio",
    description: "СмартКардио® — инновационное устройство для регистрации ЭКГ. Беспроводной кардиограф нового поколения: быстрое и точное измерение ЭКГ, результаты сразу в телефоне.",
    images: ["/images/smartcardioS1.webp"],
    site: "@smartcardio",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  applicationName: "СмартКардио®",
  creator: "Nick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/*  SEO улучшение */}
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "СмартКардио®",
            "image": "https://smartcardio.ru/images/smartcardioS1.webp",
            "description": "СмартКардио® — устройство для регистрации ЭКГ. Беспроводной кардиограф нового поколения.",
            "brand": {
              "@type": "Brand",
              "name": "Smartcardio"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Smartcardio",
              "url": "https://smartcardio.ru/"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "availability": "https://schema.org/InStock"
            }
          }
        `}</script>
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Smartcardio",
            "url": "https://smartcardio.ru/",
            "logo": "https://smartcardio.ru/images/logo.jpg",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+7-800-000-00-00",
              "contactType": "customer support",
              "areaServed": "RU"
            }]
          }
        `}</script>
      </head>
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
