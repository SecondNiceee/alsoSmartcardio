import Image from "next/image";
import React, { FC } from "react";

interface IndicatorProps {
    imageSrc : string,
    description : string
}
const Indicator:FC<IndicatorProps> = ({description, imageSrc} : IndicatorProps) => {
  return (
    <div className="indicator p-6 bg-white black-shadow h-[auto]">
      <Image className="indicator__image !icon-height" alt="#" src={imageSrc} width={150} height={150} />
      <p className="indicator__description">
        {description}
      </p>
    </div>
  );
};

export default Indicator;
