import React from 'react';
import { contacts } from '../../config/contacts.config';
import Contact from '../components/Contact';

const Contacts = () => {
    return (
        <section id='contacts' className='section bg-black'>
            <div className="container flex flex-col gap-[20px] p-container items-center">
                <h2 className='h2 text-white'>Наши контакты</h2>
                <p className='mid-title text-white'>support@smartcardio.ru</p>
                <p className='p text-white'> Присоединяйтесь к нам в социальных сетях!</p>


                <div className='grid grid-cols-3 gap-5 w-[100%] mt-[10px] mb-[10px]'>
                        {contacts.map( (contact, i) => {
                            return (
                                <Contact key={i} contact={contact} />
                            )
                        } )}
                </div>

                {/* <div className="flex gap-[20px] w-[100%] justify-center max-w-[600px]">
                    <OrderButton className='button !bg-white'>
                        <p className='button-p !text-black'>Оставить отзыв</p>
                    </OrderButton>
                    <OrderButton className='button !bg-white'>
                        <p className='button-p !text-black'>Служба поддержки</p>
                    </OrderButton>
                </div> */}
            </div>
        </section>
    );
};

export default Contacts;