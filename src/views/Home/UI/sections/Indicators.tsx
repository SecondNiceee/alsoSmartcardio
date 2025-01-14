'use client'
import React, { useRef, useState } from 'react';
import { indicators } from '../../config';
import Indicator from '../components/Indicator';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import { BuyingPopup } from '@/widgets/BuyingPopup';
import { CSSTransition } from 'react-transition-group';

const Indicators = () => {

    const [isPopupOpened, setPopupOpened] = useState<boolean>(false)

    const onClick = () => {
        setPopupOpened(true)
    }

    const popupRef = useRef(null)

    return (
        <section className='indicators relative overflow-y-hidden'>

            <BlackThemeCircles />

            <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-black"></div>
            <div className="container">
                <Reveal character={CHARACTER.LEFT}>
                    <header className='indicators__header relative z-30'>Какие показатели регистрирует СмартКардио®?</header>
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

            
            <CSSTransition classNames={"zoom"} timeout={{enter : 50, exit : 400}} mountOnEnter unmountOnExit in = {isPopupOpened} nodeRef={popupRef}>
                <BuyingPopup ref = {popupRef} setState={setPopupOpened}  />
            </CSSTransition>

            
        </section>
    );
};

export default Indicators;