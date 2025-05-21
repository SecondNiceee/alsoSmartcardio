import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import "./auth-form.css";
import FormTextInput from "@/shared/UI/FormInput/FormTextInput";
import { registrationSchema, TRegistration } from "../model/RegistrationSchema";
import SubmitButton from "@/shared/UI/SubmitButton/SubmitButton";
import "./auth-form.css";
import { useAppDispatch } from "@/shared/models/reduxHooks";
import { setLoginPopup, setRegistrationPopup } from "@/entities/auth/model/authSlice";

const RegistrationForm = () => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState : {errors}} = useForm<TRegistration>({
        resolver : zodResolver(registrationSchema)
    })
    const onSumbit = handleSubmit( (data) => {
        console.log(data)
    } )
    return (
        <div className="form-container">
            <h2 className="form-title">Регистрация</h2>
            <div className="w-[80%] gap-2 flex flex-col">
                <form onSubmit={onSumbit} className="form">
                    <FormTextInput register={register} name="email" error={errors.email} placeholder="Email"  />
                    <FormTextInput register={register} name="password" error={errors.password} placeholder="Пароль" />
                    <FormTextInput register={register} name="confirmPassword" error={errors.confirmPassword} placeholder="Подвердите пароль" />
                    <SubmitButton className="mt-3" text="Зарегестрироваться" />
                </form>
                <p className="text text-lg text-black">Уже есть аккаунт? <span onClick={() => {
                    dispatch(setRegistrationPopup(false))
                    dispatch(setLoginPopup(true))
                }} className="text-blue-400 cursor-pointer">Войти</span></p>
            </div>
        </div>
    );
};

export default RegistrationForm;