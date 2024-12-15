import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Project {
  uid: string
  name: string
  preview: string
  link: string
}
