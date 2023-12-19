import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProductArgs } from "./args/UpdateOneProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class UpdateOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true
  })
  async updateOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProductArgs): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'updateOneProduct', 'onBefore', 'update', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'updateOneProduct', 'onAfter', 'update', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
