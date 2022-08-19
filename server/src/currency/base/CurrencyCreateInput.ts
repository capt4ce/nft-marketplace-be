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
import {
  IsDate,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { NetworkWhereUniqueInput } from "../../network/base/NetworkWhereUniqueInput";
import { TransactionCreateNestedManyWithoutCurrenciesInput } from "./TransactionCreateNestedManyWithoutCurrenciesInput";
@InputType()
class CurrencyCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  activatedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contractAddress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currencySymbol?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  decimals?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayImage?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  liquidityAddress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => NetworkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NetworkWhereUniqueInput)
  @IsOptional()
  @Field(() => NetworkWhereUniqueInput, {
    nullable: true,
  })
  network?: NetworkWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutCurrenciesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutCurrenciesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutCurrenciesInput;
}
export { CurrencyCreateInput };
