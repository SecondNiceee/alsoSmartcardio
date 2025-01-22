import Cross from "@/shared/UI/ZoomSlider/Cross";
import React, { FC, SetStateAction } from "react";

interface ICloseButton {
  setPopup: React.Dispatch<SetStateAction<boolean>>;
}
const PopupCloseButton: FC<ICloseButton> = ({ setPopup }) => {
    const clickHandler = () => {
        setPopup(false)
    }
  return (
    <div
      onClick={clickHandler}
      className="circle z-[60] absolute md:scale-90 md:top-[10px] md:r-[40px] scale-75 sm:scale-75 top-[0px] right-[0px] sm:top-[10px] sm:right-[10px]"
    >
      <Cross />
    </div>
  );
};

export default React.memo(PopupCloseButton);
