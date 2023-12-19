import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCartRowsArgs } from "./args/FindFirstCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class FindFirstCartRowsResolver {
  @TypeGraphQL.Query(_returns => CartRows, {
    nullable: true
  })
  async findFirstCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartRowsArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findFirstCartRows', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cartRows.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('CartRows', 'findFirstCartRows', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
