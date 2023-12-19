import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCartArgs } from "./args/FindUniqueCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class FindUniqueCartResolver {
  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async cart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'cart', 'onBefore', 'findUnique', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cart.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Cart', 'cart', 'onAfter', 'findUnique', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
