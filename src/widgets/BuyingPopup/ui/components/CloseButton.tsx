import Cross from "@/shared/UI/ZoomSlider/Cross";
import React, { FC } from "react";

interface ICloseButton {
  clickHandler: () => void;
}
const CloseButton: FC<ICloseButton> = ({ clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="circle md:hidden z-50 absolute md:scale-100 md:top-[10px] md:r-[40px] scale-75 top-[10px] right-[10px]"
    >
      <Cross />
    </div>
  );
};

export default React.memo(CloseButton);
