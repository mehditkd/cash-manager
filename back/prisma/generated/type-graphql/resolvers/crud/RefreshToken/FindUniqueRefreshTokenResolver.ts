import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRefreshTokenArgs } from "./args/FindUniqueRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class FindUniqueRefreshTokenResolver {
  @TypeGraphQL.Query(_returns => RefreshToken, {
    nullable: true
  })
  async refreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRefreshTokenArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'refreshToken', 'onBefore', 'findUnique', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'refreshToken', 'onAfter', 'findUnique', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
