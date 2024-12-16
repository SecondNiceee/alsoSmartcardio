"use client"
import { LottieOptions, useLottie } from "lottie-react";
import React, { forwardRef } from "react";
import coper from "@/shared/animations/coper.json";

type DivProps = JSX.IntrinsicElements["div"] 

const InteractiveLottie = forwardRef<HTMLDivElement, DivProps>((props, ref) => {
    const options:LottieOptions = {
        animationData: coper,
        loop: true,
        style : {
            width: "300px"
        }
      };
    
      const { View } = useLottie(options);  

  return <div ref={ref} className="interactive__lottie show">
        {View}
    </div>;
});

export default React.memo(InteractiveLottie);
