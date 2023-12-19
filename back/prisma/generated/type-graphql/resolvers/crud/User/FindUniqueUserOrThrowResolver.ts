import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class FindUniqueUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async getUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'getUser', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'getUser', 'onAfter', 'findUniqueOrThrow', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
