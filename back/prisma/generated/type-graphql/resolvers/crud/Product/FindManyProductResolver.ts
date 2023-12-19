import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyProductArgs } from "./args/FindManyProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class FindManyProductResolver {
  @TypeGraphQL.Query(_returns => [Product], {
    nullable: false
  })
  async products(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProductArgs): Promise<Product[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'products', 'onBefore', 'findMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'products', 'onAfter', 'findMany', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
