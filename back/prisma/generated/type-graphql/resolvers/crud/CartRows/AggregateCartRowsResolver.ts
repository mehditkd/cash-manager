import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCartRowsArgs } from "./args/AggregateCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { AggregateCartRows } from "../../outputs/AggregateCartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class AggregateCartRowsResolver {
  @TypeGraphQL.Query(_returns => AggregateCartRows, {
    nullable: false
  })
  async aggregateCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCartRowsArgs): Promise<AggregateCartRows> {
    await onIntercept('CartRows', 'aggregateCartRows', 'onBefore', 'aggregate', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.cartRows.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    const afterInterceptResult = await onIntercept('CartRows', 'aggregateCartRows', 'onAfter', 'aggregate', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
