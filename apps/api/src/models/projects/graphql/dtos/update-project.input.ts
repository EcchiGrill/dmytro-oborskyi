import { InputType, PartialType } from '@nestjs/graphql'
import { IsUUID } from 'class-validator'
import { CreateProjectInput } from './create-project.input'
import { Project } from '../entities/project.entity'

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @IsUUID()
  uid: Project['uid']
}
