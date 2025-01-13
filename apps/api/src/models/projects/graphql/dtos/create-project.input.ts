import { InputType, PickType } from '@nestjs/graphql'
import { Project } from '../entities/project.entity'

@InputType()
export class CreateProjectInput extends PickType(
  Project,
  [
    'name',
    'link',
    'img_mobile',
    'img_desktop',
    'img_laptop',
    'git_link',
    'description',
  ],
  InputType,
) {}
