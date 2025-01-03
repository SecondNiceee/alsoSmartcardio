// AppStore.ts
import { cartSlice } from "@/entities/cart"
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer : {
        cartSlice : cartSlice.reducer
    },
    middleware : getDefaultMiddleware  => getDefaultMiddleware ({serializableCheck : false})
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']