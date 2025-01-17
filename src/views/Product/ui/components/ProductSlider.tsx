'use client'
import { TypeOrder } from '@/shared/config/TypeOrder';
import useDefaultSwiper from '@/shared/hooks/useDefaultSwiper';
import useZoomSwiper from '@/shared/hooks/useZoomSwiper';
import ZoomSlider from '@/shared/UI/ZoomSlider/ZoomSlider';
import Slider from '@/views/Home/UI/components/Slider';
import { getStoreOrderById } from '@/widgets/BuyingPopup/utils/getStoreOrderById';
import React, { FC } from 'react';

interface IProductSlider{
    storeOrder : TypeOrder
}
const ProductSlider:FC<IProductSlider> = ({storeOrder}) => {

    const {activeSlide, swiperRef} = useDefaultSwiper()

    const {closeZoom, setZoomSlider, renderZoomSwiper, zoomSlider} = useZoomSwiper()


    return (

        <>
        
              <Slider

                ref={swiperRef}
                mainImageClassNames="!w-[100%] !productPage-sliderImage-height !md:h-unset"
                arrowType="circle"
                NextButttonClassNames="md:absolute top-[50%] translate-y-[-50%] right-[10px] z-30 scale-75"
                PrevButtonClassNames="md:absolute top-[50%] translate-y-[-50%] left-[10px] z-30 scale-75"
                SliderWrapperClassNames="md:w-[50%] w-[100%]"
                swiperClassNames="w-[100%]"
                renderMap={storeOrder.images}
                setZoomSlider={setZoomSlider}
                id={4}

              />
                            <ZoomSlider
                  zoomState = {zoomSlider}
                  initialSlide={activeSlide}
                  closeZoom={closeZoom}
                  slides={storeOrder.images}
                  mainSwiperRef={swiperRef}
                  render={renderZoomSwiper}
              />
            </>
    );
};

export default ProductSlider;