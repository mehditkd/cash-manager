import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { User } from "../../../models/User";
import { UserGroupBy } from "../../outputs/UserGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class GroupByUserResolver {
  @TypeGraphQL.Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'groupByUser', 'onBefore', 'groupBy', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    const afterInterceptResult = await onIntercept('User', 'groupByUser', 'onAfter', 'groupBy', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
