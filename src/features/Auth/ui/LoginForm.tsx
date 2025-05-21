import FormTextInput from '@/shared/UI/FormInput/FormTextInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, TLogin } from '../model/LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import SubmitButton from '@/shared/UI/SubmitButton/SubmitButton';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import { setLoginPopup, setRegistrationPopup } from '@/entities/auth/model/authSlice';

const LoginForm = () => {

    const dispatch = useAppDispatch();
    const {handleSubmit, register, formState : {errors}} = useForm<TLogin>({
        resolver : zodResolver(loginSchema)
    })
    const onSumbit = handleSubmit( (data) => {
        console.log(data);
    } )
    
    return (
        <div className="form-container">
            <h2 className="form-title">Вход в аккаунт</h2>
            <div className="w-[80%] gap-2 flex flex-col">
                <form onSubmit={onSumbit} className="form">
                    <FormTextInput labelText="Email" register={register} name="email" error={errors.email} placeholder="Email"  />
                    <FormTextInput labelText="Пароль" register={register} name="password" error={errors.password} placeholder="Пароль" />
                    <SubmitButton className="mt-3" text="Зарегестрироваться" />
                </form>
                <p className="text text-lg text-black">Нет акккаунта? <span onClick={() => {dispatch(setRegistrationPopup(true))
                    dispatch(setLoginPopup(false))
                }} className="text-blue-400 cursor-pointer">Зарегестрироваться</span></p>
            </div>
        </div>
    );
};

export default LoginForm;