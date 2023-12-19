import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProviderArgs } from "./args/UpsertOneProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class UpsertOneProviderResolver {
  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: false
  })
  async upsertOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProviderArgs): Promise<Provider> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'upsertOneProvider', 'onBefore', 'upsert', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.provider.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Provider', 'upsertOneProvider', 'onAfter', 'upsert', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
