'use client'
import { routes } from '@/shared/config/routes';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const FooterOrderButton = () => {
    return (
    <OrderButton link={routes.store} className='header__order-button !sticky top-[20px] right-[20px]'>
        <p className='clamp(1.188rem, 0.902rem + 1.43vw, 2.188rem)'>Заказать</p>
    </OrderButton>
    );
};

export default FooterOrderButton;