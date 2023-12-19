import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRefreshTokenArgs } from "./args/AggregateRefreshTokenArgs";
import { CreateManyRefreshTokenArgs } from "./args/CreateManyRefreshTokenArgs";
import { CreateOneRefreshTokenArgs } from "./args/CreateOneRefreshTokenArgs";
import { DeleteManyRefreshTokenArgs } from "./args/DeleteManyRefreshTokenArgs";
import { DeleteOneRefreshTokenArgs } from "./args/DeleteOneRefreshTokenArgs";
import { FindFirstRefreshTokenArgs } from "./args/FindFirstRefreshTokenArgs";
import { FindFirstRefreshTokenOrThrowArgs } from "./args/FindFirstRefreshTokenOrThrowArgs";
import { FindManyRefreshTokenArgs } from "./args/FindManyRefreshTokenArgs";
import { FindUniqueRefreshTokenArgs } from "./args/FindUniqueRefreshTokenArgs";
import { FindUniqueRefreshTokenOrThrowArgs } from "./args/FindUniqueRefreshTokenOrThrowArgs";
import { GroupByRefreshTokenArgs } from "./args/GroupByRefreshTokenArgs";
import { UpdateManyRefreshTokenArgs } from "./args/UpdateManyRefreshTokenArgs";
import { UpdateOneRefreshTokenArgs } from "./args/UpdateOneRefreshTokenArgs";
import { UpsertOneRefreshTokenArgs } from "./args/UpsertOneRefreshTokenArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";
import { RefreshToken } from "../../../models/RefreshToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRefreshToken } from "../../outputs/AggregateRefreshToken";
import { RefreshTokenGroupBy } from "../../outputs/RefreshTokenGroupBy";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class RefreshTokenCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateRefreshToken, {
    nullable: false
  })
  async aggregateRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRefreshTokenArgs): Promise<AggregateRefreshToken> {
    await onIntercept('RefreshToken', 'aggregateRefreshToken', 'onBefore', 'aggregate', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.refreshToken.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    const afterInterceptResult = await onIntercept('RefreshToken', 'aggregateRefreshToken', 'onAfter', 'aggregate', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'createManyRefreshToken', 'onBefore', 'createMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'createManyRefreshToken', 'onAfter', 'createMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => RefreshToken, {
    nullable: false
  })
  async createOneRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneRefreshTokenArgs): Promise<RefreshToken> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'createOneRefreshToken', 'onBefore', 'create', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'createOneRefreshToken', 'onAfter', 'create', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'deleteManyRefreshToken', 'onBefore', 'deleteMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'deleteManyRefreshToken', 'onAfter', 'deleteMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => RefreshToken, {
    nullable: true
  })
  async deleteOneRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneRefreshTokenArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'deleteOneRefreshToken', 'onBefore', 'delete', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'deleteOneRefreshToken', 'onAfter', 'delete', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => RefreshToken, {
    nullable: true
  })
  async findFirstRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRefreshTokenArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'findFirstRefreshToken', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'findFirstRefreshToken', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => RefreshToken, {
    nullable: true
  })
  async findFirstRefreshTokenOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRefreshTokenOrThrowArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'findFirstRefreshTokenOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'findFirstRefreshTokenOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => [RefreshToken], {
    nullable: false
  })
  async refreshTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyRefreshTokenArgs): Promise<RefreshToken[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'refreshTokens', 'onBefore', 'findMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'refreshTokens', 'onAfter', 'findMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => RefreshToken, {
    nullable: true
  })
  async refreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRefreshTokenArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'refreshToken', 'onBefore', 'findUnique', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'refreshToken', 'onAfter', 'findUnique', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => RefreshToken, {
    nullable: true
  })
  async getRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRefreshTokenOrThrowArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'getRefreshToken', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'getRefreshToken', 'onAfter', 'findUniqueOrThrow', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => [RefreshTokenGroupBy], {
    nullable: false
  })
  async groupByRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByRefreshTokenArgs): Promise<RefreshTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'groupByRefreshToken', 'onBefore', 'groupBy', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.refreshToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    const afterInterceptResult = await onIntercept('RefreshToken', 'groupByRefreshToken', 'onAfter', 'groupBy', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'updateManyRefreshToken', 'onBefore', 'updateMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'updateManyRefreshToken', 'onAfter', 'updateMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => RefreshToken, {
    nullable: true
  })
  async updateOneRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneRefreshTokenArgs): Promise<RefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'updateOneRefreshToken', 'onBefore', 'update', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'updateOneRefreshToken', 'onAfter', 'update', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => RefreshToken, {
    nullable: false
  })
  async upsertOneRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneRefreshTokenArgs): Promise<RefreshToken> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('RefreshToken', 'upsertOneRefreshToken', 'onBefore', 'upsert', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.refreshToken.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('RefreshToken', 'upsertOneRefreshToken', 'onAfter', 'upsert', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
