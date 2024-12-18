import { ArgsType } from '@nestjs/graphql'
import { Project } from '@prisma/client'
import { IsUUID } from 'class-validator'

@ArgsType()
export class RemoveProjectArgs {
  @IsUUID()
  uid: Project['uid']
}
