'use client'
import React, { useState } from 'react';
import "../styles/_for-whom.scss";

type TChoice = "users" | "doctors" | "hospitals";
const ForWhom = () => {
    const [choice, setChoice] = useState<TChoice>("users");
    const clickHandler = (choice : TChoice) => () => {
        setChoice(choice);
    }
    return (
        <section className='section for-whom relative'>
            <div className="container">
                <h2 className='h2'>Для пользователей</h2>
                <div className='flex gap-24'>

                    <img className='w-[40%] rounded-lg' src="/images/for-users.png" alt="forUsers" />

                    <div className='choices-wrapper py-11'>
                        <p className='sub-title'>СмартКардио - надежный помощник в мониторинге сердечного ритма с автоматическим анализом показателей.</p>
                        <div className='w-full h-[2px] bg-black rounded-full'></div>
                        <div className="choices-container">
                            <div onClick={clickHandler("users")} className={`${choice === "users" && "bg-black" } choice-item`}>
                                <p className={`${choice === "users" && "!text-white"} choice-item__text`}>
                                    Для пользователей
                                </p>
                            </div>

                            <div onClick={clickHandler("doctors")} className={`${choice === "doctors" && "bg-black" } choice-item`}>
                                <p className={`${choice === "doctors" && "!text-white"} choice-item__text`}>
                                    Для врачей
                                </p>
                            </div>
                            
                            <div onClick={clickHandler("hospitals")} className={`${choice === "hospitals" && "bg-black" } choice-item`}>
                                <p className={`${choice === "hospitals" && "!text-white"} choice-item__text`}>
                                    Для мед. учреждений
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ForWhom;