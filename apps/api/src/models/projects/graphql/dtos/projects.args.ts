import { ArgsType, PartialType, registerEnumType } from '@nestjs/graphql'
import { OrderByInput } from './order-by.args'
import { Prisma } from '@prisma/client'

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(SortOrder, {
  name: 'SortOrder',
})

@ArgsType()
class ProjectsArgsStrict implements Prisma.ProjectFindManyArgs {
  orderBy: OrderByInput[]
}

@ArgsType()
export class ProjectsArgs extends PartialType(ProjectsArgsStrict) {}
