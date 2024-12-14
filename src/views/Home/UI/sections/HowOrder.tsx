import React from 'react';
import { howOrderItems } from '../../config/howOrderItems';
import HowOrderItem from '../components/HowOrderItem';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';

const HowOrder = () => {
    return (
        <section className='how-order bg-black relative'>
            <div className="absolute left-[10%] z-20 top-[5%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute right-[10%] z-20 bottom-[5%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute left-[0%] z-20 bottom-[-20%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute right-[0%] z-20 top-[-20%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-black"></div>
            <div className="container">
                <Reveal character={CHARACTER.DOWNUP} className="how-order__cap">
                
                    <header className='how-order__header'>
                        Как сделать заказ
                    </header>
                    <p className='how-order__description'>Для вашего удобства мы предлагаем разные варианты доставки, выбирайте комфортный</p>

                </Reveal>
                <div className="how-orders__items">
                    {howOrderItems.map( (e, i) => {
                        return <HowOrderItem index = {i} h={e.h} imageSrc={e.imageSrc} p={e.p} key={i} />
                    } )}
                </div>  
                <Reveal character={CHARACTER.DOWNUP} className='button-reveal w-[100%] justify-center flex'>
                    <OrderButton className='how-order__button black-border'  onClick={() => {alert("Идет заказ")}}>
                        <p className='how-order__button-p black'>В магазин</p>
                    </OrderButton>
                </Reveal>
            </div>
            
        </section>
    );
};

export default HowOrder;