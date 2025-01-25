'use client'
import React, { useEffect, useState } from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { setCartPopup } from "@/entities/cart/model/cartSlice";
import { routes } from "@/shared/config/routes";

const SmartcardioButtons = () => {
  const dispath = useAppDispatch();
  const [scrollToDownloads, setScrollToDownloads] = useState(() => () => {});

  useEffect(() => {
    const importScrollToDownloads = async () => {
      const { scrollToDownloads } = await import('../../utils/scrollToDownloads');
      setScrollToDownloads(() => scrollToDownloads);
    };
    importScrollToDownloads();
  }, []);

  // const orderFunction = () => {
  //   dispath(setCartPopup(true));
  // };

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
        onClick={scrollToDownloads}
      >
        <p>Читать далее</p>
      </OrderButton>
    </>
  );
};

export default SmartcardioButtons;