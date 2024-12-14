import React, {forwardRef, LegacyRef, ReactNode, SetStateAction, useState } from 'react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { SwiperProps, SwiperRef } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';
import NextButton, { arrowsType } from '@/shared/UI/NextPrevButtons/NextButton';
import PrevButton from '@/shared/UI/NextPrevButtons/PrevButton';
import 'swiper/css/pagination';

interface ISlider<T>{
    id : number;
    handleSlideChange?: (swiper: SwiperInstance) => void,
    renderMap : T[],
    render : (par:T ,i:number) => ReactNode,
    renderSmall? : (par : T, i:number) => ReactNode,
    smallSliderStyles? : SwiperProps,
    arrowType? : arrowsType,
    setZoomSlider? : React.Dispatch<SetStateAction<boolean>>,
    loop? : boolean,
    swiperClassNames? : string,
    NextButttonClassNames? : string,
    PrevButtonClassNames? : string
}

function SliderWrapper<T>({ handleSlideChange = () => {}, renderMap, render,  renderSmall, smallSliderStyles, arrowType, setZoomSlider, loop = true, swiperClassNames, NextButttonClassNames, PrevButtonClassNames, id} : ISlider<T>, ref : LegacyRef<SwiperRef> | undefined){
    const [smallSlider, setSmallSlider] = useState<SwiperInstance | null>(null)

    return (
        <div className="flex flex-col gap-3 w-[100%] mx-auto ">

            <div className="flex gap-3 sm:w-[90%] w-[100%] mx-auto items-center relative ">


                <PrevButton arrowType={arrowType} className={`prev-${id} ${PrevButtonClassNames}`} />

                <Swiper
                id={`main-${id}`}
                key={`main-${id}`}  
                 onClick={() => setZoomSlider && setZoomSlider(true) } ref={ref} className={`smartardio-slider__swiper w-[100%] border-black ${swiperClassNames}`}
                loop = {loop}
                slidesPerView={1}
                spaceBetween={20}
                onSlideChange={handleSlideChange}
                pagination = {{
                    type : "bullets",
                    clickable : true
                }}
                // thumbs={{swiper : smallSlider}}
                modules={[Navigation, Pagination, Thumbs]}
                navigation = {{
                    nextEl : `.next-${id}`,
                    prevEl : `.prev-${id}`
                }}
                thumbs={ renderSmall && {
                    swiper : smallSlider
                }}
                >
                    {renderMap.map( render )}
                </Swiper>
                
                <NextButton className={`next-${id} ${NextButttonClassNames}`} arrowType={arrowType} />

            </div>





            {renderSmall &&  <Swiper id={`thumbs-${id}`}  key={`thumbs-${id}`} onSwiper={setSmallSlider} className='w-[50%]' {...smallSliderStyles}>
                {renderMap.map( renderSmall )}
            </Swiper>}



        </div>
        
    );
};

export default React.memo(forwardRef(SliderWrapper)) as <T>(props: ISlider<T> & React.RefAttributes<SwiperRef>) => JSX.Element;;