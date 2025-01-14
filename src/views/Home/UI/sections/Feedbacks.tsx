'use client'
import React from "react";
import Slider from "../components/Slider";
import { feedbacks } from "../../config/feedbacks";
import Image from "next/image";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { CSSTransition } from "react-transition-group";
import useDefaultSwiper from "../../../../shared/hooks/useDefaultSwiper";
import useZoomSwiper from "../../../../shared/hooks/useZoomSwiper";

const Feedbacks = () => {

  const {activeSlide, handleSlideChange, swiperRef} = useDefaultSwiper()

  const {closeZoom , renderZoomSwiper, zoomRef, zoomSlider, setZoomSlider} = useZoomSwiper()


  return (
    <section className="section">
      {/* <div className="green-shadow absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-solid border-black"></div> */}
      <div className="container gap-containerGap p-container flex flex-col relative">
        <Image
          width={755}
          height={821}
          src={"/images/videoLiner.svg"}
          alt="#"
          className="absolute blur-[100px] left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] "
        />
        <Reveal character={CHARACTER.LEFT}>
          <h2 className="h2">Отзывы</h2>
        </Reveal>
        <Reveal character={CHARACTER.RIGHT}>
          <Slider
          ref={swiperRef}
          handleSlideChange={handleSlideChange}
            id={4}
            NextButttonClassNames="lg:absolute right-[20px] md:right-[120px] z-30"
            PrevButtonClassNames="lg:absolute left-[120px] md:left-[110px] z-30"
            setZoomSlider={setZoomSlider}
            swiperClassNames="sm:p-5 white-shadow md:rounded-[50px] sm:rounded-[20px] rounded-[10px]  relative"
            arrowType="circle"
            mainImageClassNames = "!object-contain border-4  my-[auto] lg:px-5 lg:py-5 !w-[unset] feedbacks-slider-clamp"
            renderMap={feedbacks}
          />
        </Reveal>
      </div>

        <ZoomSlider
          zoomState = {zoomSlider}
          initialSlide={activeSlide}
          closeZoom={closeZoom}
          slides={feedbacks}
          mainSwiperRef={swiperRef}
          render={renderZoomSwiper}
        />

    </section>
  );
};

export default Feedbacks;
