import React from 'react';
import { howOrderItems } from '../../config/howOrderItems';
import HowOrderItem from '../components/HowOrderItem';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Reveal from '@/shared/UI/Reveal/Reveal';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import { routes } from '@/shared/config/routes';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';

const HowOrder = () => {
    return (
        <section className='how-order bg-black relative overflow-y-hidden'>
            <BlackThemeCircles />            
            <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-black"></div>
            <div className="container">
                <Reveal character={CHARACTER.DOWNUP} className="how-order__cap">
                
                    <header className='how-order__header relative z-30'>
                        Как сделать заказ?
                    </header>
                    <p className='how-order__description relative z-30'>Для вашего удобства мы предлагаем разные способы доставки, выбирайте комфортный</p>

                </Reveal>
                <div className="how-orders__items relative z-30">
                    {howOrderItems.map( (e, i) => {
                        return <HowOrderItem index = {i} h={e.h} imageSrc={e.imageSrc} p={e.p} key={i} />
                    } )}
                </div>  
                <Reveal character={CHARACTER.DOWNUP} className='button-wrapper mx-auto w-[100%] max-w-[70%] md:max-w-[500px] relative z-40'>
                    <OrderButton link={routes.store}  className='!bg-liner w-[100%] py-[11px] md:py-[18px] px-[14px] gradient-hover'>
                        <p className='clamp(1.188rem, 0.902rem + 1.43vw, 2.188rem) text-black'>В магазин</p>
                    </OrderButton>
                </Reveal>
            </div>
            
        </section> 
    );
};

export default HowOrder;