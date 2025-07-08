'use client'
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

                        <picture>
                            <source media='(max-width:576px)' srcSet='/images/interactive-768px.webp' />
                            <source media='(max-width:1024px)' srcSet='/images/interactive-1024px.webp' />
                            <img loading='lazy' className='interactive__m-image' alt='ЭКГ' src={"/images/interactive-1440px.webp"} />
                        </picture>

                        <InteractivePhoneBlock />

                        <InteractiveCardioBlock openZoom={openZoom} />

                        <img loading='lazy' className='interactive__liner-block' alt='Смарткардио' src={"/images/interactiveLinerBlock.svg"} />

                    </div>
                </div>
                <img className='interactive__circle' alt='ЭКГ' src={"images/interactiveCircle.svg"} />
            </Reveal>

            <InteractiveMobile openZoom={openZoom} />
            
            <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>
                <ZoomSlider imagesClassNames='md:!w-[70%] rounded-md' zoomState = {zoomSlider}  closeZoom={closeZoom} initialSlide={0} slides={schemeConfig}    />
            </CSSTransition>

        </section>
    );
};

export default InteractiveSection;