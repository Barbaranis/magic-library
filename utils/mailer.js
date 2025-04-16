// server/utils/mailer.js
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendVerificationCode = async (email, code) => {
  await transporter.sendMail({
    from: `"Magic Library" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Votre code de vérification Magic Library",
    html: `<p>Votre code de vérification est : <strong>${code}</strong></p>`
  });
};

