import Cross from "@/shared/UI/ZoomSlider/Cross";
import React, { FC } from "react";

interface ICloseButton {
  clickHandler: () => void;
}
const CloseButton: FC<ICloseButton> = ({ clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="circle z-50 absolute md:scale-90 md:top-[10px] md:r-[40px] scale-50 sm:scale-75 top-[0px] right-[0px] sm:top-[10px] sm:right-[10px]"
    >
      <Cross />
    </div>
  );
};

export default React.memo(CloseButton);
