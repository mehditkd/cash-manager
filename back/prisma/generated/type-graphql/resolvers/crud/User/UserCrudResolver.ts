import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, onIntercept } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";

@TypeGraphQL.Resolver(_of => User)
export class UserCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserArgs): Promise<AggregateUser> {
    await onIntercept('User', 'aggregateUser', 'onBefore', 'aggregate', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.user.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info)
    })
    const afterInterceptResult = await onIntercept('User', 'aggregateUser', 'onAfter', 'aggregate', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'createManyUser', 'onBefore', 'createMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'createManyUser', 'onAfter', 'createMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'createOneUser', 'onBefore', 'create', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'createOneUser', 'onAfter', 'create', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'deleteManyUser', 'onBefore', 'deleteMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'deleteManyUser', 'onAfter', 'deleteMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async deleteOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'deleteOneUser', 'onBefore', 'delete', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'deleteOneUser', 'onAfter', 'delete', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'findFirstUser', 'onBefore', 'findFirst', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'findFirstUser', 'onAfter', 'findFirst', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async findFirstUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'findFirstUserOrThrow', 'onBefore', 'findFirstOrThrow', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'findFirstUserOrThrow', 'onAfter', 'findFirstOrThrow', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserArgs): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'users', 'onBefore', 'findMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'users', 'onAfter', 'findMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'user', 'onBefore', 'findUnique', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'user', 'onAfter', 'findUnique', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async getUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'getUser', 'onBefore', 'findUniqueOrThrow', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'getUser', 'onAfter', 'findUniqueOrThrow', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'groupByUser', 'onBefore', 'groupBy', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = prisma.user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      )
    })
    const afterInterceptResult = await onIntercept('User', 'groupByUser', 'onAfter', 'groupBy', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'updateManyUser', 'onBefore', 'updateMany', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'updateManyUser', 'onAfter', 'updateMany', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async updateOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'updateOneUser', 'onBefore', 'update', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'updateOneUser', 'onAfter', 'update', ctx, args, result)
    return afterInterceptResult ?? result
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    await onIntercept('User', 'upsertOneUser', 'onBefore', 'upsert', ctx, args)
    const prisma = getPrismaFromContext(ctx)
    const result = await prisma.user.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })

    const afterInterceptResult = await onIntercept('User', 'upsertOneUser', 'onAfter', 'upsert', ctx, args, result)
    return afterInterceptResult ?? result
  }
}
