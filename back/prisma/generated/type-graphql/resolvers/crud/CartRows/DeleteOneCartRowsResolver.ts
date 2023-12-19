import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCartRowsArgs } from "./args/DeleteOneCartRowsArgs";
import { CartRows } from "../../../models/CartRows";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartRows)
export class DeleteOneCartRowsResolver {
  @TypeGraphQL.Mutation(_returns => CartRows, {
    nullable: true
  })
  async deleteOneCartRows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCartRowsArgs): Promise<CartRows | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('CartRows', 'deleteOneCartRows', 'onBefore', 'delete', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.cartRows.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('CartRows', 'deleteOneCartRows', 'onAfter', 'delete', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
