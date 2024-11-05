"use client"
import React, { useRef } from 'react';
import InteractiveLottie from './InteractiveLottie';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const InteractivePhoneBlock = () => {
    const interactiveRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const onMouseEnter = () => {
        interactiveRef.current?.classList.remove("show")
        textRef.current?.classList.add("show")
    }
    const onMouseLeave = () => {
        interactiveRef.current?.classList.add("show")
        textRef.current?.classList.remove("show")
    }
    const clickFunction = () => {
        alert("Тут скролл к видео")
    }
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='interactive__phone'>

            <InteractiveLottie  ref={interactiveRef}  />

            <div className="phone-block" />

            <div ref={textRef} className="phone-tblock">
                <p className='tblock__text'>
                Для того, чтобы снять показатели, достаточно приложить прибор к себе. Данные передаются по Bluetooth и отображаются на вашем смартфоне или планшете.
                </p>
                <OrderButton className='intersection__order-button black-border' onClick={clickFunction}>
                    <p className='button-text black'>Смотреть видео</p>
                </OrderButton>
            </div>

        </div>
    );
};

export default InteractivePhoneBlock;