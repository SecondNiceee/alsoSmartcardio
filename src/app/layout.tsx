import { Metadata } from "next";
import React from "react";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google";
import ReduxProvider from "../shared/providers/ReduxProvider";
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";

const inter = Inter({ variable: "--font4", subsets: ["cyrillic"] });
const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
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
