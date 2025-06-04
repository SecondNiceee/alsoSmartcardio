import { Metadata } from "next";
import React from "react";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google";
import ReduxProvider from "../shared/providers/ReduxProvider";
import LayoutBuyingPopup from "@/widgets/BuyingPopup/ui/LayoutBuyingPopup";
import { LayoutCart } from "@/widgets/Cart";
import "../styles/_index.scss"
import Head from "next/head";
import ServerStartApp from "@/features/Home/ServerStartApp";

 

const inter = Inter({ variable: "--font4", subsets: ["cyrillic"] });


const yandexMetrikaScript = `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
  k.async=1;
  k.src=r;
  a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(101539371, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
`;

const raleway = Raleway({
  variable: "--third-family",
  subsets: ["cyrillic"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Даша Госпожа",
  description: "Госпожа Дашенька, прошу, прости меня",
  openGraph: {
    title: "Даша",
    description: "Госпожа Дашенька, прошу, прости меня",
    type: "website",
    siteName: "Даша богиня",
    locale: "ru_RU",
  },
  applicationName : "Даша",
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
        <meta name="title" content="Дашенька Богиня" />
        <meta name="description" content={"Госпожа Дашенька, прошу, прости меня"} />
        <meta name="keywords" content={"Дашенька, ты самая самая лучшая)"} />
        <meta property="og:title" content={"Дашенька Богиня"} />
        <meta property="og:description" content={"Госпожа Дашенька, прошу, прости меня"} />
        <meta property="og:type" content={"website"} />
        <meta property="og:image" content={"/images/dasha1.jpg"} />
        <meta property="og:site_name" content={"Даша"} />
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
          <ServerStartApp />
          {children}

        </ReduxProvider>


        <script
            dangerouslySetInnerHTML={{
              __html: yandexMetrikaScript
            }}
          />


        <script dangerouslySetInnerHTML={{__html : `
        function getUserId() {
        let sc_UserId = localStorage.getItem('sc_UserId');
        if (!sc_UserId) {
          sc_UserId = crypto.randomUUID();
          localStorage.setItem('sc_UserId', sc_UserId);
        }
        return sc_UserId;
      }
      let data = {
        sc_UserId: getUserId()
      };
      fetch("/uid/" + getUserId(), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Resp:", res);
      });
          `}} />

        <script dangerouslySetInnerHTML={{__html : `
          const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitor identifier when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      console.log(visitorId)
      fetch("/uid/" + getUserId() + "/fp/" + visitorId, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    })
    .catch(error => console.error(error))
          `}} />


      </body>
    </html>
  );
}
