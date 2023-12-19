import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProviderArgs } from "./args/FindFirstProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class FindFirstProviderResolver {
  @TypeGraphQL.Query(_returns => Provider, {
    nullable: true
  })
  async findFirstProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProviderArgs): Promise<Provider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'findFirstProvider', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.provider.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Provider', 'findFirstProvider', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
