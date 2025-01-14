import { useAppSelector } from "@/shared/models/reduxHooks";
import { formatNumber } from "@/shared/utils/formateNumber";
import React, {
  ChangeEventHandler,
  ForwardedRef,
  forwardRef,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import Orders from "./components/Orders";
import FormTextInput from "@/shared/UI/FormInput/FormTextInput";
import Delivery from "./components/Delivery";
import { TypeDeliveryMethodString } from "../model/TypeDeliveryMethodString";
import useOrdersController from "@/features/Orders/addOrderToCart";
import { TypeOffice } from "../model/TypeOffice";
import BuyingItog from "./components/BuyingItog";
import { zodResolver } from "@hookform/resolvers/zod";
import { buyingSchema } from "../model/buyingValidation";
import { telephoneFormatter } from "@/shared/utils/telephoneFormatter";
import { telephoneParser } from "@/shared/utils/telephoneParser";
import { POST } from "@/shared/api/POST";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import { deliverCode } from "@/shared/config/deliverCode.config";

interface IBuyingPopup {
  setState: React.Dispatch<SetStateAction<boolean>>;
}
export interface IForm {
  FIO: string;
  email: string;
  phone: string;
  city: number;

  deliveryMethod: TypeDeliveryMethodString;

  deliveryPoint: TypeOffice;
  postmat: TypeOffice;
  address: string;
  promocode: string;
}


export const BuyingPopup = forwardRef(
  ({ setState }: IBuyingPopup, ref: ForwardedRef<HTMLFormElement>) => {

    const [startAddOne, setStartAddOne] = useState<boolean>(false);

    const clickHandler = () => {
      setState(false);
    };

    const cartOrders = useAppSelector((state) => state.cartSlice.orders);

    const { addOrderToCart } = useOrdersController();

    useEffect(() => {
      const count = cartOrders
        .map((order) => order.counter)
        .reduce((acc, curValue) => acc + curValue);
      if (count === 0) {
        addOrderToCart(1);
      }
      setStartAddOne(true);
    }, [setStartAddOne]);

    const summ = useMemo(() => {
      let summ = 0;
      cartOrders.forEach((e, i) => (summ += e.price * e.counter));
      return summ;
    }, [cartOrders]);

    // useBlockScroll()

    useEffect(() => {
      if (!summ && startAddOne) {
        setState(false);
      }
    }, [summ, startAddOne]);

    const {
      register,
      control,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<IForm>({
      resolver: zodResolver(buyingSchema),
    });

    const method = watch("deliveryMethod");

    console.log(method)


    const onSubmit = handleSubmit(async (data: IForm) => {
      const token = getAccessToken();

      const tarrif_code = data.deliveryMethod === "courier" ? deliverCode.COURIER : 
      data.deliveryMethod === "deliveryPoint" ? deliverCode.PVZ : deliverCode.POSTMAT

    //   const response = await POST({
        
    //     endpoint: "/order",
    //     data: {
    //         tariff_code : tarrif_code,
    //         shipment_point1 : 44,

    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    });

    console.log(errors);

    const [deliverySumm, setDeliverySumm] = useState<number>(0);

    const [delivceryCity, setDeliveryCity] = useState<string>("");

    const [deliveryAddress, setDeliveryAddress] = useState<string>("");

    return (
      <form
        onSubmit={onSubmit}
        ref={ref}
        className="w-[100vw] fixed flex justify-center top-0 left-0 z-40 overflow-y-scroll h-[100vh]"
      >
        <div
          onClick={clickHandler}
          className="fixed bg-black top-0 left-0 w-[100vw] h-[100vh] opacity-50 z-30"
        ></div>

        <div className="flex-col mt-10 mb-10 h-max rounded-3xl w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%] flex relative z-50 bg-white px-12 py-12">
          <p className="mid-title font-bold  text-black">Ваш заказ:</p>

          <Orders cartOrders={cartOrders} />

          <p className="big-p font-bold text-right mt-10 mr-[10px]">
            Сумма : {formatNumber(summ)}p
          </p>

          <div className="flex flex-col gap-10 mt-10 w-[100%] px-12  mx-auto white-shadow py-12 rounded-xl">
            <FormTextInput
              error={errors.FIO}
              labelText="ФИО"
              name="FIO"
              placeholder="Введите ваше ФИО"
              register={register}
            />

            <FormTextInput
              error={errors.email}
              name="email"
              register={register}
              type="email"
              placeholder="example@email.com"
              labelText="Ваш Email"
            />

            <Controller
              control={control}
              name="phone"
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
                    {errors.phone ? (
                      <p className="p text-red-500">{errors.phone.message}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              }}
            />

            <Delivery
              deliveryInputValue={deliveryAddress}
              setDeliveryInputValue={setDeliveryAddress}
              setDeliverySumm={setDeliverySumm}
              deliveryCityName={delivceryCity}
              setDeliveryCityName={setDeliveryCity}
              control={control}
              error={errors.deliveryMethod?.message}
            />

            <FormTextInput
              placeholder="Введите промокод"
              register={register}
              labelText="Промокод"
              name={"promocode"}
            />

            <BuyingItog
              address={deliveryAddress}
              deliveryCity={delivceryCity}
              deliverySumm={deliverySumm}
              summ={summ}
            />

            <input
              className=" !bg-black text-white p-2 big-p w-[100%] mx-auto rounded-md"
              type="submit"
              value={"Оформить заказ"}
            />
          </div>
        </div>
      </form>
    );
  }
);
