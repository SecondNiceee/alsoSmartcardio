import React, {forwardRef, LegacyRef, ReactNode, SetStateAction, useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';
import NextButton, { arrowsType } from '@/shared/UI/NextPrevButtons/NextButton';
import PrevButton from '@/shared/UI/NextPrevButtons/PrevButton';

interface ISlider<T>{
    handleSlideChange?: (swiper: SwiperInstance) => void,
    renderMap : T[],
    render : (par:T ,i:number) => ReactNode,
    renderSmall? : (par : T, i:number) => ReactNode,
    smallSliderStyles? : SwiperProps,
    arrowType? : arrowsType,
    setZoomSlider : React.Dispatch<SetStateAction<boolean>>,
    loop? : boolean
}



function SliderWrapper<T>({ handleSlideChange = () => {}, renderMap, render,  renderSmall, smallSliderStyles, arrowType, setZoomSlider, loop = true} : ISlider<T>, ref : LegacyRef<SwiperRef> | undefined){
    const [smallSlider, setSmallSlider] = useState<SwiperInstance | null>(null)
    return (
        <div className="flex flex-col gap-3 w-[100%]">

            <div className="flex gap-3 sm:w-[90%] w-[100%] mx-auto items-center relative">
                <PrevButton arrowType={arrowType} className='prev' />

                <Swiper onClick={() => setZoomSlider(true)} ref={ref} className='smartardio-slider__swiper w-[100%]'
                loop = {loop}
                slidesPerView={1}
                spaceBetween={20}
                onSlideChange={handleSlideChange}

                // thumbs={{swiper : smallSlider}}
                modules={[Navigation, Thumbs]}
                navigation = {{
                    nextEl : '.next',
                    prevEl : '.prev'
                }}
                thumbs={{
                    swiper : smallSlider
                }}
                >
                    {renderMap.map( render )}
                </Swiper>
                
                <NextButton className='next' arrowType={arrowType} />

            </div>


            {renderSmall &&  <Swiper  onSwiper={setSmallSlider} className='w-[50%]' {...smallSliderStyles}>
                {renderMap.map( renderSmall )}
            </Swiper>}



        </div>
        
    );
};

export default React.memo(forwardRef(SliderWrapper)) as <T>(props: ISlider<T> & React.RefAttributes<SwiperRef>) => JSX.Element;;