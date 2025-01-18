"use client"
import { setOrdersFromCookie } from "@/entities/cart/model/cartSlice";
import authorize from "@/shared/api/authorize";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { removeAccessToken } from "@/shared/utils/removeAccessToken";
import { saveAccessToken } from "@/shared/utils/saveAccesToken";
import { FC, useEffect } from "react";


const StartApp = () => {
    
    const dispatch = useAppDispatch()
    
    useEffect( () => {
        const getToken = async () => {
            const accesToken = await authorize()
            removeAccessToken()
            saveAccessToken(accesToken)
        }
        getToken()
        dispatch(setOrdersFromCookie())
    } , [] )
    
    return null
};

export default StartApp;