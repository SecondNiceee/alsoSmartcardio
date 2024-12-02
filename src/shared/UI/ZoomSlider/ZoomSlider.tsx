import React, {  forwardRef, LegacyRef, ReactNode, useEffect } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import "swiper/css";
import "./zoomSlider.scss";
import Cross from './Cross';
import StrangeArrow from '@/views/Home/UI/components/StrangeArrow';
import closestMultiple from '@/shared/functions/closestMultiple';
import { Navigation } from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

interface IZoomSliderProps<T> {
    slides: T[];
    render: (slide: T, index: number) => ReactNode;
    id? : string,
    closeZoom : () => void,
    initialSlide : number,
    mainSwiperRef : React.MutableRefObject<SwiperRef | null>
}

function ZoomSlider<T>({slides, closeZoom,initialSlide, render, id, mainSwiperRef}: IZoomSliderProps<T>, ref : LegacyRef<HTMLDivElement> | undefined, ) {
    
    const clickHandler:React.MouseEventHandler<HTMLDivElement>  = (e) => {
        const target = e.target as HTMLElement
        if (!closestMultiple(target, ['.image', '.next-zoom', '.prev-zoom'])){
            closeZoom()
        }
    }

    const changeSlider = (swiper : SwiperType) => {
            mainSwiperRef.current?.swiper.slideToLoop(swiper.realIndex, 0)
    }

    return (    
        <div ref={ref}  onClick={clickHandler} className='slider-wrapper' id={id}>
            <div  className="slider-container">
                <div className="trigger-area"/>
                <div className="circle close-button">
                    <Cross/>
                </div>
                <div className="circle next-zoom">
                    <StrangeArrow/>
                </div>
                <div className="circle prev-zoom">
                    <StrangeArrow/>
                </div>
                <Swiper onSlideChange={changeSlider}  initialSlide={initialSlide} modules={[Navigation]} loop = {true}  navigation = {{
                    prevEl : '.prev-zoom',
                    nextEl : '.next-zoom'
                }}>
                                {slides.map((slide, index) => {
                return (
                <div className="image">
                    {render(slide, index)}
                </div>
                )
            })}
                </Swiper>
            </div>
        </div>
    );
};

export default React.memo(forwardRef(ZoomSlider)) as <T>(props: IZoomSliderProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;