import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCartRowsArgs } from "./args/FindManyCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class FindManyCartRowsResolver {
  @TypeGraphQL.Query(_returns => [CartRows], {
    nullable: false
  })
  async findManyCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCartRowsArgs): Promise<CartRows[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'findManyCartRows', 'onBefore', 'findMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cartRows.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('CartRows', 'findManyCartRows', 'onAfter', 'findMany', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
