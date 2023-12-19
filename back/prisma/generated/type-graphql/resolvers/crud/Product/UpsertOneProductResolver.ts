import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProductArgs } from "./args/UpsertOneProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class UpsertOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false
  })
  async upsertOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProductArgs): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'upsertOneProduct', 'onBefore', 'upsert', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'upsertOneProduct', 'onAfter', 'upsert', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
