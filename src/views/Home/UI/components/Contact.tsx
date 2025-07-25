import React, { FC } from 'react';
import { TypeContact } from '../../config/contacts.config';
import "../styles/_contact.scss"
interface IContact{
    contact : TypeContact
}
const Contact:FC<IContact> = ({contact}) => {
    return (
        <a href={contact.link} className='contact rounded-md' target='_blank' rel='noopener noreferred'>
            <div className="contact-tblock">
                <img  loading='lazy'  alt='Измерение ЭКГ' className={`relative z-40 md:w-[50px] sm:w-[30px] w-[25px] `} src={contact.iconSvg} />
                <p className='contact-p'>{contact.name}</p>
            </div>
        <div className= {`black-block rounded-md`}></div>
        <img className='contact-image rounded-md' alt='ЭКГ' width={300} height={300} src={contact.imageSrc} />
        </a>
    );
};

export default Contact;