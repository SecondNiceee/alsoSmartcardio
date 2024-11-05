"use client"
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React from "react";

const InteractiveButtons = () => {
  const onClick = () => {

  }
  return (
    <div className="m-block">
      <p className="interactive__m-description">
        Для того, чтобы снять показатели, достаточно приложить прибор к себе.
        Данные передаются по Bluetooth и отображаются на вашем смартфоне или
        планшете.
      </p>
      <OrderButton onClick={onClick} className="interactive__m-button black-border">
        <p className="interactive__button-text black">Смотреть видео</p>
      </OrderButton>
      <OrderButton
        onClick={onClick}
        className="interactive__m-button black-border"
      >
        <p className="interactive__button-text black">
          Подробнее об устройстве
        </p>
      </OrderButton>
    </div>
  );
};

export default InteractiveButtons;
