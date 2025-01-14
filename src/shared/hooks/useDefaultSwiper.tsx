'use client'
import { useCallback, useRef, useState } from 'react';
import { SwiperRef } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';

const useDefaultSwiper = () => {
    const swiperRef = useRef<SwiperRef>(null)

    const [activeSlide, setActiveSlide] = useState<number>(0)

    const handleSlideChange = useCallback( (swiper : SwiperInstance) => {
        setActiveSlide(swiper.realIndex)  
      } , [setActiveSlide] )


    const changeSlide = useCallback( (index:number) => {
        swiperRef.current?.swiper.slideTo(index)
    }, [])
    
    return {activeSlide, handleSlideChange, changeSlide, swiperRef}
};

export default useDefaultSwiper;