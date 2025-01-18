import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'

export class ProjectsQueryDto {
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc'

  @IsOptional()
  @IsIn(Object.values(Prisma.ProjectScalarFieldEnum))
  sortBy?: string
}
