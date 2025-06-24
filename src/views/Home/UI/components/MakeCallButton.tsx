import { useTelegramPopup } from '@/shared/providers/TelegramProvider/TelegramProvider';
import React from 'react';

const MakeCallButton = () => {
    const {setTelegramPopup} = useTelegramPopup();
    return (
    <button
        onClick={() => setTelegramPopup(true)}
        className="!bg-white p-2 w-[80%] mx-auto rounded-md disabled:opacity-50"
    >
        <p className='text-black big-p'>Заказать обратный звонок</p>
    </button>
    );
};

export default MakeCallButton;