import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProviderCreateWithoutUserInput", {})
export class ProviderCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modifiedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modifiedAt?: Date | undefined;
}
