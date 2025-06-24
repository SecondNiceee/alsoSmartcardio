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
    useEffect(() => {
        const setFp = async () => {
          const fp = await FingerprintJS.load();
    
          const { visitorId } = await fp.get();

          let data = { 
            sc_UserId: getUserId()
          };
    
          fetch("/uid/" + getUserId() + "/fp/" + visitorId, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(data)
          });

        };
    
        setFp();
      }, []);

    return null
};

export default StartApp;