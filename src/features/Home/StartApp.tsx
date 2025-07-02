'use client'
import { setOrdersFromCookie } from "@/entities/cart/model/cartSlice";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import {  FC, useEffect } from "react";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { getUserId } from "@/shared/utils/getUserId";



const StartApp:FC = () => {
    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(setOrdersFromCookie())
    } , [] )

    return null
};

export default StartApp;