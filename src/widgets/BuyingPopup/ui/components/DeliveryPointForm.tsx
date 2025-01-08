import React, { FC, useState } from 'react';
import { TypeOffice } from '../../model/TypeOffice';
import DeliveryPointsInput from './DeliveryPointsInput';
import { Control, FieldValues, Path } from 'react-hook-form';


interface IDeliveryPoint<T extends FieldValues>{
    deliveryPoints : TypeOffice[] | null,
    control : Control<T>,
    name : Path<T>
}
function DeliveryPointForm<T extends FieldValues>({deliveryPoints, control, name} : IDeliveryPoint<T>){
    const [deliveryPoint, setDeliveryPoint] = useState<TypeOffice | null>(null)
    const [wannaChange, setWannaChange] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    function buttonHandler(){
        setWannaChange(true)
    }
    
    return (
        <div className='flex flex-col'>
            {!deliveryPoint || wannaChange ? 
            <DeliveryPointsInput setWannaChange={setWannaChange} inputValue={inputValue} setInputValue={setInputValue} setDeliveryPoint={setDeliveryPoint} control={control} deliveryPoints={deliveryPoints} name={name} />
            :
            <div className='gap-1 flex flex-col p-4 rounded-md border-black border-[1px] border-solid'>
                <p className='p text-left'><span className='font-medium'>Название : </span>{deliveryPoint.name}</p>
                <p className='p text-left'><span className='font-medium'>Адрес : </span>{deliveryPoint.location.address}</p>
                <p className='p text-left'><span className='font-medium'>Комментарий : </span>{deliveryPoint.address_comment}</p>
                <p className='p text-left'><span className='font-medium'>График работы : </span>{deliveryPoint.work_time}</p>
                <p className='p text-left'><span className='font-medium'>Телефон : </span>{deliveryPoint.phones[0].number}</p>
                <button onClick={buttonHandler} className='bg-black mt-1 w-fit rounded-md px-3 py-2 flex justify-center items-center'>
                    <p className='p font-medium text-white'>Изменть пункт</p>
                </button>
            </div>
            }
        </div>
    );
};

export default DeliveryPointForm;