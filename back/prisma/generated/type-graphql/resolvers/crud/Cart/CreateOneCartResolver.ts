import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCartArgs } from "./args/CreateOneCartArgs";
import { Cart } from "../../../models/Cart";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cart)
export class CreateOneCartResolver {
  @TypeGraphQL.Mutation(_returns => Cart, {
    nullable: false
  })
  async createOneCart(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCartArgs): Promise<Cart> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('Cart', 'createOneCart', 'onBefore', 'create', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cart.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('Cart', 'createOneCart', 'onAfter', 'create', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
