import React, { FC, SetStateAction, useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { forWhomSliderConfig } from '../../config/forWhomSlider.config';
import ForWhomSlide from './ForWhomSlide';
import {Swiper as TSwiper} from 'swiper';
interface IForWhomMainSlider{
    onSlideChange : (swiper : TSwiper) => void;
    activeSlideIndex : number,
    setResponsePopup : React.Dispatch<SetStateAction<boolean>>
}
const ForWhomMainSlider:FC<IForWhomMainSlider> = ({onSlideChange, activeSlideIndex, setResponsePopup}) => {
    const swiperRef = useRef<any>(null);
    useEffect( () => {
        if (swiperRef.current){
            if (swiperRef.current.swiper.realIndex !== activeSlideIndex){
                swiperRef.current.swiper.slideTo(activeSlideIndex);
            }
        }
    } , [activeSlideIndex])
    return (
            <Swiper
            ref={swiperRef}
            className='lg:w-[69%] w-full'
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
                    <SwiperSlide key={i} className='w-full cursor-pointer'>
                        <ForWhomSlide setResponsePopup={setResponsePopup} slide={slide} />
                    </SwiperSlide>
                ) )}                
            </Swiper>
    );
};

export default ForWhomMainSlider;