import { IsOptional, IsUUID } from 'class-validator'
import { Project } from '../entities/project.entity'
import { PartialType } from '@nestjs/swagger'
import { CreateProject } from './create-project.dto'

export class UpdateProject extends PartialType(CreateProject) {
  @IsUUID()
  @IsOptional()
  uid: Project['uid']
}
