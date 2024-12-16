"use client"
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React, { FC } from "react";
import { IInteractiveMobile } from "./InteractiveMobile";

const InteractiveButtons:FC<IInteractiveMobile> = ({openZoom, openPopup}) => {
  return (
    <div className="m-block">
      <p className="interactive__m-description">
        Для того, чтобы снять показатели, достаточно приложить прибор к себе.
        Данные передаются по Bluetooth и отображаются на вашем смартфоне или
        планшете.
      </p>
      <OrderButton onClick={openPopup} className="interactive__m-button black-border">
        <p className="interactive__button-text black">Смотреть видео</p>
      </OrderButton>
      <OrderButton
        onClick={openZoom}
        className="interactive__m-button black-border"
      >
        <p className="interactive__button-text black">
          Cхема устройства
        </p>
      </OrderButton>
    </div>
  );
};

export default InteractiveButtons;
