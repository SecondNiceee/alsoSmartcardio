"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/_for-whom.scss";
import NextButton from "@/shared/UI/NextPrevButtons/NextButton";
import ForWhomMainSlider from "../components/ForWhomMainSlider";
import ForWhomTitleSlider from "../components/ForWhomTitleSlider";
import {Swiper as TSwiper} from 'swiper';
import { CSSTransition } from "react-transition-group";
import ResponsePopup from "@/widgets/ResponsePopup/ResponsePopup";
import PrevButton from "@/shared/UI/NextPrevButtons/PrevButton";
import useZoomSwiper from "@/shared/hooks/useZoomSwiper";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { forWhomSliderImagesConfig } from "../../config/forWhomSlider.config";

const ForWhomTwo = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const onSlideChange = (swiper : TSwiper) => {
    setActiveSlideIndex(swiper.realIndex);
  }

  const popupRef = useRef(null);

  const [responsePopup, setResponsePopup] = useState<boolean>(false);

  const {closeZoom , zoomSlider, setZoomSlider} = useZoomSwiper();

  const mainSwiperRef = useRef<any>(null);

  useEffect( () => {
    if (mainSwiperRef){
        if (mainSwiperRef.current){
            if (mainSwiperRef.current.swiper.realIndex !== activeSlideIndex){
                mainSwiperRef.current.swiper.slideTo(activeSlideIndex);
            }
        }
    }
} , [activeSlideIndex])

  return (
    <section className="section for-whom relative">
      <div className="container gap-containerGap p-container flex flex-col">
        <ForWhomTitleSlider setSliderIndex={setActiveSlideIndex} activeSlideIndex={activeSlideIndex} />
        <div className="flex w-full relative">
          <ForWhomMainSlider setZoomSlider={setZoomSlider} ref={mainSwiperRef} setResponsePopup={setResponsePopup}  onSlideChange={onSlideChange} />
          <div className="lg:w-[31%] flex my-auto justify-center">
            <PrevButton className="lg:w-full md:hidden top-[28%] md:top-1/2 left-0 z-20 -translate-y-1/2 absolute lg:relative prev-forWhom lg:scale-150" arrowType="circle" />
            <NextButton
              className="lg:w-full top-[28%] md:top-1/2 right-0 z-20 -translate-y-1/2 absolute lg:relative next-forWhom lg:scale-150"
              arrowType="circle"
            />
          </div>
        </div>
      </div>
      <CSSTransition nodeRef={popupRef} in = {responsePopup} timeout={{ enter:300, exit : 0}} unmountOnExit mountOnEnter>
          <ResponsePopup setPopup={setResponsePopup} ref={popupRef} />
      </CSSTransition>
        <ZoomSlider
        zoomState = {zoomSlider}
        initialSlide={activeSlideIndex}
        closeZoom={closeZoom}
        slides={forWhomSliderImagesConfig}
        mainSwiperRef={mainSwiperRef}
        />
    </section>
  );
};

export default ForWhomTwo;
