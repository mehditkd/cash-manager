import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCartRowsOrThrowArgs } from "./args/FindFirstCartRowsOrThrowArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class FindFirstCartRowsOrThrowResolver {
  @TypeGraphQL.Query(_returns => CartRows, {
    nullable: true
  })
  async findFirstCartRowsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCartRowsOrThrowArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findFirstCartRowsOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cartRows.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('CartRows', 'findFirstCartRowsOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
