"use client"
import { setOrdersFromCookie } from "@/entities/cart/model/cartSlice";
import authorize from "@/shared/api/authorize";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { saveAccessToken } from "@/shared/utils/saveAccesToken";
import {  FC, useEffect } from "react";



const StartApp:FC = () => {
    const dispatch = useAppDispatch()
    useEffect( () => {
        const getAutoriztion = async () => {
            const token = await authorize()
            saveAccessToken(token)
        }
        getAutoriztion()
        dispatch(setOrdersFromCookie())
    } , [] )
    
    return null
};

export default StartApp;