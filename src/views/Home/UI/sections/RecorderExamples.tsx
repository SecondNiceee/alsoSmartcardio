'use client'
import React, { useCallback, useState } from "react";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { recordersSliders } from "../../config/smarcardioSliderImages";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { recorders } from "../../config/recorders";
import Reveal  from "@/shared/UI/Reveal/Reveal";
import useZoomSwiper from "../../../../shared/hooks/useZoomSwiper";
import useDefaultSwiper from "../../../../shared/hooks/useDefaultSwiper";
import { RecorderItem } from "../components/RecorderItem";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";

const RecorderExamples = () => {

    const {activeSlide, handleSlideChange, swiperRef, changeSlide} = useDefaultSwiper()

    const {closeZoom , zoomRef, zoomSlider, setZoomSlider} = useZoomSwiper()

  const renderSmall = useCallback((src:string, index: number) => {
    return (
        <SwiperSlide key={index}  className={`mx-auto small-slide  rounded-sm cursor-pointer`}>
            <Image className='w-[100%] h-[100%] rounded-sm' alt='#' src={src} width={600} height={600}  />
        </SwiperSlide>
    )
}, [activeSlide])
  return (
    <section className="section">
      <div className="container gap-containerGap p-container flex flex-col">
        <Reveal character={CHARACTER.UPDOWN}>
            <h2 className="h2">Примеры записей c прибора</h2>
        </Reveal>
        <div className="flex md:flex-row flex-col-reverse md:gap-2 md:justify-between gap-containerGap w-[100%] items-center">

            <Reveal character={CHARACTER.LEFT} className="flex flex-col w-[100%] h-auto items-center max-w-[600px] md:max-w-full gap-5 md:gap-12 py-10 px-6 justify-between  rounded-[10px] relative white-shadow">

                {recorders.map( (e, index) => 
                    <RecorderItem changeSlide={changeSlide} text={e} index={index} key={index} activeSlide={activeSlide} />
                  )}

            </Reveal>

            <div className="md:w-[60%] w-[100%] flex flex-col gap-2">

            <Reveal character={CHARACTER.RIGHT}>

                <Slider
                    id={2}
                    loop = {false}
                    smallSliderStyles={{
                        slidesPerView : 3,
                        spaceBetween : 10
                    }}
                    handleSlideChange={handleSlideChange}
                    ref={swiperRef}
                    setZoomSlider={setZoomSlider}
                    arrowType="just"
                    renderMap={recordersSliders}
                    renderSmall={renderSmall}
                />

            </Reveal>
            </div>

        </div>
      </div>
        <ZoomSlider
        zoomState = {zoomSlider}
        initialSlide={activeSlide}
        closeZoom={closeZoom}
        slides={recordersSliders}
        mainSwiperRef={swiperRef}
        />
    </section>  
  );
};

export default RecorderExamples;
