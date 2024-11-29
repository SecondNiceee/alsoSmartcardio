'use client'
import Video from "@/shared/UI/Video/Video";
import React from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";

const Technologys = () => {
  return (
    <section className="technologys">
      <div className="container">
        <header className="technologys__header">
          Высокие технологии в повседневной жизни
        </header>
        <div className="technologys__main">
          <div className="technologys__tblock">
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
          <Video
            controlsList="nodownload"
            playsInline
            autoPlay
            muted
            loop
            // className="video__wrapper"
            className="video__wrapper"
            videoClassName="technologys__video"
            videoName="normTwo.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologys;
