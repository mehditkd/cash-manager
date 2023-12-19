import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCartArgs } from "./args/FindFirstCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class FindFirstCartResolver {
  @TypeGraphQL.Query(_returns => Cart, {
    nullable: true
  })
  async findFirstCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartArgs): Promise<Cart | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'findFirstCart', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cart.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Cart', 'findFirstCart', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
