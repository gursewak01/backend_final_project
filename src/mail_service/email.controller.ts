import { EmailService } from './email.service';
import { CreateMailDto } from './create_mail.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() mailBody: CreateMailDto) {
    const { to, subject, body } = mailBody;
    await this.emailService.sendMail(to, subject, body);
    return { success: true };
  }
}
