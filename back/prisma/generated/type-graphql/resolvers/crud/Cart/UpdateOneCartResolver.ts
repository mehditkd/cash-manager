import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCartArgs } from "./args/UpdateOneCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class UpdateOneCartResolver {
  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: true
  })
  async updateOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'updateOneCart', 'onBefore', 'update', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cart.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Cart', 'updateOneCart', 'onAfter', 'update', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
