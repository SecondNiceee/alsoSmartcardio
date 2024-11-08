import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React, { useMemo, useState } from 'react';
import SmartcardioButtons from '../components/SmartcardioButtons';
import { ScrollArrow } from '@/features/ScrollArrow';
import Header from './Header';
import Video from '@/shared/UI/Video/Video';

const Smartcardio = () => {
    return (
        <div className="smartcardio-wrapper">
            <Video poster='images/manual.png' controlsList='nodownload' playsInline autoPlay muted loop  darkOpacity={0.5} videoName='smartardio.mp4' className='smartcardio__video' />
            <Header />
            <section className='smartcardio'>
                <div className="container">
                    <h1 className='smarcardio__header'>
                        СмартКардио <span>®</span>
                    </h1>
                    <h3 className='smartcardio__description'>
                    <span>Первое в мире</span>  устройство, регистрирующее одновременно ЭКГ, сатурацию и пульсовую волну без геля и проводов.
                    </h3>
                    <SmartcardioButtons  />
                    <ScrollArrow className='smartcardio-arrow' />
                </div>
            </section>
        </div>
    );
};

export default Smartcardio;