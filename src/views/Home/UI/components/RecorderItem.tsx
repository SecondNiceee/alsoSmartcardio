'use client'

import React from "react"

export const RecorderItem = React.memo(({index, text, activeSlide, changeSlide} : {index : number, text : string, activeSlide : number, changeSlide : (index:number) => void}) => {
    const clickHandler = () => {
        changeSlide(index)
    }
    return (
        <div onClick={clickHandler} key={index} className={`w-[100%] flex items-center justify-center border-2 px-2 py-2 border-black border-solid rounded-[10px] h-[100%] transition-[background-color] duration-[400ms] ${activeSlide === index && "bg-black" } cursor-pointer `}>
            <p className={`big-p relative z-10 text-black ${activeSlide === index && "text-white" } transition-colors duration-[400ms]`}>
            {text}
            </p>
        </div>
    )
})