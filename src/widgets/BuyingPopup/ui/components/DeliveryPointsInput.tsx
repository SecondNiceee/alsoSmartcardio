import React, { SetStateAction, useMemo, useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TypeOffice } from '../../model/TypeOffice';
import DeliveryPointsSuggestionList from './DeliveryPointsSuggestionList';
import Loader from '@/shared/UI/Loader/Loader';


interface IDeliveryPointInput<T extends FieldValues>{
    name : Path<T>,
    control : Control<T>,
    deliveryPoints : TypeOffice[] | null,
    setDeliveryPoint : React.Dispatch<SetStateAction<TypeOffice | null>>
    inputValue : string,
    setInputValue : React.Dispatch<SetStateAction<string>>,
    setWannaChange : React.Dispatch<SetStateAction<boolean>>
}
function DeliveryPointsInput<T extends FieldValues>({name, setWannaChange, control, deliveryPoints, setDeliveryPoint, inputValue, setInputValue} : IDeliveryPointInput<T>){
    return (
        <Controller name={name} control={control} render={ ({field}) => {

            const {onChange} = field

            const [showSuggestions, setShowSuggestion] = useState<boolean>(false)

            
            
            const suggestions = useMemo<TypeOffice[] | null>(() => {
                if (deliveryPoints){
                    return deliveryPoints.filter((point) => point.name.toUpperCase().includes(inputValue.toUpperCase()))
                }
                return null

            }, [inputValue] )


            const onInputFocus = () => {
                setShowSuggestion(true)
            }

            const onInputBlur = () => {
                setTimeout( () => {
                    setShowSuggestion(false)
                } , 150 )
            }

            const onInputChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
                setInputValue(e.target.value)
                setDeliveryPoint(null)
                onChange(null)
            }

            const onSuggestionClick = (suggestion : TypeOffice) => () => {
                setWannaChange(false)
                onChange(suggestion)
                setInputValue(suggestion.name)
                setShowSuggestion(false)
                setDeliveryPoint(suggestion)
            }

            return (
                <div className='flex flex-col relative gap-2'>

                    <label className='p text-left' htmlFor={name}>{"Пункт выдачи"}</label>

                    <input placeholder='Введите пункт выдачи'  {...field} value={inputValue} onChange={onInputChange} onFocus={onInputFocus} onBlur={onInputBlur} className='p-2 p text-left border-black border-solid border-2 rounded-md' type="text"  />

                    {!suggestions && <Loader width={'30'} classNames='absolute right-[10px] top-[14px]' /> }

                    {showSuggestions && suggestions && <DeliveryPointsSuggestionList onClick={onSuggestionClick} suggestions={suggestions}   />}

                </div>
            )
        }  } />
    );
};

export default DeliveryPointsInput;