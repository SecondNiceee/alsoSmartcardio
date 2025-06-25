import { Accordion } from '@/shared/UI/Accordion/Accordion';
import React from 'react';
import { frequentQuestions } from '../../config/frequentQuestions';
import "../styles/_telegram-bot.scss";
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import MakeCallButton from '../components/MakeCallButton';

const TelegramBotSection = () => {
    return (
         <section className='section bg-black relative overflow-y-hidden'>
            <BlackThemeCircles />
            <div className="container w-full p-container items-center gap-containerGap sm:gap-[10px]  flex flex-col">
                <h2 className='h2 text-white'>Частые вопросы</h2>
                <div className="flex sm:w-[90%] sm:p-10 w-full p-0 justify-between custom-corner-border"> 
                    <Accordion content={frequentQuestions} />
                    {/* <TelegramPhoneInput /> */}
                </div>
                <div className='flex relative z-20 bg-black flex-col mt-[0px] sm:mt-[30px] gap-5 black-shadow p-10 rounded-xl w-full sm:w-[80%]'>
                    <h2 className='mid-title text-white'>Не нашли ответ на вопрос?</h2>
                    <MakeCallButton />
                </div>
            </div>

        </section>
    );
};

export default TelegramBotSection;