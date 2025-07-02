"use client";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import Reveal from "@/shared/UI/Reveal/Reveal";
import React from "react";
import RecognitionImages from "../components/RecognitionImages";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { routes } from "@/shared/config/routes";

const Recognition = () => {
  return (
    <section className="recognition">
      <div className="container relative z-30 gap-containerGap p-container flex flex-col items-center">
        <Reveal character={CHARACTER.UPDOWN}>
          <h2 className="h2 text-black">Интуитивно понятный интерфейс</h2>
        </Reveal>
        <div className="flex items-center justify-center md:justify-between gap-10 md:flex-row flex-col ">
          <RecognitionImages />

          <div
            className="white-shadow my-auto py-10 flex flex-col gap-10 items-center md:justify-between justify-center rounded-3xl
                      p-4 mx-auto w-[100%] sm:w-[80%]"
          >
            <p
              className="big-p text-black "
            >
                Приложение СмартКардио® содержит автоматическое <span className="font-semibold"> распознавание широкого спектра нарушений  с помощью искусственного интеллекта. </span>Цветовая индикация способствует лучшему восприятию данных.
            </p>
            <OrderButton
              link={routes.store}
              className="w-[90%] max-w-[70%] border-white md:max-w-[500px] py-[11px] md:py-[18px] px-[14px] mx-auto border-solid border-2 scale-hover"
            >
              <span className="button-p text-white">Заказать</span>
            </OrderButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
