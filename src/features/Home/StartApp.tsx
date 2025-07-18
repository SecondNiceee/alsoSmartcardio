'use client'
import { setOrdersFromCookie } from "@/entities/cart/model/cartSlice";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import {  FC, useEffect } from "react";



const StartApp:FC = () => {
    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(setOrdersFromCookie())
    } , [dispatch] )

    return null
};

export default StartApp;