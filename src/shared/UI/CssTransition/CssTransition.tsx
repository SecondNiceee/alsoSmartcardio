import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import "./CssTransition.scss"

interface ICssTransition{
    children : ReactElement,
    state : boolean,
    wrapperRef : React.RefObject<HTMLDivElement> // передайте ref на элемент снизу 
}
const CssTransition:FC<ICssTransition> = ({children, state, wrapperRef}) => {
    const [cssTransition, setCssTransition] = useState<boolean>(false)
    useEffect( () => {
        if (state){
            setCssTransition(true)
            const timeout = setTimeout(() => {
                wrapperRef.current?.classList.add('show-opacity')
            } , 40)
            return () => {
                clearTimeout(timeout)
            }
        }
        else{
            // setCssTransition(false)
            wrapperRef.current?.classList.remove('show-opacity')
            const timeout = setTimeout( () => {
                setCssTransition(false)
            } , 440)
            return () => {
                clearTimeout(timeout)
            }
        }
    } , [state] )
    return (
        <>
        {cssTransition && children}
        </>
    );
};

export default CssTransition; 