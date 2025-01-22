
import { getStoreOrderById } from "@/widgets/BuyingPopup/utils/getStoreOrderById";
import React, { FC } from "react";
import NotFound from "./components/NotFound";
import ProductSlider from "./components/ProductSlider";
import ProductHeader from "./components/ProductHeader";
import AddToCartButton from "./components/AddToCartButton";



interface IProduct{
  id : string
}
export const Product:FC<IProduct> = ({id}) => {

  const storeOrder = getStoreOrderById(Number(id));

  return (
    <>
      {storeOrder ? (
        <>
          <ProductHeader />
          <section>
            <div className="container sm:gap-10 gap-5 md:gap-16 mt-6 sm:mt-14 md:mt-20 items-center md:justify-between flex md:flex-row flex-col w-[100%]">

              <ProductSlider storeOrder={storeOrder} />

              <div className="flex flex-col gap-3 w-[100%] my-auto">
                <p dangerouslySetInnerHTML={{__html : storeOrder.name}} className="sub-title text-left leading-normal">
                </p>
                <p className="big-p text-left leadin  g-normal">
                  {storeOrder.price} р
                </p>
                <AddToCartButton id={id} />
                <p className="p text-left leading-normal">
                  {storeOrder.description}
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};
