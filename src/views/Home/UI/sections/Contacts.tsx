import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const Contacts = () => {
    return (
        <section className='sectino bg-black'>
            <div className="container flex flex-col gap-[20px] p-container items-center">
                <h2 className='h2 text-white'>Наши контакты</h2>
                <p className='mid-title text-white'>support@smartcardio.ru</p>
                <p className='p text-white'> Подпишитесь на СмартКардио® в социальных сетях</p>
                <div className="flex flex-col items-center gap-[20px] mt-[5px]">
                    <OrderButton className='button !bg-[#47668d]'  onClick={() => {}}>
                        <p className='button-p'>Научно-популярная медицина</p>
                    </OrderButton>
                    <OrderButton className='button !bg-[#0087d0]' onClick={() => {}}>
                        <p className='button-p'>Профессиональное сообщество для врачей</p>
                    </OrderButton>
                </div>
                <a  target="_blank" rel="noopener noreferrer" href='https://dzen.ru/smartcardio' className='p text-white underline'>Актуальные статьи</a>
                <div className="flex gap-[20px] w-[100%] justify-center max-w-[600px]">
                    <OrderButton onClick={() => {}} className='button !bg-white'>
                        <p className='button-p !text-black'>Оставить отзыв</p>
                    </OrderButton>
                    <OrderButton onClick={() => {}} className='button !bg-white'>
                        <p className='button-p !text-black'>Служба поддержки</p>
                    </OrderButton>
                </div>
            </div>
        </section>
    );
};

export default Contacts;