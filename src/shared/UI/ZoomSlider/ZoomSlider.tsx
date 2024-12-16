import React, {  forwardRef, LegacyRef, ReactNode, useCallback, useEffect } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import "swiper/css";
import "./zoomSlider.scss";
import Cross from './Cross';
import { Navigation } from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';
import NextButton from '../NextPrevButtons/NextButton';
import PrevButton from '../NextPrevButtons/PrevButton';
import useBlockScroll from '@/shared/hooks/useBlockScroll';

interface IZoomSliderProps<T> {
    slides: T[];
    render: (slide: T, index: number) => ReactNode;
    closeZoom : () => void,
    initialSlide : number,
    mainSwiperRef? : React.MutableRefObject<SwiperRef | null>
}

function ZoomSlider<T>({slides, closeZoom,initialSlide, render, mainSwiperRef}: IZoomSliderProps<T>, ref : LegacyRef<HTMLDivElement> | undefined, ) {
    
    // const clickHandler:React.MouseEventHandler<HTMLDivElement>  = (e) => {
    //     const target = e.target as HTMLElement
    //     if (!closestMultiple(target, ['.image', '.next-zoom', '.prev-zoom'])){
    //         closeZoom()
    //     }
    // }
    useBlockScroll()


    const changeSlider = (swiper : SwiperType) => {
        if (mainSwiperRef){
            mainSwiperRef.current?.swiper.slideToLoop(swiper.realIndex, 0)
        }
    }
    

    return (    
        <div ref={ref}  className='slider-wrapper' >
            <div  className="slider-container">
                <div onClick={closeZoom} className="trigger-area"/>
                
                <div onClick={closeZoom} className="circle close-button">
                    <Cross/>
                </div>

                <NextButton arrowType='circle' className='circle next-zoom' />

                <PrevButton arrowType='circle' className='circle prev-zoom' />

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