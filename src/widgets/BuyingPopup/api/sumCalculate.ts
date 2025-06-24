import { POST } from "@/shared/api/POST";
import { fromLocation } from "@/shared/config/fromLocation";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import { TypeOffice } from "../model/TypeOffice";
import { TypeDeliverName } from "@/shared/models/TypeDeliverName";
import { deliverCode } from "@/shared/config/deliverCode.config";
import { TypedeliveryMethod } from "../model/TypeDeliveryMethod";



export const sumCalculate = async (toLocation : TypeOffice, deliveryName : TypeDeliverName) => {

  const token = getAccessToken();



  const response = await POST<TypedeliveryMethod>({
    data : {
                    type : "1",
                    currency : "1",
                    tariff_code : deliverCode[deliveryName] ,
                    from_location: fromLocation,
                    to_location: toLocation.location,
                    packages : [
                        {
                            height: 5,
                            length: 33,
                            weight: 500,
                            width: 24
                        }
                    ]
    }, 

    endpoint: "/calculator",
    headers: {
      "Content-Type": "application/json"
    },
  });

  return response?.total_sum


};
