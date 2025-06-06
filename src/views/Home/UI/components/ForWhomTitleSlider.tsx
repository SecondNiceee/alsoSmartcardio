import React, { FC, SetStateAction, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IForWhomMainSlider{
    activeSlideIndex : number;
    setSliderIndex : React.Dispatch<SetStateAction<number>>;
}
const ForWhomTitleSlider:FC<IForWhomMainSlider> = ({activeSlideIndex, setSliderIndex}) => {

    const swiperRef = useRef<any>(null);

    useEffect( () => {
        if (swiperRef.current){
            swiperRef.current.swiper.slideTo(activeSlideIndex);
        }
    } , [activeSlideIndex])

    const onSliderClick = (index : number) => () => {
        setSliderIndex(index);
    }

    return (
        <Swiper ref={swiperRef} id='for-whom-slider' slidesPerView={1} centeredSlides = {true} breakpoints={{
            768 : {
                slidesPerView : 3
            }
        }} className='title-swiper'>
            <SwiperSlide onClick={onSliderClick(0)} className='w-full cursor-pointer'>
                <h2 className='h2'>Для пользователей</h2>
            </SwiperSlide>
            <SwiperSlide onClick={onSliderClick(1)} className='w-full cursor-pointer'>
                <h2 className='h2'>Для врачей</h2>
            </SwiperSlide>
            <SwiperSlide onClick={onSliderClick(2)} className='w-full cursor-pointer'>
                <h2 className='h2'>Для медицинских центров</h2>
            </SwiperSlide>
        </Swiper>
    );
};

export default ForWhomTitleSlider;