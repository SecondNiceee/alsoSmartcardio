"use client";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import Reveal from "@/shared/UI/Reveal/Reveal";
import Image from "next/image";
import React from "react";
import RecognitionImages from "../components/RecognitionImages";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { routes } from "@/shared/config/routes";

const Recognition = () => {
  return (
    <section className="recognition">
      <div className="container relative z-30 gap-containerGap p-container flex flex-col items-center">
        <Reveal character={CHARACTER.UPDOWN}>
          <h2 className="h2 text-black">Интуитивно понятый интерфейс</h2>
        </Reveal>
        <div className="flex justify-center md:justify-between  gap-5 md:flex-row flex-col-reverse ">
          <div
            className="white-shadow my-auto py-10 flex flex-col gap-10 items-center justify-center rounded-3xl
                      p-4 mx-auto w-[100%] sm:w-[80%]"
          >
            <p className="big-p text-black ">
            Приложение содержит автоматическое распознавание широкого спектра нарушений с помощью искусственного интеллекта. Цветовая индикация способствует лучшему восприятию данных.
            </p>
            <OrderButton
              link={routes.store}
              className="w-[90%] max-w-[70%] md:max-w-[500px] bg-[#ffffff] py-[11px] md:py-[18px] px-[14px] mx-auto border-solid border-2 scale-hover"
            >
              <span className="button-p">Заказть</span>
            </OrderButton>
          </div>
          <RecognitionImages />
        </div>
      </div>
    </section>
  );
};

export default Recognition;
