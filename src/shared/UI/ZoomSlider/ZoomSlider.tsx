import React, {  forwardRef, LegacyRef, ReactNode, useCallback, useEffect } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import "swiper/css";
import "./zoomSlider.scss";
import Cross from './Cross';
import { Navigation } from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';
import NextButton from '../NextPrevButtons/NextButton';
import PrevButton from '../NextPrevButtons/PrevButton';

interface IZoomSliderProps<T> {
    slides: T[];
    render: (slide: T, index: number) => ReactNode;
    id? : string,
    closeZoom : () => void,
    initialSlide : number,
    mainSwiperRef : React.MutableRefObject<SwiperRef | null>
}

function ZoomSlider<T>({slides, closeZoom,initialSlide, render, id, mainSwiperRef}: IZoomSliderProps<T>, ref : LegacyRef<HTMLDivElement> | undefined, ) {
    
    // const clickHandler:React.MouseEventHandler<HTMLDivElement>  = (e) => {
    //     const target = e.target as HTMLElement
    //     if (!closestMultiple(target, ['.image', '.next-zoom', '.prev-zoom'])){
    //         closeZoom()
    //     }
    // }


    const changeSlider = (swiper : SwiperType) => {
            mainSwiperRef.current?.swiper.slideToLoop(swiper.realIndex, 0)
    }
    
    console.log("РЕНДЕР ЗУМА")

    return (    
        <div ref={ref}  className='slider-wrapper' id={id}>
            <div  className="slider-container">
                <div onClick={closeZoom} className="trigger-area"/>
                
                <div onClick={closeZoom} className="circle close-button">
                    <Cross/>
                </div>

                <NextButton className='circle next-zoom' />

                <PrevButton className='circle prev-zoom' />

                <Swiper onSlideChange={changeSlider}  initialSlide={initialSlide} modules={[Navigation]} loop = {true}  navigation = {{
                    prevEl : '.prev-zoom',
                    nextEl : '.next-zoom'
                }} >

                {slides.map((slide, index) => {
                return (
                        <div key={index} className="image">
                            {/* <p>Привет</p> */}
                            {render(slide, index)}
                        </div>
                ) })}

                </Swiper>
            </div>
        </div>
    );
};

export default React.memo(forwardRef(ZoomSlider)) as <T>(props: IZoomSliderProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;