import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductArgs } from "./args/FindUniqueProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class FindUniqueProductResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true
  })
  async product(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProductArgs): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'product', 'onBefore', 'findUnique', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'product', 'onAfter', 'findUnique', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
