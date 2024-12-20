import { InputType, PickType } from '@nestjs/graphql'
import { Project } from '../entities/project.entity'

@InputType()
export class CreateProjectInput extends PickType(
  Project,
  ['name', 'preview', 'preview_mobile', 'link'],
  InputType,
) {}
