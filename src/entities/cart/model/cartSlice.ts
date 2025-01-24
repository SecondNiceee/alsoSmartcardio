"use client";
import { device } from "@/shared/config/device";
import { deviceWithCase } from "@/shared/config/deviceWithCase";
import { TypeOrder } from "@/shared/config/TypeOrder";
import { getCookie } from "@/shared/utils/getCookie";
import { setCookie } from "@/shared/utils/setCookie";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial {
  orders: (TypeOrder & { counter: number })[];
  isCartPopupOpened: boolean;
  isCartButtonOpened: boolean;
}



const smarcardioCounter = 0

const smartcardioWithCaseCounter = 0

const initial: IInitial = {
  isCartPopupOpened: false,
  isCartButtonOpened: false,
  orders: [
    {
      ...device,
      counter: smarcardioCounter,
    },
    {
      ...deviceWithCase,
      counter: smartcardioWithCaseCounter,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initial,
  reducers: {
    setOrdersFromCookie(state){
        const deviceCounter = getCookie({name : "device"})
        const deviceWithCaseCounter = getCookie({name : "deviceWithCase"})
        state.orders[0].counter = deviceCounter
        state.orders[1].counter = deviceWithCaseCounter
    },
    addOrder(state, action: PayloadAction<{ id: number }>) {
      const id = action.payload.id;
      const order = state.orders.find((order) => order.id === id);
      if (order) {
        order.counter += 1;
        setCookie({ name: order.value, days: 360, value: order.counter });
      }
    },
    removeOneOrder(state, action: PayloadAction<{ id: number }>) {
      const id = action.payload.id;
      const order = state.orders.find((order) => order.id === id);
      if (order) {
        order.counter -= 1;
        setCookie({ name: order.value, days: 360, value: order.counter });
      }
    },
    removeAllOrders(state, action:PayloadAction<{id : number}>){
      const id = action.payload.id
      const order = state.orders.find((order) => order.id === id)
      if (order) {
        order.counter = 0;
        setCookie({ name: order.value, days: 360, value: order.counter });
      }
    },
    setCartPopup(state, action:PayloadAction<boolean>){
        const popupState = action.payload
        state.isCartPopupOpened = popupState
    },
    setCartButton(state, action:PayloadAction<boolean>){
        const cartState = action.payload
        state.isCartButtonOpened = cartState
    }
  },
});

export const {
  addOrder,
  removeOneOrder,
  setCartButton,
  setCartPopup,
  setOrdersFromCookie,
  removeAllOrders
} = cartSlice.actions;
