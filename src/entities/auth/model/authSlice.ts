import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitial{
    isRegistrationPopupOpened : boolean,
    isLoginPopupOpened : boolean,
}
const initial:IInitial = {
    isLoginPopupOpened : false,
    isRegistrationPopupOpened : false
}
export const authSlice = createSlice({
    name : "authSlice",
    initialState : initial,
    reducers : {
        setRegistrationPopup(state, action:PayloadAction<boolean>){
            state.isRegistrationPopupOpened = action.payload
        },
        setLoginPopup(state, action : PayloadAction<boolean>){
            state.isLoginPopupOpened = action.payload
        }
    }
})

export const {setRegistrationPopup, setLoginPopup} = authSlice.actions;
