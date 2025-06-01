'use client'
import React, { useState } from 'react';
import "../styles/_for-whom.scss";

type TChoice = "users" | "doctors" | "hospitals";
const ForWhomTwo = () => {
    const [choice, setChoice] = useState<TChoice>("users");
    const clickHandler = (choice : TChoice) => () => {
        setChoice(choice);
    }
    return (
        <section className='section for-whom relative'>
            <div className="container">
                <h2 className='h2'>Для пользователей</h2>
                <div className='flex gap-10'>
                    <div className='w-[31%] flex items-center'>
                        <p className='sub-title text-center my-auto'>СмартКардио - надежный помощник в мониторинге сердечного ритма с автоматическим анализом показателей.</p> 
                    </div>
                    <img className='w-[38%] mx-auto rounded-lg' src="/images/for-users.png" alt="forUsers" />
                    <div className='w-[31%] flex my-auto justify-center'>
                        <div className='border-black w-full flex justify-center items-center border-2 border-solid py-3 rounded-md'>
                            <p className='sub-title'>ДАЛЕЕ</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ForWhomTwo;