import React from "react";
import StrangeArrow from "./StrangeArrow";
import cl from "./styles.module.scss";
import JustArrow from "./JustArrow";

export type arrowsType = "circle" | "just";


const NextButton = ({ arrowType, className }: { arrowType?: arrowsType, className? : string }) => {
  return (
    <div className={`${className} flex items-center justify-center ${arrowType === "just" ? "absolute right-2 z-10" : ""}`}>
      {arrowType === "just" ? (
        <JustArrow className="-rotate-90 w-[70%]" />
      ) : (
        arrowType === "circle" && (
          <div className={`${cl.circle} ${cl.next}`}>
            <StrangeArrow />{" "}
          </div>
        )
      )}
    </div>
  );
};

export default NextButton;
