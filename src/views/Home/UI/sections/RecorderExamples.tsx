import React, { useCallback, useState } from "react";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { recordersSliders } from "../../config/smarcardioSliderImages";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import useMySwiper from "../hooks/useMySwiper";
import { recorders } from "../../config/recorders";
import { CSSTransition } from "react-transition-group";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";


const Recorder = React.memo(({index, text, activeSlide, changeSlide} : {index : number, text : string, activeSlide : number, changeSlide : (index:number) => void}) => {
    const clickHandler = () => {
        changeSlide(index)
    }
    return (
        <div onClick={clickHandler} key={index} className={`w-[100%] flex items-center justify-center border-2 px-2 py-2 border-black border-solid rounded-[10px] h-[100%] transition-[background-color] duration-[400ms] ${activeSlide === index && "bg-black" } cursor-pointer `}>
            <p className={`big-p relative z-10 text-black ${activeSlide === index && "text-white" } transition-colors duration-[400ms]`}>
            {text}
            </p>
        </div>
    )
})

// =========================================


const RecorderExamples = () => {
  const {
    activeSlide,
    renderFunction,
    renderZoomSwiper,
    swiperRef,
    zoomRef,
    zoomSlider,
    closeZoom,
    handleSlideChange,
    setZoomSlider,
    changeSlide
  } = useMySwiper({});


  const renderSmall = useCallback((src:string, index: number) => {
    return (
        
            <SwiperSlide key={index}  className={`mx-auto small-slide  rounded-sm cursor-pointer`}>
                <Image className='w-[100%] h-[100%] rounded-sm' alt='#' src={src} width={600} height={600}  />
            </SwiperSlide>
    )
}, [activeSlide])


  return (
    <section className="section">
      <div className="container gap-containerGap p-container flex flex-col">
        <Reveal character={CHARACTER.UPDOWN}>
            <h2 className="h2">Примеры записей</h2>
        </Reveal>
        <div className="flex md:flex-row flex-col-reverse md:gap-2 md:justify-between gap-containerGap w-[100%] items-center">

            <Reveal character={CHARACTER.LEFT} className="flex flex-col w-[100%] h-auto items-center max-w-[600px] md:max-w-full gap-5 md:gap-12 py-10 px-6 justify-between  rounded-[10px] relative white-shadow">

                {recorders.map( (e, index) => 
                    <Recorder changeSlide={changeSlide} text={e} index={index} key={index} activeSlide={activeSlide} />
                  )}

            </Reveal>

            <div className="md:w-[60%] w-[100%] flex flex-col gap-2">

            <Reveal character={CHARACTER.RIGHT}>

                <Slider
                    id={2}
                    loop = {false}
                    smallSliderStyles={{
                        slidesPerView : 3,
                        spaceBetween : 10
                    }}
                    handleSlideChange={handleSlideChange}
                    ref={swiperRef}
                    setZoomSlider={setZoomSlider}
                    arrowType="just"
                    render={renderFunction}
                    renderMap={recordersSliders}
                    renderSmall={renderSmall}
                />

            </Reveal>
            </div>

        </div>
      </div>

        <CSSTransition nodeRef={zoomRef} classNames={"zoom"}  timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>
            <ZoomSlider
            ref={zoomRef}
            initialSlide={activeSlide}
            closeZoom={closeZoom}
            slides={recordersSliders}
            mainSwiperRef={swiperRef}
            render={renderZoomSwiper}
            />
        </CSSTransition>
    </section>
  );
};

export default RecorderExamples;
