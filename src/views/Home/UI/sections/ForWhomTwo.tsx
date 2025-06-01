"use client";
import React, { useState } from "react";
import "../styles/_for-whom.scss";
import NextButton from "@/shared/UI/NextPrevButtons/NextButton";
import ForWhomMainSlider from "../components/ForWhomMainSlider";
import ForWhomTitleSlider from "../components/ForWhomTitleSlider";
import {Swiper as TSwiper} from 'swiper';

const ForWhomTwo = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const onSlideChange = (swiper : TSwiper) => {
    setActiveSlideIndex(swiper.realIndex);
  }

  return (
    <section className="section for-whom relative">
      <div className="container gap-containerGap p-container flex flex-col">
        <ForWhomTitleSlider activeSlideIndex={activeSlideIndex} />
        <div className="flex w-full">
          <ForWhomMainSlider onSlideChange={onSlideChange} />
          <div className="w-[31%] flex my-auto justify-center">
            <NextButton
              className="w-full next-forWhom scale-150"
              arrowType="circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomTwo;
