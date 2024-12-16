import React from 'react';
import Slider from './Slider';
import useMySwiper from '../hooks/useMySwiper';
import Popup from '@/shared/UI/Popup/Popup';
import { schemeConfig } from '../../config/schemeConfig';

const SchemePopup = () => {
    const {renderFunction} = useMySwiper({})
    return (
        <Popup>
            <div className='flex flex-col gap-containerGap w-[100%]'>
                <h2 className='h2 text-black'>Схема устройства</h2>
                <Slider id={4} render={renderFunction} renderMap={schemeConfig} arrowType='circle'   />
            </div>
        </Popup>

    );
};

export default SchemePopup;