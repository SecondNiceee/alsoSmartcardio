import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';
import Reveal from '@/shared/UI/Reveal/Reveal';
import Video from '@/shared/UI/Video/Video';
import Image from 'next/image';
import React from 'react';


const Recomendation = () => {
    return (
        <section className='section relative'>
            <div className="absolute left-[0%] z-20 top-[30%] opacity-50 md:opacity-70 lg:opacity-100 bg-[#16cffd] w-[200px] h-[200px] blur-[200px]"></div>
            <Reveal character={CHARACTER.DOWNUP} className="container relative z-30 gap-containerGap p-container flex flex-col">
                <h2 className='h2'>Нас рекомендуют!</h2>
                <Video videoClassName='rounded-[10px] z-30 relative' className='max-w-[880px] mx-auto relative z-30' controls = {true} videoName='recomendation.mp4'  />
                <div className='relative'>

                    <Image className='absolute hidden lg:block right-[0%] bottom-[20%] w-[25%]' alt='#' width={100} height={100} src={"/images/blogArrow.svg"} />
                    
                    <OrderButton externalLink='https://www.youtube.com/@smart_cardio' className='w-[100%] max-w-[70%] md:max-w-[500px] bg-[#ffffff] py-[11px] md:py-[18px] px-[14px] mx-auto border-solid border-2 scale-hover'  >
                        <span className='button-p'>На YouTube канал</span>
                    </OrderButton>
                    
                </div>
            </Reveal>
        </section>
    );
};

export default Recomendation;