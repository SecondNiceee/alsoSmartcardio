import { device } from '@/shared/config/device';
import React from 'react';
import { IForm } from '../ui/BuyingPopup';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { deviceWithCase } from '@/shared/config/deviceWithCase';
import { useAppSelector } from '@/shared/models/reduxHooks';
import { getAccessToken } from '@/shared/utils/getAccessToken';
import { deliverCode } from '@/shared/config/deliverCode.config';
import { POST } from '@/shared/api/POST';
import { getDevicePackage } from '../utils/getDevicePackage';
import { getDeviceWithPackage } from '../utils/getDeviceWithCasePackage';

interface IUseSumbit{
    handleSubmit : (onValid: SubmitHandler<IForm>, onInvalid?: SubmitErrorHandler<IForm> | undefined) => (e?: React.BaseSyntheticEvent) => Promise<void>
    delivceryCity : string
    deliverySumm : number
}
const useSubmit = ({handleSubmit, delivceryCity, deliverySumm} : IUseSumbit) => {

        const goToCongradulation = () => {
            window.location.href = '/congradulation';
        };

        const cartOrders = useAppSelector( (state) => state.cartSlice.orders )

        const onSubmit = handleSubmit(async (data: IForm) => {
    
          const deivcePackage = getDevicePackage(data.comment)

          const deiveWithCasePackage = getDeviceWithPackage(data.comment)
    
          const devicePackages = Array.from({length : cartOrders[0].counter} , (order,id) => ({...deivcePackage, number : `sm-${id+1}`}))
    
          const deviceWithCasePackages = Array.from({length: cartOrders[1].counter} , (order, id) => ({...deiveWithCasePackage, number : `smwc-${id+1}`}))
    
          const packages = [...devicePackages, ...deviceWithCasePackages]
    
          const token = getAccessToken();

          const address = delivceryCity.split(',')[0] + ' ' + data.address

          console.log(address)
    
          const delivery_code = data.deliveryMethod === "postmat" ? data.postmat.code
          : data.deliveryMethod === "deliveryPoint" ? data.deliveryPoint.code : null
    
          const tarrif_code =
            data.deliveryMethod === "courier"
              ? deliverCode.COURIER
              : data.deliveryMethod === "deliveryPoint"
              ? deliverCode.PVZ
              : deliverCode.POSTMAT;
            
    
            try{
    
              if (data.deliveryMethod === "courier")  {


                const response = await POST({
                    endpoint: "/order",
                    data: {
                        "comment" : data.comment,
                        type : 1,
                        tariff_code : tarrif_code,
                        shipment_point : "MSK55",
                        value : 0,
                        sum : 0,
                        to_location : {
                            country_code : "RU",
                            "address" : address
                          },
                        delivery_recipient_cost : {
                          value : deliverySumm
                        },
                        delivery_point : delivery_code,
                        packages : packages,
                        recipient : {
                          name : data.FIO,
                          // phones : [{number : "+7" + data.phone.slice(1)}]
                          phones : [{number : "+79661827344" }]
                        }
                    },
                    headers: {
                      "Content-Type" : "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                  });

                
              }
              else{
                const response = await POST({
                  endpoint: "/order",
                  data: {
                      "comment" : data.comment,
                      type : 1,
                      tariff_code : tarrif_code,
                      shipment_point : "MSK55",
                      value : 0,
                      sum : 0,
                      delivery_recipient_cost : {
                        value : deliverySumm
                      },
                      delivery_point : delivery_code,
                      packages : packages,
                      recipient : {
                        name : data.FIO,
                        // phones : [{number : "+7" + data.phone.slice(1)}]
                        phones : [{number : "+79661827344" }]
                      }
                  },
                  headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                });
      
              }

              goToCongradulation()

            }
            catch(error){
              console.warn(error)
              alert("Произошла ошибка, перезагрузите пожалуйста страницу или зайдите позже.")
            }
        });

        return onSubmit
};

export default useSubmit;