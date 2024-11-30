import React, { FC, ReactNode, useEffect, useRef } from 'react';
import "./Reveal.scss"

export const enum CHARACTER{
    DOWNUP, LEFT, RIGHT, UPDOWN
}
type DivProps = JSX.IntrinsicElements["div"]

interface IReveal extends DivProps{
    children : ReactNode,
    character : CHARACTER,
    className? : string
} 
const Reveal:FC<IReveal> = ({children, character, className = "", ...props}) => {

    const revealRef = useRef<HTMLDivElement>(null)

    const observerCallback:IntersectionObserverCallback = (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting){
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
                
            }
        }
    }

    useEffect( () => {
        const observer = new IntersectionObserver(observerCallback, {
            threshold : 0.25
        })

        if (revealRef.current){
            observer.observe(revealRef.current)
        }

        return () => {
            observer.disconnect()
        }
    } , [] )

    return (
        <div className={`${className} reveal-base`} ref={revealRef} {...props}>
            {children}
        </div> 
    );
};

export default Reveal;