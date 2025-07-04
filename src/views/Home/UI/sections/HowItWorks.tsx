"use client"
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';
import Reveal from '@/shared/UI/Reveal/Reveal';
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
        <section ref={observerRef} className='how-it-works relative'>
            <Reveal character={CHARACTER.DOWNUP} className="container">
                  <header className='how-it-works__header'>
                      Как это работает?
                  </header>
                
                  <div ref={elementRef} className="how-it-works__main relative z-[100]">
                      <Video videoClassName='video !z-[100] !relative'  poster = "images/manual.webp" controls = {true} className='how-it-works__video !z-[100] !relative' videoName='manual.mp4'  />
                  </div>
                  <img className='how-it-works__logo' src={"/images/logo.jpg"} alt='ЭКГ' />
                  <img className='how-it-works__logo' src={"/images/logo.jpg"} alt='Прибор для ЭКГ'  />

            </Reveal>
        </section>
    );
};

export default HowItWorks;