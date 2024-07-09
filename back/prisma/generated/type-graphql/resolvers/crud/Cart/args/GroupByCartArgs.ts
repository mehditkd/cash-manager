import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartOrderByWithAggregationInput } from "../../../inputs/CartOrderByWithAggregationInput";
import { CartScalarWhereWithAggregatesInput } from "../../../inputs/CartScalarWhereWithAggregatesInput";
import { CartWhereInput } from "../../../inputs/CartWhereInput";
import { CartScalarFieldEnum } from "../../../../enums/CartScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCartArgs {
  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  where?: CartWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CartOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "totalPrice" | "cartStatus" | "refusalCount" | "userId" | "createdBy" | "modifiedBy" | "createdAt" | "modifiedAt">;

  @TypeGraphQL.Field(_type => CartScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CartScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
