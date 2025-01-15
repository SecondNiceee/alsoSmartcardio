"use client";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React from "react";
import Header from "./Header";
import Video from "@/shared/UI/Video/Video";

import { ScrollArrow } from "../components/ScrollArrow";
import { scrollToDownloads } from "@/views/Home/utils/scrollToDownloads";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { setCartPopup } from "@/entities/cart/model/cartSlice";

const Smartcardio: React.FC = () => {

  const dispath = useAppDispatch()

  const orderFunction = () => {
    dispath(setCartPopup(true))
  };

  return (

    <>

    <div className="smartcardio-wrapper">
      <Video
        poster="images/smartcardioStart.png"
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
          <Reveal start = {true} character={CHARACTER.DOWNUP} style={{alignItems : "center", display : "flex", flexDirection : "column"}}>
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
                onClick={scrollToDownloads}
              >
                <p>Читать далее</p>
              </OrderButton>
            </div>
            <ScrollArrow
              onClick={scrollToDownloads}
              className="smartcardio-arrow"
            />
          </Reveal>
        </div>
      </section>
    </div>
    </>
  );
};

export default Smartcardio;
 