import React from 'react';
import "./deliever.css";
const DeliverMethod = () => {
    return (
        <div className="flex flex-col gap-4 ">
                <div className='flex items-center gap-2'>
                    <input defaultChecked id='PVZ'  name='deliver' type="radio" />  
                    <label htmlFor='PVZ' className="radio-label" />
                    <label className='p font-bold' htmlFor="PVZ">Доставка в пункт выдачи CDEK</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input id='POSTAMAT'  name='deliver' type="radio" />      
                    <label htmlFor='POSTAMAT' className="radio-label" /> 
                    <label className='p font-bold' htmlFor="POSTAMAT">Доставка в постмат</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input id='courier'  name='deliver' type="radio" />  
                    <label htmlFor='courier' className="radio-label" />  
                    <label className='p font-bold' htmlFor="courier">Доставка курьером</label>
                </div>
        </div>
    );
};

export default DeliverMethod;