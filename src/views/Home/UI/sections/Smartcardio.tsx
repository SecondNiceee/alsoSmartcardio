"use client";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React, { useState } from "react";
import Header from "./Header";
import Video from "@/shared/UI/Video/Video";

import { ScrollArrow } from "../components/ScrollArrow";
import { scrollToDownloads } from "@/features/scrollToDownloads/scrollToDownloads";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import { BuyingPopup } from "@/widgets/BuyingPopup";

const Smartcardio: React.FC = () => {
  
  const [isPopup, setPopup] = useState<boolean>(false)
  const orderFunction = () => {
    setPopup(true)
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
              Олечка <span></span>
            </h1>
            <h3 className="smartcardio__description">
              <span>Не сердись пожалуйста</span>
            </h3>
            <div className="smartcardio__buttons">
              <OrderButton
                className="smartcardio__order-button"
                onClick={orderFunction}
              >
                <p>Не сердиться</p>
              </OrderButton>
              <OrderButton
                className="smartcardio__read-button"
                onClick={orderFunction}
              >
                <p>Не сердиться</p>
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
    <BuyingPopup setState={setPopup} state = {isPopup}  />
    </>
  );
};

export default Smartcardio;
