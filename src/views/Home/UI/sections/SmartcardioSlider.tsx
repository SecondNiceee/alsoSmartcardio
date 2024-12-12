import React, { useCallback, useRef, useState } from "react";
import { SwiperRef, SwiperSlide } from "swiper/react";
import { smartardioSliderImage } from "../../config/smarcardioSliderImages";
import Image from "next/image";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";

import "swiper/css";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { Swiper as SwiperInstance } from "swiper";
import CssTransition from "@/shared/UI/CssTransition/CssTransition";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import Slider from "../components/Slider";
import useMySwiper from "../hooks/useMySwiper";
import { CSSTransition } from "react-transition-group";

const SmartcardioSlider = () => {
  const {
    activeSlide,
    closeZoom,
    handleSlideChange,
    renderFunction,
    renderZoomSwiper,
    swiperRef,
    zoomRef,
    zoomSlider,
    setZoomSlider,
  } = useMySwiper();

  const buttonHandler = () => {};
  return (
    <section className="smartcardio-slider">
      <div className="container">
        <Reveal
          character={CHARACTER.LEFT}
          className="smartcardio-slider__header"
        >
          Прибор СмартКардио®
        </Reveal>

        <Reveal
          character={CHARACTER.RIGHT}
          className="smartcardio-slider__main"
        >
          <div className="my-slider-wrapper">
            <Slider
              arrowType="circle"
              smallSliderStyles={{
                className: "w-[50%] object-contain ",
                slidesPerView: 8,
                spaceBetween: 10,
              }}
              renderMap={smartardioSliderImage}
              render={renderFunction}
              ref={swiperRef}
              handleSlideChange={handleSlideChange}
              setZoomSlider={setZoomSlider}
            />
          </div>
        </Reveal>

          <Reveal character={CHARACTER.LEFT}>
            <p className="smartcardio-slider__p">
                Разработан и произведен в <span>России</span>
            </p>
          </Reveal>

        <Reveal className="w-[100%] flex justify-center" character={CHARACTER.RIGHT}>
          <OrderButton
            className="smartcardio-slider__button"
            onClick={buttonHandler}
          >
            <p>Закать</p>
          </OrderButton>
        </Reveal>
      </div>


      <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>

          <ZoomSlider
              ref={zoomRef}
              initialSlide={activeSlide}
              closeZoom={closeZoom}
              slides={smartardioSliderImage}
              id="zoom-slider"
              mainSwiperRef={swiperRef}
              render={renderZoomSwiper}
            />

      </CSSTransition>

      {/* <CssTransition wrapperRef={zoomRef} state={zoomSlider}>


      </CssTransition> */}


    </section>
  );
};

export default SmartcardioSlider;
