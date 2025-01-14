
import React, { ChangeEventHandler, SetStateAction } from 'react';
import { Control, Controller, FieldValues, Path, UseFormRegister } from 'react-hook-form';


interface IDeliverCourierForm<T extends FieldValues>{
    control : Control<T>,
    setDeliveryAddress : React.Dispatch<SetStateAction<string>>,
    error : string | undefined
    
}
function DeliveryCourierForm<T extends FieldValues>({control, setDeliveryAddress, error} : IDeliverCourierForm<T>){
    return (
        <div className='flex flex-col'>
            <Controller name={'address' as Path<T>} control={control} render={({field}) => {
                const {onChange} = field
                const changeHandler:ChangeEventHandler<HTMLInputElement> = (e) => {
                    const value = e.target.value
                    onChange(value)
                    setDeliveryAddress(value)
                }   
                return (
                    <div className='flex flex-col gap-2'>
                        <label className='p text-left' htmlFor={"address"}>{"Адрес"}</label>
                        <input autoComplete='off' id='address' spellCheck = {false} {...field} onChange={changeHandler} placeholder={"Введите поселок/район, улицу, дом, подъезд, этаж и квартиру"} className='p-2 p text-left border-black border-solid border-2 rounded-md'  type="text" />
                        {error ? <p className='p text-red-500'>Поле обязательно для заполнения!</p> : <></>}
                    </div>
                )
            }}
             />
            {/* <FormTextInput register={register} labelText='Адрес' name={"address" as Path<T>} placeholder='Введите полный адрес'/> */}
        </div>
    );
};

export default React.memo(DeliveryCourierForm) as <T extends FieldValues>(props : IDeliverCourierForm<T>) => JSX.Element;