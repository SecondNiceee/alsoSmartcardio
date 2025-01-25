'use client'
import { setCartPopup } from '@/entities/cart/model/cartSlice';
import { routes } from '@/shared/config/routes';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const IndicatorButton = () => {
    // const dispatch = useAppDispatch()

    // const onClick = () => {
    //     dispatch(setCartPopup(true))
    // }
    return (
    <OrderButton link={routes.store} className="indicators__button">
        <p>Заказать</p>
    </OrderButton>
    );
};

export default IndicatorButton;