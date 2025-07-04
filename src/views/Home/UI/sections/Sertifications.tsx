'use client'
import ZoomSlider from '@/shared/UI/ZoomSlider/ZoomSlider';
import { useState } from 'react';
import { sertificateConfig } from '../../config/sertificatesConfig';
import useZoomSwiper from '../../../../shared/hooks/useZoomSwiper';
import Sertificate from '../components/Sertificate';
import { CSSTransition } from 'react-transition-group';


const Sertifications = () => {

    const {closeZoom, openZoom, zoomRef, zoomSlider} = useZoomSwiper()

    const [initialSlide, setInitialSlide] = useState<number>(0)


    return (
        <section className='section relative'>
            <div className="container p-container gap-containerGap flex flex-col">
                <h2 className='h2'>Уникальность продукции защищена патентами Российской Федерации</h2>
                <div className="w-[100%] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-[20px]"> 
                    {sertificateConfig.map( (imagePath, index) => {
                        return (
                            <Sertificate key={index} openZoom={openZoom} id={index} imagePath={imagePath} setInitialSlide={setInitialSlide}/>
                        )
                    } )}
                </div>
            </div>
            


            
      <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>

        <ZoomSlider zoomState = {zoomSlider}  closeZoom={closeZoom} initialSlide={initialSlide}  slides={sertificateConfig}   />
        
      </CSSTransition>

        </section>
    );
};

export default Sertifications;