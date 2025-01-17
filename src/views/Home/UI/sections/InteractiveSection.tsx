'use client'
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import InteractivePhoneBlock from '../components/InteractivePhoneBlock';
import InteractiveCardioBlock from '../components/InteractiveCardioBlock';
import InteractiveMobile from '../components/InteractiveMobile';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';
import { schemeConfig } from '../../config/schemeConfig';
import { CSSTransition } from 'react-transition-group';
import Video from '@/shared/UI/Video/Video';
import useZoomSwiper from '../../../../shared/hooks/useZoomSwiper';
import dynamic from 'next/dynamic';
import { IZoomSliderProps } from '@/shared/UI/ZoomSlider/ZoomSlider';

const ZoomSlider = dynamic(() => import("@/shared/UI/ZoomSlider/ZoomSlider"), {ssr : false}) as <T>(props: IZoomSliderProps<T>) => JSX.Element
const Popup = dynamic( () => import("@/shared/UI/Popup/Popup"), {ssr : false} )


const InteractiveSection = () => {

    const {closeZoom,  zoomRef, zoomSlider, openZoom, } = useZoomSwiper()
  
    const [isVideoOpen, setVideoOpen] = useState<boolean>(false)

    const closePopup = useCallback( () => {
        setVideoOpen(false)
    }, [] )

    const openPopup = useCallback( () => {
        setVideoOpen(true)
    }, [] )

    const videoRef = useRef<HTMLDivElement>(null)

    return (
        <section className='interactive'>

            <Reveal character={CHARACTER.RIGHT} className="desktop">
                <div className="container">
                    <div className="interactive-wrapper">

                        <Image className='interactive__image' width={800} height={800} alt='#' src={"/images/interactive.png"} />

                        <InteractivePhoneBlock openVideo={openPopup} />

                        <InteractiveCardioBlock openZoom={openZoom} />

                        <Image className='interactive__liner-block' width={910} height={927} alt='#' src={"/image/interactiveLinerBlock.svg"} />

                    </div>
                </div>
                <Image className='interactive__circle' width={540} height={517} alt='#' src={"images/interactiveCircle.svg"} />
            </Reveal>

            <InteractiveMobile openPopup={openPopup} openZoom={openZoom} />

            <CSSTransition classNames={"zoom"} nodeRef={videoRef} in = {isVideoOpen} timeout={{enter:50, exit : 400}} unmountOnExit mountOnEnter  >
                <Popup ref = {videoRef} closePopup={closePopup}>
                    <Video className='' videoClassName='rounded-[20px] !max-w-[90vw] w-[100%] h-[100%] !max-h-[90vh] aspect-squar' videoName='manual.mp4' autoPlay = {true}  controls = {true} poster = "images/manual.png" />
                </Popup>
            </CSSTransition>
            
            <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>
                <ZoomSlider imagesClassNames='!md:w-[70%] rounded-md' zoomState = {zoomSlider}  closeZoom={closeZoom} initialSlide={0} slides={schemeConfig}    />
            </CSSTransition>

        </section>
    );
};

export default InteractiveSection;