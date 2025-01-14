import React, { FC, SetStateAction, useState } from 'react';
import { TypeOffice } from '../../model/TypeOffice';
import { Control, FieldValues, Path } from 'react-hook-form';
import DelivertDropDownInput from './DeliveryDropDownInput';


interface IDeliveryPoint<T extends FieldValues>{
    postmats : TypeOffice[] | null,
    control : Control<T>,
    name : Path<T>,
    setDeliverySum : React.Dispatch<SetStateAction<number>>
}

function DeliveryPostmanForm<T extends FieldValues>({control, name, postmats, setDeliverySum} : IDeliveryPoint<T>){

    const [postmat, setPostmat] = useState<TypeOffice | null>(null)
    const [wannaChange, setWannaChange] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    function buttonHandler(){
        setWannaChange(true)
    }

    return (
        <div className='flex flex-col'>
            {!postmat || wannaChange ? 
            <DelivertDropDownInput setDeliverySumm={setDeliverySum} type='POSTMAT' label='Постмат' placeholder='Выберите постмат' setWannaChange={setWannaChange} inputValue={inputValue} setInputValue={setInputValue} setDeliveryPoint={setPostmat} control={control} deliveryPoints={postmats} name={name} />
            :
            <div className='gap-1 flex flex-col p-4 rounded-md border-black border-[1px] border-solid'>
                <p className='p text-left'><span className='font-medium'>Название : </span>{postmat.name}</p>
                <p className='p text-left'><span className='font-medium'>Адрес : </span>{postmat.location.address}</p>
                <p className='p text-left'><span className='font-medium'>Комментарий : </span>{postmat.address_comment}</p>
                <p className='p text-left'><span className='font-medium'>График работы : </span>{postmat.work_time}</p>
                <p className='p text-left'><span className='font-medium'>Телефон : </span>{postmat.phones[0].number}</p>
                <button onClick={buttonHandler} className='bg-black mt-1 w-fit rounded-md px-3 py-2 flex justify-center items-center'>
                    <p className='p font-medium text-white'>Изменть пункт</p>
                </button>
            </div>
            }
        </div>
    );
};

export default DeliveryPostmanForm;