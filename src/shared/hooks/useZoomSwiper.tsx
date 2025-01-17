'use client'
import { useCallback, useRef, useState } from 'react';

const useZoomSwiper = () => {
    const [zoomSlider, setZoomSlider] = useState<boolean>(false)
    const zoomRef = useRef(null)
    
    const closeZoom = useCallback( () => {
        setZoomSlider(false)
    }, [] )
    const openZoom = useCallback( () => {
        setZoomSlider(true)
    } ,[] )
    
    return {zoomSlider, zoomRef, closeZoom, openZoom, setZoomSlider}

};

export default useZoomSwiper;