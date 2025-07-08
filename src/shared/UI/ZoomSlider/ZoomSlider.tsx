'use client'
import React, { useCallback, useEffect, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "./zoomSlider.scss";
import Cross from './Cross';
import {Swiper as SwiperType} from 'swiper';
import NextButton from '../NextPrevButtons/NextButton';
import PrevButton from '../NextPrevButtons/PrevButton';
import { CSSTransition } from 'react-transition-group';
import { blockScroll, unBlockScroll } from '@/shared/utils/blockController';
import { Navigation } from 'swiper/modules';
import { createImageResolution } from '@/shared/utils/createImageResolution';

export interface IZoomSliderProps {
    slides: string[];
    closeZoom : () => void,
    initialSlide : number,
    mainSwiperRef? : React.MutableRefObject<SwiperRef | null>
    zoomState : boolean,
    imagesClassNames? : string
}

function ZoomSlider<T>({slides, closeZoom,initialSlide , mainSwiperRef, zoomState, imagesClassNames}: IZoomSliderProps ) {
    
    useEffect( () => {
        if (zoomState){ 
            blockScroll()
        } else {
            unBlockScroll()
        }
    } , [zoomState] )


    const ref = useRef(null)

    const render = useCallback( (src:string, index:number) => {
        return (
            <SwiperSlide key={index} className='mx-auto flex justify-center'>
                <picture>
                    <source media='(max-width:576px)' srcSet={createImageResolution(src, 768)} />
                    <source media='(max-width:1024px)' srcSet={createImageResolution(src, 1024)} />
                    <img
                        className={`swiper-lazy w-fit h-[100vh] object-contain ${imagesClassNames}`}
                        alt='ЭКГ'
                        data-src={createImageResolution(src, 1440)}
                    loading="lazy"
                    />
                </picture>
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
        )
    }, [imagesClassNames] ) 

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

                <NextButton arrowType='circle' className='next-zoom' />

                <PrevButton arrowType='circle' className='prev-zoom' />

                <Swiper  onSlideChange={changeSlider}   initialSlide={initialSlide} modules={[Navigation]}  loop = {true}  navigation = {{
                    prevEl : '.prev-zoom',
                    nextEl : '.next-zoom'
                }}
                >

                {slides.map((slide, index) => {
                return (
                        <div key={index} className={`image select-none`}>
                            {render(slide, index)}
                        </div>
                ) })}

                </Swiper>
            </div>
        </div>
        </CSSTransition>
    );
};

export default React.memo(ZoomSlider) as (props: IZoomSliderProps) => JSX.Element;