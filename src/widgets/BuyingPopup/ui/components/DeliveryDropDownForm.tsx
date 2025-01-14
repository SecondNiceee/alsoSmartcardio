import React, { SetStateAction, useState } from "react";
import { TypeOffice } from "../../model/TypeOffice";
import { Control, FieldValues, Path } from "react-hook-form";
import DelivertDropDownInput from "./DeliveryDropDownInput";
import { TypeDeliverName } from "@/shared/models/TypeDeliverName";

interface IDeliveryPoint<T extends FieldValues> {
  deliveryPoints: TypeOffice[] | null;
  control: Control<T>;
  name: Path<T>;
  setDeliverySumm: React.Dispatch<SetStateAction<number>>;
  deliveryName: TypeDeliverName;
  inputLabel: string;
  inputPlaceholder: string;
  deliveryPoint: TypeOffice | null;
  setDeliveryPoint : React.Dispatch<SetStateAction<TypeOffice | null>>;
  inputValue : string,
  setInputValue : React.Dispatch<SetStateAction<string>>,
  error : string | undefined
}
function DeliveryDropDownForm<T extends FieldValues>({
  deliveryPoints,
  control,
  name,
  setDeliverySumm,
  deliveryName,
  inputLabel,
  inputPlaceholder,
  deliveryPoint,
  setDeliveryPoint,
  inputValue, 
  setInputValue,
  error
}: IDeliveryPoint<T>) {
  const [wannaChange, setWannaChange] = useState<boolean>(false);

  function buttonHandler() {
    setWannaChange(true);
  }

  return (
    <div className="flex flex-col">
      {!deliveryPoint || wannaChange ? (
        <DelivertDropDownInput
          error={error}
          setDeliverySumm={setDeliverySumm}
          type={deliveryName}
          label={inputLabel}
          placeholder={inputPlaceholder}
          setWannaChange={setWannaChange}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setDeliveryPoint={setDeliveryPoint}
          control={control}
          deliveryPoints={deliveryPoints}
          name={name}
        />
      ) : (
        <div className="gap-1 flex flex-col p-4 rounded-md border-black border-[1px] border-solid">
          <p className="p text-left">
            <span className="font-medium">Название : </span>
            {deliveryPoint.name}
          </p>
          <p className="p text-left">
            <span className="font-medium">Адрес : </span>
            {deliveryPoint.location.address}
          </p>
          <p className="p text-left">
            <span className="font-medium">Комментарий : </span>
            {deliveryPoint.address_comment}
          </p>
          <p className="p text-left">
            <span className="font-medium">График работы : </span>
            {deliveryPoint.work_time}
          </p>
          <p className="p text-left">
            <span className="font-medium">Телефон : </span>
            {deliveryPoint.phones[0].number}
          </p>
          <button
            onClick={buttonHandler}
            className="bg-black mt-1 w-fit rounded-md px-3 py-2 flex justify-center items-center"
          >
            <p className="p font-medium text-white">Изменть пункт</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(DeliveryDropDownForm) as <T extends FieldValues>(props : IDeliveryPoint<T>) => JSX.Element;
