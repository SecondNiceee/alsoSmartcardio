import React from 'react';

const Footer = () => {
    return (
        <footer className='section bg-black'>
            <div className="container flex flex-col gap-[15px] pb-[30px]">
                <div className="flex flex-col">
                    <p className='p text-[15px] text-[#d1d1d1] text-left'>ООО "АРИТМЕД"</p>
                    <p className='p text-[15px] text-[#d1d1d1] text-left'>ОГРН 1227700287330</p>
                    <p className='p text-[15px] text-[#d1d1d1] text-left'>ИНН 9726013334</p>
                    <p className='p text-[15px] text-[#d1d1d1] text-left'>Адрес: 113570, город Москва, ул Красного Маяка, д. 11 к. 5, кв. 36</p>
                    <p className='p text-[15px] text-[#d1d1d1] text-left'>Адрес электронной почты: support@smartcardio.ru</p>
                </div>
                <div className="flex flex-col max-w-[600px]">
                    <p className='p text-[15px] text-[#d1d1d1] text-left'>Не является медицинским устройством, перед применением проконсультируйтесь со специалистом. 
                        Для расшифровки результата так же обратитесь к специалисту. 
                        Обращаем Ваше внимание, что согласно действующему Российскому законодательству технически сложный товар надлежащего качества возврату и обмену не подлежит.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;