import { InputType } from '@nestjs/graphql'

@InputType()
export class UpdateProjectInput {
  uid: string
  name?: string
  preview?: string
  link?: string
}
