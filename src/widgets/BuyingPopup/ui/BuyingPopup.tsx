'use client'
import { useAppSelector } from "@/shared/models/reduxHooks";
import { formatNumber } from "@/shared/utils/formateNumber";
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import FormTextInput from "@/shared/UI/FormInput/FormTextInput";
import Delivery from "./components/Delivery";
import { TypeDeliveryMethodString } from "../model/TypeDeliveryMethodString";
import useOrdersController from "@/features/Orders/addOrderToCart";
import { TypeOffice } from "../model/TypeOffice";
import BuyingItog from "./components/BuyingItog";
import { zodResolver } from "@hookform/resolvers/zod";
import { buyingSchema } from "../model/buyingValidation";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import { deliverCode } from "@/shared/config/deliverCode.config";
import useBlockScroll from "@/shared/hooks/useBlockScroll";
import Order from "./components/Order";
import PhoneInput from "./components/PhoneInput";
import CloseButton from "./components/CloseButton";

interface IBuyingPopup {
  setState: (state: boolean) => void;
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
  comment : string
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
    useBlockScroll();

    const onSubmit = handleSubmit(async (data: IForm) => {
      const token = getAccessToken();

      const tarrif_code =
        data.deliveryMethod === "courier"
          ? deliverCode.COURIER
          : data.deliveryMethod === "deliveryPoint"
          ? deliverCode.PVZ
          : deliverCode.POSTMAT;

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
        />

          <div className="flex-col md:mt-10 md:mb-10 h-max rounded-3xl w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%] flex relative z-50 bg-white px-3 py-3 sm:px-6 sm:py-6 md:px-12 md:py-12">


          <CloseButton clickHandler={clickHandler}  />

          <p className="mid-title font-bold text-black">Ваш заказ:</p>

          <div className="div mt-10 flex flex-col gap-5 border-t-[1px] border-b-[1px] border-solid border-black">
            {cartOrders.map((order, i) => {
              return (
                <React.Fragment key={i}>{order.counter ? <Order order={order}/> : <> </>}</React.Fragment>
              );
            })}
          </div>

          <p className="big-p font-bold text-right mt-10 mr-[10px]">
            Сумма : {formatNumber(summ)}p
          </p>

          <div className="flex flex-col gap-10 mt-10 w-[100%] px-6 py-6 md:px-12 md:py-12  mx-auto white-shadow  rounded-xl">

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

            <PhoneInput control={control} error={errors.phone?.message} />

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
              placeholder="Напиши комментарий к заказу"
              register={register}
              labelText="Комментарий"
              name={"comment"}
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
