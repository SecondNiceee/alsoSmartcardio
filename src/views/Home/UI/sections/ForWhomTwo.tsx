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
                <div className='flex gap-24'>

                    <img className='w-[40%] mx-auto rounded-lg' src="/images/for-users.png" alt="forUsers" />


                </div>

            </div>
        </section>
    );
};

export default ForWhomTwo;