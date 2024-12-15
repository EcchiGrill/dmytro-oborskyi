import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateProjectInput {
  name: string
  preview: string
  link: string
}
