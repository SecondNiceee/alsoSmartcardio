import React, { useCallback, useRef, useState } from "react";
import { SwiperRef, SwiperSlide } from "swiper/react";
import { smartardioSliderImage } from "../../config/smarcardioSliderImages";
import Image from "next/image";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";

import "swiper/css";
import StrangeArrow from "../components/StrangeArrow";
import SliderWrapper from "../components/SliderWrapper";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { Swiper as SwiperInstance } from 'swiper';
import CssTransition from "@/shared/UI/CssTransition/CssTransition";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";


const SmartcardioSlider = () => {
  const [zoomSlider, setZoomSlider] = useState<boolean>(false);
  
  const [activeSlide, setActiveSlide] = useState<number>(1)

  const zoomRef = useRef<HTMLDivElement>(null)

  const mainSwiperRef = useRef<SwiperRef>(null)


  const closeZoom = useCallback( () => {
    setZoomSlider(false)
  }, [setZoomSlider] )

  const handleSlideChange = useCallback( (swiper : SwiperInstance) => {
    setActiveSlide(swiper.realIndex)  
  } , [setActiveSlide] )

  const buttonHandler = () => {
    
  }

  return (
    <section className="smartcardio-slider">

      <div className="container">
        <Reveal character={CHARACTER.LEFT} className="smartcardio-slider__header">
          Прибор СмартКардио®
        </Reveal>

        <Reveal character={CHARACTER.RIGHT} className="smartcardio-slider__main">
          <Reveal character={CHARACTER.LEFT} className="circle prev">
            <StrangeArrow />
          </Reveal>

          <SliderWrapper ref={mainSwiperRef} handleSlideChange={handleSlideChange}  setZoomSlider={setZoomSlider} />

          <Reveal character={CHARACTER.RIGHT} className="circle next">
            <StrangeArrow />
          </Reveal>
        </Reveal>

        <p
          className="smartcardio-slider__p"
        >
          <Reveal character={CHARACTER.LEFT}>
             Разработан и произведен в <span>России</span>
          </Reveal>
        </p>


        <Reveal character={CHARACTER.RIGHT}>
          <OrderButton
            className="smartcardio-slider__button"
            onClick={buttonHandler}
          >
            <p>
              Закать
            </p>
          </OrderButton>
        </Reveal>

      </div>

    <CssTransition wrapperRef={zoomRef}  state = {zoomSlider}>

      <ZoomSlider
        ref={zoomRef}
        initialSlide={activeSlide}
        closeZoom={closeZoom}
        slides={smartardioSliderImage}
        id="zoom-slider"
        mainSwiperRef={mainSwiperRef}
      
        render={(e, i) => {
          return (
            <SwiperSlide  key={i} className="slide zoom-slide">
              <Image
                className="image-zoom image"
                width={960}
                height={1280}
                alt="#"
                src={e}
              />
            </SwiperSlide>
          );

        }}
      />

    </CssTransition>

    </section>
  );
};

export default SmartcardioSlider;
