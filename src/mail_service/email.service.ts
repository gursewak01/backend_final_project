import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:process.env.USER_EMAIL,
        pass: process.env.EMAIL_PASSWORD
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from:process.env.USER_EMAIL,
      to,
      subject,
      text,
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', result);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
