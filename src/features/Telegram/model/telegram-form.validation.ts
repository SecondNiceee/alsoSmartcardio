import { z } from 'zod';

export const telegramFormSchema = z.object({
  username: z.string().min(1, 'Пожалуйста, введите ваше имя.'),
  phone: z.string({message : "Номер телефона обязателен"}).min(1, {message : "Это поле обязательно."}).refine((value) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.length === 11 && cleaned.startsWith('7');
  }, {
    message: "Неверный формат номера телефона.",
  }),
  isPersonalAgree: z.boolean()
  .refine((val) => val === true, {
    message: "Необходимо согласие на обработку персональных данных."
  })
});

export type TelegramFormSchema = z.infer<typeof telegramFormSchema>;
