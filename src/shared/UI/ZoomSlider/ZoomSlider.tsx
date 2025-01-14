'use client'
import React, { ReactNode, useEffect, useRef } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import "swiper/css";
import "./zoomSlider.scss";
import Cross from './Cross';
import { Navigation } from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';
import NextButton from '../NextPrevButtons/NextButton';
import PrevButton from '../NextPrevButtons/PrevButton';
import { CSSTransition } from 'react-transition-group';
import { blockScroll } from '@/shared/utils/blockScroll';
import { unBlockScroll } from '@/shared/utils/unblockScroll';

interface IZoomSliderProps<T> {
    slides: T[];
    render: (slide: T, index: number) => ReactNode;
    closeZoom : () => void,
    initialSlide : number,
    mainSwiperRef? : React.MutableRefObject<SwiperRef | null>
    zoomState : boolean
}

function ZoomSlider<T>({slides, closeZoom,initialSlide, render, mainSwiperRef, zoomState}: IZoomSliderProps<T> ) {
    
    useEffect( () => {
        zoomState ? blockScroll() : unBlockScroll()
    } , [zoomState] )


    const ref = useRef(null)


    const changeSlider = (swiper : SwiperType) => {
        if (mainSwiperRef){
            mainSwiperRef.current?.swiper.slideToLoop(swiper.realIndex, 0)
        }
    }
    

    return (    

        <CSSTransition
        nodeRef={ref}
        classNames={"zoom"}
        timeout={{ enter: 50, exit: 400 }}
        in={zoomState}
        unmountOnExit
        mountOnEnter
        >
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
                        <div key={index} className="image select-none">
                            {/* <p>Привет</p> */}
                            {render(slide, index)}
                        </div>
                ) })}

                </Swiper>
            </div>
        </div>
        </CSSTransition>
    );
};

export default React.memo(ZoomSlider) as <T>(props: IZoomSliderProps<T>) => JSX.Element;