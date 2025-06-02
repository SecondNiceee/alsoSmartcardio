import React, { FC, SetStateAction } from 'react';
import { TWhoWhomSliderItem } from '../../config/forWhomSlider.config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import { routes } from '@/shared/config/routes';
import "../styles/_for-whom.scss";
import Image from 'next/image';

interface IForWhomSlide{
    slide : TWhoWhomSliderItem;
    setResponsePopup : React.Dispatch<SetStateAction<boolean>>
}
const ForWhomSlide:FC<IForWhomSlide> = ({slide, setResponsePopup}) => {
    return (
            <div className='w-full md:flex-row flex-col-reverse flex gap-5 md:gap-10'>
                <div className='lg:w-[44.93%] md:w-[40%] w-full  flex flex-col justify-center items-center gap-5 md:gap-10'>
                    <p className='md:text-left text-center sub-title font-normal text-black'>{slide.text}</p>
                    {slide.imgSrc !== "/images/for-hospitals.png" ?  <OrderButton link={routes.store} className={'order-button'}  >
                        <span>Заказать</span>
                    </OrderButton> : 
                            <OrderButton onClick={() => {setResponsePopup(true)}} className={'order-button'}  >
                        <span>Связаться с нами</span>
                    </OrderButton>} 
                </div>
                <Image width={1000} height={1000} className='lg:w-[55.07%] h-[500px] sm:w-[60%] w-full object-cover sm:h-[485px] md:h-[608px] mx-auto rounded-lg' src={slide.imgSrc} alt="forUsers" />
            </div>
    );
};

export default ForWhomSlide;