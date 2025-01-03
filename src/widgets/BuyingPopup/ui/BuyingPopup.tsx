import { useBlockScroll } from '@/shared/hooks/useBlockScroll';
import { useAppSelector } from '@/shared/models/reduxHooks';
import { formatNumber } from '@/shared/utils/formateNumber';
import Image from 'next/image';
import React, { FC, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {useForm} from "react-hook-form"
import { register } from 'module';
import Orders from './Orders';
import FormTextInput from '@/shared/UI/FormInput/FormTextInput';
import DropDownInput from '@/shared/UI/DropDownInput/DropDownInput';
import DeliverMethod from './DeliverMethod';
import DeliverComponent from './DeliverComponent';

interface IBuyingPopup{
    state : boolean
    setState : React.Dispatch<SetStateAction<boolean>>
}
interface IForm{
    FIO : string,
    email : string,
    phone : string,
    city : string

}

export const BuyingPopup:FC<IBuyingPopup> = ({setState, state}) => {

    const clickHandler = () => {
        setState(false)
    }
    const popupRef = useRef<HTMLFormElement>(null)
    const cartOrders = useAppSelector(state => state.cartSlice.orders)

    const summ = useMemo( () => {
        let summ = 0
        cartOrders.forEach( (e, i) => summ += e.price )
        return summ
    } , [cartOrders]  )


    // useBlockScroll()

    const {register, control, handleSubmit} = useForm<IForm>({
        defaultValues : {
            city : "",
            email : "",
            FIO : "",
            phone : ""
        }
    })

    const onSubmit = handleSubmit( (data) => {
        console.log(data)
    } )


    return (
        <CSSTransition classNames={"zoom"} timeout={{enter : 50, exit : 400}} mountOnEnter unmountOnExit in = {state} nodeRef={popupRef}>
            <form onSubmit={onSubmit} ref={popupRef} className='w-[100vw] fixed flex justify-center top-0 left-0 z-40 overflow-y-scroll h-[100vh]'>

                <div onClick={clickHandler} className="fixed bg-black top-0 left-0 w-[100vw] h-[100vh] opacity-50 z-30"></div>

                <div className="flex-col mt-10 mb-10 h-max rounded-3xl w-[50%] flex relative z-50 bg-white px-12 py-12">

                    <p className='mid-title font-bold  text-black'>
                        Ваш заказ:
                    </p>

                    <Orders cartOrders={cartOrders} />

                    <p className='big-p font-bold text-right mt-10 mr-[10px]'>Сумма : {formatNumber(summ)}p</p>
                    
                    <div className='flex flex-col gap-10 mt-10 w-[100%] px-12  mx-auto white-shadow py-12 rounded-xl'>

                        <FormTextInput labelText='Ваше ФИО' name='FIO' register={register}  />

                        <FormTextInput name='email' register={register} type='email' labelText='Ваш Email'  />

                        <FormTextInput name='phone' register={register} type='tel' labelText='Ваш телефон'  />
                        
                        <p className='big-p font-bold'>Доставка</p>


                        

                        <DeliverComponent control={control} />




                        <input className=' !bg-black text-white p-2 big-p w-[100%] mx-auto rounded-md' type="submit" value={"Оформить заказ"} />






                    </div>



                </div>
            </form>
        </CSSTransition>
    );
};