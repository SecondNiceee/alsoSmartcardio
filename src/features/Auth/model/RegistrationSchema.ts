import { z, ZodIssueCode } from "zod";

export const registrationSchema = z.object({
    email : z.string().min(1, "Это боле обязательно").email("Невалидный Email"),
    password : z.string().min(5, "Пароль слишком короткий"),
    confirmPassword : z.string().min(1, "Это поле обязательно")
}).superRefine( (data, ctx) => {
    if (data.password !== data.confirmPassword){
        ctx.addIssue({
            code : ZodIssueCode.custom,
            message : "Не совпадает с паролем",
            path : ['confirmPassword']
        })
    }
} )

export type TRegistration = z.infer<typeof registrationSchema>;
