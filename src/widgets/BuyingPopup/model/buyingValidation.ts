import {z} from 'zod';


const TypePhone = z.object({
    number: z.string(),
});
  
  // Определяем тип Location
const Location = z.object({
    address: z.string(),
    address_full: z.string(),
    city: z.string(),
    city_code: z.number(),
    city_uuid: z.string(),
    country_code: z.string(),
    fias_guid: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    postal_code: z.string(),
    region: z.string(),
    region_code: z.number(),
  });
  
  // Определяем тип TypeOffice
const TypeOffice = z.object({
    address_comment: z.string(),
    code: z.string(),
    email: z.string().email().optional(),
    have_cash: z.boolean(),
    have_cashless: z.boolean(),
    name: z.string(),
    nearest_metro_station: z.string().optional(),
    nearest_station: z.string(),
    note: z.string(),
    phones: z.array(TypePhone).optional(),
    uuid: z.string(),
    work_time: z.string(),
    location: Location,
  });

export const buyingSchema = z.object({
    FIO: z.string().min(1, "Это поле обязательно"),
    email: z.string({message : "Введите email"}).email({message : "Ваш email невалиден"}),
    phone: z.string({message : "Номер телефона обязетален"}).min(1, {message : "Это поле обязательно"}).refine((value) => {
      // Удаляем все нецифровые символы
      const cleaned = value.replace(/\D/g, '');
    
      // Проверяем, что номер соответствует российскому формату
      return cleaned.length === 11 && cleaned.startsWith('7');
    }, {
      message: "Неверный формат номера телефона.",
    }),
    city: z.number(),
    deliveryMethod: z.enum(["deliveryPoint", "postmat", "courier"] ),
    deliveryPoint: TypeOffice.optional(),
    postmat: TypeOffice.optional(),
    address: z.string().optional(),
    promocode: z.string().optional(),
    comment: z.string().optional(),
  }).refine((data) => {
    if (data.deliveryMethod === "deliveryPoint" && !data.deliveryPoint) {
    console.log("Тут ошибка")
    //   throw new Error("Пожалуйста, выберите пункт выдачи из предложенного списка");
    return false
    }
    if (data.deliveryMethod === "postmat" && !data.postmat) {
    console.log("тут ошибка")
    //   throw new Error("Пожалуйста, выберите постмат из предложенного списка");
    return false
    }
    if (data.deliveryMethod === "courier" && !data.address?.length) {
      console.log("Тут ошибка")
    //   throw new Error("Пожалуйста, укажите адрес");
    return false
    }
    return true;
  }, {
    path: ["deliveryMethod"],
  });