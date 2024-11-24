'use client'
import React from 'react';
import { indicators } from '../../config';
import Indicator from '../components/Indicator';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const Indicators = () => {
    const onClick = () => {
        
    }
    return (
        <section className='indicators'>
            <div className="container">
                <header className='indicators__header'>Какие показатели регистрирует СмартКардио®?</header>
                <div className="indicators__main">
                    {indicators.map( (e, i) => {
                        return (
                            <Indicator description={e.description} imageSrc={e.imageSrc} key={i} />
                        )
                    } )}
                </div>
                <OrderButton onClick={onClick} className="indicators__button">
            <p>Заказть</p>
        </OrderButton>
            </div>
        </section>
    );
};

export default Indicators;