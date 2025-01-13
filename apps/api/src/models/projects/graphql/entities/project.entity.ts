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
  description: string

  @Field({ nullable: true })
  img_mobile: string

  @Field({ nullable: true })
  img_desktop: string

  @Field({ nullable: true })
  img_laptop: string

  @Field({ nullable: true })
  git_link: string

  @IsUrl()
  link: string

  createdAt: Date
  updatedAt: Date
}
