import { request } from '@/shared/api/request';
import React, { ChangeEventHandler, FC, SetStateAction, useEffect } from 'react';
import { Control, Controller, FieldValues, Path, UseFormWatch, useWatch } from 'react-hook-form';
import { TPromocode } from '../../model/TPromocode';

interface IPromocodeInput<T extends FieldValues>{
    control : Control<T>,
    watch : UseFormWatch<T>,
    setPromocode : React.Dispatch<SetStateAction<TPromocode | null>>,
    isPromocodeFind : TPromocode | null
    
}
export default function PromocodeInput<T extends FieldValues>({control, watch, setPromocode, isPromocodeFind} : IPromocodeInput<T>) {
    const promocodeValue = useWatch({control, name : "promocode" as Path<T>} );
    useEffect( () => {
        if (!promocodeValue) {
            setPromocode(null);
            return;
        }
        const handler = setTimeout(() => {
            async function fetchPromoByCode(code : string){            
                const promocode = await request<TPromocode>({
                    headers : {
                        "Content-Type": "application/json"
                    },
                    method : "GET",
                    url : "/api/isValidPromocode",
                    withCredentials : true,
                    queryParams : {
                        code : code
                    }
                })
                return promocode;
            }
            fetchPromoByCode(promocodeValue).then((promo) => setPromocode(promo)).catch(() => {setPromocode(null)})
        }, 300);
        return () => clearTimeout(handler);
    }, [promocodeValue, setPromocode] )

    return(
        <Controller control={control} name={"promocode" as Path<T>} render={({field}) => {
            const {onChange, value} = field
            const changeHandler:ChangeEventHandler<HTMLInputElement> = (e) => {
                const value = e.target.value
                onChange(value)
            }
            return (
            <div className='flex flex-col gap-2'>
                <label className='p text-left' htmlFor={"promocode"}>{"Промокод"}</label>
                <input {...field} onChange={changeHandler} value={value} autoComplete='nope' spellCheck = {false} placeholder={"Введите промокод"} id={"promocode"} className={`p-2 p text-left ${isPromocodeFind ? "border-green-600 border-2" : "border-black"} border-solid border-2 rounded-md`} type={"text"} />
            </div>
            )
          }} />
    )

};
