import CityChoicer from '@/shared/UI/DropDownInput/CityChoicer';
import React, { useEffect, useMemo, useState } from 'react';
import { Control, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import NoDeliveryMethods from './NoDeliveryMethods';
import NoSelectedCity from './NoSelectedCity';
import { TypeStatus } from '@/shared/api/models';
import Loader from '@/shared/UI/Loader/Loader';
import ServerError from './ServerError';
import { TypedeliveryMethod } from '../../model/TypeDeliveryMethod';
import useOnPickSity from '../../hooks/useOnPickSity';
import DeliveryMethods from './DeliveryMethods';
import { TypeDeliveryMethodString } from '../../model/TypeDeliveryMethodString';
import { TypeOffice } from '../../model/TypeOffice';
import DeliveryPointForm from './DeliveryPointForm';
import DeliveryPostmanForm from './DeliveryPostmanForm';
import DeliveryCourierForm from './DeliveryCourierForm';
import FormTextInput from '@/shared/UI/FormInput/FormTextInput';

interface IDeliverComponent<T extends FieldValues>{
    control : Control<T>
    register : UseFormRegister<T>
}

function Delivery<T extends FieldValues>({control, register} : IDeliverComponent<T>){
    
    const [methods, setMethods] = useState<TypedeliveryMethod[]>([])

    const [methodsStatus , setMethodsStatus] = useState<TypeStatus>("fulfilled")

    const [deliveryMethodString, setDeliveryMethodString] = useState<TypeDeliveryMethodString | null>(null)

    const [deliveryPoints, setDeliveryPoints] = useState<TypeOffice[] | null>([])

    const [postmats, setPostmats] = useState<TypeOffice[]>([])

    const [isCityPicked, setIsCityPicked] = useState<boolean>(false)

    const onPick = useOnPickSity({setMethods : setMethods, setMethodsStatus : setMethodsStatus, setOffices : setDeliveryPoints, setPostmats : setPostmats })

    useEffect( () => {
        if (!isCityPicked){
            setDeliveryMethodString(null)
        }
    } , [isCityPicked] )

    const methodsState = useMemo( () => {
        if (methods.length && isCityPicked){
            if (methods.every((method) => method.errors)){
                return "error"
            }
            return "fine"
        }
        return "empty"
        
    } , [methods, isCityPicked] )

    console.log(deliveryMethodString)

    return (
        <>
                <p className='big-p font-bold'>Доставка</p>

                <CityChoicer setIsCityPicked={setIsCityPicked} control={control} labelText='Город / Населенный пункт' name={'city' as Path<T>} onPickFunction={onPick}  />

                <div className="flex flex-col gap-4 ">

                    <p className='big-p font-bold'>Способы доставки</p>

                    {methodsStatus === "fulfilled" ? 

                        methodsState === "empty" ? <NoSelectedCity/> : methodsState === "error" ? <NoDeliveryMethods/> : <DeliveryMethods setDeliveryMethodString={setDeliveryMethodString} control={control} methods={methods} />
                        :
                        methodsStatus === "pending" ? 
                        <Loader classNames='mx-auto' width='100' />
                        :
                        <ServerError />
                        
                    }

                </div>

                {deliveryMethodString === "deliveryPoint" ? <DeliveryPointForm control={control} name={"deliveryPoint" as Path<T>} deliveryPoints={deliveryPoints} /> : 
                deliveryMethodString === "postmat" ? <DeliveryPostmanForm /> :
                <DeliveryCourierForm /> }

        </>
    );
};

export default Delivery;