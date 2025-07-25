import React, { FC, SetStateAction } from 'react';
import { TWhoWhomSliderItem } from '../../config/forWhomSlider.config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import { routes } from '@/shared/config/routes';
import "../styles/_for-whom.scss";
import { createImageResolution } from '@/shared/utils/createImageResolution';

interface IForWhomSlide{
    slide : TWhoWhomSliderItem;
    setResponsePopup : React.Dispatch<SetStateAction<boolean>>;
    setSliderActive : React.Dispatch<SetStateAction<boolean>>;

}
const ForWhomSlide:FC<IForWhomSlide> = ({slide, setResponsePopup, setSliderActive}) => {
    return (
            <div className='w-full md:flex-row flex-col-reverse flex gap-5 md:gap-10'>
                <div className='lg:w-[44.93%] md:w-[40%] w-full  flex flex-col justify-center items-center gap-5 md:gap-10'>
                    <p className='md:text-left text-center sub-title font-normal text-black'>{slide.text}</p>
                    {slide.imgSrc !== "/images/for-hospitals.webp" ?  <OrderButton link={routes.store} className={'order-button'}  >
                        <span>Заказать</span>
                    </OrderButton> : 
                        <OrderButton onClick={() => {setResponsePopup(true)}} className={'order-button'}  >
                        <span>Связаться с нами</span>
                    </OrderButton>} 
                </div>
                <picture className='block'>
                    <source media='(max-width:768px)' srcSet={createImageResolution(slide.imgSrc, 768)} />
                    <source media='(max-width:1024px)' srcSet={createImageResolution(slide.imgSrc, 1024)} />
                    <img loading='lazy' onClick={() => {setSliderActive(true)}} className='lg:w-[55.07%] h-[500px] sm:w-[60%] w-full object-cover sm:h-[485px] md:h-[608px] mx-auto rounded-lg' src={createImageResolution(slide.imgSrc, 1440)} alt="Прибор для измерения ЭКГ" />
                </picture>
            </div>
    );
};

export default ForWhomSlide;