"use client";
import useDefaultSwiper from "@/shared/hooks/useDefaultSwiper";
import Cross from "@/shared/UI/ZoomSlider/Cross";
import Slider from "@/views/Home/UI/components/Slider";
import { getStoreOrderById } from "@/widgets/BuyingPopup/utils/getStoreOrderById";
import { useParams } from "next/navigation";
import React from "react";
import NotFound from "./components/NotFound";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import StrangeArrow from "@/shared/UI/NextPrevButtons/StrangeArrow";
import useZoomSwiper from "@/shared/hooks/useZoomSwiper";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { goBack } from "@/shared/utils/goBack";

export const Product = () => {
  
  const params = useParams<{ id: string }>();

  const id = Number(params?.id);

  const storeOrder = getStoreOrderById(id);

  const {activeSlide, swiperRef} = useDefaultSwiper()

  const {closeZoom, setZoomSlider, renderZoomSwiper, zoomSlider} = useZoomSwiper()

  return (
    <>
      {storeOrder ? (
        <>
          <header className="flex justify-between items-center p-2">
            <div
              onClick={goBack}
              className="flex items-center gap-2 cursor-pointer"
            >
              <StrangeArrow className="rotate-180" />
              <p className="p">Все товары</p>
            </div>
            <Cross
              onClick={goBack}
              classNames="w-[60px] h-[60px] cursor-pointer"
            />
          </header>
          <section>
            <div className="container sm:gap-10 gap-5 md:gap-16 mt-6 sm:mt-14 md:mt-20 items-center md:justify-between flex md:flex-row flex-col w-[100%]">
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

              <div className="flex flex-col gap-3 w-[100%] my-auto">
                <p className="sub-title text-left leading-normal">
                  {storeOrder.name}
                </p>
                <p className="big-p text-left leadin  g-normal">
                  {storeOrder.price} р
                </p>
                <OrderButton className="max-w-[240px] !bg-black">
                  <p className="big-p font-bold">Добавить в корзину</p>
                </OrderButton>
                <p className="p text-left leading-normal">
                  {storeOrder.description}
                </p>
              </div>
            </div>

              <ZoomSlider
                  zoomState = {zoomSlider}
                  initialSlide={activeSlide}
                  closeZoom={closeZoom}
                  slides={storeOrder.images}
                  mainSwiperRef={swiperRef}
                  render={renderZoomSwiper}
              />

          </section>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};
