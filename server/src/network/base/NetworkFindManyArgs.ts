/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NetworkWhereInput } from "./NetworkWhereInput";
import { Type } from "class-transformer";
import { NetworkOrderByInput } from "./NetworkOrderByInput";

@ArgsType()
class NetworkFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NetworkWhereInput,
  })
  @Field(() => NetworkWhereInput, { nullable: true })
  @Type(() => NetworkWhereInput)
  where?: NetworkWhereInput;

  @ApiProperty({
    required: false,
    type: [NetworkOrderByInput],
  })
  @Field(() => [NetworkOrderByInput], { nullable: true })
  @Type(() => NetworkOrderByInput)
  orderBy?: Array<NetworkOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NetworkFindManyArgs };
