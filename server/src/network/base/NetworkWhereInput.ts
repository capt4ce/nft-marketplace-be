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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CollectionListRelationFilter } from "../../collection/base/CollectionListRelationFilter";
import { CurrencyListRelationFilter } from "../../currency/base/CurrencyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class NetworkWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  activatedDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CollectionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CollectionListRelationFilter)
  @IsOptional()
  @Field(() => CollectionListRelationFilter, {
    nullable: true,
  })
  collections?: CollectionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CurrencyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CurrencyListRelationFilter)
  @IsOptional()
  @Field(() => CurrencyListRelationFilter, {
    nullable: true,
  })
  currencies?: CurrencyListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  networkSymbol?: StringFilter;
}
export { NetworkWhereInput };
