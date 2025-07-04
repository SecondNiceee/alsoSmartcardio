"use client"
import React, { useRef } from 'react';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import dynamic from 'next/dynamic';
import { openInstruction } from '../../utils/openInstruction';
const InteractiveLottie = dynamic(() => import("./InteractiveLottie"), {
    ssr: false
  });

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

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='interactive__phone'>

            <InteractiveLottie  ref={interactiveRef}  />

            <div className="phone-block" />

            <div ref={textRef} className="phone-tblock">
                <p className='tblock__text'>
                Для того, чтобы снять показатели, достаточно приложить прибор к себе. Данные передаются по Bluetooth и отображаются на вашем смартфоне или планшете.
                </p>
                <OrderButton className='intersection__order-button black-border' onClick={openInstruction}>
                    <p className='button-text black'>Инструкция по эксплуатации</p>
                </OrderButton>
            </div>

        </div>
    );
};

export default React.memo(InteractivePhoneBlock);
InteractivePhoneBlock.displayName = "InteractivePhoneBlock"