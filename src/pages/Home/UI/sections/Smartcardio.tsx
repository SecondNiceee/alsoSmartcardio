import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';
import SmartcardioButtons from '../components/SmartcardioButtons';
import { ScrollArrow } from '@/features/ScrollArrow';
import Header from './Header';
import Video from '@/shared/UI/Video/Video';

const Smartcardio = () => {
    return (
        <div className="smartcardio-wrapper">
            <Video darkOpacity={0.5} videoName='smartardio.mp4' className='smartcardio__video' />

            <Header />
            <section className='smartcardio'>
                <div className="container">
                    <h1 className='smarcardio__header'>
                        СмартКардио <span>®</span>
                    </h1>
                    <h3 className='smartcardio__description'>
                    Персональное устройство для мониторинга вашего здоровья
                    </h3>
                    <SmartcardioButtons  />
                    <ScrollArrow className='smartcardio-arrow' />
                </div>
            </section>
        </div>
    );
};

export default Smartcardio;