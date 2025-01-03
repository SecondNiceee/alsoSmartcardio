import React, { useCallback, useRef, useState } from 'react';
import { SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';
import Image from 'next/image';

const useDefaultSwiper = ({mainImageClassNames = ""} : {mainImageClassNames?:string}) => {
    const swiperRef = useRef<SwiperRef>(null)
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const handleSlideChange = useCallback( (swiper : SwiperInstance) => {
        setActiveSlide(swiper.realIndex)  
      } , [setActiveSlide] )

    const renderFunction = useCallback((src:string, index:number) => {
        return (
            <SwiperSlide key={index} className={`mx-auto flex justify-center cursor-pointer`}>
                <Image className={`sm:w-[80%] w-[100%] smartcardio-slider-clamp object-cover rounded-md ${mainImageClassNames}`} alt='#' src={src} width={1900} height={1300}  />
            </SwiperSlide>
        )
    }, [])

    const changeSlide = useCallback( (index:number) => {
        swiperRef.current?.swiper.slideTo(index)
    }, [])
    
    return {activeSlide, handleSlideChange, renderFunction, changeSlide, swiperRef}
};

export default useDefaultSwiper;