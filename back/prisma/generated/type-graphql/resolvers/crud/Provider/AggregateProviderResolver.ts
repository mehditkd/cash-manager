import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProviderArgs } from "./args/AggregateProviderArgs";
import { Provider } from "../../../models/Provider";
import { AggregateProvider } from "../../outputs/AggregateProvider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Provider)
export class AggregateProviderResolver {
  @TypeGraphQL.Query(_returns => AggregateProvider, {
    nullable: false
  })
  async aggregateProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProviderArgs): Promise<AggregateProvider> {
    await onIntercept('Provider', 'aggregateProvider', 'onBefore', 'aggregate', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.provider.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    const afterInterceptResult = await onIntercept('Provider', 'aggregateProvider', 'onAfter', 'aggregate', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
