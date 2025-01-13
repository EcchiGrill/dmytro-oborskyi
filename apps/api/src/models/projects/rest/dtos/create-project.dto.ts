import { PickType } from '@nestjs/swagger'
import { Project } from '../entities/project.entity'

export class CreateProject extends PickType(Project, [
  'name',
  'link',
  'img_mobile',
  'img_desktop',
  'img_laptop',
  'git_link',
  'description',
]) {}
