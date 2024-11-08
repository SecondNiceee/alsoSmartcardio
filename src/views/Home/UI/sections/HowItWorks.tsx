"use client"
import Video from '@/shared/UI/Video/Video';
import React, { useCallback, useEffect, useRef } from 'react';

const HowItWorks = () => {

    const observerRef = useRef<HTMLDivElement>(null)
    const elementRef = useRef<HTMLDivElement>(null)
    
    const onIntersaction = useCallback(
        (entries:IntersectionObserverEntry[]) => {
          const firtEntry = entries[0];
          if (firtEntry.isIntersecting) {
            elementRef.current?.classList.add("animate")
          }
        },
        []
      );
      useEffect(() => {
        const observer = new IntersectionObserver(onIntersaction);
        if (observer && observerRef.current) {
          observer.observe(observerRef.current);
        }
        return () => {
          observer.disconnect();
        };
      }, [onIntersaction]);


    return (
        <section ref={observerRef} className='how-it-works'>
            <div className="container">

                <header className='how-it-works__header'>
                    Как это работает?
                </header>
                

                <div ref={elementRef} className="how-it-works__main">
                    <Video videoClassName='video'  poster = "images/manual.png" controls = {true} className='how-it-works__video' videoName='manual.mp4'  />
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;