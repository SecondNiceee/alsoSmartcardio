'use client'
import React, { useEffect, useState } from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { routes } from "@/shared/config/routes";

const SmartcardioButtons = () => {
  const [scrollToForWhom, setScrollToForWhom] = useState(() => () => {});


  useEffect(() => {
    const importScrollToDownloads = async () => {
      const { scrollToForWhom } = await import('../../utils/scrollToForWhom');
      setScrollToForWhom(() => scrollToForWhom);
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
        onClick={scrollToForWhom}
      >
        <p>Читать далее</p>
      </OrderButton>
    </>
  );
};

export default SmartcardioButtons;