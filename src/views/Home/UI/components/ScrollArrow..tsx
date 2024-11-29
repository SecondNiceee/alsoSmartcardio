"use client";
import Link from "next/link";
import React, { FC } from "react";

interface IScrollArrow{
    className? : string,
    onClick? : () => void
}
export const ScrollArrow:FC<IScrollArrow> = ({ className = "", onClick}) => {
  return (
    <Link scroll = {true} href={'#downloads'}>
    <svg
     className={`${className}`}
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
          <style jsx>
          {
          `
            .scrollArrow{
              stroke-width: 2.92px;
              stroke: #fff;
              }
          `
  }
        </style>

  </Link>
  );
};

