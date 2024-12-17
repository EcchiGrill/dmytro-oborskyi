import { IsUUID } from 'class-validator'
import { Project } from '../entities/project.entity'
import { CreateProject } from './create-project.dto'
import { PartialType } from '@nestjs/swagger'

export class UpdateProject extends PartialType(CreateProject) {
  @IsUUID()
  uid: Project['uid']
}
