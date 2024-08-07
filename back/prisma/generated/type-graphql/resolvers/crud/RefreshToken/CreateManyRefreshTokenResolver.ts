import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyRefreshTokenArgs } from "./args/CreateManyRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class CreateManyRefreshTokenResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'createManyRefreshToken', 'onBefore', 'createMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'createManyRefreshToken', 'onAfter', 'createMany', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
