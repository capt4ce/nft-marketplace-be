/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CurrencyUpdateManyWithoutNetworksInput {
  @Field(() => [CurrencyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CurrencyWhereUniqueInput],
  })
  connect?: Array<CurrencyWhereUniqueInput>;

  @Field(() => [CurrencyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CurrencyWhereUniqueInput],
  })
  disconnect?: Array<CurrencyWhereUniqueInput>;

  @Field(() => [CurrencyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CurrencyWhereUniqueInput],
  })
  set?: Array<CurrencyWhereUniqueInput>;
}
export { CurrencyUpdateManyWithoutNetworksInput };