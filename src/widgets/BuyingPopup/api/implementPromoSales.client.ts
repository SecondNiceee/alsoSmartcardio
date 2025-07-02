import { request } from "@/shared/api/request";
import { TPromocode } from "../model/TPromocode";

export const implementPromoSales = async (promo : TPromocode | null) => {
    console.log(promo);
    if (promo){
        await request<TPromocode>({
            headers : {
                "Content-Type": "application/json"
            },
            method : "POST",
            url : "/api/implementPromoSales",
            withCredentials : true,
            queryParams : {
              promocodeId : String(promo.id)
            }
          })
    }
}