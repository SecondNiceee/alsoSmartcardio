import { z } from "zod";

export const loginSchema = z.object({
    email : z.string().min(1, "Email слишком короткий").email("Невалидный Email"),
    password : z.string().min(1, "Пароль обязателен")
})

export type TLogin = z.infer<typeof loginSchema>;