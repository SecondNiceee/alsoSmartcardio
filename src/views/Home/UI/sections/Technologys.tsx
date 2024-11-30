'use client'
import Video from "@/shared/UI/Video/Video";
import React from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import Image from "next/image";



const Technologys = () => {
  return (
    <section className="technologys">
      <div className="container">
        <Reveal character={CHARACTER.UPDOWN}>
          <header className="technologys__header">
            Высокие технологии в повседневной жизни
          </header>
        </Reveal>

        <div className="technologys__main">


          <Reveal character={CHARACTER.LEFT} className="technologys__tblock">
            <div className="technologys__tblock-container">
              
              <div className="technologys__description">
                <p>Прибор СмартКардио®</p>
                <ul className="technologys__benefits">
                  <li>- бережёт Ваше время</li>
                  <li>
                    - помогает снимать показатели, когда это действительно
                    информативно, например, при изменении самочувствия или
                    переменах в образе жизни
                  </li>
                  <li>- хранит историю ритма Вашего сердца</li>
                </ul>
                <p>
                  Современная медицина не стоит на месте, и доступными становятся
                  не только технологии, но и знания. Подробнее о работе
                  сердечно-сосудистой системе читайте в нашем блоге.
                </p>

                
              </div>
              <OrderButton
                className="technologys__blog-button black-border"
                onClick={() => {}}
              >
                <p className="technologys_blog-text black">Блог</p>
              </OrderButton>

            </div>

            <Image width={755} height={821} src={"/images/videoLiner.svg"} alt="#" className="video-liner" />

          </Reveal>



          <Reveal className="video__wrapper" character={CHARACTER.RIGHT}>
            <Video
              controlsList="nodownload"
              playsInline
              autoPlay
              muted
              loop
              className="video__wrapper"
              videoClassName="technologys__video"
              videoName="normTwo.mp4"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Technologys;
