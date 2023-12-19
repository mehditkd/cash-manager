import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProviderArgs } from "./args/CreateOneProviderArgs";
import { Provider } from "../../../models/Provider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class CreateOneProviderResolver {
  @TypeGraphQL.Mutation(_returns => Provider, {
    nullable: false
  })
  async createOneProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProviderArgs): Promise<Provider> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Provider', 'createOneProvider', 'onBefore', 'create', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.provider.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Provider', 'createOneProvider', 'onAfter', 'create', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
