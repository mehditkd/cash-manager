import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class FindFirstUserResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'findFirstUser', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'findFirstUser', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
