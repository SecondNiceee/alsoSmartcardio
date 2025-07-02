import useOrdersController from '@/features/Orders/addOrderToCart';
import { TypeOrder } from '@/shared/config/TypeOrder';
import { formatNumber } from '@/shared/utils/formateNumber';
import React, { FC } from 'react';


interface IOrder{
    order : (TypeOrder & {counter : number})
}
const Order:FC<IOrder> = ({order}) => {

    const {addOrderToCart, removeOneOrderFromCart , removeAllOrdersFromCart} = useOrdersController()

    const removeOneHandler = (id:number) => () => {
      removeOneOrderFromCart(id)
    }

    const addOneHandler = (id:number) => () => {
      addOrderToCart(id)
    }

    const deleteAllOrders = (id:number) => () => {
      removeAllOrdersFromCart(id)
    }

    

  

    return (
          <div
            className="w-[100%] gap-5 rounded-md border-solid  border-black flex items-center justify-between md:p-5"
          >
            <img
              className="w-[20%] rounded-xl min-w-[90px]"
              alt="#"
              src={order.images[0]}
            />
            <div className="flex md:flex-row w-[100%] flex-col md:gap-6 gap-2 items-center md:justify-between ">
              <p dangerouslySetInnerHTML={{__html : order.name}} className="p md:max-w-[120px]"></p>

              <div className="flex max-w-[300px] justify-between items-center w-[100%]">
                <div className="flex sm:gap-6 gap-3 items-center justify-center">
                  <div onClick={removeOneHandler(order.id)} className="border-black select-none flex justify-center items-center border-solid border-[1px]  aspect-square w-[25px] h-[25px] cursor-pointer rounded-[50%] p-1">
                    <p className="p h-[20px] leading-none">-</p>
                  </div>

                  <p className="p">{order.counter}</p>

                  <div onClick={addOneHandler(order.id)} className="border-black select-none flex items-center justify-center border-solid border-[1px]  aspect-square w-[25px] h-[25px] cursor-pointer rounded-[50%] p-1">
                    <p className="p h-[20px] leading-none">+</p>
                  </div>

                </div>

                <p className="big-p border-black border-solid rounded-[50%]  p-1">
                  {formatNumber(order.price * order.counter)}p
                </p>
                <div onClick={deleteAllOrders(order.id)} className="border-black  flex select-none border-solid border-[1px] justify-center items-center  aspect-square w-[25px] h-[25px] cursor-pointer rounded-[50%] p-1">
                  <p className="p h-[33px]">×</p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Order;