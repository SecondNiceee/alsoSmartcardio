"use client";
import React, { useRef, useState } from "react";
import "../styles/_for-whom.scss";
import NextButton from "@/shared/UI/NextPrevButtons/NextButton";
import ForWhomMainSlider from "../components/ForWhomMainSlider";
import ForWhomTitleSlider from "../components/ForWhomTitleSlider";
import {Swiper as TSwiper} from 'swiper';
import { CSSTransition } from "react-transition-group";
import ResponsePopup from "@/widgets/ResponsePopup/ResponsePopup";

const ForWhomTwo = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const onSlideChange = (swiper : TSwiper) => {
    setActiveSlideIndex(swiper.realIndex);
  }

  const popupRef = useRef(null);

  const [responsePopup, setResponsePopup] = useState<boolean>(false);

  return (
    <section className="section for-whom relative">
      <div className="container gap-containerGap p-container flex flex-col">
        <ForWhomTitleSlider setSliderIndex={setActiveSlideIndex} activeSlideIndex={activeSlideIndex} />
        <div className="flex w-full relative">
          <ForWhomMainSlider setResponsePopup={setResponsePopup} activeSlideIndex={activeSlideIndex} onSlideChange={onSlideChange} />
          <div className="lg:w-[31%] top-1/2 right-0 z-20 -translate-y-1/2 absolute lg:relative flex my-auto justify-center">
            <NextButton
              className="lg:w-full next-forWhom lg:scale-150"
              arrowType="circle"
            />
          </div>
        </div>
      </div>
      <CSSTransition nodeRef={popupRef} in = {responsePopup} timeout={{ enter:300, exit : 0}} unmountOnExit mountOnEnter>
          <ResponsePopup setPopup={setResponsePopup} ref={popupRef} />
      </CSSTransition>
    </section>
  );
};

export default ForWhomTwo;
