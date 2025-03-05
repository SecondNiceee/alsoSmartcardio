import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />

        {/* Вставляем скрипт Яндекс.Метрики */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(100169482, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });
            `
          }}
        />

        {/* noscript-тег для браузеров без JavaScript */}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/100169482" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt=""
            />
          </div>
        </noscript>

        <NextScript />
      </body>
    </Html>
  );
}