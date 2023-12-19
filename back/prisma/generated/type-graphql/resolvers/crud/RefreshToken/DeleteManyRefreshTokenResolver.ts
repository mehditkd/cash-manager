import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyRefreshTokenArgs } from "./args/DeleteManyRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class DeleteManyRefreshTokenResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'deleteManyRefreshToken', 'onBefore', 'deleteMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'deleteManyRefreshToken', 'onAfter', 'deleteMany', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
