import { Field, InputType, PartialType } from '@nestjs/graphql'
import { SortOrder } from './projects.args'
import { Prisma } from '@prisma/client'

@InputType()
class OrderByInputStrict implements Prisma.ProjectOrderByWithRelationInput {
  @Field(() => SortOrder)
  createdAt: SortOrder

  @Field(() => SortOrder)
  order: SortOrder
}

@InputType()
export class OrderByInput extends PartialType(OrderByInputStrict) {}
