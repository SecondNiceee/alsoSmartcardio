"use client";
import React, { FC } from "react";
import cl from "./_ScrollArrow.module.scss";
import { clickFunction } from "../model/clickHandler";
interface IScrollArrow{
    className? : string
}
export const ScrollArrow:FC<IScrollArrow> = ({ className = ""}) => {
  return (
    <svg
    onClick={clickFunction}
     className={`${cl.scrollArrow} ${className}`}
      width="73"
      height="30"
      viewBox="0 0 73 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70.5916 2.36943L36.229 28.107L2.32311 1.77068"
        stroke="white"
        stroke-width="2.91667"
        stroke-linecap="round"
      />
    </svg>
  );
};


