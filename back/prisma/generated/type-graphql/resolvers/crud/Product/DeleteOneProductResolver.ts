import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneProductArgs } from "./args/DeleteOneProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class DeleteOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true
  })
  async deleteOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneProductArgs): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'deleteOneProduct', 'onBefore', 'delete', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'deleteOneProduct', 'onAfter', 'delete', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
