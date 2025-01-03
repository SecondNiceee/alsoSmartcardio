import React, { FC } from 'react';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';


export interface IFormInput<T extends FieldValues>{
    labelText : string
    name : Path<T>,
    register : UseFormRegister<T>,
    placeholder? : string,
    maxLength? : number,
    error? : FieldError | undefined,
    type? : string
}


function FormInput<T extends FieldValues>({labelText, name, placeholder, register, error, maxLength, type = "text"} : IFormInput<T>){
    return (
    <div className='flex flex-col gap-2'>
        <label className='p text-left' htmlFor={name}>{labelText}</label>
        <input maxLength={maxLength} placeholder={placeholder} id={name} className='p-2 p text-left border-black border-solid border-2 rounded-md' {...register(name)} type="text" />
    </div>
    );
};

export default React.memo(FormInput) as typeof FormInput;