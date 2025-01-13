import { InputType, PartialType } from '@nestjs/graphql'
import { IsOptional, IsUUID } from 'class-validator'
import { Project } from '../entities/project.entity'
import { CreateProjectInput } from './create-project.input'

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @IsUUID()
  @IsOptional()
  uid: Project['uid']
}
