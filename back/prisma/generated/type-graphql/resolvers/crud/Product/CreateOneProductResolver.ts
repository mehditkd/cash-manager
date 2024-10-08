import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProductArgs } from "./args/CreateOneProductArgs";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class CreateOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: false
  })
  async createOneProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProductArgs): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Product', 'createOneProduct', 'onBefore', 'create', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.product.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Product', 'createOneProduct', 'onAfter', 'create', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
