import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProviderArgs } from "./args/UpdateOneProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class UpdateOneProviderResolver {
  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: true
  })
  async updateOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'updateOneProvider', 'onBefore', 'update', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.provider.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Provider', 'updateOneProvider', 'onAfter', 'update', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
