'use client'
import React, { createContext, FC, ReactNode, SetStateAction, useContext, useState } from 'react';

type TTelegramContext = {
    setTelegramPopup : React.Dispatch<SetStateAction<boolean>>,
    isTelegramPopup : boolean
}
const TelegramContext = createContext<TTelegramContext | null>(null);

const TelegramProvider:FC<{children : ReactNode}> = ({children}) => {
    const [isTelegramPopup, setTelegramPopup] = useState<boolean>(false);
    return (   
        <TelegramContext.Provider value={{setTelegramPopup, isTelegramPopup}}>
            {children}
        </TelegramContext.Provider>
    );
};

export default TelegramProvider;

const useTelegramContext = () => useContext(TelegramContext);

export const useTelegramPopup = () => {
    const context = useTelegramContext()
    if (!context){
        throw new Error("TelegramProvider не найден!!")
    }
    return {isTelegramPopup : context.isTelegramPopup, setTelegramPopup : context.setTelegramPopup }
}