import React, { FC, SetStateAction } from 'react';
import "../styles/deliever.css"
import { TypedeliveryMethod } from '../../model/TypeDeliveryMethod';
import { getDaysString } from '../../utils/getDayString';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TypeDeliveryMethodString } from '../../model/TypeDeliveryMethodString';


interface IDeliveryMethods<T extends FieldValues>{
    methods : TypedeliveryMethod[],
    control : Control<T>,
    setDeliveryMethodString : React.Dispatch<SetStateAction<TypeDeliveryMethodString | null>>
}
function DeliveryMethods<T extends FieldValues>({methods, control, setDeliveryMethodString} : IDeliveryMethods<T>){
    return (

        <Controller name={'deliveryMethod' as Path<T>} control={control} render={({field}) => {

            const {onChange} = field

            const changeHandler = (value:TypeDeliveryMethodString) => () => {
                setDeliveryMethodString(value)
                onChange(value)
            }

            return (
            <>

                {!methods[0].errors && <div className='flex items-center gap-2'>
                    <input defaultChecked {...field} onChange={changeHandler("deliveryPoint")} id='PVZ'  type="radio" />  
                    <label htmlFor='PVZ' className="radio-label" />
                    <label className='p font-bold' htmlFor="PVZ">Доставка в пункт выдачи CDEK <span className='font-extralight'>от { methods[0].calendar_min + ' '+ getDaysString(methods[0].calendar_min) + ', ' + methods[0].total_sum + 'руб'} </span></label>
                </div>}
                
                {!methods[1].errors && 
                <div className='flex items-center gap-2'>
                    <input id='POSTAMAT' type="radio" {...field} onChange={changeHandler("postmat")} />      
                    <label htmlFor='POSTAMAT' className="radio-label" /> 
                    <label className='p font-bold' htmlFor="POSTAMAT">Доставка в постмат</label>
                </div> }

                {!methods[2].errors && 
                <div className='flex items-center gap-2'>
                    <input id='courier' {...field} onChange={changeHandler("courier")} type="radio" />  
                    <label htmlFor='courier'  className="radio-label" />  
                    <label className='p font-bold' htmlFor="courier">Доставка курьером</label>
                </div>        }

            </>
            )
        }} />

    );
};

    export default React.memo(DeliveryMethods) as <T extends FieldValues>(props : IDeliveryMethods<T>) => JSX.Element