import { Field, ObjectType } from '@nestjs/graphql'
import { Project as ProjectType } from '@prisma/client'
import { IsString, IsUrl, IsUUID } from 'class-validator'

@ObjectType()
export class Project implements ProjectType {
  @IsUUID()
  uid: string

  @IsString()
  name: string

  @Field({ nullable: true })
  preview_mobile: string

  @IsUrl()
  preview: string

  @IsUrl()
  link: string

  createdAt: Date
  updatedAt: Date
}
