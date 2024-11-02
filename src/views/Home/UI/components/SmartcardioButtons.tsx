"use client"
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const SmartcardioButtons = () => {
    const orderFunction = () => {
        alert("Заказ")
    }
    const readMoreFunctuin = () => {
        alert("Читать дальше")
    }
    return (
        <div className='smartcardio__buttons'>
            <OrderButton className='smartcardio__order-button' onClick={orderFunction}>
                <p>Заказать</p>
            </OrderButton>
            <OrderButton className='smartcardio__read-button' onClick={orderFunction}>
                <p>Читать далее</p>
            </OrderButton>
                    
        </div>
    );
};

export default SmartcardioButtons;