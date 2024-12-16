import React from "react";
import Slider from "../components/Slider";
import { feedbacks } from "../../config/feedbacks";
import useMySwiper from "../hooks/useMySwiper";
import Image from "next/image";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { CSSTransition } from "react-transition-group";

const Feedbacks = () => {
  const {
    renderFunction,
    zoomRef,
    closeZoom,
    activeSlide,
    swiperRef,
    renderZoomSwiper,
    zoomSlider,
    setZoomSlider,
  } = useMySwiper({
    mainImageClassNames:
      "!object-contain border-4  my-[auto] lg:px-5 lg:py-5 !w-[unset] feedbacks-slider-clamp",
  });

  return (
    <section className="section">
      {/* <div className="green-shadow absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-solid border-black"></div> */}
      <div className="container gap-containerGap p-container flex flex-col relative">
        <Image
          width={755}
          height={821}
          src={"/images/videoLiner.svg"}
          alt="#"
          className="absolute blur-[100px] left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] "
        />
        <Reveal character={CHARACTER.LEFT}>
          <h2 className="h2">Отзывы</h2>
        </Reveal>
        <Reveal character={CHARACTER.RIGHT}>
          <Slider
            id={1}
            NextButttonClassNames="lg:absolute right-[20px] md:right-[120px] z-30"
            PrevButtonClassNames="lg:absolute left-[120px] md:left-[110px] z-30"
            setZoomSlider={setZoomSlider}
            swiperClassNames="sm:p-5 white-shadow md:rounded-[50px] sm:rounded-[20px] rounded-[10px]  relative"
            arrowType="circle"
            render={renderFunction}
            renderMap={feedbacks}
          />
        </Reveal>
      </div>

      <CSSTransition
        nodeRef={zoomRef}
        classNames={"zoom"}
        timeout={{ enter: 50, exit: 400 }}
        in={zoomSlider}
        unmountOnExit
        mountOnEnter
      >
        <ZoomSlider
          ref={zoomRef}
          initialSlide={activeSlide}
          closeZoom={closeZoom}
          slides={feedbacks}
          id="zoom-slider-4"
          mainSwiperRef={swiperRef}
          render={renderZoomSwiper}
        />
      </CSSTransition>
    </section>
  );
};

export default Feedbacks;
