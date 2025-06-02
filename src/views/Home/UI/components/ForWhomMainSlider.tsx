import React, {  forwardRef,  SetStateAction } from 'react';
import { Navigation } from 'swiper/modules';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import { forWhomSliderConfig } from '../../config/forWhomSlider.config';
import ForWhomSlide from './ForWhomSlide';
import  {Swiper as TSwiper} from 'swiper';
interface IForWhomMainSlider{
    onSlideChange : (swiper : TSwiper) => void;
    setResponsePopup : React.Dispatch<SetStateAction<boolean>>,
    setZoomSlider : React.Dispatch<SetStateAction<boolean>>
}
const ForWhomMainSlider = forwardRef<SwiperRef, IForWhomMainSlider>(({onSlideChange, setResponsePopup, setZoomSlider}:IForWhomMainSlider, ref ) => {

    return (
            <Swiper
            ref={ref}
            className='lg:w-[69%] w-full'
            onSlideChange={onSlideChange}
            slidesPerView={1} 
            spaceBetween={20}
            loop = {true}
            modules={[
                Navigation
            ]}
            navigation = {{
                nextEl : ".next-forWhom",
                prevEl : ".prev-forWhom"
            }}
            >
                {forWhomSliderConfig.map( (slide, i) => (
                    <SwiperSlide key={i} className='w-full cursor-pointer'>
                        <ForWhomSlide setSliderActive={setZoomSlider} setResponsePopup={setResponsePopup} slide={slide} />
                    </SwiperSlide>
                ) )}                
            </Swiper>
    );
} );

export default ForWhomMainSlider as (props : IForWhomMainSlider & React.RefAttributes<SwiperRef>) => JSX.Element;