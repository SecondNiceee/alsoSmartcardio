import React, { FC, useState } from 'react';
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
                <p className='contact-p'>{contact.name}</p>
            </div>
        <div className= {`black-block rounded-md`}></div>
        <Image className='contact-image rounded-md' alt='#' width={300} height={300} src={contact.imageSrc} />
        </a>
    );
};

export default Contact;