import React, { FC } from 'react';
import { TWhoWhomSliderItem } from '../../config/forWhomSlider.config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import { routes } from '@/shared/config/routes';
import "../styles/_for-whom.scss";

interface IForWhomSlide{
    slide : TWhoWhomSliderItem;
}
const ForWhomSlide:FC<IForWhomSlide> = ({slide}) => {
    return (
            <div className='w-full flex gap-10'>
                <div className='w-[44.93%] flex flex-col justify-center items-center gap-10'>
                    <p className='sub-title font-normal text-black text-left'>{slide.text}</p> 
                    <OrderButton link={routes.store} className={'order-button'}  >
                        <span>Заказать</span>
                    </OrderButton>
                </div>
                <img className='w-[55.07%] object-cover h-[608px] mx-auto rounded-lg' src={slide.imgSrc} alt="forUsers" />
            </div>
    );
};

export default ForWhomSlide;