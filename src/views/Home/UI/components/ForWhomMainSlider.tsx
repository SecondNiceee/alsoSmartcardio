import React, { FC } from 'react';
import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { forWhomSliderConfig } from '../../config/forWhomSlider.config';
import ForWhomSlide from './ForWhomSlide';
import {Swiper as TSwiper} from 'swiper';
interface IForWhomMainSlider{
    onSlideChange : (swiper : TSwiper) => void;
}
const ForWhomMainSlider:FC<IForWhomMainSlider> = ({onSlideChange}) => {
    return (
            <Swiper
            className='w-[69%]'
            onSlideChange={onSlideChange}
            slidesPerView={1} 
            spaceBetween={20}
            loop = {true}
            modules={[
                Navigation
            ]}
            navigation = {{
                nextEl : ".next-forWhom"
            }}
            >
                {forWhomSliderConfig.map( (slide, i) => (
                    <SwiperSlide key={i} className='w-full'>
                        <ForWhomSlide slide={slide} />
                    </SwiperSlide>
                ) )}                
            </Swiper>
    );
};

export default ForWhomMainSlider;