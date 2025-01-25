'use client'
import React from "react";
import { smartardioSliderImage } from "../../config/smarcardioSliderImages";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";

import "swiper/css";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import Reveal from "@/shared/UI/Reveal/Reveal";
import Slider from "../components/Slider";
import Image from "next/image";
import useDefaultSwiper from "../../../../shared/hooks/useDefaultSwiper";
import useZoomSwiper from "../../../../shared/hooks/useZoomSwiper";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { setCartPopup } from "@/entities/cart/model/cartSlice";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import { routes } from "@/shared/config/routes";


const SmartcardioSlider = () => {

  // const dispatch = useAppDispatch()
  
  const {activeSlide, handleSlideChange, swiperRef} = useDefaultSwiper()

  const {closeZoom , zoomSlider, setZoomSlider} = useZoomSwiper()


  // const buttonHandler = () => {
  //   dispatch(setCartPopup(true))
  // };

  return (
    <section id = "smartcardio-slider" className="smartcardio-slider relative">

      <Image className="w-[15%] md:block hidden absolute right-[5%] top-[10%] opacity-50 blur-[30px]" src={"/images/logo.jpg"} alt='#' width={1200} height={1006} />
      <Image className="left-[5%] md:block hidden bottom-[10%] absolute w-[15%] opacity-50 blur-[30px]" src={"/images/logo.jpg"} alt='#' width={1200} height={1006} />

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
              id={3}
              arrowType="circle"
              smallSliderStyles={{
                className: "w-[50%] object-contain ",
                slidesPerView: 8,
                spaceBetween: 10,
              }}
              renderMap={smartardioSliderImage}
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
            link={routes.store}
          >
            <p>Заказать</p>
          </OrderButton>
        </Reveal>
      </div>

      <ZoomSlider
          zoomState = {zoomSlider}
          initialSlide={activeSlide}
          closeZoom={closeZoom}
          slides={smartardioSliderImage}
          mainSwiperRef={swiperRef}
        />

    
      {/* <CssTransition wrapperRef={zoomRef} state={zoomSlider}>


      </CssTransition> */}


    </section>
  );
};

export default SmartcardioSlider;
