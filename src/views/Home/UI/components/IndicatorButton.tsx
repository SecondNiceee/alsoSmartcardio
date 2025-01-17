'use client'
import { setCartPopup } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const IndicatorButton = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(setCartPopup(true))
    }
    return (
    <OrderButton onClick={onClick} className="indicators__button">
        <p>Заказать</p>
    </OrderButton>
    );
};

export default IndicatorButton;