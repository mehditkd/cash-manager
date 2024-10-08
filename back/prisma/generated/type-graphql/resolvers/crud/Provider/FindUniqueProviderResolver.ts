import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProviderArgs } from "./args/FindUniqueProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class FindUniqueProviderResolver {
  @TypeGraphQL.Query(_returns => Provider, {
    nullable: true
  })
  async provider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'provider', 'onBefore', 'findUnique', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.provider.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Provider', 'provider', 'onAfter', 'findUnique', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
