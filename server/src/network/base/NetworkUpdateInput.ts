/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CollectionUpdateManyWithoutNetworksInput } from "./CollectionUpdateManyWithoutNetworksInput";
import { CurrencyUpdateManyWithoutNetworksInput } from "./CurrencyUpdateManyWithoutNetworksInput";
@InputType()
class NetworkUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  activatedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => CollectionUpdateManyWithoutNetworksInput,
  })
  @ValidateNested()
  @Type(() => CollectionUpdateManyWithoutNetworksInput)
  @IsOptional()
  @Field(() => CollectionUpdateManyWithoutNetworksInput, {
    nullable: true,
  })
  collections?: CollectionUpdateManyWithoutNetworksInput;

  @ApiProperty({
    required: false,
    type: () => CurrencyUpdateManyWithoutNetworksInput,
  })
  @ValidateNested()
  @Type(() => CurrencyUpdateManyWithoutNetworksInput)
  @IsOptional()
  @Field(() => CurrencyUpdateManyWithoutNetworksInput, {
    nullable: true,
  })
  currencies?: CurrencyUpdateManyWithoutNetworksInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  networkSymbol?: string;
}
export { NetworkUpdateInput };
