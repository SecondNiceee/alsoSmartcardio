import React from 'react';

const Congradulation = () => {
    return (
        <section className='w-[100%] h-[100vh] bg-no-repeat bg-[0] bg-cover bg-[url("/images/congradulation.png")]'>
            <div className="container relative h-[100vh] flex justify-center items-center">
                <div className='flex white-shadow bg-white  rounded-lg w-[100%] max-w-[800px] h-[450px] flex-col p-10 justify-between items-center '>
                    <p className='sub-title'>СмартКардио® - диагностика в ритме времени</p>  
                    <h2 className='h2'>Спасибо за заказ!</h2>
                    <p className='big-p'>Уведомление об отправке придет на ваш email в течение двух рабочих дней.</p> 
                </div>
            </div>
        </section>
    );
};

export default Congradulation;