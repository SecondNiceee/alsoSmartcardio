import CityChoicer from "@/shared/UI/DropDownInput/CityChoicer";
import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";
import NoDeliveryMethods from "./NoDeliveryMethods";
import NoSelectedCity from "./NoSelectedCity";
import { TypeStatus } from "@/shared/api/models";
import Loader from "@/shared/UI/Loader/Loader";
import ServerError from "./ServerError";
import { TypedeliveryMethod } from "../../model/TypeDeliveryMethod";
import useOnPickSity from "../../hooks/useOnPickSity";
import DeliveryMethods from "./DeliveryMethods";
import { TypeDeliveryMethodString } from "../../model/TypeDeliveryMethodString";
import { TypeOffice } from "../../model/TypeOffice";
import DeliveryCourierForm from "./DeliveryCourierForm";
import DeliveryDropDownForm from "./DeliveryDropDownForm";
import useDeliveryDropDownFormProps from "../../hooks/useDeliveryDropDownFormProps";

interface IDeliverComponent<T extends FieldValues> {
  control: Control<T>;
  deliveryCityName: string;
  setDeliveryCityName: React.Dispatch<SetStateAction<string>>;
  setDeliverySumm: React.Dispatch<SetStateAction<number>>;
  deliveryInputValue : string,
  setDeliveryInputValue : React.Dispatch<SetStateAction<string>>,
  error : string | undefined
}

function Delivery<T extends FieldValues>({
  control,
  deliveryCityName,
  setDeliveryCityName,
  setDeliverySumm,
  deliveryInputValue, 
  setDeliveryInputValue,
  error
}: IDeliverComponent<T>) {


  console.log("Рендер Delivery")

  const [methods, setMethods] = useState<TypedeliveryMethod[]>([]);

  const [methodsStatus, setMethodsStatus] = useState<TypeStatus>("fulfilled");

  const [deliveryMethodString, setDeliveryMethodString] =
    useState<TypeDeliveryMethodString | null>(null);

  const [isCityPicked, setIsCityPicked] = useState<boolean>(false);

  const [deliveryPoint, setDeliveryPoint] = useState<TypeOffice | null>(null);

  const {delivers, deliveryName, inputLabel, inputPlaceholder, setDeliveryPoints,setPostmats, name} = useDeliveryDropDownFormProps({deliveryMethodString})


  const onPick = useOnPickSity({
    setMethods: setMethods,
    setMethodsStatus: setMethodsStatus,
    setOffices: setDeliveryPoints,
    setPostmats: setPostmats,
  });

  useEffect(() => {
    if (!isCityPicked) {
      setDeliveryMethodString(null);
    }
  }, [isCityPicked]);

  const methodsState = useMemo(() => {
    if (methods.length && isCityPicked) {
      if (methods.every((method) => method.errors)) {
        return "error";
      }
      return "fine";
    }
    return "empty";
  }, [methods, isCityPicked]);

  useEffect(() => {
    setDeliveryPoint(null);
    setDeliveryInputValue("");
  }, [deliveryMethodString]);


  return (
    <>
      <p className="big-p font-bold">Доставка</p>

      <CityChoicer
        city={deliveryCityName}
        setCity={setDeliveryCityName}
        setIsCityPicked={setIsCityPicked}
        control={control}
        labelText="Город / Населенный пункт"
        name={"city" as Path<T>}
        onPickFunction={onPick}
      />

      <div className="flex flex-col gap-4 ">
        <p className="big-p font-bold">Способы доставки</p>

        {methodsStatus === "fulfilled" ? (
          methodsState === "empty" ? (
            <NoSelectedCity />
          ) : methodsState === "error" ? (
            <NoDeliveryMethods />
          ) : (
            <DeliveryMethods
              setDeliverySumm={setDeliverySumm}
              setDeliveryMethodString={setDeliveryMethodString}
              control={control}
              methods={methods} 
            />
          )
        ) : methodsStatus === "pending" ? (
          <Loader classNames="mx-auto" width="100" />
        ) : (
          <ServerError />
        )}

                     
      </div>

      {deliveryMethodString === "deliveryPoint" || deliveryMethodString === "postmat"  ? (
        <DeliveryDropDownForm
          error={error}
          inputValue={deliveryInputValue}
          setInputValue={setDeliveryInputValue}
          setDeliveryPoint={setDeliveryPoint}
          deliveryPoint={deliveryPoint}
          deliveryName={deliveryName}
          inputLabel={inputLabel}
          inputPlaceholder={inputPlaceholder}
          setDeliverySumm={setDeliverySumm}
          control={control}
          name={name as Path<T>}
          deliveryPoints={delivers}
        />
      ) : deliveryMethodString === "courier" ? (
        <DeliveryCourierForm setDeliveryAddress={setDeliveryInputValue} control={control} />
      ) : (
        <></>
      )}
    </>
  );
}

export default React.memo(Delivery) as <T extends FieldValues>(props : IDeliverComponent<T>) => JSX.Element; 
