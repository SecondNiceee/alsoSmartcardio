"use client"
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const HeaderButton = () => {
    const clickHandler = () => {
        alert("Это заказ!!")
    }
    return (
        <OrderButton className={"header__order-button"} onClick={clickHandler} >
            <p>Заказать</p>
        </OrderButton>
    );
};

export default React.memo(HeaderButton);