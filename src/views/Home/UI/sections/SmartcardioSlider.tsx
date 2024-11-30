import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import { smartardioSliderImage } from '../../config/smarcardioSliderImages';
import {Navigation} from "swiper/modules"
import Image from 'next/image';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

import 'swiper/css';
import StrangeArrow from '../components/StrangeArrow';

const SmartcardioSlider = () => {
    return (
        <section className='smartcardio-slider'>
            <div className="container">
                <header className='smartcardio-slider__header'>Прибор СмартКардио®</header>
                <div className="smartcardio-slider__main">

                    <div className="circle prev">
                        <StrangeArrow />
                    </div>

                    <div className="my-slider-wrapper">

                            <Swiper className='smartardio-slider__swiper'
                            centeredSlides = {true}
                            slidesPerView={1}
                            loop = {true}
                            
                            style={{
                                width : "100%"
                            }}
                            modules={[Navigation]}
                            navigation = {{
                                nextEl : '.next',
                                prevEl : '.prev'
                            }}
                            >
                                {smartardioSliderImage.map( (e , i) => {
                                    return (
                                        <SwiperSlide key={i} className='slide'>
                                            <Image className='image' width={960} height={1280} alt='#' src={e} />
                                        </SwiperSlide>
                                    )
                                } )}
                            </Swiper>
                            
                    </div>

                    <div className="circle next">
                        <StrangeArrow />
                    </div>


                </div>


                
                <p style={{
                    userSelect : "none"
                }} className="smartcardio-slider__p">
                    Прибор разработан и произведен в <span>России</span> 
                </p>
                <OrderButton className='smartcardio-slider__button' onClick={() => {alert("Пойдем в заказ!")}}>
                    <p style={{
                        userSelect : 'none'
                    }}>Закать</p>
                </OrderButton>

            </div>

        </section>
    );
};

export default SmartcardioSlider;