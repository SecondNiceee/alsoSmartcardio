"use client"
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const IndicatorsButton = () => {
    const onClick = () => {
        
    }
    return (
        <OrderButton onClick={onClick} className="indicators__button">
            <p>Заказть</p>
        </OrderButton>
    );
};

export default IndicatorsButton;