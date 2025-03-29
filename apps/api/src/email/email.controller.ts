import { Body, Controller, Post } from '@nestjs/common'
import { EmailService } from './email.service'
import { sendEmailDto } from './dtos/email.dto'
import { ApiCreatedResponse } from '@nestjs/swagger'

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @ApiCreatedResponse({
    description: 'Email sent successfully!',
  })
  @Post('send')
  async sendEmail(@Body() dto: sendEmailDto) {
    await this.emailService.sendEmail(dto)
    return { message: 'Email sent successfully!' }
  }
}
