
import { TypeOrder } from "@/shared/config/TypeOrder";
import { createSlice } from "@reduxjs/toolkit";


interface IInitial {
    orders : TypeOrder[]
}

// const smarcardioCounter = getCookie({name : "device"})

// const smartcardioWithCaseCounter = getCookie({name : "deviceWithCase"})

const initial:IInitial = {
    orders : [
        {
            counter : 1,
            height : 100,
            id : 1,
            imageSrc : "/images/smartcardioS1.png",
            length : 100,
            name : "Смарткардио",
            price : 14500,
            weight : 50,
            width : 100
        }
    ]
}

export const cartSlice = createSlice({
    name : "cartSlice",
    initialState : initial,
    reducers : {

    }
})