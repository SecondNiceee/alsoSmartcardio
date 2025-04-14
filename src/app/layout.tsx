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

ym(100169482, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
`;

const mailruScript = `var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3637000", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");`;


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
        <meta property="og:image" content={"/images/smartcardioS1.png"} />
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
          <ServerStartApp />
          {children}
          <LayoutCart />
          <LayoutBuyingPopup />
        </ReduxProvider>


        <script
            dangerouslySetInnerHTML={{
              __html: yandexMetrikaScript
            }}
          />

          <script dangerouslySetInnerHTML={{
            __html : mailruScript
          }}></script>


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


<noscript><div><img src="https://top-fwz1.mail.ru/counter?id=3637000;js=na" style={{position : "absolute", left : "-9999px"}} alt="Top.Mail.Ru" /></div></noscript>
      </body>
    </html>
  );
}
