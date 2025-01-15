import { telephoneFormatter } from '@/shared/utils/telephoneFormatter';
import { telephoneParser } from '@/shared/utils/telephoneParser';
import React, { ChangeEventHandler, FC } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';


interface IPhoneInput<T extends FieldValues>{
    control : Control<T>,
    error : string | undefined
}
function PhoneInput<T extends FieldValues>({control, error} : IPhoneInput<T>){
    return (
        <Controller
        control={control}
        name={"phone" as Path<T>} 
        render={({ field }) => {
          const { name, onChange, value } = field;
          const changeHandler: ChangeEventHandler<HTMLInputElement> = (
            e
          ) => {
            const value = e.target.value;
            onChange(telephoneParser(value));
          };
          return (
            <div className="flex flex-col gap-2">
              <label className="p text-left" htmlFor={name}>
                {"Ваш телефон"}
              </label>
              <input
                {...field}
                onChange={changeHandler}
                value={telephoneFormatter(value)}
                placeholder={"+7-XXX-XXX-XX"}
                id={name}
                className="p-2 p text-left border-black border-solid border-2 rounded-md"
                type={"tel"}
              />
              {error ? (
                <p className="p text-red-500">{error}</p>
              ) : (
                <></>
              )}
            </div>
          );
        }}
      />
    );
};

export default React.memo(PhoneInput) as <T extends FieldValues>(props : IPhoneInput<T>) => JSX.Element;