'use client'
import Image from 'next/image';
import React from 'react';
import Reveal from '@/shared/UI/Reveal/Reveal';
import useZoomSwiper from '../../../../shared/hooks/useZoomSwiper';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';
import dynamic from 'next/dynamic';
import { CSSTransition } from 'react-transition-group';
import { schemeConfig } from '../../config/schemeConfig';

// const ZoomSlider = dynamic(() => import("@/shared/UI/ZoomSlider/ZoomSlider"), {ssr : false}) as <T>(props: IZoomSliderProps<T>) => JSX.Element

const InteractiveCardioBlock = dynamic( () => import("../components/InteractiveCardioBlock"), {ssr : false} )
const InteractivePhoneBlock = dynamic( () => import("../components/InteractivePhoneBlock"), {ssr : false} )
const InteractiveMobile = dynamic( () => import("../components/InteractiveMobile") , {ssr : false} )
const ZoomSlider = dynamic( () => import("@/shared/UI/ZoomSlider/ZoomSlider"), {ssr : false} )

const InteractiveSection = () => {

    const {closeZoom,  zoomRef, zoomSlider, openZoom, } = useZoomSwiper()
  

    return (
        <section className='interactive'>

            <Reveal character={CHARACTER.RIGHT} className="desktop">
                <div className="container">
                    <div className="interactive-wrapper">

                        <Image className='interactive__image' width={800} height={800} alt='#' src={"/images/interactive.png"} />

                        <InteractivePhoneBlock />

                        <InteractiveCardioBlock openZoom={openZoom} />

                        <Image className='interactive__liner-block' width={910} height={927} alt='#' src={"/images/interactiveLinerBlock.svg"} />

                    </div>
                </div>
                <Image className='interactive__circle' width={540} height={517} alt='#' src={"images/interactiveCircle.svg"} />
            </Reveal>

            <InteractiveMobile openZoom={openZoom} />

            
            <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>
                <ZoomSlider imagesClassNames='md:!w-[70%] rounded-md' zoomState = {zoomSlider}  closeZoom={closeZoom} initialSlide={0} slides={schemeConfig}    />
            </CSSTransition>

        </section>
    );
};

export default InteractiveSection;