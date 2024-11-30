import React from 'react';
import { howOrderItems } from '../../config/howOrderItems';
import HowOrderItem from '../components/HowOrderItem';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const HowOrder = () => {
    return (
        <section className='how-order'>
            <div className="container">
                <div className="how-order__cap">

                    <header className='how-order__header'>
                        Как сделать заказ
                    </header>
                    <p className='how-order__description'>Для вашего удобства мы предлагаем разные варианты доставки, выбирайте комфортный</p>

                </div>
                <div className="how-orders__items">
                    {howOrderItems.map( (e, i) => {
                        return <HowOrderItem h={e.h} imageSrc={e.imageSrc} p={e.p} key={i} />
                    } )}
                </div>
                <OrderButton className='how-order__button black-border'  onClick={() => {alert("Идет заказ")}}>
                    <p className='how-order__button-p black'>В магазин</p>
                </OrderButton>
            </div>
            
        </section>
    );
};

export default HowOrder;