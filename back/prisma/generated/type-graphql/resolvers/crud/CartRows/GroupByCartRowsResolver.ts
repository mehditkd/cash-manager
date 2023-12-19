import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCartRowsArgs } from "./args/GroupByCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { CartRowsGroupBy } from "../../outputs/CartRowsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class GroupByCartRowsResolver {
  @TypeGraphQL.Query(_returns => [CartRowsGroupBy], {
    nullable: false
  })
  async groupByCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCartRowsArgs): Promise<CartRowsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'groupByCartRows', 'onBefore', 'groupBy', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.cartRows.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    const afterInterceptResult = await onIntercept('CartRows', 'groupByCartRows', 'onAfter', 'groupBy', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
