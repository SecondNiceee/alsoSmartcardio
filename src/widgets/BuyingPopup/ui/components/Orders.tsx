import { TypeOrder } from "@/shared/config/TypeOrder";
import { formatNumber } from "@/shared/utils/formateNumber";
import Image from "next/image";
import React from "react";

const Orders = ({ cartOrders }: { cartOrders: TypeOrder[] }) => {
  return (
    <div className="div mt-10 flex flex-col gap-5 border-t-[1px] border-b-[1px] border-solid border-black">
      {cartOrders.map((order, i) => {
        return (
          <div key={i} className="w-[100%] rounded-md border-solid  border-black flex items-center justify-between px-5 py-5">
            <Image
              className="w-[20%] rounded-xl"
              alt="#"
              src={order.imageSrc}
              width={200}
              height={200}
            />
            <p className="big-p ">{order.name}</p>
            <div className="flex gap-6 items-center justify-center">

              <div className="border-black flex justify-center items-center border-solid border-[1px]  aspect-square w-[30px] h-[30px] cursor-pointer rounded-[50%] p-1">
                <p className="p">-</p>
              </div>

              <p className="big-p">{order.counter}</p>

              <div className="border-black flex items-center justify-center border-solid border-[1px]  aspect-square w-[30px] h-[30px] cursor-pointer rounded-[50%] p-1">
                <p className="p">+</p>
              </div>

            </div>
            <p className="big-p border-black border-solid rounded-[50%] p-1">
              {formatNumber(order.price * order.counter)}p
            </p>
            <div className="border-black flex justify-center items-center border-solid border-[1px]  aspect-square w-[30px] h-[30px] cursor-pointer rounded-[50%] p-1">
              <p className="p">×</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Orders);
