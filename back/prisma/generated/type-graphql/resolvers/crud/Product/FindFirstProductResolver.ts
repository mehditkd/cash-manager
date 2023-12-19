import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProductArgs } from "./args/FindFirstProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class FindFirstProductResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true
  })
  async findFirstProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProductArgs): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'findFirstProduct', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'findFirstProduct', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
