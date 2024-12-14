import React from 'react';
import Slider from '../components/Slider';
import { feedbacks } from '../../config/feedbacks';
import useMySwiper from '../hooks/useMySwiper';
import Image from 'next/image';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';

const Feedbacks = () => {

const {renderFunction} = useMySwiper({mainImageClassNames : "!object-contain border-4 w-[100%] lg:px-5 lg:py-5 !w-fit"})

    return (
        <section className='section'>
            {/* <div className="green-shadow absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-solid border-black"></div> */}
            <div className="container gap-containerGap p-container flex flex-col relative">
                <Image width={755} height={821} src={"/images/videoLiner.svg"} alt="#" className="absolute blur-[100px] left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] " />
                <Reveal character={CHARACTER.LEFT} >
                    <h2 className='h2'>Отзывы</h2>
                </Reveal>
                <Reveal character={CHARACTER.RIGHT}>
                    <Slider id={1} NextButttonClassNames='lg:absolute right-[20px] md:right-[120px] z-30' PrevButtonClassNames='lg:absolute left-[120px] md:left-[110px] z-30' swiperClassNames='sm:p-5 white-shadow md:rounded-[50px] sm:rounded-[20px] rounded-[10px] lg:max-w-[880px] relative' arrowType='circle' render={renderFunction} renderMap={feedbacks}  />
                </Reveal>
            </div>
        </section>
    );
};

export default Feedbacks;