import useOrdersController from '@/features/Orders/addOrderToCart';
import { TypeOrder } from '@/shared/config/TypeOrder';
import { formatNumber } from '@/shared/utils/formateNumber';
import Image from 'next/image';
import React, { FC } from 'react';


interface IOrder{
    order : (TypeOrder & {counter : number})
}
const Order:FC<IOrder> = ({order}) => {

    const {addOrderToCart, removeOneOrderFromCart} = useOrdersController()

    const removeOneHandler = (id:number) => () => {
      removeOneOrderFromCart(id)
    }

    const addOneHandler = (id:number) => () => {
      addOrderToCart(id)
    }

    return (
          <div
            className="w-[100%] gap-5 rounded-md border-solid  border-black flex items-center justify-between md:p-5"
          >
            <Image
              className="w-[20%] rounded-xl min-w-[90px]"
              alt="#"
              src={order.images[0]}
              width={200}
              height={200}
            />
            <div className="flex md:flex-row w-[100%] flex-col md:gap-6 gap-2 items-center md:justify-between ">
              <p className="p md:max-w-[120px]">{order.name}</p>

              <div className="flex max-w-[300px] justify-between items-center w-[100%]">
                <div className="flex sm:gap-6 gap-3 items-center justify-center">
                  <div onClick={removeOneHandler(order.id)} className="border-black select-none flex justify-center items-center border-solid border-[1px]  aspect-square w-[20px] h-[20px] cursor-pointer rounded-[50%] p-1">
                    <p className="p">-</p>
                  </div>

                  <p className="p">{order.counter}</p>

                  <div onClick={addOneHandler(order.id)} className="border-black select-none flex items-center justify-center border-solid border-[1px]  aspect-square w-[20px] h-[20px] cursor-pointer rounded-[50%] p-1">
                    <p className="p">+</p>
                  </div>

                </div>

                <p className="big-p border-black border-solid rounded-[50%] p-1">
                  {formatNumber(order.price * order.counter)}p
                </p>
                <div className="border-black flex justify-center items-center select-none border-solid border-[1px]  aspect-square w-[20px] h-[20px] cursor-pointer rounded-[50%] p-1">
                  <p className="p">×</p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Order;