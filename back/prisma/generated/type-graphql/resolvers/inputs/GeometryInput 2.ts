import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType("Coordinate", {})
export class Coordinate {
  @TypeGraphQL.Field(_type => Number)
  lat: number

  @TypeGraphQL.Field(_type => Number)
  lng: number
}

// used in RideOfferCreateInput
@TypeGraphQL.InputType("GeometryInput", {})
export class GeometryInput {
  @TypeGraphQL.Field(_type => String)
  type: string

  @TypeGraphQL.Field(_type => Coordinate)
  coord: Coordinate
}

@TypeGraphQL.InputType("GeometryListInput", {})
export class GeometryListInput {
  @TypeGraphQL.Field(_type => String)
  type: string

  @TypeGraphQL.Field(_type => [Coordinate])
  coords: Coordinate[]
}


// used in RideOfferWhereInput

@TypeGraphQL.InputType("DistanceFilter", {})
export class DistanceFilter {
  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  centerPoint?: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lt?: number | undefined;

  @TypeGraphQL.Field(_type => [GeometryListInput], {
    nullable: true
  })
  polygons?: GeometryListInput[];
}
