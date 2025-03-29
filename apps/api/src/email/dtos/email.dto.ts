import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class sendEmailDto {
  @ApiProperty({
    example: 'dmitry.oborsky@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  recipient: string

  @ApiProperty({
    example: '📌 Hello, Dmytro! - john.doe@gmail.com',
    required: true,
  })
  @IsString()
  subject: string

  @ApiProperty({
    example: 'Job Opportunity!',
    required: true,
  })
  @IsString()
  content: string
}
