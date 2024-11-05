import React from 'react';
import { downloadsButtons } from '../../config/downloadsButtons';
import PhoneButton from '@/shared/UI/PhoneButton/PhoneButton';
import Apple from './Apple';

const DownloadsButtons = () => {
    return (
        <div className='downloads__buttons'>
            {downloadsButtons.map( (e, i) => {
                return (
                    <PhoneButton className='downloads__button' svgItem = {e.imageName === "apple.svg" ? <Apple/> : undefined} key={i} href={e.href} imageName={e.imageName} text={e.text} />
                )
            } )}
        </div>
    );
};

export default DownloadsButtons;