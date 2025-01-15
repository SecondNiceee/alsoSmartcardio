'use client'
import { useAppDispatch, useAppSelector } from "@/shared/models/reduxHooks";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BuyingPopup } from "./BuyingPopup";
import { setCartPopup } from "@/entities/cart/model/cartSlice";

const LayoutBuyingPopup = () => {
  const isPopupOpened = useAppSelector(state => state.cartSlice.isCartPopupOpened)
  const dispatch = useAppDispatch()
  const popupRef = useRef(null)
  const setPopup = (state:boolean) => {
    dispatch(setCartPopup(state))
  }
  return (
    <CSSTransition
      classNames={"zoom"}
      timeout={{ enter: 50, exit: 400 }}
      mountOnEnter
      unmountOnExit
      in={isPopupOpened}
      nodeRef={popupRef}
    >
      <BuyingPopup ref={popupRef} setState={setPopup} />
    </CSSTransition>
  );
};

export default LayoutBuyingPopup;
