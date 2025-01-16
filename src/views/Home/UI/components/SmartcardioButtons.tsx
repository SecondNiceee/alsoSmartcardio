"use client";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React from "react";
import { scrollToDownloads } from "../../utils/scrollToDownloads";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { setCartPopup } from "@/entities/cart/model/cartSlice";

const SmartcardioButtons = () => {
  const dispath = useAppDispatch();

  const orderFunction = () => {
    dispath(setCartPopup(true));
  };

  return (
    <>
      <OrderButton
        className="smartcardio__order-button"
        onClick={orderFunction}
      >
        <p>Заказать</p>
      </OrderButton>
      <OrderButton
        className="smartcardio__read-button"
        onClick={scrollToDownloads}
      >
        <p>Читать далее</p>
      </OrderButton>
    </>
  );
};

export default SmartcardioButtons;
