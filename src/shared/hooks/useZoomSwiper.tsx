'use client'
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

const useZoomSwiper = () => {
    const [zoomSlider, setZoomSlider] = useState<boolean>(false)
    const zoomRef = useRef(null)
    const renderZoomSwiper = useCallback( (src:string, index:number) => {
        return (
            <SwiperSlide key={index} className='mx-auto flex justify-center'>
                <Image className='w-fit h-[100vh] object-contain' alt='#' src={src} width={1900} height={1300}  />
            </SwiperSlide>
        )
    }, [] ) 

    const closeZoom = useCallback( () => {
        setZoomSlider(false)
    }, [] )
    const openZoom = useCallback( () => {
        setZoomSlider(true)
    } ,[] )
    
    return {zoomSlider, zoomRef, renderZoomSwiper, closeZoom, openZoom, setZoomSlider}

};

export default useZoomSwiper;