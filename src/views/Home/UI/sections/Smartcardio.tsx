'use client'
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React, { useCallback, useRef } from "react";
import Header from "./Header";
import Video from "@/shared/UI/Video/Video";
import { smoothScroll } from "@/shared/functions/smoothScroll";
import { ScrollArrow } from "../components/ScrollArrow.";

const Smartcardio = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const scrollFunction = useCallback(() => {
    if (sectionRef.current){
      smoothScroll(sectionRef.current?.offsetHeight)
    }
  } , [])
  const orderFunction = () => {
    alert("Заказ");
  };
  const readMoreFunctuin = () => {
    alert("Читать дальше");
  };
  return (
    <div ref={sectionRef} className="smartcardio-wrapper">
      <Video
        poster="images/manual.png"
        controlsList="nodownload"
        playsInline
        autoPlay
        muted
        loop
        darkOpacity={0.5}
        videoName="smartardio.mp4"
        className="smartcardio__video"
      />
      <Header />
      <section className="smartcardio">
        <div className="container">
          <h1 className="smarcardio__header">
            СмартКардио <span>®</span>
          </h1>
          <h3 className="smartcardio__description">
            <span>Первое в мире</span> устройство, регистрирующее одновременно
            ЭКГ, сатурацию и пульсовую волну без геля и проводов.
          </h3>
          <div className="smartcardio__buttons">
            <OrderButton
              className="smartcardio__order-button"
              onClick={orderFunction}
            >
              <p>Заказать</p>
            </OrderButton>
            <OrderButton
              className="smartcardio__read-button"
              onClick={orderFunction}
            >
              <p>Читать далее</p>
            </OrderButton>
          </div>
          <ScrollArrow onClick={scrollFunction} className="smartcardio-arrow" />
        </div>
      </section>

    </div>
  );
};

export default Smartcardio;
