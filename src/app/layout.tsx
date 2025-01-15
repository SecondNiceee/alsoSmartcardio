import { Metadata } from "next";
import React, { ReactNode } from "react";
import { Raleway } from "next/font/google";
import { Roboto } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import { Inter } from "next/font/google";
import ReduxProvider from "./ReduxProvider";
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";

const inter = Inter({ variable: "--font4", subsets: ["cyrillic"] });
const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
});

const roboto300 = Roboto({
  weight: "300",
  variable: "--roboto-300",
  subsets: ["cyrillic", "cyrillic-ext"],
});
const roboto400 = Roboto({
  weight: "400",
  variable: "--roboto-400",
  subsets: ["cyrillic", "cyrillic-ext"],
});
const roboto500 = Roboto({
  weight: "500",
  variable: "--roboto-500",
  subsets: ["cyrillic", "cyrillic-ext"],
});
const roboto700 = Roboto({
  weight: "700",
  variable: "--roboto-700",
  subsets: ["cyrillic", "cyrillic-ext"],
});
const robotoFlex = Roboto_Flex({
  variable: "--font3",
  subsets: ["cyrillic"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Nick sait",
  description: "It's my first Sait on Next.js",
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
            ${roboto300.variable}
            ${roboto400.variable}
            ${roboto500.variable} 
            ${roboto700.variable}
            ${robotoFlex.variable}
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
