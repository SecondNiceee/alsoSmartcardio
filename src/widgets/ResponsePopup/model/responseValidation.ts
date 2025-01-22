import { z } from 'zod';

const responseFormSchema = z.object({
  email: z.string().email('Невалидный email').min(0, {message : "Это поле обязательно"}),
  comment: z.string().min(10, 'Минимальная длина 10 символов'),
});

export default responseFormSchema;