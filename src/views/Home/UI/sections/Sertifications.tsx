import ZoomSlider from '@/shared/UI/ZoomSlider/ZoomSlider';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { sertificateConfig } from '../../config/sertificatesConfig';
import useZoomSwiper from '../hooks/useZoomSwiper';
import Sertificate from '../components/Sertificate';
import { CSSTransition } from 'react-transition-group';


const Sertifications = () => {

    const {closeZoom, renderZoomSwiper, openZoom, zoomRef, zoomSlider} = useZoomSwiper()

    const [initialSlide, setInitialSlide] = useState<number>(0)


    return (
        <section className='section relative'>
            <div className="container p-container gap-containerGap flex flex-col">
                <h2 className='h2'>Уникальность продукции защищена патентами Российской Федерации</h2>
                <div className="w-[100%] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-[20px]"> 
                    {sertificateConfig.map( (imagePath, index) => {
                        return (
                            <Sertificate openZoom={openZoom} id={index} imagePath={imagePath} setInitialSlide={setInitialSlide}/>
                        )
                    } )}
                </div>
            </div>
            


            
      <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>

        <ZoomSlider  closeZoom={closeZoom} initialSlide={initialSlide} render={renderZoomSwiper} slides={sertificateConfig}   />
        
      </CSSTransition>

        </section>
    );
};

export default Sertifications;