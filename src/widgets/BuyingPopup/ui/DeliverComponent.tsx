import DropDownInput from '@/shared/UI/DropDownInput/DropDownInput';
import React, { FC, useState } from 'react';
import DeliverMethod from './DeliverMethod';
import { Control, FieldValues, Path } from 'react-hook-form';

interface IDeliverComponent<T extends FieldValues>{
    control : Control<T>
}
interface TfetchDeliveryMethods{
    type : number,

}


type TypeMethod = "deliveryPoing" | "postmat" | "courier";

function DeliverComponent<T extends FieldValues>({control} : IDeliverComponent<T>){
    
    const [methods, setMethods] = useState<TypeMethod[]>([])

    return (
        <>
                <DropDownInput control={control} labelText='Город' name={'city' as Path<T>}  />

                <DeliverMethod />
        </>
    );
};

export default DeliverComponent;