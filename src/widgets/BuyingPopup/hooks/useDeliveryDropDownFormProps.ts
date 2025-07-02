import React, { useState } from 'react';
import { TypeDeliveryMethodString } from '../model/TypeDeliveryMethodString';
import { TypeOffice } from '../model/TypeOffice';
import { TypeDeliverName } from '@/shared/models/TypeDeliverName';

interface IuseDeliveryDropDownFormProps{
    deliveryMethodString : TypeDeliveryMethodString | null
}
const useDeliveryDropDownFormProps = ({deliveryMethodString} : IuseDeliveryDropDownFormProps) => {

    const [deliveryPoints, setDeliveryPoints] = useState<TypeOffice[] | null>([]);

    const [postmats, setPostmats] = useState<TypeOffice[] | null>([]);


    const deliveryName:TypeDeliverName = deliveryMethodString === "deliveryPoint" ? "PVZ" : "POSTMAT"
    const name = deliveryMethodString === "deliveryPoint" ? "deliveryPoint" : "postmat"
    const inputLabel = deliveryMethodString === "deliveryPoint" ? "Пункт выдачи" : "Постамат"
    const inputPlaceholder = deliveryMethodString === "deliveryPoint" ? "Выберите пункт выдачи" : "Выберите постамат"
    const delivers = deliveryMethodString === "deliveryPoint" ? deliveryPoints : postmats


    return {deliveryName, inputLabel, inputPlaceholder, delivers, setDeliveryPoints, setPostmats, name}
};

export default useDeliveryDropDownFormProps;