import React, { SetStateAction, useMemo, useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TypeOffice } from "../../model/TypeOffice";
import DeliveryPointsSuggestionList from "./DeliveryPointsSuggestionList";
import Loader from "@/shared/UI/Loader/Loader";
import { sumCalculate } from "../../api/sumCalculate";
import { TypeDeliverName } from "@/shared/models/TypeDeliverName";

interface IDeliveryPointInput<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  deliveryPoints: TypeOffice[] | null;
  setDeliveryPoint: React.Dispatch<SetStateAction<TypeOffice | null>>;
  inputValue: string;
  setInputValue: React.Dispatch<SetStateAction<string>>;
  setWannaChange: React.Dispatch<SetStateAction<boolean>>;
  label: string;
  placeholder: string;
  type: TypeDeliverName;
  setDeliverySumm: React.Dispatch<SetStateAction<number>>;
  error : string | undefined
}
function DelivertDropDownInput<T extends FieldValues>({
  name,
  setWannaChange,
  control,
  deliveryPoints,
  setDeliveryPoint,
  inputValue,
  setInputValue,
  label,
  placeholder,
  type,
  setDeliverySumm,
  error
  
}: IDeliveryPointInput<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange } = field;

        const [showSuggestions, setShowSuggestion] = useState<boolean>(false);

        const suggestions = useMemo<TypeOffice[] | null>(() => {
          if (deliveryPoints) {
            return deliveryPoints.filter((point) =>
              point.name.toUpperCase().includes(inputValue.toUpperCase())
            );
          }
          return null;
        }, [inputValue, deliveryPoints]);

        const onInputFocus = () => {
          setShowSuggestion(true);
        };

        const onInputBlur = () => {
          setTimeout(() => {
            setShowSuggestion(false);
          }, 150);
        };

        const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
          e
        ) => {
          setInputValue(e.target.value);
          setDeliveryPoint(null);
          onChange(null);
        };

        const onSuggestionClick = (suggestion: TypeOffice) => async () => {
          setWannaChange(false);
          onChange(suggestion);
          setInputValue(suggestion.name);
          setShowSuggestion(false);
          setDeliveryPoint(suggestion);
          const summ = await sumCalculate(suggestion, type);
          if (typeof summ === "number") setDeliverySumm(summ);
        };

        return (
          <div className="flex flex-col relative gap-2">
            <label className="p text-left" htmlFor={name}>
              {label}
            </label>

            <input
              autoComplete='off' 
              spellCheck = {false}
              placeholder={placeholder}
              {...field}
              value={inputValue}
              onChange={onInputChange}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              className="p-2 p text-left border-black border-solid border-2 rounded-md"
              type="text"
            />

            {!suggestions && (
              <Loader
                width={"30"}
                classNames="absolute right-[10px] top-[14px]"
              />
            )}

            {showSuggestions && suggestions && (
              <DeliveryPointsSuggestionList
                onClick={onSuggestionClick}
                suggestions={suggestions}
              />
            )}
            {error ? <p className='p text-red-500'>{"Пожалуйста, выберите что - нибудь из спиcка."}</p> : <></>}
          </div>
        );
      }}
    />
  );
}

export default DelivertDropDownInput;
