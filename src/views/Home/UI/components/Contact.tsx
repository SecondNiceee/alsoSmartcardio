import React, { FC, useState } from 'react';
import { TypeContact } from '../../config/contacts.config';
import Image from 'next/image';
import "../styles/_contact.scss"
interface IContact{
    contact : TypeContact
}
const Contact:FC<IContact> = ({contact}) => {
    return (
        <div className='contact rounded-md'>
            <div className="contact-tblock">
                <p className='contact-p'>{contact.name}</p>
            </div>
        <div className= {`black-block rounded-md`}></div>
        <Image className='contact-image rounded-md' alt='#' width={300} height={300} src={contact.imageSrc} />
    </div>
    );
};

export default Contact;