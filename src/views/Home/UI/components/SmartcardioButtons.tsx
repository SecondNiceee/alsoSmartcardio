'use client'
import React from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { routes } from "@/shared/config/routes";
import { scrollToForWhom } from "../../utils/scrollToForWhom";

const SmartcardioButtons = () => {
  return (
    <>
      <OrderButton
        className="smartcardio__order-button"
        link={routes.store}
      >
        <p>Заказать</p>
      </OrderButton>
      <OrderButton
        className="smartcardio__read-button"
        onClick={scrollToForWhom}
      >
        <p>Читать далее</p>
      </OrderButton>
    </>
  );
};

export default SmartcardioButtons;