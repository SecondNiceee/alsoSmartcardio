import { TypeOrder } from "@/shared/config/TypeOrder";
import React, { FC } from "react";
import Order from "./Order";

interface IOrders {
  cartOrders : (TypeOrder & {counter : number})[]
}
const Orders:FC<IOrders> = ({ cartOrders }) => {
  
  return (
    <div className="div mt-10 flex flex-col gap-5 border-t-[1px] border-b-[1px] border-solid border-black">
      {cartOrders.map((order, i) => {
        return (
          <>
            {order.counter ? <Order order={order} key={i} /> : <> </>}
          </>
        );
      })}
    </div>
  );
};

export default React.memo(Orders);
