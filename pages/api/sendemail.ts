// pages/api/sendEmail.ts
import { emailPassword, emailRecipient, emailUser } from '@/shared/config/constants';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


interface EmailRequestBody {
  message: string;
  senderEmail: string;
  recipientEmail: string;
  service: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message }: EmailRequestBody = req.body;
    console.log("Пришел сюда")
    // Настройки транспорта (например, для Gmail)
    const transporter = nodemailer.createTransport({
      service: "Mail.ru",
      auth: {
        user: emailUser, // Ваш email
        pass: emailPassword, // Ваш пароль
      },
    });

    const mailOptions = {
      from: emailUser,
      to: emailRecipient,
      subject: 'New Message',
      html: message, 
    };

    // Отправка email
    transporter.sendMail(mailOptions, async (error) => {
      if (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
      }

      // Сохранение информации об email в базе данных
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}