'use client'
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import "./Reveal.scss"
import { CHARACTER } from './models/CharacterEnum';


type DivProps = JSX.IntrinsicElements["div"]

interface IReveal extends DivProps{
    children? : ReactNode,
    character :  CHARACTER,
    className? : string,
    start? : boolean
} 
const Reveal:FC<IReveal> = ({children, character, className = "", start, ...props}) => {

    const [isRendered, setIsRendered] = useState<boolean>(false)

    const revealRef = useRef<HTMLDivElement>(null)
    


    const addFunction = useCallback(() => {
        setIsRendered(true)

        switch (character){
            case CHARACTER.UPDOWN:{
                revealRef.current?.classList.add("upDown")
                return;
            }
            case CHARACTER.DOWNUP:{
                revealRef.current?.classList.add("downUp")
                return;
            }
            case CHARACTER.LEFT:{
                revealRef.current?.classList.add("left")
                return;
            }
            case CHARACTER.RIGHT:
                revealRef.current?.classList.add("right")
                return;
            default:{

            }
        }

    } , [character, setIsRendered]) 

    const observerCallback:IntersectionObserverCallback = useCallback((entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting){
            addFunction()
        }
    } , [addFunction])

    useEffect( () => {

        if (start && !isRendered){
            addFunction()
        }

        if (!isRendered){
            const observer = new IntersectionObserver(observerCallback)
    
            if (revealRef.current){
                observer.observe(revealRef.current)
            }
            if (start){
                addFunction()
            }
    
            return () => {
                observer.disconnect()
            }
        }
    } , [observerCallback, addFunction, isRendered] )

    

    return (
        <div className={`${className} reveal-base`} ref={revealRef} {...props}>
            {children}
        </div> 
    );
};

export default Reveal;