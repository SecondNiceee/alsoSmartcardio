"use client"
import { setOrdersFromCookie } from "@/entities/cart/model/cartSlice";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import {  useEffect } from "react";


const StartApp = () => {
    
    const dispatch = useAppDispatch()
    
    useEffect( () => {
        dispatch(setOrdersFromCookie())
    } , [] )
    
    return null
};

export default StartApp;