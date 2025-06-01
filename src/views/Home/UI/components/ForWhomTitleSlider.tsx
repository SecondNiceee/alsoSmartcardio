import React, { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IForWhomMainSlider{
    activeSlideIndex : number
}
const ForWhomTitleSlider:FC<IForWhomMainSlider> = ({activeSlideIndex}) => {

    const swiperRef = useRef<any>(null);
    useEffect( () => {
        if (swiperRef.current){
            swiperRef.current.swiper.slideTo(activeSlideIndex);
        }
    } , [activeSlideIndex])

    return (
        <Swiper ref={swiperRef} id='for-whom-slider' slidesPerView={3} centeredSlides = {true} className='title-swiper'>
            <SwiperSlide className='w-full'>
                <h2 className='h2'>Для пользователей</h2>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
                <h2 className='h2'>Для врачей</h2>
            </SwiperSlide>
            <SwiperSlide className='w-full'>
                <h2 className='h2'>Для мед.учреждений</h2>
            </SwiperSlide>
        </Swiper>
    );
};

export default ForWhomTitleSlider;