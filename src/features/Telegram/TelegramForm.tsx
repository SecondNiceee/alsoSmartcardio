import React from 'react';
import { useForm } from 'react-hook-form';
import FormTextInput from '@/shared/UI/FormInput/FormTextInput';
import PhoneInput from '../../widgets/BuyingPopup/ui/components/PhoneInput';
import SubmitButton from '@/shared/UI/SubmitButton/SubmitButton';
import "./telegram-styles.css";
import useAlert from '@/shared/providers/AlertProvider/useAlert';
import { zodResolver } from '@hookform/resolvers/zod';
import { telegramFormSchema } from './model/telegram-form.validation';
import { useTelegramPopup } from '@/shared/providers/TelegramProvider/TelegramProvider';
import { request } from '@/shared/api/request';

export type TTelegramForm = {
    username : string,
    phone : string,
    isPersonalAgree : boolean
}
const TelegramForm = () => {

    const {setTelegramPopup} = useTelegramPopup();

    const {handleSubmit, register, control, formState : {errors}} = useForm<TTelegramForm>({
        resolver: zodResolver(telegramFormSchema),
        defaultValues : {
            isPersonalAgree : true,
            phone : "",
            username : ""
        },

    });

    const {showAlert} = useAlert();
    
    const onSubmit = handleSubmit(async (data: TTelegramForm) => {
        const now = Date.now();
        const lastRequestTime = localStorage.getItem('lastTelegramRequestTime');

        if (lastRequestTime) {
            const timeDiffInMinutes = (now - parseInt(lastRequestTime)) / (1000 * 60);
            if (timeDiffInMinutes < 5) {
                showAlert("Вы уже создавали заявку недавно", "error")
                setTelegramPopup(false);
                return;
            }
        }
        localStorage.setItem('lastTelegramRequestTime', now.toString());

        const response = await request({
            headers : {
                "Content-Type": "application/json"
            },
            method : "POST",
            url : "/api/sendmessage",
            withCredentials : true,
                body : {
                    name : data.username,
                phone : data.phone
            }
        })
        console.log(response);

        showAlert("Ваша заявка принята!", "success");
        setTelegramPopup(false);
    });


    return (
        <div className="flex flex-col items-center bg-white rounded-lg p-10 w-full gap-10">
            <form onSubmit={onSubmit} className='flex w-[80%] flex-col mb-auto rounded-lg gap-4'>
                <FormTextInput labelClassNames='!font-medium' name='username' error={errors.username} labelText='Ваше имя:' placeholder='Введите ваше имя' maxLength={30} register={register} />

                <PhoneInput label='Телефон для связи:' labelClassNames='!font-medium' error={errors.phone?.message} control={control} />
                
                <div className='flex items-center gap-2'>
                <input
                        {...register("isPersonalAgree")}
                        id='isPersonalAgree'
                        type="checkbox"
                        className="hidden" // скрываем оригинальный чекбокс
                    />
                    <label htmlFor='isPersonalAgree' className="custom-checkbox"></label>
                    <label htmlFor="isPersonalAgree">Согласие на обработку персональных данных</label>
                </div>
                {errors.isPersonalAgree ? <p className="p text-red-500">{errors.isPersonalAgree.message}</p> : <></>}
                <SubmitButton className='!bg-liner' text='Заказать обратный звонок' />
            </form>
        </div>
    );
};

export default TelegramForm;