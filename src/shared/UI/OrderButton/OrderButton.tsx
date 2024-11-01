"use client"

import React, { CSSProperties, FC, ReactNode } from 'react';
import cl from "./OrderButton.module.scss"

interface IOrderButton{
    children : ReactNode,
    onClick : () => void,
    styles? : CSSProperties,
    className? : string
}
function OrderButton({onClick , styles = {} , children, className = ""}:IOrderButton){
    return (
        <button  style={styles} onClick={onClick} className={`${cl.orderButton} ${className}`}>
            {children}
        </button>
    );
};

export default React.memo(OrderButton);