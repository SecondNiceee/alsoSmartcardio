import React, { FC, SetStateAction, useEffect, useState } from 'react';
import "../styles/deliever.css"
import { TypedeliveryMethod } from '../../model/TypeDeliveryMethod';
import { getDaysString } from '../../utils/getDayString';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TypeDeliveryMethodString } from '../../model/TypeDeliveryMethodString';


interface IDeliveryMethods<T extends FieldValues>{
    methods : TypedeliveryMethod[],
    control : Control<T>,
    setDeliveryMethodString : React.Dispatch<SetStateAction<TypeDeliveryMethodString | null>>,
    setDeliverySumm : React.Dispatch<SetStateAction<number>>
}
function DeliveryMethods<T extends FieldValues>({methods, control, setDeliveryMethodString, setDeliverySumm} : IDeliveryMethods<T>){
    return (

        <Controller name={'deliveryMethod' as Path<T>} control={control} render={({field}) => {

            const {onChange, value} = field

            const changeHandler = (value:TypeDeliveryMethodString) => () => {
                setDeliveryMethodString(value)
                onChange(value)
                switch(value){
                    case "courier" : {
                        setDeliverySumm(methods[2].total_sum)
                        break;
                    }
                    case "deliveryPoint" : {
                        setDeliverySumm(methods[0].total_sum)
                        break;
                    }
                    case "postmat" : {
                        setDeliverySumm(methods[1].total_sum)
                        break;
                    }
                    default:{
                    }
                }
            }
            useEffect( () => {
                if (!methods[0].errors){
                    changeHandler("deliveryPoint")()
                }
                else{
                    if (!methods[1].errors){
                        changeHandler("postmat")()
                    }
                    else{
                        if(!methods[2].errors){
                            changeHandler("courier")()
                        }
                    }
                }
            } , [methods] )

            return (
            <>

                {!methods[0].errors && <div className='flex items-center gap-2'>
                    <input {...field} onChange={changeHandler("deliveryPoint")} checked = {value === "deliveryPoint"}   id='PVZ'  type="radio" />  
                    <label htmlFor='PVZ' className="radio-label" />
                    <label className='p font-bold' htmlFor="PVZ">Доставка в пункт выдачи CDEK <span className='font-extralight'>от { methods[0].calendar_min + ' '+ getDaysString(methods[0].calendar_min) + ', от ' + methods[0].total_sum + 'руб'} </span></label>
                </div>}
                
                {!methods[1].errors && 
                <div className='flex items-center gap-2'>
                    <input  id='POSTAMAT'  type="radio" {...field} checked = {value === "postmat"}  onChange={changeHandler("postmat")} />      
                    <label htmlFor='POSTAMAT' className="radio-label" /> 
                    <label className='p font-bold' htmlFor="POSTAMAT">Доставка в постмат <span className='font-extralight'>от { methods[1].calendar_min + ' '+ getDaysString(methods[0].calendar_min) + ', от ' + methods[1].total_sum + ' руб'} </span></label>
                </div> }

                {!methods[2].errors && 
                <div className='flex items-center gap-2'>
                    <input id='courier' {...field} checked = {value === "courier"}  onChange={changeHandler("courier")}  type="radio" />  
                    <label htmlFor='courier'  className="radio-label" />  
                    <label className='p font-bold' htmlFor="courier">Доставка курьером <span className='font-extralight'>от { methods[2].calendar_min + ' '+ getDaysString(methods[0].calendar_min) + ', от ' + methods[2].total_sum + ' руб'} </span></label>
                </div>      }

            </>
            )
        }} />

    );
};

    export default React.memo(DeliveryMethods) as <T extends FieldValues>(props : IDeliveryMethods<T>) => JSX.Element