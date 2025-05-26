"use client";
import React, { forwardRef, LegacyRef, ReactNode } from "react";
import Cross from "../ZoomSlider/Cross";
import useBlockScroll from "@/shared/hooks/useBlockScroll";
import useHideCartButton from "@/shared/hooks/useHideCartButton";

interface IPopup {
  children: ReactNode;
  closePopup: () => void;
}

const Popup = (
  { children, closePopup }: IPopup,
  ref: LegacyRef<HTMLDivElement> | undefined
) => {
  useBlockScroll();
  useHideCartButton();
  return (
    <div
      ref={ref}
      className="z-40 fixed w-full  left-[0] !h-[100vh] border-2 top-[0] flex items-center justify-center"
    >
      <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div
          onClick={closePopup}
          onPointerDown={closePopup}
          className="circle z-50 absolute md:scale-100 md:top-[10px] md:r-[40px] scale-75 top-[10px] right-[10px]"
        >
          <Cross />
        </div>
        <div
          onPointerDown={closePopup}
          onClick={closePopup}
          className="absolute left-0 top-0 z-30 bg-black w-full h-[100vh] opacity-30"
        ></div>
        <div className="relative flex justify-center items-center z-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(forwardRef(Popup)) as (
  props: IPopup & React.RefAttributes<HTMLDivElement>
) => JSX.Element;
