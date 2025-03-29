import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { sendEmailDto } from './dtos/email.dto'

@Injectable()
export class EmailService {
  constructor(private readonly configService: ConfigService) {}
  emailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
    })
    return transporter
  }

  async sendEmail(dto: sendEmailDto) {
    const { recipient, subject, content } = dto

    const transport = this.emailTransport()

    const options: nodemailer.SendMailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: recipient,
      subject,
      html: content,
    }

    try {
      await transport.sendMail(options)
      console.log(`Email sent to ${recipient}`)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }
}
