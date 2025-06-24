import React, { FC } from 'react';
import { TypeContact } from '../../config/contacts.config';
import Image from 'next/image';
import "../styles/_contact.scss"
interface IContact{
    contact : TypeContact
}
const Contact:FC<IContact> = ({contact}) => {
    return (
        <a href={contact.link} className='contact rounded-md' target='_blank' rel='noopener noreferred'>
            <div className="contact-tblock">
                <Image  alt='icon' className={`relative z-40 md:w-[50px] sm:w-[30px] w-[25px] `} src={contact.iconSvg} width={50} height={50} />
                <p className='contact-p'>{contact.name}</p>
            </div>
        <div className= {`black-block rounded-md`}></div>
        <Image className='contact-image rounded-md' alt='#' width={300} height={300} src={contact.imageSrc} />
        </a>
    );
};

export default Contact;