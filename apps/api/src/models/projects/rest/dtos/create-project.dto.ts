import { PickType } from '@nestjs/swagger'
import { Project } from '../entities/project.entity'

export class CreateProject extends PickType(Project, [
  'name',
  'preview',
  'preview_mobile',
  'link',
]) {}
