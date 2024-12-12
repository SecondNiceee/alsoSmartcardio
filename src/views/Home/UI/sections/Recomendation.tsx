import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';
import Video from '@/shared/UI/Video/Video';
import React from 'react';

const Recomendation = () => {
    return (
        <section className='section'>
            <Reveal character={CHARACTER.DOWNUP} className="container gap-containerGap pb-containerPb flex flex-col">
                <h2 className='h2'>Нас рекомендуют!</h2>
                <Video videoClassName='rounded-[10px]' className='w-[80%] mx-auto' controls = {true} videoName='recomendation.mp4'  />
            </Reveal>
        </section>
    );
};

export default Recomendation;