'use client'
import { setCartPopup } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const FooterOrderButton = () => {
    const dispatch = useAppDispatch()

    const clickHandler = () => {
        dispatch(setCartPopup(true))
    }
    return (
    <OrderButton onClick={clickHandler} className='!bg-liner w-[100%] py-[11px] md:py-[18px] px-[14px] gradient-hover'>
        <p className='clamp(1.188rem, 0.902rem + 1.43vw, 2.188rem)'>Заказать</p>
    </OrderButton>
    );
};

export default FooterOrderButton;