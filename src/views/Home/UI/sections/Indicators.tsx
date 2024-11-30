'use client'
import React from 'react';
import { indicators } from '../../config';
import Indicator from '../components/Indicator';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';

const Indicators = () => {
    const onClick = () => {
        
    }
    return (
        <section className='indicators'>
            <div className="container">
                <Reveal character={CHARACTER.LEFT}>
                    <header className='indicators__header'>Какие показатели регистрирует СмартКардио®?</header>
                </Reveal>
                <Reveal character={CHARACTER.RIGHT} className="indicators__main">
                    {indicators.map( (e, i) => {
                        return (
                            <Indicator description={e.description} imageSrc={e.imageSrc} key={i} />
                        )
                    } )}
                </Reveal>
                <Reveal style={{
                    display : "flex",
                    justifyContent : "center",
                    width : "100%"
                }} character={CHARACTER.DOWNUP}>
                    <OrderButton onClick={onClick} className="indicators__button">
                        <p>Заказть</p>
                    </OrderButton>
                </Reveal>
            </div>
        </section>
    );
};

export default Indicators;