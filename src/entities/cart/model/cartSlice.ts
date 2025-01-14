'use client'
import { device } from "@/shared/config/device";
import { deviceWithCase } from "@/shared/config/deviceWithCase";
import { TypeOrder } from "@/shared/config/TypeOrder";
import { getCookie } from "@/shared/utils/getCookie";
import { setCookie } from "@/shared/utils/setCookie";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IInitial {
    orders : (TypeOrder & {counter : number})[]
}

const smarcardioCounter = getCookie({name : "device"})

const smartcardioWithCaseCounter = getCookie({name : "deviceWithCase"})

const initial:IInitial = {
    orders : [
        {
            ...device,
            counter : smarcardioCounter
        },
        {
            ...deviceWithCase,
            counter : smartcardioWithCaseCounter
        }
    ]
}

export const cartSlice = createSlice({
    name : "cartSlice",
    initialState : initial,
    reducers : {
        addOrder(state, action:PayloadAction<{id : number}>){
            const id = action.payload.id
            const order = state.orders.find((order) => order.id === id)
            if (order){
                order.counter += 1
                setCookie({name : order.value, days : 360, value : order.counter})
            }
        },
        removeOneOrder(state, action:PayloadAction<{id : number}>){
            const id = action.payload.id
            const order = state.orders.find((order) => order.id === id)
            if (order){
                order.counter -= 1
                setCookie({name : order.value, days : 360, value : order.counter})
            }
        }
    }
})

export const {addOrder, removeOneOrder} = cartSlice.actions