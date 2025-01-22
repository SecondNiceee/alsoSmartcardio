// pages/api/sendEmail.ts
import { emailTransporterName, emailTransporterPassword } from '@/shared/config/constants';
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
    const { message, recipientEmail }: EmailRequestBody = req.body;
    console.log("Пришел сюда")
    // Настройки транспорта (например, для Gmail)
    let transporter = nodemailer.createTransport({
      service: "Mail.ru",
      auth: {
        user: "support@smartcardio.ru", // Ваш email
        pass: "77V49AsPjPgMYw25LrdK", // Ваш пароль
      },
    });

    // Настройки email
    let mailOptions = {
      from: "kolya.titov.05@inbox.ru",
      to: recipientEmail,
      subject: 'New Message',
      html: message, 
    };

    // Отправка email
    transporter.sendMail(mailOptions, async (error, info) => {
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