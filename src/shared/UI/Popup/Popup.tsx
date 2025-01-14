import { blockScroll } from "@/shared/utils/blockScroll";
import { unBlockScroll } from "@/shared/utils/unblockScroll";
import React, {  forwardRef, LegacyRef, ReactNode, useEffect } from "react";

interface IPopup{
  children : ReactNode,
  closePopup : () => void
}
const Popup =  ({ children, closePopup }: IPopup, ref : LegacyRef<HTMLDivElement> | undefined) => {
  useEffect( () => {
    blockScroll()
    return () => {
      unBlockScroll()
    }
  }, [] )
  return (
    <div ref={ref} className="z-40 fixed !w-[100vw]  left-[0] !h-[100vh] border-2 top-[0] flex items-center justify-center">
      <div className="relative w-[100vw] h-[100vh] flex justify-center items-center">
        <div onClick={closePopup} className="absolute left-0 top-0 z-30 bg-black w-[100vw] h-[100vh] opacity-30"></div>
        <div className="relative flex justify-center items-center z-50">
          {children}
        </div>
      </div>
    </div>
  );
} ;

export default React.memo(forwardRef(Popup)) as (props : IPopup & React.RefAttributes<HTMLDivElement>) => JSX.Element;
