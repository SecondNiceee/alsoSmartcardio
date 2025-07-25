import { TypeStatus } from '@/shared/api/models';
import React, { SetStateAction, useCallback } from 'react';
import { TypedeliveryMethod } from '../model/TypeDeliveryMethod';
import postCourierPoint from '../api/postCourierPoint';
import postPostmanPoint from '../api/postPostmanPoint';
import postDeliveryPoint from '../api/postDeliveryPoint';
import { GET } from '@/shared/api/GET';
import getOffices from '../api/getOffices';
import getPostmats from '../api/getPostmats';
import { TypeOffice } from '../model/TypeOffice';
import { TypeSettlements } from '../model/TypeSettlements';

interface IUseOnPickSity{
    setMethodsStatus : React.Dispatch<SetStateAction<TypeStatus>>
    setMethods : React.Dispatch<SetStateAction<TypedeliveryMethod[]>>
    setOffices : React.Dispatch<SetStateAction<TypeOffice[] | null>>
    setPostmats : React.Dispatch<SetStateAction<TypeOffice[] | null>>
    
}


const useOnPickSity = ({setMethodsStatus, setMethods, setOffices, setPostmats} : IUseOnPickSity) => {

    const onPick = useCallback( async (par : number) => {

        setMethodsStatus("pending")

        let error = false

        const deliveryPoint = await postDeliveryPoint({code : par,onReject : () => {setMethodsStatus("rejected")
            error = true
        }}) 

        const postmatPoint = await postPostmanPoint({code : par, 
            onReject : () => {
            error = true}})

        const courierPoint = await postCourierPoint({code : par, onReject : () => {
            error = true
          } })


        if (courierPoint && postmatPoint && deliveryPoint){
            setMethods([deliveryPoint, postmatPoint, courierPoint])
        }

        setMethodsStatus('fulfilled')
    
        const settlements = await GET<TypeSettlements[]>({endpoint : "/settlements", params : {
            code : par
        }})

        const settlementsCode = settlements ? settlements[0].region_code : 0

        const offices = await getOffices({region_code : settlementsCode})

        const postmats = await getPostmats({region_code : settlementsCode})


        if (postmats && offices){

            setPostmats(postmats)

            setOffices(offices)

        }

        
        if (!error){
            setMethodsStatus("fulfilled")
        }
        else{
            setMethodsStatus("rejected")
        }

    } , [setMethods, setMethodsStatus, setOffices, setPostmats] )

    return onPick
};

export default useOnPickSity;