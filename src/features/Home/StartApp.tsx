'use client'
import { setOrdersFromCookie } from "@/entities/cart/model/cartSlice";
import authorize from "@/shared/api/authorize";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { saveAccessToken } from "@/shared/utils/saveAccesToken";
import {  FC, useEffect } from "react";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { getUserId } from "@/shared/utils/getUserId";


interface IStartApp{
  token : string | undefined
}
const StartApp:FC<IStartApp> = ({token}) => {
    const dispatch = useAppDispatch()
    useEffect( () => {
      if (token){
        console.warn(token);
        saveAccessToken(token)
        dispatch(setOrdersFromCookie())
      }
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