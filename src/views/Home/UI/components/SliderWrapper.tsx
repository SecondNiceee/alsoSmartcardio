import React, { FC, ForwardedRef, forwardRef, LegacyRef, MutableRefObject, SetStateAction } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { smartardioSliderImage } from '../../config/smarcardioSliderImages';
import Image from 'next/image';
import { Swiper as SwiperInstance } from 'swiper';

interface ISlideWrapper{
    setZoomSlider : React.Dispatch<SetStateAction<boolean>>,
    handleSlideChange: (swiper: SwiperInstance) => void
}
const SliderWrapper = ({setZoomSlider, handleSlideChange} : ISlideWrapper, ref : LegacyRef<SwiperRef> | undefined) => {
    return (
        <div onClick={() => {setZoomSlider(true)}} className="my-slider-wrapper">

        <Swiper ref={ref} className='smartardio-slider__swiper'
        centeredSlides = {true}
        slidesPerView={1}
        loop = {true}
        spaceBetween={20}
        onSlideChange={handleSlideChange}
        style={{
            width : "100%"
        }}
        modules={[Navigation]}
        navigation = {{
            nextEl : '.next',
            prevEl : '.prev'
        }}
        >
            {smartardioSliderImage.map( (e , i) => {
                return (
                    <SwiperSlide key={i} className='slide'>
                        <Image className='image' width={960} height={1280} alt='#' src={e} />
                    </SwiperSlide>
                )
            } )}
        </Swiper>
        
</div>
    );
};

export default React.memo(forwardRef(SliderWrapper)) as (props: ISlideWrapper & React.RefAttributes<HTMLDivElement>) => JSX.Element;;